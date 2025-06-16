// filepath: c:\Users\FrankFord\Desktop\Vedores-Arbitrales-main\Vedores-Arbitrales-main\Js.js
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}
const btnPantallaCompleta = document.getElementById('btnPantallaCompleta');
btnPantallaCompleta.addEventListener('click', function () {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        document.documentElement.requestFullscreen();
    }
});

document.addEventListener('fullscreenchange', function () {
    if (document.fullscreenElement) {
        btnPantallaCompleta.textContent = 'Salir de Pantalla Completa';
    } else {
        btnPantallaCompleta.textContent = 'Pantalla Completa';
    }
});
// ARBITROS INPUT CAMBIA NOMBRE EN RADIO BUTTONS OBSERVACIONES 
document.addEventListener('DOMContentLoaded', function () {
    // ARBITRO 1
    const inputArbitro1 = document.getElementById('Arbitro1');
    const radioArbitro1 = document.querySelector('input[name="arbitro_Correcto"][value="Arbitro 1"]');
    const inputArbitro2 = document.getElementById('Arbitro2');
    if (inputArbitro1 && radioArbitro1) {
        const labelArbitro1 = radioArbitro1.closest('label');
        inputArbitro1.addEventListener('input', function () {
            radioArbitro1.value = inputArbitro1.value;
            if (labelArbitro1) {
                const nodes = Array.from(labelArbitro1.childNodes);
                for (let node of nodes) {
                    if (node.nodeType === Node.TEXT_NODE) {
                        node.textContent = inputArbitro1.value + ' ';
                        break;
                    }
                }
            }
        });
        inputArbitro1.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                if (inputArbitro2) inputArbitro2.focus();
            }
        });
    }

    // ARBITRO 2
    const radioArbitro2 = document.querySelector('input[name="arbitro_Correcto"][value="Arbitro 2"]');
    if (inputArbitro2 && radioArbitro2) {
        const labelArbitro2 = radioArbitro2.closest('label');
        inputArbitro2.addEventListener('input', function () {
            radioArbitro2.value = inputArbitro2.value;
            if (labelArbitro2) {
                const nodes = Array.from(labelArbitro2.childNodes);
                for (let node of nodes) {
                    if (node.nodeType === Node.TEXT_NODE) {
                        node.textContent = inputArbitro2.value + ' ';
                        break;
                    }
                }
            }
        });
        inputArbitro2.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                inputArbitro2.blur();
            }
        });
    }
});
// ARBITROS INPUT CAMBIA NOMBRE EN RADIO BUTTONS SANCIONES
document.addEventListener('DOMContentLoaded', function () {
    // ARBITRO 1
    const inputArbitro1 = document.getElementById('Arbitro1');
    const radioArbitro1 = document.querySelector('input[name="arbitro_correccion_sanciones"][value="Arbitro 1"]');
    const inputArbitro2 = document.getElementById('Arbitro2');
    if (inputArbitro1 && radioArbitro1) {
        const labelArbitro1 = radioArbitro1.closest('label');
        inputArbitro1.addEventListener('input', function () {
            radioArbitro1.value = inputArbitro1.value;
            if (labelArbitro1) {
                const nodes = Array.from(labelArbitro1.childNodes);
                for (let node of nodes) {
                    if (node.nodeType === Node.TEXT_NODE) {
                        node.textContent = inputArbitro1.value + ' ';
                        break;
                    }
                }
            }
        });
        inputArbitro1.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                if (inputArbitro2) inputArbitro2.focus();
            }
        });
    }

    // ARBITRO 2
    const radioArbitro2 = document.querySelector('input[name="arbitro_correccion_sanciones"][value="Arbitro 2"]');
    if (inputArbitro2 && radioArbitro2) {
        const labelArbitro2 = radioArbitro2.closest('label');
        inputArbitro2.addEventListener('input', function () {
            radioArbitro2.value = inputArbitro2.value;
            if (labelArbitro2) {
                const nodes = Array.from(labelArbitro2.childNodes);
                for (let node of nodes) {
                    if (node.nodeType === Node.TEXT_NODE) {
                        node.textContent = inputArbitro2.value + ' ';
                        break;
                    }
                }
            }
        });
        inputArbitro2.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                inputArbitro2.blur();
            }
        });
    }
});

// --------------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[contenteditable]').forEach(function (element) {
        element.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.blur(); // Quita el foco y cierra la edición
                this.removeAttribute('contenteditable');
            }
        });
    });
});
document.addEventListener('keydown', function (e) {
    if (
        e.target.isContentEditable &&
        e.key === 'Enter'
    ) {
        e.preventDefault();
        e.target.blur();
        e.target.removeAttribute('contenteditable');
    }
});
document.addEventListener('dblclick', function (e) {
    if (e.target.matches('[contenteditable], h3, p')) {
        e.target.setAttribute('contenteditable', 'true');
        e.target.focus();
    }
});

// /////////////////////////////////////////////////////////////////////////////////////
let modalObservacionInterval = null;

document.getElementById('modal_observacion').addEventListener('show.bs.modal', function () {
    // Actualiza el display inmediatamente
    document.getElementById('display_juego_observaciones').textContent =
        document.getElementById('display-juego').textContent.trim();

    // Actualiza el display cada segundo mientras el modal está abierto
    modalObservacionInterval = setInterval(function () {
        document.getElementById('display_juego_observaciones').textContent =
            document.getElementById('display-juego').textContent.trim();
    }, 1000);
});

