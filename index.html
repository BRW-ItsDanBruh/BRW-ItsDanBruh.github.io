<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora de Becas y Financiamiento</title>
    <style>
        :root {
            --primary-color: #1e3a8a;
            --primary-hover: #1d4ed8;
            --success-color: #10b981;
            --accent-color: #f59e0b;
            --text-dark: #1f2937;
            --bg-light: #f3f4f6;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background-color: var(--bg-light);
            color: var(--text-dark);
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 20px;
        }

        .container {
            background-color: #ffffff;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 500px;
        }

        h2 {
            text-align: center;
            color: var(--primary-color);
            margin-bottom: 20px;
            font-size: 24px;
        }

        .form-group {
            margin-bottom: 18px;
        }

        label {
            display: block;
            margin-bottom: 6px;
            font-weight: 600;
            font-size: 14px;
        }

        input {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 6px;
            font-size: 16px;
            transition: border-color 0.3s;
        }

        input:focus {
            outline: none;
            border-color: var(--primary-color);
        }

        .btn {
            width: 100%;
            padding: 12px;
            background-color: var(--primary-color);
            color: white;
            border: none;
            border-radius: 6px;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        .btn:hover {
            background-color: var(--primary-hover);
        }

        /* Sección de Financiamiento Oculta por defecto */
        .financing-section {
            display: none;
            margin-top: 20px;
            padding-top: 20px;
            border-top: 2px dashed #e5e7eb;
            animation: fadeIn 0.5s ease;
        }

        /* Resultados */
        .result-box {
            margin-top: 20px;
            padding: 15px;
            border-radius: 6px;
            display: none;
            font-size: 15px;
            line-height: 1.5;
        }

        .success {
            background-color: #ecfdf5;
            border-left: 5px solid var(--success-color);
            color: #065f46;
        }

        .info {
            background-color: #fffbeb;
            border-left: 5px solid var(--accent-color);
            color: #92400e;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
    </style>
</head>
<body>

<div class="container">
    <h2>Portal de Becas y Financiamiento</h2>
    
    <form id="becaForm">
        <div class="form-group">
            <label for="promedio">Promedio del Estudiante (0 - 100):</label>
            <input type="number" id="promedio" min="0" max="100" step="0.1" required placeholder="Ej. 88.5">
        </div>

        <div class="form-group">
            <label for="colegiatura">Costo de la Colegiatura ($):</label>
            <input type="number" id="colegiatura" min="0" step="0.01" required placeholder="Ej. 5000">
        </div>

        <button type="button" class="btn" onclick="procesarSolicitud()">Evaluar Alumno</button>
    </form>

    <!-- Caja de resultado de Beca -->
    <div id="resultadoBeca" class="result-box"></div>

    <!-- Sección Desplegable de Financiamiento -->
    <div id="seccionFinanciamiento" class="financing-section">
        <h3>Solicitud de Financiamiento Estudiante</h3>
        <p style="font-size: 13px; color: #6b7280; margin-bottom: 15px;">
            Al no alcanzar el promedio mínimo para beca (>85), puedes simular un financiamiento.
        </p>
        
        <div class="form-group">
            <label for="meses">Meses a financiar:</label>
            <input type="number" id="meses" min="1" max="24" placeholder="Ej. 6">
        </div>
        
        <button type="button" class="btn" style="background-color: var(--accent-color);" onclick="calcularFinanciamiento()">Calcular Financiamiento</button>
        
        <!-- Caja de resultado de Financiamiento -->
        <div id="resultadoFinanciamiento" class="result-box"></div>
    </div>
</div>

<script>
    // Tasa de interés simulada para el financiamiento (ej. 5% de interés total sobre el saldo)
    const TASA_INTERES = 0.05; 

    function procesarSolicitud() {
        // Captura de valores
        const promedio = parseFloat(document.getElementById('promedio').value);
        const colegiatura = parseFloat(document.getElementById('colegiatura').value);
        
        const divBeca = document.getElementById('resultadoBeca');
        const divFinanciamiento = document.getElementById('seccionFinanciamiento');
        const divResFinanciamiento = document.getElementById('resultadoFinanciamiento');

        // Validación simple
        if (isNaN(promedio) || isNaN(colegiatura) || promedio < 0 || promedio > 100 || colegiatura <= 0) {
            alert("Por favor, ingrese valores válidos.");
            return;
        }

        // Resetear vistas anteriores
        divBeca.style.display = "none";
        divFinanciamiento.style.display = "none";
        divResFinanciamiento.style.display = "none";

        // Lógica de becas (>85 para ser apto)
        if (promedio > 85) {
            let porcentajeBeca = 0;

            if (promedio >= 95 && promedio <= 100) {
                porcentajeBeca = 100;
            } else if (promedio >= 90 && promedio < 95) { // Nota: corrección menor de solapamiento de rangos (90-94.99)
                porcentajeBeca = 80;
            } else if (promedio > 85 && promedio < 90) {
                porcentajeBeca = 60;
            }

            const descuento = colegiatura * (porcentajeBeca / 100);
            const totalAPagar = colegiatura - descuento;

            divBeca.className = "result-box success";
            divBeca.innerHTML = `
                <strong>¡Felicidades! Eres apto para una beca.</strong><br>
                • Porcentaje asignado: ${porcentajeBeca}%<br>
                • Descuento aplicado: $${descuento.toFixed(2)}<br>
                • <strong>Total neto a pagar: $${totalAPagar.toFixed(2)}</strong>
            `;
            divBeca.style.display = "block";

        } else {
            // No es apto para beca -> Se desplaza la opción de financiamiento
            divBeca.className = "result-box info";
            divBeca.innerHTML = `
                <strong>Aviso:</strong> El promedio es menor o igual a 85. No se puede asignar una beca automática.<br>
                <em>Se ha habilitado la opción de financiamiento en la parte inferior.</em>
            `;
            divBeca.style.display = "block";
            
            // Mostrar sección de financiamiento
            divFinanciamiento.style.display = "block";
        }
    }

    function calcularFinanciamiento() {
        const colegiatura = parseFloat(document.getElementById('colegiatura').value);
        const meses = parseInt(document.getElementById('meses').value);
        const divResFinanciamiento = document.getElementById('resultadoFinanciamiento');

        if (isNaN(meses) || meses <= 0) {
            alert("Por favor, introduce un número de meses válido.");
            return;
        }

        // Cálculos con y sin interés
        const costoSinInteres = colegiatura;
        const mensualidadSinInteres = costoSinInteres / meses;

        const costoConInteres = colegiatura * (1 + TASA_INTERES);
        const mensualidadConInteres = costoConInteres / meses;

        divResFinanciamiento.className = "result-box success";
        divResFinanciamiento.innerHTML = `
            <strong>Simulación de Financiamiento (${meses} meses):</strong><br><br>
            <strong>Sin Interés:</strong><br>
            • Total: $${costoSinInteres.toFixed(2)}<br>
            • ${meses} pagos mensuales de: $${mensualidadSinInteres.toFixed(2)}<br><br>
            <strong>Con Interés aplicado (${(TASA_INTERES * 100)}%):</strong><br>
            • Total: $${costoConInteres.toFixed(2)}<br>
            • ${meses} pagos mensuales de: <strong>$${mensualidadConInteres.toFixed(2)}</strong>
        `;
        divResFinanciamiento.style.display = "block";
    }
</script>

</body>
</html>
