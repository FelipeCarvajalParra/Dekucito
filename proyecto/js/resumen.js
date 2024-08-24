// Fecha de inicio del contador
var fechaInicio = new Date('2024-05-01');

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
function dias_calculo() {
   
    // Calcular los días transcurridos desde la fecha de inicio
    var ahora = new Date();
    var tiempoTranscurrido = ahora - fechaInicio;
    var diasTranscurridos = Math.ceil(tiempoTranscurrido / (1000 * 60 * 60 * 24));

    return(diasTranscurridos)
}

function mostrarMensaje() {

    var mensaje1 = document.getElementById("mensaje1")
    var mensaje2 = document.getElementById("mensaje2")

    dias_totales = dias_calculo()
    horasDiasTotales = dias_totales * 24

    dias_reales = dias_totales - 6
    horasDiasReales = dias_reales * 24

    mensaje1.textContent = `Han transcurrido ${dias_totales} días desde que comenzaste (bueno, en realidad ${dias_reales}), lo que equivale a ${horasDiasTotales} horas (en verdad son ${horasDiasReales} horas). Eso significa que solo te faltan ${184 - dias_totales} días. ¡Lo estás haciendo muy bien! No pierdas la motivación, sigue adelante y alcanzarás tu meta.`
    mensaje2.innerHTML = `Recuerda que cada pequeño paso te acerca más a tu objetivo. A veces el camino puede parecer largo y desafiante, pero cada día es una oportunidad para aprender y crecer. (y este día terminará en <span class="tiempo-restante">${calcularTiempoRestante()}</span>, ¡así que asegúrate de sacarle el máximo provecho!)`;


    setTimeout(mostrarMensaje, 1000);
}

// Iniciar el contador
mostrarMensaje()