document.getElementById('modal_observacion').addEventListener('hide.bs.modal', function () {
    // Limpia el intervalo cuando se cierra el modal
    if (modalObservacionInterval) {
        clearInterval(modalObservacionInterval);
        modalObservacionInterval = null;
    }
});
// MUESTRA EL TIEMPO DE JUEGO EN EL MODAL DE OBSERVACIONES
document.getElementById('modal_observacion').addEventListener('show.bs.modal', function () {
    // Copia el tiempo actual del cronómetro principal al display del modal
    document.getElementById('display_juego_observaciones').textContent =
        document.getElementById('display-juego').textContent.trim();
});
// TIEMPO DE GRABACION Y JUEGO PARA EN OBSERVACIONES
document.getElementById('modal_observacion').addEventListener('show.bs.modal', function () {
    document.getElementById('valor-minutos-grabacion').textContent = document.getElementById('display-grabado').textContent.trim();
    document.getElementById('valor-minutos-juego').textContent = document.getElementById('display-juego').textContent.trim();
});
function Cronometro(displayId, startId, stopId, resetId, selectId, maxSeconds = null) {
    this.seconds = 0;
    this.timer = null;
    this.maxSeconds = maxSeconds;

    this.updateDisplay = () => {
        const hrs = String(Math.floor(this.seconds / 3600)).padStart(2, '0');
        const min = String(Math.floor((this.seconds % 3600) / 60)).padStart(2, '0');
        const sec = String(this.seconds % 60).padStart(2, '0');
        document.getElementById(displayId).textContent = `${hrs}:${min}:${sec}`;

    };

    this.start = () => {
        if (this.timer) return;
        this.timer = setInterval(() => {
            if (this.maxSeconds === null || this.seconds < this.maxSeconds) {
                this.seconds++;
                this.updateDisplay();
            } else {
                clearInterval(this.timer);
                this.timer = null;
                const minutosGrabacion = document.getElementById('display-grabado').textContent.trim();
                const nuevaFila2 = document.createElement('tr');
                nuevaFila2.innerHTML = `
        <td style="text-align: center; border: 1px solid black; background-color:rgba(160, 160, 160, 0.57)  ; padding: 8px;">${minutosGrabacion}</td>
        <td style="text-align: center; border: 1px solid black;  background-color:rgba(160, 160, 160, 0.57)  ;padding: 8px;">Final</td>
        <td style="text-align: center; border: 1px solid black; background-color:rgba(160, 160, 160, 0.57)  ; padding: 8px;">Final</td>
        <td style="border: 1px solid black; padding: 8px; background-color:rgba(160, 160, 160, 0.57)  ;">Final</td>
        <td style="text-align: center; border: 1px solid black; background-color:rgba(160, 160, 160, 0.57)  ; padding: 8px;">Final</td>
        <td style="text-align: center; border: 1px solid black; background-color:rgba(160, 160, 160, 0.57)  ; padding: 8px;">Final</td>
    `;

                cuerpoTabla.appendChild(nuevaFila2);
                alert('¡Tiempo Finalizado! Pulsa aceptar.');
                cronometroGrabado.reset();
                cronometroJuego.reset();
            }
        }, 1000);
    };

    this.stop = () => {
        clearInterval(this.timer);
        this.timer = null;
    };

    this.reset = () => {
        this.stop();
        this.seconds = 0;
        this.updateDisplay();
    };

    // Solo si hay selectId, lo usamos para setear el máximo
    if (selectId) {
        this.maxSeconds = parseInt(document.getElementById(selectId).value);
        document.getElementById(selectId).onchange = (e) => {
            this.maxSeconds = parseInt(e.target.value);
            if (this.seconds > this.maxSeconds) {

                this.reset();
            }
        };
    }

    document.getElementById(startId).onclick = this.start;
    document.getElementById(stopId).onclick = this.stop;
    document.getElementById(resetId).onclick = this.reset;
    this.updateDisplay();
}


// TANTEADOR SUMA Y RESTA LOCAL

document.addEventListener('DOMContentLoaded', function () {
    function actualizarTanteador(id, delta) {
        const tanteador = document.getElementById(id);
        let valor = parseInt(tanteador.textContent, 10) || 0;
        valor += delta;
        if (valor < 0) valor = 0;
        tanteador.textContent = valor;
    }

    // Local
    const tanteadorLocal = document.getElementById('tanteador_local');
    tanteadorLocal.addEventListener('mousedown', function (e) {
        e.preventDefault();
        if (e.button === 2) { // Click derecho
            actualizarTanteador('tanteador_local', -1);
        } else if (e.button === 0) { // Click izquierdo
            actualizarTanteador('tanteador_local', 1);
        }
    });
    tanteadorLocal.addEventListener('contextmenu', e => e.preventDefault());

    // Visitante
    const tanteadorVisitante = document.getElementById('tanteador_visitante');
    tanteadorVisitante.addEventListener('mousedown', function (e) {
        e.preventDefault();
        if (e.button === 2) { // Click derecho
            actualizarTanteador('tanteador_visitante', -1);
        } else if (e.button === 0) { // Click izquierdo
            actualizarTanteador('tanteador_visitante', 1);
        }
    });
    tanteadorVisitante.addEventListener('contextmenu', e => e.preventDefault());
});

// BOTONES DE RESTAS
document.getElementById('resta_local').addEventListener('click', function () {
    const tanteadorLocal = document.getElementById('tanteador_local');
    let valor = parseInt(tanteadorLocal.textContent, 10) || 0;
    valor = Math.max(0, valor - 1);
    tanteadorLocal.textContent = valor;
});

document.getElementById('resta_visita').addEventListener('click', function () {
    const tanteador = document.getElementById('tanteador_visitante');
    let valor = parseInt(tanteador.textContent, 10) || 0;
    valor = Math.max(0, valor - 1);
    tanteador.textContent = valor;
});

