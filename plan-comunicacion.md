# Plan de desarrollo — Página "Comunicación"

> Documento de planeación (spec-first) antes de tocar código. Basado en `context.md` y en los requerimientos descritos por Oliver.

---

## 1. Objetivo general

Página web informativa de una sola vista (single page, scroll vertical), con estética **"biblioteca antigua"**: tonos amarillo pollito, cafés y beige, tipografías cálidas, texturas sutiles tipo papel envejecido — pero con un enfoque **minimalista** (poco ruido visual, mucho espacio en blanco/beige, jerarquía tipográfica clara, sin sobrecargar de adornos).

**Stack propuesto (por defecto, ajustable):** HTML + CSS + JavaScript vanilla. Es una página de contenido con interactividad puntual (cartas que despliegan info, un carrusel), no requiere un framework. Si prefieres reutilizar React/Vite (como en Taberna del Faro), lo adaptamos sin problema — solo dilo y cambio la sección 6.

---

## 2. Sistema de diseño

### 2.1 Paleta de colores
| Token | Uso | Ejemplo de tono |
|---|---|---|
| `--amarillo-pollito` | Acentos, hover, íconos, bordes de cartas | amarillo cálido suave |
| `--cafe-oscuro` | Texto principal, header, títulos grandes | café tostado / marrón tinta |
| `--cafe-medio` | Subtítulos, líneas divisorias, bordes | marrón cuero |
| `--beige-fondo` | Fondo general de la página | beige papel envejecido |
| `--beige-carta` | Fondo de las cartas/tarjetas | beige más claro que el fondo |
| `--blanco-hueso` | Espacios de respiro, fondos de imágenes | blanco cálido |

### 2.2 Tipografía
- **Títulos (header, "Sistema de comunicación", "FORMAS Y ESTILOS", etc.):** una serif con carácter de biblioteca/imprenta antigua (ej. *Playfair Display*, *Cormorant Garamond* o *Libre Baskerville*).
- **Cuerpo de texto:** una serif o slab-serif legible y cálida (ej. *Lora* o *Source Serif Pro*), o una sans neutra si se quiere bajar el "ruido" (ej. *Work Sans*, ya usada en Taberna del Faro).
- Jerarquía: H1 (header) > H2 (títulos de sección) > H3 (nombres de cartas) > cuerpo.

### 2.3 Recursos visuales de la estética
- Textura sutil de papel/pergamino como fondo (muy baja opacidad, no debe restar legibilidad — filosofía minimalista).
- Líneas divisorias tipo "recorte de página" o filete decorativo entre secciones (puede ser un SVG simple, no una imagen pesada).
- Bordes finos color café en cartas e imágenes, esquinas levemente redondeadas o rectas (a definir según referencia visual que elijas).
- Iconografía mínima; predomina la tipografía y el espacio.

---

## 3. Estructura general de la página (orden de secciones)

1. **Header** — barra superior fija o simple, título "Comunicación".
2. **Carrusel de Roman Jakobson** — fotos + su biografía/aporte (fuente 1).
3. **Sistema de comunicación** — línea divisoria + 6 cartas de funciones del lenguaje (fuente 2).
4. **Formas y estilos** — línea divisoria + 4 tarjetas de estilos de comunicación (fuente 3).
5. **No verbal** — línea divisoria + bloque tipo "artículo de periódico" (fuente 4).
6. **9 cartas de comunicación no verbal** — con menú desplegable (fuente 5).
7. **Asertiva** — título grande + contenido y tus propias imágenes (fuente 6).
8. **Cierre** — espacio para imágenes de apoyo + mensaje final.

---

## 4. Detalle sección por sección

### 4.1 Header
- Franja superior en café oscuro o beige oscuro, texto "Comunicación" centrado o alineado a la izquierda, en serif grande.
- Opcional: mini línea decorativa debajo del título (filete tipo libro antiguo).

### 4.2 Carrusel — Roman Jakobson
- Carrusel horizontal con varias fotos de Jakobson (necesito que me compartas las imágenes o indiques si busco referencias libres de derechos).
- Justo debajo: texto de la fuente (1) — biografía, *Linguistics and Poetics* (1960), las 6 funciones y su modelo de comunicación.
- Controles simples (flechas o puntos), sin autoplay agresivo (coherente con el minimalismo).

### 4.3 Sistema de comunicación (6 cartas)
- Línea divisoria tipo "recorte de página" + título "Sistema de comunicación".
- Grid de 6 cartas: **Referencial, Emotiva, Apelativa, Fática, Metalingüística, Poética.**
- Cada carta en reposo: nombre de la función + imagen representativa.
- Al hacer clic: se despliega (modal o acordeón) con:
  - Descripción de la función (fuente 2)
  - Imagen
  - El "Asociado" (contexto, emisor, receptor, código, mensaje o canal según corresponda) y el "Propósito"
