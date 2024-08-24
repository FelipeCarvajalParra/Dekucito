let count = 0;
const counterElement = document.getElementById('counter');

function respuestaIncorrecta(){
    const Toast = Swal.mixin({
        toast: true,
        position: "bottom-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
        });
        Toast.fire({
        icon: "error",
        title: "Ups! Respuesta incorrecta, empieza de nuevo"
        });
}


// Función para actualizar el contador en la pantalla
function updateCounter(aciertos) {
    if (aciertos >= 15){
        console.log()
        counterElement.textContent = 'Entrar';
    }else{
        counterElement.textContent = `${count}/15`;
    }
}

// Función para generar una posición aleatoria
function getRandomPosition() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const randomX = Math.floor(Math.random() * width);
    const randomY = Math.floor(Math.random() * height);
    return { x: randomX, y: randomY };
}

// Función para mostrar una imagen en una posición aleatoria
function showRandomImage() {
    // Crear un nuevo elemento de imagen
    const img = document.createElement('img');
    img.style.width = "40px"; // Cambia esto al tamaño deseado
    img.style.height = "40px"; // Cambia esto al tamaño deseado

    img.src = 'img/a00a65d4dcf9b579648f287865053b-unscreen.gif'; // Cambia esto a la ruta de tu imagen
    img.className = 'random-image';

    // Obtener una posición aleatoria
    const position = getRandomPosition();
    img.style.left = `${position.x}px`;
    img.style.top = `${position.y}px`;

    // Agregar un evento de clic a la imagen
    img.addEventListener('click', function() {
        count++;
        updateCounter(count);
        img.remove();
    });

    // Agregar la imagen al cuerpo del documento
    document.body.appendChild(img);

    // Opcional: Remover la imagen después de un tiempo
    setTimeout(() => {
        img.remove();
    }, 1200); // Por ejemplo, remover después de 5 segundos
}




function final(){
    Swal.fire({
        html: `
            <div style="width: 100%;">
                <h2 style="color: white;">Felicidades</h2>
                <p style="color: white;">Has completado cada uno de los retos, ¡felicidades! Recuerda que, sin importar lo difícil que sea el camino, siempre debes buscar la manera de mejorar y superar cada obstáculo. Al finas veras, que habra valido la pena</p>
            </div>
            <img src="img/CUPON.png" style="height: 250px; width: 100%; margin-top: 20px;">
        `,
        background: '#333',
        showCancelButton: false,
        confirmButtonText: 'Continuar',
    });
}

function pregunta5(){
    Swal.fire({
        title: '5) Operacion',
        showCancelButton: false,
        imageUrl: "img/Personas.png",
        imageHeight: 250,
        input: 'text',
        inputPlaceholder: 'Escriba la respuesta aqui',
        reverseButtons: true,
        preConfirm: (value) => {
            if (value === '9') {
                Swal.fire({
                    title: '¡Correcto!',
                    text: 'Bien hecho!',
                    icon: 'success',
                    confirmButtonText: 'Continuar',
                    willClose: () => {
                        final() 
                    }
                })
            } else {
                count = 0;
                updateCounter(0)
                Swal.close()
                respuestaIncorrecta()
            }
        }
        });
}