// EVITAR SALTO DE LINEA EN H3 Y MAXIMO DE CARACTERES // -------------------------------------------------------------------------------------------------=======----------------------------------------------------
document.querySelectorAll('h3[contenteditable="true"]').forEach(function (h3) {
    h3.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            this.blur(); // Quita el foco
            this.removeAttribute('contenteditable'); // Sale del modo edición
        }
    });
    h3.addEventListener('input', function () {
        this.textContent = this.textContent.toUpperCase();
        const max = 27;
        if (this.textContent.length > max) {
            this.textContent = this.textContent.slice(0, max);
        }
        // Opcional: mueve el cursor al final}
        const range = document.createRange();
        const sel = window.getSelection();
        range.selectNodeContents(this);
        range.collapse(false);
        sel.removeAllRanges();
        sel.addRange(range);

    });
});
document.querySelectorAll('h3').forEach(function (h3) {
    h3.addEventListener('dblclick', function () {
        this.setAttribute('contenteditable', 'true');
        this.focus();
    });
});
// -------------------------------------------------------------------------------------------------=======----------------------------------------------------
// TABLA DEL EQUIPO 1 AGREGAR SANCIONES Y QUITAR CLICK DERECHO

//QUITA EL CLICK DERECHO EN LA TABLA EQUIPO 
document.getElementById('tabla_equipo1').addEventListener('contextmenu', function (e) {
    e.preventDefault();
});
document.getElementById('tabla_equipo1').addEventListener('contextmenu', function (e) {
    e.preventDefault();
});
// AGREGAR NUMEROS Y SANCIONES
document.addEventListener('DOMContentLoaded', function () {
    const tabla = document.getElementById('tabla_equipo1');
    if (!tabla) return;

    function getNumerosUsados() {
        return Array.from(tabla.querySelectorAll('tbody tr td:first-child'))
            .map(td => td.textContent.trim())
            .filter(txt => txt !== "");
    }

    function ordenarColumnaN() {
        const filas = Array.from(tabla.querySelectorAll('tbody tr'));
        // Filas con número y filas vacías
        const filasConNumero = filas.filter(fila => fila.children[0].textContent.trim() !== "");
        const filasVacias = filas.filter(fila => fila.children[0].textContent.trim() === "");
        // Ordenar filas con número
        filasConNumero.sort((a, b) => {
            return Number(a.children[0].textContent.trim()) - Number(b.children[0].textContent.trim());
        });
        // Limpiar tbody y volver a agregar filas ordenadas
        const tbody = tabla.querySelector('tbody');
        tbody.innerHTML = "";
        filasConNumero.concat(filasVacias).forEach(fila => tbody.appendChild(fila));
    }

    tabla.querySelectorAll('tbody tr').forEach((fila, idx, filas) => {
        const tdN = fila.children[0];
        tdN.addEventListener('click', function () {
            let usados = getNumerosUsados().filter(n => n !== tdN.textContent.trim());
            if (usados.length >= 16 && tdN.textContent.trim() === "") {
                alert("Solo puedes ingresar hasta 16 números.");
                return;
            }
            let nuevo = prompt("Ingrese números (no repetido):", tdN.textContent.trim());
            if (nuevo === null) return;
            nuevo = nuevo.trim();
            if (nuevo === "") {
                tdN.textContent = "";
                ordenarColumnaN();
                return;
            }
            if (!/^\d+$/.test(nuevo)) {
                alert("Solo se permiten números.");

                return;
            }
            if (usados.includes(nuevo)) {
                alert("¡Ese número ya está en uso!");
            } else {
                tdN.textContent = nuevo;
                ordenarColumnaN();
                // Avanza automáticamente a la siguiente fila vacía
                const filasRestantes = Array.from(tabla.querySelectorAll('tbody tr'));
                const siguienteFila = filasRestantes.find(f => f.children[0].textContent.trim() === "");
                if (siguienteFila) {
                    setTimeout(() => siguienteFila.children[0].click(), 100);
                }
            }
        });



        // Columna A (máx 1, min vacío)
        const tdA = fila.children[1];
        tdA.addEventListener('mousedown', function (e) {
            e.preventDefault();
            let val = parseInt(tdA.textContent.trim() || "0", 10);
            if (e.button === 2) { // click derecho
                val = Math.max(0, val - 1);
            } else if (e.button === 0) { // click izquierdo
                val = Math.min(1, val + 1);
            }
            tdA.textContent = val === 0 ? "" : val;
            if (val === 1) {
                tdA.style.backgroundColor = "yellow";
            }
            else {
                tdA.style.backgroundColor = "";
            } // Resetea el color si no es 1
        });


        tdA.addEventListener('contextmenu', e => e.preventDefault());

        // Columna 2' (máx 3, min vacío)
        const td2 = fila.children[2];
        td2.addEventListener('mousedown', function (e) {
            e.preventDefault();
            let val = parseInt(td2.textContent.trim() || "0", 10);
            if (e.button === 2) { // click derecho
                val = Math.max(0, val - 1);
            } else if (e.button === 0) { // click izquierdo
                val = Math.min(3, val + 1);
            }
            td2.textContent = val === 0 ? "" : val;
            if (val === 1) {
                td2.style.backgroundColor = "#08c70148";
            }
            if (val === 2) {
                td2.style.backgroundColor = "orange";
            }
            if (val === 3) {
                td2.style.backgroundColor = "red";
            }
            if (val === 0) {
                td2.style.backgroundColor = "";
            }
        });
        tdA.addEventListener('contextmenu', e => e.preventDefault());

        // Columna D (máx 1, min vacío)
        const tdD = fila.children[3];
        tdD.addEventListener('mousedown', function (e) {
            e.preventDefault();
            let val = parseInt(tdD.textContent.trim() || "0", 10);
            if (e.button === 2) { // click derecho
                val = Math.max(0, val - 1);
            } else if (e.button === 0) { // click izquierdo
                val = Math.min(1, val + 1);
            }
            tdD.textContent = val === 0 ? "" : val;
            if (val == 1) {

                tdD.style.backgroundColor = "red";
            }
            else {
                tdD.style.backgroundColor = "";
            } // Resetea el color si no es 1
        });
        tdA.addEventListener('contextmenu', e => e.preventDefault());

        // Columna D+A (máx 1, min vacío)
        const tdDA = fila.children[4];
        tdDA.addEventListener('mousedown', function (e) {
            e.preventDefault();
            let val = parseInt(tdDA.textContent.trim() || "0", 10);

            if (e.button === 2) { // click derecho
                val = Math.max(0, val - 1);
            } else if (e.button === 0) { // click izquierdo
                val = Math.min(1, val + 1);
            }
            tdDA.textContent = val === 0 ? "" : val;
            if (val == 1) {

                tdDA.style.backgroundColor = "blue";
            }
            else {
                tdDA.style.backgroundColor = "";
            }
        });
        tdA.addEventListener('contextmenu', e => e.preventDefault());
    });
});
// --------------------------------------------------------------------------------------------------=======----------------------------------------------------

