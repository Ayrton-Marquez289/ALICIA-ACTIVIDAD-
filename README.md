# Alicia en el país de JavaScript

Proyecto de Programación Web I. Incluye tres ejercicios interactivos desarrollados con HTML5, CSS3 y JavaScript nativo, sin frameworks ni bibliotecas.

## Estructura

```text
Alicia_JS_Proyecto/
├── index.html
├── css/
│   └── estilos.css
├── js/
│   └── app.js
└── README.md
```

## Cómo ejecutar

1. Descarga o clona el repositorio.
2. Mantén la estructura de carpetas.
3. Abre `index.html` en un navegador moderno.
4. Completa cualquiera de los tres formularios. Los resultados se actualizan directamente en el DOM sin recargar la página: cada formulario captura el evento `submit`, ejecuta `preventDefault()` y modifica su contenedor de resultados.

No requiere instalación ni servidor. La fuente tipográfica remota es decorativa; el sistema conserva fuentes alternativas si no hay conexión.

## Descripción de los algoritmos

### 1. La poción mágica de Alicia

- **Entradas:** altura inicial en cm y poción consumida en ml.
- **Regla definida para el ejercicio:** altura final = altura inicial − (poción × 2). Cada ml reduce 2 cm.
- **Constantes:** puerta de 150 cm; dosis entre 0 y 100 ml; altura inicial máxima de 300 cm.
- **Proceso:** convierte los valores a número, valida los rangos, calcula la altura final y usa `if / else if / else` para decidir si Alicia puede pasar.
- **Salida:** altura final y mensaje personalizado. Si la altura calculada es cero o negativa, se pide corregir la dosis.

### 2. La merienda del Sombrerero Loco

- **Entradas:** nombre, bebida y cantidad de tazas.
- **Precios:** té clásico Bs 8; limonada Bs 10; chocolate Bs 12; infusión Bs 7.
- **Regla de descuento:** 10% cuando se compran 5 tazas o más. Máximo permitido: 20 tazas.
- **Proceso:** `switch` obtiene el precio unitario; se calcula subtotal = precio × cantidad; un condicional decide el descuento; total = subtotal − descuento.
- **Salida:** detalle de compra, descuento y total.

### 3. El desafío de la Reina de Corazones

- **Entrada:** número entero entre 1 y 100.
- **Proceso:** un ciclo `for` recorre desde 1 hasta el número indicado. El operador módulo (`%`) identifica los pares (residuo 0) y los impares. Se cuentan y suman por separado.
- **Salida:** secuencia, listas, cantidades, sumas y grupo con mayor suma o empate.

## Elementos de JavaScript utilizados

- `const`: declara referencias y valores que no se reasignan, por ejemplo los formularios y límites.
- `let`: declara variables cuyos valores cambian durante el cálculo, como sumas, contadores y resultados.
- `if / else if / else`: valida datos y toma decisiones según condiciones.
- `switch`: selecciona el precio según la bebida elegida.
- `for`: repite el análisis de cartas desde 1 hasta el límite ingresado.
- Funciones propias: `mostrarResultado()`, `calcularPocion()`, `obtenerPrecio()`, `calcularMerienda()` y `analizarCartas()`.
- `document.getElementById()`: localiza un elemento HTML por su identificador.
- `.value`: obtiene el valor ingresado en un campo; `Number()` lo convierte a número.
- `.textContent`: se utiliza en `mostrarTexto()` para insertar mensajes de validación como texto plano. Para los resultados estructurados se utiliza `innerHTML`; el nombre del invitado se limpia antes de insertarlo.
- `addEventListener("submit", ...)`: escucha el envío de cada formulario.
- `preventDefault()`: evita el envío tradicional que recargaría la página.
- `textContent` puede utilizarse, por ejemplo, para escribir texto plano en un elemento: `document.getElementById("salida").textContent = "Resultado";`.

## Casos de prueba

Los resultados obtenidos de las siguientes pruebas corresponden a la lógica implementada. Ejecuta también cada caso en el navegador antes de entregar y registra cualquier diferencia.

### Ejercicio 1 — Poción

| Entrada (altura, poción) | Resultado esperado | Resultado obtenido |
|---|---|---|
| 160 cm, 10 ml | 140 cm; puede pasar | Coincide: 140 cm; puede pasar |
| 170 cm, 5 ml | 160 cm; no puede pasar | Coincide: 160 cm; no puede pasar |
| 150 cm, 0 ml | 150 cm; puede pasar | Coincide: 150 cm; puede pasar |
| 160 cm, 101 ml | Error por dosis fuera de rango | Coincide: muestra error de rango |
| 10 cm, 10 ml | Error: altura final no positiva | Coincide: solicita corregir dosis |

### Ejercicio 2 — Merienda

| Entrada (nombre, bebida, tazas) | Resultado esperado | Resultado obtenido |
|---|---|---|
| Ana, té, 2 | Subtotal Bs 16; descuento Bs 0; total Bs 16 | Coincide: Bs 16 |
| Luis, limonada, 5 | Subtotal Bs 50; descuento Bs 5; total Bs 45 | Coincide: Bs 45 |
| Eva, chocolate, 20 | Subtotal Bs 240; descuento Bs 24; total Bs 216 | Coincide: Bs 216 |
| Marco, infusión, 1 | Subtotal Bs 7; descuento Bs 0; total Bs 7 | Coincide: Bs 7 |
| Nombre vacío, té, 2 | Error por nombre vacío | Coincide: solicita completar campos |

### Ejercicio 3 — Reina

| Entrada | Resultado esperado | Resultado obtenido |
|---|---|---|
| 1 | Pares: 0; impares: 1; sumas 0 y 1; ganan impares | Coincide |
| 5 | Pares: 2, suma 6; impares: 1,3,5, suma 9; ganan impares | Coincide |
| 6 | Pares: 2,4,6, suma 12; impares: 1,3,5, suma 9; ganan pares | Coincide |
| 0 | Error: límite inferior es 1 | Coincide: muestra error |
| 101 | Error: supera el máximo de 100 | Coincide: muestra error |
