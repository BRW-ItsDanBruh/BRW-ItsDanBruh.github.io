/

// Configuración Global del Negocio
const CONFIG = {
    INTERES_FINANCIAMIENTO: 0.05, // 5% tasa fija institucional
    CORTE_APTO_BECA: 85.00
};

// Mapeo del DOM al arrancar la aplicación
const DOM = {
    form: document.getElementById('becaForm'),
    promedio: document.getElementById('promedio'),
    colegiatura: document.getElementById('colegiatura'),
    btnEvaluar: document.getElementById('btnEvaluar'),
    panelFeedback: document.getElementById('panelFeedback'),
    seccionFinanciamiento: document.getElementById('seccionFinanciamiento'),
    meses: document.getElementById('meses'),
    btnCalcularFin: document.getElementById('btnCalcularFinanciamiento'),
    tablaAmortizacion: document.getElementById('tablaAmortizacion'),
    // Nodos de errores
    errPromedio: document.getElementById('err-promedio'),
    errColegiatura: document.getElementById('err-colegiatura'),
    errMeses: document.getElementById('err-meses')
};


document.addEventListener('DOMContentLoaded', () => {
    DOM.form.addEventListener('submit', ejecutarControlFlujo);
    DOM.btnCalcularFin.addEventListener('click', procesarFinanciamiento);
    
    // Monitores de entrada en tiempo real para limpiar avisos de error
    DOM.promedio.addEventListener('input', () => limpiarError(DOM.promedio, DOM.errPromedio));
    DOM.colegiatura.addEventListener('input', () => limpiarError(DOM.colegiatura, DOM.errColegiatura));
    DOM.meses.addEventListener('input', () => limpiarError(DOM.meses, DOM.errMeses));
});


function ejecutarControlFlujo(event) {
    event.preventDefault(); // Evita la recarga asíncrona nativa del HTML5
    
    if (!validarCamposIniciales()) return;

    const promedio = parseFloat(DOM.promedio.value);
    const costoBase = parseFloat(DOM.colegiatura.value);

    // Reiniciar paneles dependientes
    ocultarComponentes([DOM.panelFeedback, DOM.seccionFinanciamiento, DOM.tablaAmortizacion]);

    // Evaluación del Modelo de Negocio
    if (promedio > CONFIG.CORTE_APTO_BECA) {
        const porcentajeBeca = mapearPorcentajeBeca(promedio);
        const montoDescuento = costoBase * (porcentajeBeca / 100);
        const netoPagar = costoBase - montoDescuento;

        renderizarBecaAprobada(porcentajeBeca, montoDescuento, netoPagar);
    } else {
        renderizarBecaRechazada();
    }
}

/**
 * Evalúa los límites matemáticos según los requerimientos solicitados
 */
function mapearPorcentajeBeca(promedio) {
    if (promedio >= 95 && promedio <= 100) return 100;
    if (promedio >= 90 && promedio < 95) return 80;
    if (promedio > 86 && promedio < 90) return 60;
    return 0; // Fallback de seguridad estructural
}

/**
 * Motor Financiero: Desglose del crédito con y sin intereses
 */
function procesarFinanciamiento() {
    if (!validarPlazoFinanciamiento()) return;

    const costoBase = parseFloat(DOM.colegiatura.value);
    const mesesPlazo = parseInt(DOM.meses.value);

    // Cálculos económicos básicos
    const totalSinInteres = costoBase;
    const mensualidadSinInteres = totalSinInteres / mesesPlazo;

    const totalConInteres = costoBase * (1 + CONFIG.INTERES_FINANCIAMIENTO);
    const mensualidadConInteres = totalConInteres / mesesPlazo;

    // Inyección de estructura financiera en el DOM
    DOM.tablaAmortizacion.innerHTML = `
        <div class="data-row"><span class="text-muted">Esquema comercial</span> <span>Ordinario / Con Interés</span></div>
        <div class="data-row"><span>Total Base Neto:</span> <span>$${totalSinInteres.toFixed(2)}</span></div>
        <div class="data-row"><span>Mensualidad sin recargos:</span> <span>$${mensualidadSinInteres.toFixed(2)}</span></div>
        <div class="data-row highlight"><span>Total con Interés (${CONFIG.INTERES_FINANCIAMIENTO * 100}%):</span> <span>$${totalConInteres.toFixed(2)}</span></div>
        <div class="data-row highlight" style="color: var(--accent)"><span>${mesesPlazo} pagos mensuales de:</span> <span>$${mensualidadConInteres.toFixed(2)}</span></div>
    `;
    DOM.tablaAmortizacion.classList.remove('hidden');
}


function validarCamposIniciales() {
    let esValido = true;
    
    if (DOM.promedio.value === '' || parseFloat(DOM.promedio.value) < 0 || parseFloat(DOM.promedio.value) > 100) {
        marcarError(DOM.promedio, DOM.errPromedio, 'Ingrese un promedio real entre 0 y 100.');
        esValido = false;
    }
    if (DOM.colegiatura.value === '' || parseFloat(DOM.colegiatura.value) <= 0) {
        marcarError(DOM.colegiatura, DOM.errColegiatura, 'El costo debe ser mayor a $0.00.');
        esValido = false;
    }
    return esValido;
}

function validarPlazoFinanciamiento() {
    const valorMeses = parseInt(DOM.meses.value);
    if (DOM.meses.value === '' || valorMeses < 1 || valorMeses > 24) {
        marcarError(DOM.meses, DOM.errMeses, 'El plazo institucional permitido es de 1 a 24 meses.');
        return false;
    }
    return true;
}

function marcarError(inputNode, textNode, mensaje) {
    inputNode.classList.add('invalid');
    textNode.innerText = mensaje;
}

function limpiarError(inputNode, textNode) {
    inputNode.classList.remove('invalid');
    textNode.innerText = '';
}

function ocultarComponentes(nodos) {
    nodos.forEach(nodo => nodo.classList.add('hidden'));
}

function renderizarBecaAprobada(pct, ahorro, total) {
    DOM.panelFeedback.className = "feedback-panel success";
    DOM.panelFeedback.innerHTML = `
        <strong>✓ Dictamen Técnico: Dictaminado como Apto.</strong><br>
        Se ha aplicado un beneficio de beca del <strong>${pct}%</strong> sobre la cuota base.<br>
        • Descuento neto: $${ahorro.toFixed(2)}<br>
        • <strong>Monto final a liquidar: $${total.toFixed(2)}</strong>
    `;
    DOM.panelFeedback.classList.remove('hidden');
}

function renderizarBecaRechazada() {
    DOM.panelFeedback.className = "feedback-panel warning";
    DOM.panelFeedback.innerHTML = `
        <strong>Aviso del Comité:</strong> El promedio registrado no alcanza la nota de corte (>85).<br>
        <em>No es posible asignar un subsidio directo para este periodo escolar.</em>
    `;
    DOM.panelFeedback.classList.remove('hidden');
    DOM.seccionFinanciamiento.classList.remove('hidden');
}