//QUITA EL CLICK DERECHO EN LA TABLA EQUIPO 2
document.getElementById('tabla_equipo2').addEventListener('contextmenu', function (e) {
    e.preventDefault();
});
document.getElementById('tabla_equipo1').addEventListener('contextmenu', function (e) {
    e.preventDefault();
});
// AGREGAR NUMEROS Y SANCIONES
document.addEventListener('DOMContentLoaded', function () {
    const tabla = document.getElementById('tabla_equipo2');
    if (!tabla) return;

    function getNumerosUsados() {
        return Array.from(tabla.querySelectorAll('tbody tr td:first-child'))
            .map(td => td.textContent.trim())
            .filter(txt => txt !== "");
    }

    function ordenarColumnaN() {
        const filas = Array.from(tabla.querySelectorAll('tbody tr'));
        // Filas con número y filas vacías
        const filasConNumero = filas.filter(fila => fila.children[0].textContent.trim() !== "");
        const filasVacias = filas.filter(fila => fila.children[0].textContent.trim() === "");
        // Ordenar filas con número
        filasConNumero.sort((a, b) => {
            return Number(a.children[0].textContent.trim()) - Number(b.children[0].textContent.trim());
        });
        // Limpiar tbody y volver a agregar filas ordenadas
        const tbody = tabla.querySelector('tbody');
        tbody.innerHTML = "";
        filasConNumero.concat(filasVacias).forEach(fila => tbody.appendChild(fila));
    }

    tabla.querySelectorAll('tbody tr').forEach((fila, idx, filas) => {
        const tdN = fila.children[0];
        tdN.addEventListener('click', function () {
            let usados = getNumerosUsados().filter(n => n !== tdN.textContent.trim());
            if (usados.length >= 16 && tdN.textContent.trim() === "") {
                alert("Solo puedes ingresar hasta 16 números.");
                return;
            }
            let nuevo = prompt("Ingrese número (no repetido, solo números):", tdN.textContent.trim());
            if (nuevo === null) return;
            nuevo = nuevo.trim();
            if (nuevo === "") {
                tdN.textContent = "";
                ordenarColumnaN();
                return;
            }
            if (!/^\d+$/.test(nuevo)) {
                alert("Solo se permiten números.");
                return;
            }
            if (usados.includes(nuevo)) {
                alert("¡Ese número ya está en uso!");
            } else {
                tdN.textContent = nuevo;
                ordenarColumnaN();
                // Avanza automáticamente a la siguiente fila vacía
                const filasRestantes = Array.from(tabla.querySelectorAll('tbody tr'));
                const siguienteFila = filasRestantes.find(f => f.children[0].textContent.trim() === "");
                if (siguienteFila) {
                    setTimeout(() => siguienteFila.children[0].click(), 100);
                }
            }
        });



        // Columna A (máx 1, min vacío)
        const tdA = fila.children[1];
        tdA.addEventListener('mousedown', function (e) {
            e.preventDefault();
            let val = parseInt(tdA.textContent.trim() || "0", 10);
            if (e.button === 2) { // click derecho
                val = Math.max(0, val - 1);
            } else if (e.button === 0) { // click izquierdo
                val = Math.min(1, val + 1);
            }
            tdA.textContent = val === 0 ? "" : val;
            if (val === 1) {
                tdA.style.backgroundColor = "yellow";
            }
            else {
                tdA.style.backgroundColor = "";
            } // Resetea el color si no es 1
        });


        tdA.addEventListener('contextmenu', e => e.preventDefault());

        // Columna 2' (máx 3, min vacío)
        const td2 = fila.children[2];
        td2.addEventListener('mousedown', function (e) {
            e.preventDefault();
            let val = parseInt(td2.textContent.trim() || "0", 10);
            if (e.button === 2) { // click derecho
                val = Math.max(0, val - 1);
            } else if (e.button === 0) { // click izquierdo
                val = Math.min(3, val + 1);
            }
            td2.textContent = val === 0 ? "" : val;
            if (val === 1) {
                td2.style.backgroundColor = "#08c70148";
            }
            if (val === 2) {
                td2.style.backgroundColor = "orange";
            }
            if (val === 3) {
                td2.style.backgroundColor = "red";
            }
            if (val === 0) {
                td2.style.backgroundColor = "";
            }
        });
        tdA.addEventListener('contextmenu', e => e.preventDefault());

        // Columna D (máx 1, min vacío)
        const tdD = fila.children[3];
        tdD.addEventListener('mousedown', function (e) {
            e.preventDefault();
            let val = parseInt(tdD.textContent.trim() || "0", 10);
            if (e.button === 2) { // click derecho
                val = Math.max(0, val - 1);
            } else if (e.button === 0) { // click izquierdo
                val = Math.min(1, val + 1);
            }
            tdD.textContent = val === 0 ? "" : val;
            if (val == 1) {

                tdD.style.backgroundColor = "red";
            }
            else {
                tdD.style.backgroundColor = "";
            } // Resetea el color si no es 1
        });
        tdA.addEventListener('contextmenu', e => e.preventDefault());

        // Columna D+A (máx 1, min vacío)
        const tdDA = fila.children[4];
        tdDA.addEventListener('mousedown', function (e) {
            e.preventDefault();
            let val = parseInt(tdDA.textContent.trim() || "0", 10);

            if (e.button === 2) { // click derecho
                val = Math.max(0, val - 1);
            } else if (e.button === 0) { // click izquierdo
                val = Math.min(1, val + 1);
            }
            tdDA.textContent = val === 0 ? "" : val;
            if (val == 1) {

                tdDA.style.backgroundColor = "blue";
            }
            else {
                tdDA.style.backgroundColor = "";
            }
        });
        tdA.addEventListener('contextmenu', e => e.preventDefault());
    });
});

