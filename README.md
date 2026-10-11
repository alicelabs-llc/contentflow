# ContentFlow — consulta de piloto editorial

Landing comercial editable para un servicio de planificación y producción de contenido por propuesta. Conserva la marca y dirección visual de ContentFlow, con una oferta limitada a un piloto acordado.

## Lo que funciona

- Información del servicio, alcance y preguntas frecuentes.
- Muestra editorial descargable en CSV, sin registro.
- Brief validado que prepara un correo a `contacto@alicelabs.site`, dirección existente en CONTRIBUTING.md.
- Copia manual del borrador como alternativa al cliente de correo.
- Diseño móvil, teclado, contenido visible sin JavaScript y contacto alternativo.

No incluye backend, envío de correos, cobros, generación por IA ni publicación en redes. La pantalla editorial es una muestra explícita. No se afirma que existan integraciones o clientes pagos.

## Verificar y compilar

Node.js 22; sin dependencias de instalación.

```sh
npm test
npm run build
python3 -m http.server 8080 --directory dist
```

Publicar únicamente `dist/`. El build copia una lista explícita de archivos públicos; deja fuera el diseño histórico de `legacy/`, los estilos antiguos y documentación interna. Los enlaces relativos permiten alojamiento en una subruta.

## Antes de publicar

Confirmar recepción del buzón, responsable de atender consultas y condiciones reales del servicio. Acordar cantidad de piezas, formatos, plazo, revisiones, precio y condiciones antes de contratar. El formulario no envía información hasta que el visitante la envíe desde su correo; no tiene analítica ni persistencia local.

## Archivos

- `index.html`: oferta y contenido público.
- `assets/site.css`: diseño actual sin fuentes externas.
- `assets/inquiry.mjs`: validación y creación de borrador.
- `assets/site.mjs`: interacción, copia y reinicio al editar.
- `downloads/calendario-ejemplo.csv`: muestra editable.
- `legacy/index.html`: copia histórica para referencia; sus promesas y precios no son oferta vigente.

El código mantiene la licencia MIT. No se desplegó ni se envió ninguna consulta como parte de esta reestructuración.
