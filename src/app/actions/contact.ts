"use server";

import { Resend } from "resend";
import { contactEmail, escapeHtml } from "@/lib/email";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<"name" | "email" | "phone" | "message", string>>;
  values?: Record<"name" | "email" | "phone" | "message", string>;
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

  const values = { name, email, phone, message };
  const errors: NonNullable<ContactState["errors"]> = {};
  if (name.length < 2 || name.length > 100) errors.name = "Ingresa tu nombre.";
  if (!emailRe.test(email) || email.length > 200)
    errors.email = "Ingresa un email válido.";
  if (phone && !/^[0-9+()\-\s.]{6,25}$/.test(phone))
    errors.phone = "Ingresa un teléfono válido.";
  if (message.length < 5 || message.length > 2000)
    errors.message = "Escribe tu mensaje (mínimo 5 caracteres).";

  if (Object.keys(errors).length) {
    return { status: "error", errors, values };
  }

  const fallback = `No pudimos enviar tu mensaje en este momento. Escríbenos directamente a ${contactEmail}.`;
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!apiKey || !from) {
    console.error("Formulario de contacto: falta RESEND_API_KEY o RESEND_FROM_EMAIL");
    return { status: "error", message: fallback, values };
  }

  try {
    const { error } = await new Resend(apiKey).emails.send({
      from,
      to: contactEmail,
      replyTo: email,
      subject: `Nuevo mensaje de contacto - ${name}`,
      text: [
        `Nombre: ${name}`,
        `Email: ${email}`,
        `Teléfono: ${phone || "No indicado"}`,
        "",
        message,
      ].join("\n"),
      html: `
        <h1>Nuevo mensaje de contacto</h1>
        <ul>
          <li><strong>Nombre:</strong> ${escapeHtml(name)}</li>
          <li><strong>Email:</strong> ${escapeHtml(email)}</li>
          <li><strong>Teléfono:</strong> ${escapeHtml(phone || "No indicado")}</li>
        </ul>
        <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
      `,
    });
    if (error) {
      console.error("No se pudo enviar el mensaje de contacto:", error);
      return { status: "error", message: fallback, values };
    }
  } catch (error) {
    console.error("No se pudo conectar con el proveedor de email:", error);
    return { status: "error", message: fallback, values };
  }

  return {
    status: "success",
    message: "¡Gracias! Recibimos tu mensaje y nos pondremos en contacto.",
  };
}