// OBSERVACIONES AGREGADAS // -------------------------------------------------------------------------------------------------=======----------------------------------------------------

const formObservaciones = document.getElementById('Observacion_Arbitros');
const cuerpoTabla = document.getElementById('tabla-observaciones-extra');

formObservaciones.addEventListener('submit', function (e) {
    e.preventDefault();

    // Convierte "hh:mm:ss" a segundos
    function tiempoASegundos(tiempo) {
        const partes = tiempo.split(':');
        return (+partes[0]) * 3600 + (+partes[1]) * 60 + (+partes[2]);
    }

    // Convierte segundos a "hh:mm:ss"
    function segundosATiempo(segundos) {
        const hrs = String(Math.floor(segundos / 3600)).padStart(2, '0');
        const min = String(Math.floor((segundos % 3600) / 60)).padStart(2, '0');
        const sec = String(segundos % 60).padStart(2, '0');
        return `${hrs}:${min}:${sec}`;
    }

    // Obtén los valores directamente de los inputs del formulario
    const minutosGrabacion = document.getElementById('valor-minutos-grabacion').textContent.trim();
    const segundosGrabacion = tiempoASegundos(minutosGrabacion);
    const grabacionMenos = segundosATiempo(Math.max(0, segundosGrabacion - 8));
    const minutosJuego = document.getElementById('valor-minutos-juego').textContent.trim();
    const segundosJuego = tiempoASegundos(minutosJuego);
    const juegoMenos = segundosATiempo(segundosJuego);

    const Faltas = document.querySelector('[name="arbitro_faltas_tecnicas"]:checked')?.value || '';
    const ObservacionTexto = document.querySelector('[name="Observacion_escrita"]')?.value || '';
    const Bien = document.querySelector('[name="estado"]:checked')?.value || '';
    const Arbitro = document.querySelector('[name="arbitro_Correcto"]:checked')?.value || '';


    function estadoColor(estado) {
        if (estado === 'Bien') return 'green';
        if (estado === 'Ver') return 'yellow';
        if (estado === 'Mal') return 'red';
        return '';
    }
    const color = estadoColor(Bien);

    // Crea una nueva fila
    const nuevaFila = document.createElement('tr');
    nuevaFila.innerHTML = `
    <td style="text-align: center; border: 1px solid black; padding: 8px;">${grabacionMenos}</td>
    <td style="text-align: center; border: 1px solid black; padding: 8px;">${juegoMenos}</td>
    <td style="text-align: center; border: 1px solid black; padding: 8px;"><p style="text-transform: capitalize;" contenteditable>${Faltas}</p></td>
    <td style="border: 1px solid black; padding: 8px;"><p style="text-transform: capitalize;" contenteditable> ${ObservacionTexto}</p></td>
    <td style="text-align: center; border: 1px solid black; padding: 8px; background-color:${color}">
        <select name="tablaCreadaSelect" style="background-color:${color}; width: 100%; height: 100%; border: none; color: black; font-weight: bold;" class="form-select">
            <option value="Bien" style="background-color:green" ${Bien === 'Bien' ? 'selected' : ''}><span class="valor-select-print">Bien</span></option>
            <option value="Ver" style="background-color:yellow" ${Bien === 'Ver' ? 'selected' : ''}>Ver</option>
            <option value="Mal" style="background-color:red" ${Bien === 'Mal' ? 'selected' : ''}>Mal</option>
        </select>
    </td>
    <td style="text-align: center; border: 1px solid black; padding: 8px;"><p style="text-transform: capitalize;" contenteditable>${Arbitro}</p></td>
`;
    cuerpoTabla.appendChild(nuevaFila);

    const select = nuevaFila.querySelector('select[name="tablaCreadaSelect"]');
    const td = select.parentElement;
    select.addEventListener('change', function () {
        if (this.value === 'Bien') {
            td.style.backgroundColor = 'green';
            select.style.backgroundColor = 'green';
        } else if (this.value === 'Ver') {
            td.style.backgroundColor = 'yellow';
            select.style.backgroundColor = 'yellow';
        } else if (this.value === 'Mal') {
            td.style.backgroundColor = 'red';
            select.style.backgroundColor = 'red';
        } else {
            td.style.backgroundColor = '';
            select.style.backgroundColor = '';
        }
    });





    // Limpia el formulario y cierra el modal si usas Bootstrap
    formObservaciones.reset();
    const modal = bootstrap.Modal.getInstance(document.getElementById('modal_observacion'));
    if (modal) {
        modal.hide();
    }
});


