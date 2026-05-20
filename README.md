# Sitio de venta del ebook

Proyecto estático completo para vender y entregar el ebook **Cómo Construir un Imperio Digital Desde Cero en 2026**.

## Archivos

- `index.html`: página principal de venta.
- `checkout.html`: checkout listo para conectar con una plataforma de pago.
- `gracias.html`: página de agradecimiento con botón de descarga.
- `assets/css/styles.css`: estilos del sitio.
- `assets/js/main.js`: configuración del enlace de pago y descarga.
- `assets/images/mockup-3d-ebook.png`: mockup 3D del ebook.
- `assets/images/mockup-3d-ebook-crop.png`: mockup 3D optimizado para la página.
- `assets/pdf/Como-Construir-un-Imperio-Digital-Desde-Cero-en-2026-Ricardo-Abreu.pdf`: PDF entregable.

## Conectar pago real

Abre `assets/js/main.js` y reemplaza:

```js
const PAYMENT_LINK = "";
```

por el enlace real de pago de Stripe, Gumroad, Hotmart, Shopify u otra plataforma:

```js
const PAYMENT_LINK = "https://tu-link-de-pago.com";
```

En tu plataforma de pago, configura la URL de éxito o redirección final hacia `gracias.html`. Esa página muestra el botón de descarga del PDF.
