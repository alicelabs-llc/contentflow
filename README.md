# ContentFlow AI — Landing Page

> Sitio web de presentación del producto **Social Media Content Factory v2.0**

---

## 📁 Estructura del proyecto

```
contentflow-ai/
│
├── index.html                        ← Página principal (entry point)
│
├── assets/
│   │
│   ├── css/
│   │   ├── main.css                  ← Importa todos los archivos CSS
│   │   │
│   │   ├── utilities/
│   │   │   ├── variables.css         ← Design tokens (colores, fuentes, espaciado)
│   │   │   ├── reset.css             ← Reset y estilos base
│   │   │   ├── animations.css        ← @keyframes globales
│   │   │   └── responsive.css        ← Media queries (mobile first)
│   │   │
│   │   └── components/
│   │       ├── cursor.css            ← Cursor personalizado
│   │       ├── nav.css               ← Barra de navegación
│   │       ├── ticker.css            ← Marquee animado
│   │       ├── hero.css              ← Sección hero + mock card
│   │       ├── architecture.css      ← Sección arquitectura del flujo
│   │       ├── technology.css        ← Grid de tecnologías
│   │       ├── clients.css           ← Grid de clientes objetivo
│   │       ├── pricing.css           ← Precios + tabla comparativa
│   │       └── sections.css          ← Sell, Costs, CTA, Footer, Botones
│   │
│   ├── js/
│   │   ├── main.js                   ← Entry point JS (inicialización)
│   │   ├── cursor.js                 ← Lógica del cursor personalizado
│   │   └── scroll.js                 ← Scroll reveal + nav background
│   │
│   ├── images/                       ← Carpeta para imágenes estáticas
│   │   └── (vacía — añade tus assets aquí)
│   │
│   └── fonts/                        ← Fuentes locales (opcional)
│       └── (vacía — se cargan desde Google Fonts)
│
└── README.md                         ← Este archivo
```

---

## 🚀 Cómo usar

### Opción 1 — Abrir directamente
Simplemente abre `index.html` en tu navegador. No requiere servidor.

> ⚠️ Los `@import` de CSS pueden no funcionar con `file://` en algunos navegadores.
> En ese caso, usa la Opción 2.

### Opción 2 — Servidor local (recomendado)

Con Python:
```bash
cd contentflow-ai
python -m http.server 3000
# Abre: http://localhost:3000
```

Con Node.js:
```bash
cd contentflow-ai
npx serve .
# Abre: http://localhost:3000
```

Con VS Code: instala la extensión **Live Server** y haz clic derecho en `index.html` → *Open with Live Server*.

---

## 🎨 Personalización

### Cambiar colores
Edita `assets/css/utilities/variables.css`:
```css
:root {
  --accent:  #FF4D1C;   /* Color principal (naranja) */
  --accent2: #FFB800;   /* Color secundario (amarillo) */
  --black:   #080810;   /* Fondo */
  --card:    #0F0F1A;   /* Tarjetas */
}
```

### Cambiar fuentes
Edita el `<link>` de Google Fonts en `index.html` y actualiza las variables:
```css
--font-display: 'Syne', sans-serif;
--font-body:    'DM Sans', sans-serif;
```

### Cambiar precios
Busca `.price-num` en `index.html` y modifica los valores directamente.

### Añadir imágenes
Coloca tus archivos en `assets/images/` y referencialos en el HTML:
```html
<img src="assets/images/tu-imagen.png" alt="descripción">
```

---

## 🛠️ Stack tecnológico del sitio

| Tecnología | Uso |
|---|---|
| HTML5 semántico | Estructura |
| CSS3 puro | Estilos (sin frameworks) |
| Vanilla JS | Interacciones (sin dependencias) |
| Google Fonts | Tipografía (Syne + DM Sans) |
| CSS Custom Properties | Design tokens |
| IntersectionObserver API | Scroll reveal |

**Sin frameworks. Sin bundlers. Sin dependencias npm.**
Listo para producción tal cual.

---

## 📦 Deploy

### Vercel (recomendado)
```bash
npx vercel deploy
```

### Netlify
Arrastra la carpeta `contentflow-ai/` al panel de Netlify.

### GitHub Pages
1. Sube a un repositorio GitHub
2. Ve a Settings → Pages
3. Branch: `main`, Folder: `/root`

---

## 📄 Secciones del sitio

| Sección | ID | Descripción |
|---|---|---|
| Ticker | — | Marquee animado con tecnologías |
| Hero | — | Título + stats + mock UI card flotante |
| Arquitectura | `#arquitectura` | Flujo de 7 pasos del producto |
| Tecnología | `#tecnologia` | Grid 3×3 del stack v2.0 |
| Clientes | — | 8 nichos de mercado objetivo |
| Cómo Vender | `#vender` | 5 pasos + calculadora ROI |
| Precios | `#precios` | 3 planes + tabla comparativa |
| Costos | `#costos` | Fijos + variables + resumen |
| CTA Final | — | Botones de conversión |

---

## ✏️ Notas para el diseñador

- Los estilos están **completamente separados del HTML** — cada componente tiene su propio `.css`
- Usar `main.css` como punto de entrada que importa todo mediante `@import`
- El **orden de importación** en `main.css` importa: variables → reset → animations → components → responsive
- Todas las animaciones están en `utilities/animations.css` — fácil de modificar globalmente
- Los breakpoints están en `utilities/responsive.css` — actualmente: `max-width: 1024px` y `max-width: 600px`
- El cursor personalizado se puede desactivar comentando el `<script src="assets/js/cursor.js">` en el HTML

---

*ContentFlow AI — Social Media Content Factory v2.0*
*© 2026 AliceLabs LLC. Todos los derechos reservados.*
