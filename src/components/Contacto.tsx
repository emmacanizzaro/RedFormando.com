"use client";

import { useActionState } from "react";
import Reveal from "./Reveal";
import { sendContact, type ContactState } from "@/app/actions/contact";

const initial: ContactState = { status: "idle" };

const fieldClass =
  "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent sm:text-base";

export default function Contacto() {
  const [state, action, pending] = useActionState(sendContact, initial);
  const errors = state.errors ?? {};
  const values = state.values;

  return (
    <section
      id="contacto"
      className="mx-auto w-full max-w-6xl scroll-mt-20 px-5 py-10 sm:px-8 sm:py-16"
    >
      <div className="grid items-start gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <Reveal>
          <h2 className="text-xl font-bold uppercase tracking-wide sm:text-2xl md:text-3xl">
            Contacto
          </h2>
          <div className="mt-3 h-0.5 w-12 bg-accent" aria-hidden />
          <div className="mt-6 space-y-5 text-sm leading-relaxed text-white/80 sm:text-base">
            <p>
              Comunícate con nosotros a través de las diferentes vías de
              comunicación, o completa el formulario y nos pondremos en contacto
              contigo.
            </p>
            <p>
              <a
                href="mailto:contacto@redformando.com"
                className="font-semibold text-accent hover:underline"
              >
                contacto@redformando.com
              </a>
            </p>
            <p className="font-semibold text-white">
              REDFORMANDO | Familia Ministerial
            </p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <form
            action={action}
            noValidate
            className="w-full space-y-4 rounded-3xl border border-white/15 bg-white/5 p-5 sm:p-7"
          >
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden
              className="hidden"
            />

            <div>
              <label htmlFor="name" className="sr-only">
                Nombre y Apellido
              </label>
              <input
                id="name"
                name="name"
                defaultValue={values?.name}
                type="text"
                autoComplete="name"
                placeholder="Nombre y Apellido"
                aria-invalid={!!errors.name}
                className={fieldClass}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-300">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                defaultValue={values?.email}
                type="email"
                autoComplete="email"
                placeholder="Email"
                aria-invalid={!!errors.email}
                className={fieldClass}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-300">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="sr-only">
                Tel. Contacto
              </label>
              <input
                id="phone"
                name="phone"
                defaultValue={values?.phone}
                type="tel"
                autoComplete="tel"
                placeholder="Tel. Contacto"
                aria-invalid={!!errors.phone}
                className={fieldClass}
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-red-300">{errors.phone}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="sr-only">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                defaultValue={values?.message}
                rows={5}
                placeholder="Mensaje"
                aria-invalid={!!errors.message}
                className={`${fieldClass} resize-y`}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-300">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={pending}
              className="w-full rounded-full border border-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.1em] transition-colors hover:bg-accent hover:text-background disabled:opacity-60"
            >
              {pending ? "Enviando…" : "Enviar"}
            </button>

            <p
              role="status"
              aria-live="polite"
              className={`text-sm ${state.status === "error" ? "text-red-300" : "text-accent"}`}
            >
              {state.message ?? ""}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