function pregunta4(){
    Swal.fire({
        title: '4) Desafío',
        html: `
            <div class="indicaciones" style="text-align: left;">
            <p>Paso 1: Busca y abre la página de la NASA en tu navegador.</p>
            <p>Paso 2: Desplázate hacia abajo hasta el pie de página.</p>
            <p>Paso 3: Entre todas las opciones, abre "Multimedia".</p>
            <p>Paso 4: Desplázate hacia abajo hasta el apartado "Discover More".</p>
            <p>Paso 5: Selecciona la opción "NASA Interactives".</p>
            <p>Paso 6: De entre las opciones que aparecen, selecciona "What Hubble Saw on Your Birthday".</p>
            <p>Paso 7: Desplázate hacia abajo hasta el apartado "Hubble’s Universe".</p>
            <p>Paso 8: Selecciona la última imagen que se muestra.</p>
            <p>Paso 9: Lee la descripción de la imagen y responde:</p>
            <p>¿A qué distancia se encuentra situada la foto de la Tierra? (Solo números, con punto)</p>
            </div>
            <input id="respuesta" type="text" placeholder="Tu respuesta..." style="margin-top: 10px;">
        `,
        showCancelButton: false,
        confirmButtonText: 'Comprobar respuesta',
        reverseButtons: true
        }).then((result) => {
        if (result.isConfirmed) {
            const respuesta = document.getElementById('respuesta').value;
            if (respuesta === '50.000') {
            Swal.fire({
                title: '¡Correcto!',
                text: '¡Has resuelto el desafío de la NASA! Siguete esforzando y llegaras asi de lejos',
                icon: 'success',
                willClose: () => {
                pregunta5() 
            }
            });
            } else {
            count = 0;
            updateCounter();
            Swal.close()
            respuestaIncorrecta();
            }
        }
        });
    
}


function pregunta3(){
    
    Swal.fire({
        title: '3) Énigme',
        html: `Hé, quoi de neuf, confus ? il suffit d'appuyer sur le mot après le soleil, <span class="clickable">à bientôt !</span> (ouvertement bisexuel, si vous utilisez un traducteur)`,
        showCancelButton: true,
        confirmButtonText: 'Continuar',
        showCancelButton: false,

        reverseButtons: true
        }).then((result) => {
        if (result.isConfirmed) {
            count = 0;
            updateCounter();
            Swal.close()
            respuestaIncorrecta();
        }
        });
    
        document.querySelector('.clickable').addEventListener('click', () => {
        Swal.fire({
            title: 'Félicitations!',
            text: 'Vous avez trouvé la solution!',
            icon: 'success',
            willClose: () => {
            pregunta4();
            }
        });
        });
        
}


function pregunta2() {
    Swal.fire({
        title: '2) Pregunta + desenciptamiento',
        imageUrl: "https://el-abecedario.com/img/abecedario-egipcio.gif",
        text: '¿Cuál es la capital de Reino de 𓃀 𓅱 𓏏 𓄿 𓈖?',
        input: 'radio',
        inputOptions: {
            berlin: '𓃀erlí𓈖',
            rome: '𓂋om 𓄿',
            timbu: '𓏏im𓃀u',
            Nuuk: '𓈖uuk'
        },
        inputValidator: (value) => {
            if (value === 'timbu') {
                Swal.fire({
                    title: '¡Correcto!',
                    text: 'Los egipcios estarian orgullosos de ti...',
                    icon: 'success',
                    willClose: () => {
                        pregunta3() 
                    }
                })
                
            } else{
                count = 0;
                updateCounter();
                Swal.close()
                respuestaIncorrecta();
                
            } 
        }
    });
}

function validation(){
    if (count >= 15){
        Swal.fire({
            html: `
            <h2>1) Desencriptamiento</h2>
            <img src="img/1_PyDyJFBNXOeSvfpUbs7GUA.png" alt="Imagen" style="width: 300px; margin-top: 20px;">
            `,
            input: 'text',
            inputPlaceholder: 'Escriba el código aquí',
            showCancelButton: true,
            confirmButtonText: 'Validar',
            showCancelButton: false,
            preConfirm: (value) => {
                if (value === 'QVYSZNWTNT') {
                    Swal.fire({
                        title: '¡Correcto!',
                        text: 'Ahora esos numeros que te envie tienen sentido, ¿verdad?',
                        icon: 'success',
                        confirmButtonText: 'Continuar',
                        willClose: () => {
                            pregunta2() 
                        }
                    })
                } else {
                    count = 0;
                    updateCounter(0)
                    Swal.close()
                    respuestaIncorrecta()
                    
                }
            }
        });
    
    }else{
        const Toast = Swal.mixin({
            toast: true,
            position: "bottom-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
            });
            Toast.fire({
            icon: "error",
            title: "Ups! Primero debes atrapar todas las estrellas"
            });
    }
}

function update(){
    if (count >= 15){
        updateCounter(15)
    }else{
        showRandomImage()
    }
}

setInterval(update, 4000);