// CREA UNA FILA PARA OBSERVACIONES DE AMARILLAS // -------------------------------------------------------------------------------------------------=======----------------------------------------------------


// ACTUALIZA EL TIEMPO DE JUEGO EN EL MODAL DE SANCIONES
// --------------------------------------------------------------------------------
let modalSancionInterval = null;

document.getElementById('modal_sanciones').addEventListener('show.bs.modal', function () {
    // Actualiza el display inmediatamente
    document.getElementById('display_juego_sanciones').textContent =
        document.getElementById('display-juego').textContent.trim();

    // Actualiza el display cada segundo mientras el modal está abierto
    modalSancionInterval = setInterval(function () {
        document.getElementById('display_juego_sanciones').textContent =
            document.getElementById('display-juego').textContent.trim();
    }, 1000);
});

document.getElementById('modal_sanciones').addEventListener('hide.bs.modal', function () {
    // Limpia el intervalo cuando se cierra el modal
    if (modalSancionInterval) {
        clearInterval(modalSancionInterval);
        modalSancionInterval = null;
    }
});
// --------------------------------------------------------------------------------
document.getElementById('modal_sanciones').addEventListener('show.bs.modal', function () {
    document.getElementById('valor-minutos-grabacion-sanciones').textContent = document.getElementById('display-grabado').textContent.trim();
    document.getElementById('valor-minutos-juego-sanciones').textContent = document.getElementById('display-juego').textContent.trim();
});

function tiempoASegundos(tiempo) {
    const partes = tiempo.split(':');
    return (+partes[0]) * 3600 + (+partes[1]) * 60 + (+partes[2]);
}

// Convierte segundos a "hh:mm:ss"
function segundosATiempo(segundos) {
    const hrs = String(Math.floor(segundos / 3600)).padStart(2, '0');
    const min = String(Math.floor((segundos % 3600) / 60)).padStart(2, '0');
    const sec = String(segundos % 60).padStart(2, '0');
    return `${hrs}:${min}:${sec}`;
}

const formObservacionesSanciones = document.getElementById('Sanciones_Arbitros');
const cuerpoTablaSanciones = document.getElementById('tabla-observaciones-extra');

formObservacionesSanciones.addEventListener('submit', function (e) {
    e.preventDefault();

    // Obtén los valores directamente de los inputs del formulario
    const minutosGrabacionS = document.getElementById('valor-minutos-grabacion-sanciones').textContent.trim();
    const segundosGrabacionSancion = tiempoASegundos(minutosGrabacionS);
    const grabacionMenosSancion = segundosATiempo(Math.max(0, segundosGrabacionSancion - 8));

    const minutosJuego = document.getElementById('valor-minutos-juego-sanciones').textContent.trim();
    const segundosJuegoSancion = tiempoASegundos(minutosJuego);
    const juegoMenosSancion = segundosATiempo(segundosJuegoSancion);

    const FaltasSancion = document.querySelector('[name="arbitro_faltas_tecnicas_sanciones"]:checked')?.value || '';
    const ObservacionTextoSancion = document.querySelector('[name="Observacion_escrita_sanciones"]')?.value || '';
    const BienSancion = document.querySelector('[name="estado_sanciones"]:checked')?.value || '';
    const ArbitroSancion = document.querySelector('[name="arbitro_correccion_sanciones"]:checked')?.value || '';



    function estadoColorSancion(estadoColorSancion) {
        if (estadoColorSancion === 'Bien') return 'green';
        if (estadoColorSancion === 'Ver') return 'yellow';
        if (estadoColorSancion === 'Mal') return 'red';
        return '';
    }
    const colorSancion = estadoColorSancion(BienSancion);
    // Crea la fila
    const nuevaFilaAmarillaSanciones = document.createElement('tr');
    nuevaFilaAmarillaSanciones.innerHTML = `
    <td style="text-align: center; border: 1px solid black; padding: 8px;">${grabacionMenosSancion}</td>
    <td style="text-align: center; border: 1px solid black; padding: 8px;">${juegoMenosSancion}</td>
    <td contenteditable style="text-align: center; border: 1px solid black;">
        <p style="text-align: center; display: flex; justify-content: center; align-items: center; padding:0% 22%; background-color:${tipoSancionSeleccionada.color}">
            ${tipoSancionSeleccionada.texto} <br> ${FaltasSancion}
        </p>
    </td>
    <td style="border: 1px solid black; padding: 8px;"><p style="text-transform: capitalize;" contenteditable> ${ObservacionTextoSancion}</p></td>
    <td style="text-align: center; border: 1px solid black; padding: 8px; background-color:${colorSancion}">
        <select name="tablaCreadaSelectAmarilla" style="background-color:${colorSancion}; width: 100%; height: 100%; border: none; color: black; font-weight: bold;" class="form-select">
            <option value="Bien" style="background-color:green" ${BienSancion === 'Bien' ? 'selected' : ''}><span class="valor-select-print">Bien</span></option>
            <option value="Ver" style="background-color:yellow" ${BienSancion === 'Ver' ? 'selected' : ''}>Ver</option>
            <option value="Mal" style="background-color:red" ${BienSancion === 'Mal' ? 'selected' : ''}>Mal</option>
        </select>
    </td>
    <td style="text-align: center; border: 1px solid black; padding: 8px;"><p style="text-transform: capitalize;" contenteditable>${ArbitroSancion}</p></td>
`;
    cuerpoTablaSanciones.appendChild(nuevaFilaAmarillaSanciones);

    const selectAmarilla = nuevaFilaAmarillaSanciones.querySelector('select[name="tablaCreadaSelectAmarilla"]');
    const td = selectAmarilla.parentElement;
    selectAmarilla.addEventListener('change', function () {
        if (this.value === 'Bien') {
            td.style.backgroundColor = 'green';
            selectAmarilla.style.backgroundColor = 'green';
        } else if (this.value === 'Ver') {
            td.style.backgroundColor = 'yellow';
            selectAmarilla.style.backgroundColor = 'yellow';
        } else if (this.value === 'Mal') {
            td.style.backgroundColor = 'red';
            selectAmarilla.style.backgroundColor = 'red';
        } else {
            td.style.backgroundColor = '';
            selectAmarilla.style.backgroundColor = '';
        }
    });
    // Limpia el formulario y cierra el modal si usas Bootstrap
    formObservacionesSanciones.reset();
    const modal = bootstrap.Modal.getInstance(document.getElementById('modal_sanciones'));
    if (modal) {
        modal.hide();
    }
});
let tipoSancionSeleccionada = { texto: "Amarilla", color: "yellow" };

