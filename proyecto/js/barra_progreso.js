
function barra_progreso(diasTranscurridos){

    console.log(diasTranscurridos)
    
    var porcentaje = document.getElementById('Progreso');
    var calculo = ((diasTranscurridos)   / 184) * 100;

    porcentaje.style.width = `0%`;
    porcentaje.setAttribute('aria-valuenow', 0);


    // Animar la barra de progreso con una transición suave
    setTimeout(function() {
        porcentaje.style.width = `${calculo}%`;
        porcentaje.setAttribute('aria-valuenow', calculo.toFixed(2));
        porcentaje.textContent = `${calculo.toFixed(2)}%`;
    }, 500); // Tiempo para iniciar la animación
}

function diasTranscurridos_function(){

    var fechaInicio = new Date('2024-05-01');

    var ahora = new Date();
    var tiempoTranscurrido = ahora - fechaInicio;
    var diasTranscurridos = Math.ceil(tiempoTranscurrido / (1000 * 60 * 60 * 24));

    barra_progreso(diasTranscurridos)
}

diasTranscurridos_function()




