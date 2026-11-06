This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Solicitudes de recursos

El carrito permite enviar una solicitud de los recursos seleccionados. No procesa pagos ni confirma compras; RedFormando debe responder para confirmar precio, disponibilidad y forma de entrega.

Para activar el envío automático de solicitudes:

1. Crea una cuenta de Resend y verifica el dominio del remitente.
2. Copia `.env.example` a `.env.local`.
3. Configura `RESEND_API_KEY` con la clave secreta de Resend y `RESEND_FROM_EMAIL` con una dirección permitida por el dominio verificado.
4. Configura `CONTACT_EMAIL` con la dirección que recibirá las solicitudes (por defecto, `contacto@redformando.com`).
5. Reinicia el servidor de desarrollo o vuelve a desplegar la aplicación.

No publiques ni compartas `RESEND_API_KEY`. Si falta la configuración o falla el proveedor, el formulario muestra un error y ofrece un enlace alternativo de email; el carrito no se vacía.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