// Botón Amarilla (si tienes uno, opcional) IMPORTANTE POSIBLE ERROR
document.getElementById('a_sancion')?.addEventListener('click', function () {
    tipoSancionSeleccionada = {
        texto: "Amarilla",
        color: "yellow"
    };
});

document.getElementById('dos_minutos').addEventListener('click', function () {
    tipoSancionSeleccionada = {
        texto: "2 min",
        color: "rgba(185, 222, 255, 0.678)"
    };
});

// Botón D (descalificación)
document.getElementById('d_sancion').addEventListener('click', function () {
    tipoSancionSeleccionada = {
        texto: "Descalificación",
        color: "red"
    };
});


// -------------------------------------------------------------------------------------------------=======----------------------------------------------------

// BIEN REGULAR MAL
const observacionesBienMalRegular = document.getElementById('Observacion_Arbitros');
observacionesBienMalRegular.addEventListener('submit', function (e) {
    e.preventDefault();
    const Bien = document.querySelector('[name="estado_sanciones"]:checked')?.value;

});

// FALTA TECNICA    

const observacionesFaltas = document.getElementById('Observacion_Arbitros');
observacionesFaltas.addEventListener('submit', function (e) {
    e.preventDefault();
    const Faltas = document.querySelector('[name="arbitro_faltas_tecnicas"]:checked')?.value;
});

// ARBITRO CORRECTO

const observacionesArbitroCorrecto = document.getElementById('Observacion_Arbitros');
const listaArbitros = document.getElementById('observaciones_Arbitros');
observacionesArbitroCorrecto.addEventListener('submit', function (e) {
    e.preventDefault();
    const Arbitro = document.querySelector('[name="arbitro_Correcto"]:checked')?.value;
});

// OBSERVACIONES ESCRITAS
const observacionesObservacion = document.getElementById('Observacion_Arbitros');
observacionesObservacion.addEventListener('submit', function (e) {
    e.preventDefault();
    const ObservacionTexto = document.querySelector('[name="Observacion_escrita"]')?.value;
    observacionesObservacion.reset(); // Limpiar el formulario después de enviar
    const modal = bootstrap.Modal.getInstance(document.getElementById('modal_observacion'));
    if (modal) {
        modal.hide();
    }
});

// PRIMERA LETRA MAYUSCULA EN TEXTAREA
document.addEventListener('DOMContentLoaded', function () {
    const textarea = document.querySelector('textarea[name="Observacion_escrita"]');
    if (textarea) {
        textarea.addEventListener('input', function () {
            if (this.value.length > 0) {
                this.value = this.value.charAt(0).toUpperCase() + this.value.slice(1);
            }
        });
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const textarea = document.querySelector('textarea[name="Observacion_escrita_sanciones"]');
    if (textarea) {
        textarea.addEventListener('input', function () {
            if (this.value.length > 0) {
                this.value = this.value.charAt(0).toUpperCase() + this.value.slice(1);
            }
        });
    }
});

// OCULTAR Y MOSTRAR SANCIONES EQUIPO 1 Y 2
const ocultarTablaEquipo12 = document.getElementById('tabla_equipo2');
const ocultarTablaEquipo1 = document.getElementById('tabla_equipo1');
const botonOcultarEquipo = document.getElementById('ocultar_tabla_equipo12');
const botonMostrarEquipo = document.getElementById('mostrar_tabla_equipo12');
botonOcultarEquipo.style.display = '';
botonMostrarEquipo.style.display = 'none';
document.getElementById('ocultar_tabla_equipo12').onclick = function () {
    ocultarTablaEquipo12.style.display = 'none';
    ocultarTablaEquipo1.style.display = 'none';
    botonOcultarEquipo.style.display = 'none';
    botonMostrarEquipo.style.display = '';

}

document.getElementById('mostrar_tabla_equipo12').onclick = function () {
    botonMostrarEquipo.style.display = '';
    ocultarTablaEquipo12.style.display = '';
    ocultarTablaEquipo1.style.display = '';
    botonOcultarEquipo.style.display = '';
    botonMostrarEquipo.style.display = 'none';
}

// ----------------------------------------------------------------------------
//SANCIONES BOTONES 2MIN, D, D+A

// Cronómetro de grabado: sin límite, sin select
let cronometroGrabado = new Cronometro('display-grabado', 'start-grabado', 'stop-grabado', 'reset-grabado', null);

// Cronómetro de juego: usa el select para el límite
let cronometroJuego = new Cronometro('display-juego', 'start-juego', 'stop-juego', 'reset-juego', 'select-juego');
document.getElementById('start-grabado').onclick = function () {
    cronometroGrabado.start();
    cronometroJuego.start();

    // START CRONOMETRO JUEGO 
}

document.getElementById('start_observaciones_juego').onclick = function () {
    cronometroJuego.start();

}
document.getElementById('start_sanciones_juego').onclick = function () {
    cronometroJuego.start();

}

// STOP CRONOMETRO JUEGO

document.getElementById('stop_observaciones_juego').onclick = function () {

    cronometroJuego.stop();

}
document.getElementById('d_sancion').onclick = function () {

    cronometroJuego.stop();

}

document.getElementById('stop_sanciones_juego').onclick = function () {

    cronometroJuego.stop();

}
document.getElementById('dos_minutos').onclick = function () {
    cronometroJuego.stop();

}

// STOP CRONOMETRO GRABADO Y JUEGO

document.getElementById('stop-grabado').onclick = function () {
    cronometroGrabado.stop();
    cronometroJuego.stop();

}


//RESET CRONOMETRO JUEGO Y GRABADO
document.getElementById('reset-grabado').onclick = function () {
    cronometroGrabado.reset();
    cronometroJuego.reset();

}

// ENVIO DE FORM CON ENTER --------------------------------------------------------------------------------------------------=======----------------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
    const textarea = document.querySelector('textarea[name="Observacion_escrita"]');
    const form = document.getElementById('Observacion_Arbitros');
    if (textarea && form) {
        textarea.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                form.requestSubmit(); // Envía el formulario
            }
        });
    }
});
// ENVIO DE FORM CON ENTER --------------------------------------------------------------------------------------------------=======----------------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
    const textareaSanciones = document.querySelector('textarea[name="Observacion_escrita_sanciones"]');
    const formSanciones = document.getElementById('Sanciones_Arbitros');
    if (textareaSanciones && formSanciones) {
        textareaSanciones.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                formSanciones.requestSubmit(); // Envía el formulario
            }
        });
    }
});

