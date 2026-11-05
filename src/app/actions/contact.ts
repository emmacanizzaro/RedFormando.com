"use server";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<"name" | "email" | "phone" | "message", string>>;
};

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Campo trampa para bots
  if (String(formData.get("website") ?? "")) return { status: "success" };

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const errors: NonNullable<ContactState["errors"]> = {};
  if (name.length < 2 || name.length > 100) errors.name = "Ingresá tu nombre.";
  if (!emailRe.test(email) || email.length > 200)
    errors.email = "Ingresá un email válido.";
  if (phone && !/^[0-9+()\-\s.]{6,25}$/.test(phone))
    errors.phone = "Ingresá un teléfono válido.";
  if (message.length < 5 || message.length > 2000)
    errors.message = "Escribí tu mensaje.";

  if (Object.keys(errors).length) {
    return { status: "error", errors };
  }

  // TODO: guardar en PostgreSQL y/o enviar a contacto@redformando.com
  console.log("Nuevo contacto:", { name, email, phone, message });

  return {
    status: "success",
    message: "¡Gracias! Recibimos tu mensaje y nos pondremos en contacto.",
  };
}
