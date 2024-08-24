// Fecha de inicio del contador
var fechaInicio = new Date('2024-05-01')

// Cantidad total de días (estático)
var diasTotales = 184;

// Función para calcular el tiempo restante hasta la medianoche del día actual
function calcularTiempoRestante() {
    var ahora = new Date();
    var horasRestantes = 23 - ahora.getHours();
    var minutosRestantes = 59 - ahora.getMinutes();
    var segundosRestantes = 59 - ahora.getSeconds();

    // Formatear el tiempo restante
    var tiempoRestante = ((horasRestantes < 10) ? '0' : '') + horasRestantes + ':' +
                         ((minutosRestantes < 10) ? '0' : '') + minutosRestantes + ':' +
                         ((segundosRestantes < 10) ? '0' : '') + segundosRestantes;

    return tiempoRestante;
}

// Función para actualizar el contador en la página
function actualizarContador() {
    var contadorElemento1 = document.getElementById('contador1');

    // Calcular los días transcurridos desde la fecha de inicio
    var ahora = new Date();
    var tiempoTranscurrido = ahora - fechaInicio;
    var diasTranscurridos = Math.ceil(tiempoTranscurrido / (1000 * 60 * 60 * 24));

    // Actualizar contador1: muestra los días transcurridos y el total
    contadorElemento1.textContent = "Dia " + (diasTranscurridos) + ' de ' + diasTotales;


    // Actualizar cada segundo
    setTimeout(actualizarContador, 1000);
}

// Iniciar el contador
actualizarContador();