- Necesito imágenes para cada una de las 6 funciones (una por función, que dialogue con su significado — ej. un reloj para "referencial", una carta manuscrita para "poética", etc.). Puedo ayudarte a definir qué tipo de imagen buscar para cada una si quieres.

### 4.4 Formas y estilos (4 tarjetas)
- Línea divisoria + título "FORMAS Y ESTILOS".
- 4 tarjetas: **Agresivo, Pasivo, Pasivo-Agresivo, Agresivo-Pasivo (Explosivo Cíclico).**
- Cada una con una imagen de ejemplo + características, lenguaje corporal y ejemplo textual (fuente 3).
- Formato consistente con las cartas de la sección 4.3 para mantener unidad visual, aunque el contenido es más extenso (puede ir en acordeón o carta más alta).

### 4.5 No verbal (estilo periódico)
- Línea divisoria + título "NO VERBAL".
- Maquetación tipo columnas de periódico (2 o 3 columnas en desktop, 1 en mobile) para el texto de la fuente (4): definición de comunicación no verbal y su relación con el lenguaje verbal.
- Detalle tipográfico: podría llevar una "letra capital" (drop cap) al inicio del bloque, muy propio de la estética de biblioteca/periódico antiguo.

### 4.6 9 cartas de no verbal
- Grid de 9 cartas (3x3 en desktop): **Kinésica, Microexpresiones, Proxémica, Paralenguaje, Emblemas, Ademanes, Vestimenta, Protocolo, Saludo.**
- Mismo patrón de interacción que las 6 cartas de funciones: clic → despliega imagen + descripción (fuente 5, contenido que enviarás).
- Reutilizar el mismo componente/función de "carta desplegable" que en 4.3 para no duplicar lógica.

### 4.7 Asertiva
- Título grande "ASERTIVA" (mayor jerarquía que los títulos de sección anteriores — puede ir centrado, con más aire alrededor).
- Contenido de la fuente (6): definición, la idea de equilibrio entre necesidades propias y ajenas, y el ejemplo práctico de la reunión de trabajo.
- Espacio reservado para las imágenes que vas a preparar tú.

### 4.8 Cierre
- Espacio(s) para imágenes de apoyo que acompañen visualmente el recorrido del contenido (a definir cuántas y dónde exactamente).
- Mensaje final "bonito" de cierre — lo redactamos juntos cuando lleguemos a esa parte, o puedo proponerte una versión breve inspirada en el tema de la comunicación.

---

## 5. Interactividad

- **Cartas desplegables (6 + 9 = 15 en total):** un único componente reutilizable "Card" con estado abierto/cerrado. Clic en la carta → transición suave (fade/slide) mostrando imagen + descripción + campos asociados.
- **Carrusel de Jakobson:** componente independiente, controlado por flechas/puntos, sin dependencias pesadas (evitar librerías grandes si el sitio es vanilla JS).
- Todo con transiciones suaves (200–300ms) para mantener la sensación elegante/minimalista, sin animaciones exageradas.

---

## 6. Estructura de archivos propuesta (vanilla)

```
comunicacion/
├── index.html
├── css/
│   ├── variables.css      (paleta y tipografía)
│   ├── layout.css         (estructura general y grids)
│   ├── components.css     (cartas, carrusel, header)
│   └── base.css           (reset + estilos base)
├── js/
│   ├── carousel.js
│   └── cards.js
└── assets/
    ├── jakobson/
    ├── funciones/         (6 imágenes)
    ├── estilos/           (4 imágenes)
    ├── no-verbal/         (9 imágenes)
    └── asertiva/
```

---

## 7. Pendientes antes de implementar (necesito de ti)

- [ ] Imágenes de Roman Jakobson para el carrusel.
- [ ] Imágenes para las 6 funciones del lenguaje.
- [ ] Imágenes de ejemplo para los 4 estilos de comunicación.
- [ ] Imágenes para las 9 cartas de no verbal (fuente 5, contenido y descripciones aún no enviado).
- [ ] Imágenes propias para la sección "Asertiva".
- [ ] Confirmar si prefieres vanilla HTML/CSS/JS o React/Vite (como Taberna del Faro).
- [ ] Confirmar mensaje final de cierre (o si quieres que yo lo proponga).

---

## 8. Fases de implementación sugeridas

1. **Fase 1 — Base:** estructura HTML completa + paleta/tipografía + header.
2. **Fase 2 — Carrusel Jakobson** + texto biográfico.
3. **Fase 3 — Sistema de comunicación** (6 cartas + interacción).
4. **Fase 4 — Formas y estilos** (4 tarjetas).
5. **Fase 5 — No verbal** (bloque periódico + 9 cartas).
6. **Fase 6 — Asertiva** + imágenes propias.
7. **Fase 7 — Cierre** (imágenes de apoyo + mensaje final) + pulido responsive y accesibilidad.
