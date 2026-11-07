"use server";

import { Resend } from "resend";
import { recursos } from "@/data/recursos";
import { contactEmail, escapeHtml } from "@/lib/email";

export type PurchaseRequestState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<
    Record<"name" | "email" | "phone" | "items", string>
  >;
  values?: Record<"name" | "email" | "phone", string>;
};

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export async function sendPurchaseRequest(
  _previousState: PurchaseRequestState,
  formData: FormData,
): Promise<PurchaseRequestState> {
  if (String(formData.get("website") ?? "").trim()) {
    return {
      status: "error",
      message: "No pudimos procesar la solicitud. Intenta nuevamente.",
    };
  }

  const nameEntry = formData.get("name");
  const emailEntry = formData.get("email");
  const phoneEntry = formData.get("phone");
  const itemsEntry = formData.get("items");
  const name = typeof nameEntry === "string" ? nameEntry.trim() : "";
  const email = typeof emailEntry === "string" ? emailEntry.trim() : "";
  const phone = typeof phoneEntry === "string" ? phoneEntry.trim() : "";
  const itemsValue = typeof itemsEntry === "string" ? itemsEntry : "";
  const values = { name, email, phone };
  const errors: NonNullable<PurchaseRequestState["errors"]> = {};

  if (name.length < 2 || name.length > 100) {
    errors.name = "Ingresa tu nombre (entre 2 y 100 caracteres).";
  }
  if (!emailRe.test(email) || email.length > 200) {
    errors.email = "Ingresa un email válido.";
  }
  if (phone && !/^[0-9+()\-\s.]{6,25}$/.test(phone)) {
    errors.phone = "Ingresa un teléfono válido.";
  }

  let itemIds: string[] | null = null;
  try {
    const parsed: unknown = JSON.parse(itemsValue);
    if (
      Array.isArray(parsed) &&
      parsed.every((id): id is string => typeof id === "string")
    ) {
      itemIds = parsed;
    }
  } catch {
    itemIds = null;
  }

  if (
    !itemIds ||
    itemIds.length === 0 ||
    itemIds.length > recursos.length ||
    new Set(itemIds).size !== itemIds.length
  ) {
    errors.items =
      "El carrito no es válido. Actualiza la página e intenta nuevamente.";
  }

  const selected =
    itemIds?.map((id) => recursos.find((recurso) => recurso.id === id)) ?? [];
  const products = selected.filter(
    (recurso): recurso is (typeof recursos)[number] => recurso !== undefined,
  );

  if (products.length !== (itemIds?.length ?? 0)) {
    errors.items =
      "El carrito no es válido. Actualiza la página e intenta nuevamente.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Revisa los datos ingresados.",
      errors,
      values,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!apiKey || !from) {
    return {
      status: "error",
      values,
      message:
        "El envío automático todavía no está configurado. Puedes enviar tu solicitud por email usando el enlace alternativo.",
    };
  }

  const productList = products.map((recurso) => `- ${recurso.name}`).join("\n");
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone || "No indicado");
  const safeProductList = products
    .map((recurso) => `<li>${escapeHtml(recurso.name)}</li>`)
    .join("");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: contactEmail,
      replyTo: email,
      subject: "Nueva solicitud de recursos - RedFormando",
      text: [
        "Nueva solicitud de recursos (no es una compra confirmada).",
        "",
        `Nombre: ${name}`,
        `Email: ${email}`,
        `Teléfono: ${phone || "No indicado"}`,
        "",
        "Recursos solicitados:",
        productList,
        "",
        "Confirmar precio, disponibilidad y forma de entrega con la persona.",
      ].join("\n"),
      html: `
        <h1>Nueva solicitud de recursos</h1>
        <p><strong>Esta solicitud no es una compra confirmada.</strong></p>
        <ul>
          <li><strong>Nombre:</strong> ${safeName}</li>
          <li><strong>Email:</strong> ${safeEmail}</li>
          <li><strong>Teléfono:</strong> ${safePhone}</li>
        </ul>
        <p><strong>Recursos solicitados:</strong></p>
        <ul>${safeProductList}</ul>
        <p>Confirmar precio, disponibilidad y forma de entrega con la persona.</p>
      `,
    });

    if (error) {
      console.error("No se pudo enviar la solicitud de recursos:", error);
      return {
        status: "error",
        values,
        message:
          "No pudimos enviar la solicitud en este momento. Intenta nuevamente o usa el enlace alternativo de email.",
      };
    }
  } catch (error) {
    console.error("No se pudo conectar con el proveedor de email:", error);
    return {
      status: "error",
      values,
      message:
        "No pudimos enviar la solicitud en este momento. Intenta nuevamente o usa el enlace alternativo de email.",
    };
  }

  return {
    status: "success",
    message:
      "Recibimos tu solicitud. Te contactaremos para confirmar precio, disponibilidad y forma de entrega. No se realizó ningún cobro.",
  };
}
