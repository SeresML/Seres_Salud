// FormSubmit manda la consulta por mail sin servidor propio. La primera vez
// envía un mail de activación a DESTINO (nunca a la COPIA); hasta que no se
// confirma, no reenvía. FormSubmit activa por página de origen: con
// referrerPolicy "origin" todas las páginas del sitio cuentan como una sola.
export const DESTINO = 'consultas@seressalud.com.ar';
const COPIA = 'gestionimpulsodigital@gmail.com';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

async function postFormSubmit(destinatario: string, copia: string, payload: Record<string, string>) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  try {
    const respuesta = await fetch(`https://formsubmit.co/ajax/${destinatario}`, {
      method: 'POST',
      referrerPolicy: 'origin',
      signal: controller.signal,
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        ...payload,
        _cc: copia,
      }),
    });
    const datos = await respuesta.json();
    return respuesta.ok && String(datos.success) === 'true';
  } finally {
    clearTimeout(timeout);
  }
}

export async function enviarConsulta(
  asunto: string,
  campos: Record<string, string>,
  honeypot: string,
  contacto: { email?: string; telefono?: string } = {}
): Promise<boolean> {
  const basePayload: Record<string, string> = {
    ...campos,
    'Página': typeof window !== 'undefined' ? window.location.pathname : '',
    _subject: asunto,
    _template: 'table',
    _captcha: 'false',
    _honey: honeypot,
  };

  try {
    const okPrimary = await postFormSubmit(DESTINO, COPIA, basePayload);
    if (!okPrimary) {
      await postFormSubmit(COPIA, DESTINO, basePayload);
    }
  } catch (error) {
    console.warn('enviarConsulta: aviso de conexión con FormSubmit', error);
  }

  // Mismo evento que mandaba Site Kit al enviar un WPForms en el WordPress
  if (typeof window !== 'undefined') {
    window.gtag?.('event', 'submit_lead_form', {
      user_data: { email: contacto.email, phone_number: contacto.telefono },
    });
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'formulario_enviado', pagina: window.location.pathname });
  }
  return true;
}
