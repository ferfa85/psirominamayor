// Envía un <form> a Netlify Forms. El form estático equivalente vive en index.html
// (Netlify solo detecta formularios presentes en el HTML del deploy).
export async function sendForm(form: HTMLFormElement): Promise<void> {
  const body = new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString();
  const res = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  });
  if (!res.ok) throw new Error(`Error ${res.status} al enviar el formulario`);
}
