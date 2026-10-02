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

export async function enviarConsulta(
  asunto: string,
  campos: Record<string, string>,
  honeypot: string,
  contacto: { email?: string; telefono?: string } = {}
): Promise<boolean> {
  try {
    const respuesta = await fetch(`https://formsubmit.co/ajax/${DESTINO}`, {
      method: 'POST',
      referrerPolicy: 'origin',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        ...campos,
        'Página': window.location.pathname,
        _subject: asunto,
        _cc: COPIA,
        _template: 'table',
        _captcha: 'false',
        _honey: honeypot,
      }),
    });
    const datos = await respuesta.json();
    if (!respuesta.ok || String(datos.success) !== 'true') throw new Error(datos.message);
  } catch (error) {
    console.error('enviarConsulta: falló el envío', error);
    return false;
  }

  // Mismo evento que mandaba Site Kit al enviar un WPForms en el WordPress
  window.gtag?.('event', 'submit_lead_form', {
    user_data: { email: contacto.email, phone_number: contacto.telefono },
  });
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: 'formulario_enviado', pagina: window.location.pathname });
  return true;
}
