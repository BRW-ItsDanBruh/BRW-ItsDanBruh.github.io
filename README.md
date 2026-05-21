<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistema de Evaluación de Becas y Financiamiento | Control Escolar</title>
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <main class="app-card">
        <header class="app-header">
            <div class="logo-placeholder">📊</div>
            <h2>Cotizador de Planes Educativos</h2>
            <p class="subtitle">Departamento de Cobranza y Apoyos Económicos</p>
        </header>

        <!-- Formulario Principal de Evaluación -->
        <form id="becaForm" novalidate>
            <div class="form-group">
                <label for="promedio">Promedio General del Alumno</label>
                <div class="input-container">
                    <input type="number" id="promedio" min="0" max="100" step="0.01" required placeholder="0.00 - 100.00">
                    <span class="input-suffix">Pts</span>
                </div>
                <small class="error-msg" id="err-promedio"></small>
            </div>

            <div class="form-group">
                <label for="colegiatura">Costo Base de la Colegiatura</label>
                <div class="input-container">
                    <span class="input-prefix">$</span>
                    <input type="number" id="colegiatura" min="1" step="0.01" required placeholder="Monto total del periodo">
                </div>
                <small class="error-msg" id="err-colegiatura"></small>
            </div>

            <button type="submit" id="btnEvaluar" class="btn btn-primary">
                <span>Evaluar Elegibilidad</span>
            </button>
        </form>

        <!-- Panel de Mensajes y Alertas Dinámicas -->
        <section id="panelFeedback" class="feedback-panel hidden"></section>

        <!-- Sección Avanzada: Financiamiento (Oculta inicialmente) -->
        <section id="seccionFinanciamiento" class="financing-panel hidden">
            <header class="section-header">
                <h3>Simulador de Financiamiento Institucional</h3>
                <p>Configure las parcialidades mensuales para amortizar el saldo pendiente.</p>
            </header>

            <div class="form-group">
                <label for="meses">Plazo de Financiamiento</label>
                <div class="input-container">
                    <input type="number" id="meses" min="1" max="24" required placeholder="Ej. 6, 12 o 24">
                    <span class="input-suffix">Meses</span>
                </div>
                <small class="error-msg" id="err-meses"></small>
            </div>

            <button type="button" id="btnCalcularFinanciamiento" class="btn btn-accent">
                Calcular Amortización
            </button>

            <!-- Tabla de desglose de pagos -->
            <div id="tablaAmortizacion" class="table-container hidden"></div>
        </section>
    </main>

    <script src="app.js"></script>
</body>
</html>
