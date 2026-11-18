// Actividad práctica: Alicia en el país de las maravillas
// JavaScript nativo: formularios, validaciones, funciones y manipulación del DOM.

const formPocion = document.getElementById("form-pocion");
const formMerienda = document.getElementById("form-merienda");
const formReina = document.getElementById("form-reina");

const PUERTA_CM = 150;
const MAX_POCION_ML = 100;
const MAX_TAZAS = 20;
const MAX_CARTAS = 100;

// Muestra mensajes dentro de la página sin recargarla.
function mostrarResultado(id, contenido, tipo = "") {
  const contenedor = document.getElementById(id);
  contenedor.className = "result " + tipo;
  contenedor.innerHTML = contenido;
}


// Para mensajes simples se utiliza textContent, que inserta texto sin interpretarlo como HTML.
function mostrarTexto(id, mensaje, tipo = "") {
  const contenedor = document.getElementById(id);
  contenedor.className = "result " + tipo;
  contenedor.textContent = mensaje;
}
// EJERCICIO 1: La poción mágica de Alicia.
function calcularPocion() {
  const altura = Number(document.getElementById("altura").value);
  const pocion = Number(document.getElementById("cantidad-pocion").value);

  if (document.getElementById("altura").value.trim() === "" ||
      document.getElementById("cantidad-pocion").value.trim() === "") {
    mostrarTexto("resultado-pocion", "¡Completa ambos campos antes de calcular!", "error");
    return;
  }
  if (!Number.isFinite(altura) || !Number.isFinite(pocion) ||
      altura <= 0 || altura > 300 || pocion < 0 || pocion > MAX_POCION_ML) {
    mostrarTexto("resultado-pocion", "Datos no válidos. La altura debe ser mayor que 0 y hasta 300 cm; la poción debe estar entre 0 y 100 ml.", "error");
    return;
  }

  const alturaFinal = altura - (pocion * 2);
  if (alturaFinal <= 0) {
    mostrarTexto("resultado-pocion", "La dosis produce una altura no válida. Reduce la cantidad de poción e inténtalo de nuevo.", "error");
    return;
  }

  let mensaje;
  if (alturaFinal <= PUERTA_CM) {
    mensaje = "¡Alicia puede pasar por la puerta del jardín!";
  } else if (alturaFinal > PUERTA_CM) {
    mensaje = "Alicia todavía es demasiado alta para atravesar la puerta.";
  } else {
    mensaje = "Se requiere corregir los datos.";
  }

  mostrarResultado("resultado-pocion",
    `<span class="result-mark">✧</span><h3>${mensaje}</h3>
     <ul><li>Altura inicial: ${altura.toFixed(2)} cm</li>
     <li>Poción consumida: ${pocion.toFixed(2)} ml</li>
     <li><strong>Altura final: ${alturaFinal.toFixed(2)} cm</strong></li>
     <li>Altura de la puerta: ${PUERTA_CM} cm</li></ul>`, "success");
}
formPocion.addEventListener("submit", function(event) {
  event.preventDefault();
  calcularPocion();
});

// EJERCICIO 2: La merienda del Sombrerero Loco.
function obtenerPrecio(bebida) {
  let precio;
  switch (bebida) {
    case "te": precio = 8; break;
    case "limonada": precio = 10; break;
    case "chocolate": precio = 12; break;
    case "infusion": precio = 7; break;
    default: precio = 0;
  }
  return precio;
}

function calcularMerienda() {
  const nombre = document.getElementById("invitado").value.trim();
  const bebida = document.getElementById("bebida").value;
  const tazasTexto = document.getElementById("tazas").value;
  const tazas = Number(tazasTexto);

  if (nombre === "" || bebida === "" || tazasTexto.trim() === "") {
    mostrarTexto("resultado-merienda", "Completa tu nombre, selecciona una bebida e indica las tazas.", "error");
    return;
  }
  if (!Number.isInteger(tazas) || tazas < 1 || tazas > MAX_TAZAS) {
    mostrarTexto("resultado-merienda", "La cantidad debe ser un número entero entre 1 y 20.", "error");
    return;
  }

  const precioUnitario = obtenerPrecio(bebida);
  if (precioUnitario === 0) {
    mostrarTexto("resultado-merienda", "Selecciona una bebida válida.", "error");
    return;
  }

  const nombresBebidas = {
    te: "Té clásico",
    limonada: "Limonada",
    chocolate: "Chocolate",
    infusion: "Infusión"
  };
  const subtotal = precioUnitario * tazas;
  let descuento = 0;
  if (tazas >= 5) {
    descuento = subtotal * 0.10;
  }
  const total = subtotal - descuento;

  mostrarResultado("resultado-merienda",
    `<span class="result-mark">☕</span><h3>¡Una merienda excelente, ${nombre.replace(/[&<>"']/g, "")}!</h3>
     <ul><li>Bebida: ${nombresBebidas[bebida]}</li>
     <li>Cantidad: ${tazas} taza(s)</li>
     <li>Precio unitario: Bs ${precioUnitario.toFixed(2)}</li>
     <li>Subtotal: Bs ${subtotal.toFixed(2)}</li>
     <li>Descuento: Bs ${descuento.toFixed(2)} (${tazas >= 5 ? "10%" : "0%"})</li>
     <li><strong>Total a pagar: Bs ${total.toFixed(2)}</strong></li></ul>`, "success");
}
formMerienda.addEventListener("submit", function(event) {
  event.preventDefault();
  calcularMerienda();
});

// EJERCICIO 3: El desafío de la Reina de Corazones.
function analizarCartas() {
  const numeroTexto = document.getElementById("numero-cartas").value;
  const limite = Number(numeroTexto);

  if (numeroTexto.trim() === "") {
    mostrarTexto("resultado-reina", "Ingresa cuántas cartas deseas analizar.", "error");
    return;
  }
  if (!Number.isInteger(limite) || limite < 1 || limite > MAX_CARTAS) {
    mostrarTexto("resultado-reina", "Ingresa un número entero positivo entre 1 y 100.", "error");
    return;
  }

  let pares = [];
  let impares = [];
  let sumaPares = 0;
  let sumaImpares = 0;

  for (let numero = 1; numero <= limite; numero++) {
    if (numero % 2 === 0) {
      pares.push(numero);
      sumaPares += numero;
    } else {
      impares.push(numero);
      sumaImpares += numero;
    }
  }

  let ganador;
  if (sumaPares > sumaImpares) {
    ganador = "¡Los pares ganan!";
  } else if (sumaImpares > sumaPares) {
    ganador = "¡Los impares ganan!";
  } else {
    ganador = "¡Hay un empate!";
  }

  mostrarResultado("resultado-reina",
    `<span class="result-mark">♥</span><h3>${ganador}</h3>
     <div class="sequence"><strong>Secuencia analizada (1 al ${limite})</strong><p>${Array.from({length: limite}, (_, i) => i + 1).join(" · ")}</p></div>
     <div class="stats">
       <div><b>♠ NÚMEROS PARES</b><span>Secuencia: ${pares.length ? pares.join(", ") : "Ninguno"}</span><span>Cantidad: ${pares.length}</span><span>Suma: ${sumaPares}</span></div>
       <div><b>♥ NÚMEROS IMPARES</b><span>Secuencia: ${impares.join(", ")}</span><span>Cantidad: ${impares.length}</span><span>Suma: ${sumaImpares}</span></div>
     </div>`, "success");
}
formReina.addEventListener("submit", function(event) {
  event.preventDefault();
  analizarCartas();
});