// NUEVO PARTIDO REINICIA TODOS LOS CAMPOS

const nuevoPartidoBtn = document.getElementById('modale_nuevo_partido_si');
nuevoPartidoBtn.addEventListener('click', function () {
    // Reinicia los cronómetros
    cronometroGrabado.reset();
    cronometroJuego.reset();
    const goleslocales = document.getElementById('tanteador_local');
    goleslocales.innerHTML = "0";

    const golesvisitante = document.getElementById('tanteador_visitante');
    golesvisitante.innerHTML = "0";

    // Limpia las tablas de observaciones y sanciones
    const cuerpoTablaObservaciones = document.getElementById('tabla-observaciones-extra');
    cuerpoTablaObservaciones.innerHTML = '';

    document.querySelectorAll('input[type="text"], textarea').forEach(input => input.value = '');

    // Resetea los selects a su valor por defecto
    document.querySelectorAll('select').forEach(select => select.selectedIndex = 0);

    // Reinicia los títulos de los equipos
    document.querySelectorAll('h3[contenteditable="true"]').forEach(h3 => h3.textContent = 'EQUIPO');
    // Reinicia los títulos de los equipos
    document.querySelectorAll('td').forEach(td => td.textContent = '');
    document.querySelectorAll('td').forEach(td => td.style.backgroundColor = '');
});
// -----------------------------------------------------------------------------------------------------------------
document.getElementById('descargarImagen').addEventListener('click', function () {
    var tabla = document.getElementById('tabla-observaciones');
    html2canvas(tabla).then(function (canvas) {
        // Crea un enlace para descargar la imagen
        var link = document.createElement('a');
        link.download = 'tabla-observaciones.jpg';
        link.href = canvas.toDataURL();
        link.click();
    });
});


const arbitro1 = document.getElementById('Arbitro1');
if (arbitro1) {
    arbitro1.value = localStorage.getItem('Arbitro1') || '';
    arbitro1.addEventListener('input', () => {
        localStorage.setItem('Arbitro1', arbitro1.value);
    });
}

window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    e.returnValue = ''; // Esto activa el mensaje de confirmación estándar del navegador
});
/////////////////////////////////////////////////////////////////////

// Agrega un botón de micrófono a cada textarea y activa reconocimiento de voz
document.addEventListener('DOMContentLoaded', function () {
    if (!('webkitSpeechRecognition' in window)) {
        // No soportado
        return;
    }
    document.querySelectorAll('textarea').forEach(function (textarea) {
        // Crea el botón de micrófono
        const micBtn = document.createElement('button');
        micBtn.type = 'button';
        micBtn.innerHTML = '🎤';
        micBtn.title = 'Dictar por voz';
        micBtn.style.marginLeft = '5px';
        micBtn.style.backgroundColor = '#72cbff00';
        micBtn.style.cursor = 'pointer';

        // Inserta el botón después del textarea
        textarea.parentNode.insertBefore(micBtn, textarea.nextSibling);

        // Configura el reconocimiento de voz
        const recognition = new webkitSpeechRecognition();
        recognition.lang = 'es-ES';
        recognition.continuous = false;
        recognition.interimResults = false;

        micBtn.addEventListener('click', function () {
            recognition.start();
            micBtn.disabled = true;
            micBtn.innerHTML = '🎙️...';
        });

        recognition.onresult = function (event) {
            const texto = event.results[0][0].transcript;
            textarea.value += (textarea.value ? ' ' : '') + texto;
            textarea.dispatchEvent(new Event('input')); // Para disparar otros listeners
        };
        recognition.onerror = function () {
            micBtn.disabled = false;
            micBtn.innerHTML = '🎤';
            
        };
        recognition.onend = function () {
            micBtn.disabled = false;
            micBtn.innerHTML = '🎤';
        };
    });
});

