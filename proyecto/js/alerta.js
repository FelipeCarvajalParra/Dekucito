
function mostrarPlaylist(){
    const playlist = [
        "https://open.spotify.com/embed/playlist/0XsESCfA8zL1IknRc1nryx?utm_source=generator&theme=0",
        "https://open.spotify.com/embed/album/3JfSxDfmwS5OeHPwLSkrfr?utm_source=generator",
        "https://open.spotify.com/embed/album/0Lg1uZvI312TPqxNWShFXL?utm_source=generator",
        "https://open.spotify.com/embed/album/3AvPX1B1HiFROvYjLb5Qwi?utm_source=generator",
        "https://open.spotify.com/embed/album/2ANVost0y2y52ema1E9xAZ?utm_source=generator",
        "https://open.spotify.com/embed/playlist/37i9dQZF1E4vJDb4S6o3EK?utm_source=generator",
        "https://open.spotify.com/embed/playlist/1kQnS1NNqtlGeeVfXuTvY4?utm_source=generator",
        "https://open.spotify.com/embed/playlist/0HwuLSksqU2yI9JABdcsBW?utm_source=generator",
        "https://open.spotify.com/embed/playlist/37i9dQZF1DWYN0zdqzbEwl?utm_source=generator",
        "https://open.spotify.com/embed/playlist/5jVjnlff7LfFn643HRzWtp?utm_source=generator",
        "https://open.spotify.com/embed/playlist/5mgfT11iou8U5wFBf21jaV?utm_source=generator",
        "https://open.spotify.com/embed/album/0cn6MHyx4YuZauaB7Pb66o?utm_source=generator",
        "https://open.spotify.com/embed/album/47BiFcV59TQi2s9SkBo2pb?utm_source=generator",
        "https://open.spotify.com/embed/album/4X6PQwYWxtGGtKjAfX6wa6?utm_source=generator",
        "https://open.spotify.com/embed/album/6evTdl2CjuBbkiCaXOKUKW?utm_source=generator"
    ];


    const indiceAleatorio = Math.floor(Math.random() * playlist.length); // Obtener un índice aleatorio
    const cancion = playlist[indiceAleatorio]; // Obtener la canción en ese índice

    Swal.fire({
        html: `
        <div style="text-align:center;">
            <div>
                <h5 style="font-size:24px; font-weight:bold; font-family:'Arial', sans-serif; color:black; margin-bottom:15px; text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);">
                    Creo que esto podría gustarte
                </h5>
                <iframe src="${cancion}" style="border-radius:12px; width:90%; height:152px; border:none;" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
        </div>
        `,
        showConfirmButton: false // Oculta el botón de confirmación de SweetAlert2
    });
    
    
}

function mostrarFrase() {

    //Array imagenes aleatorias
    const imagenes = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtcN78M_9_nCbFIopNGTKiIjV6zjy1k3lwuwctAn4AYA&s",
        "https://www.korosenai.es/wp-content/uploads/2020/01/all-might.jpg.webp",
        "https://www.nautiljon.com/images/perso/00/67/yagi_toshinori_13476.webp",
        "https://i.pinimg.com/550x/7a/27/5d/7a275df1518072ea253c6a2f466653be.jpg",
        "https://i.pinimg.com/236x/b4/67/01/b467015c1c4053cc819154a405a2c1a0.jpg",
        "https://i.pinimg.com/originals/56/ee/83/56ee83e6f598d9a00f0ccc954270e04e.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2AQ2bu9Pq9DcsFbWm-cmp62-Q7jFNed5Awg&s",
        "https://previews.123rf.com/images/jickaro/jickaro2302/jickaro230200316/199304276-paisaje-de-fondo-de-videojuegos-con-monta%C3%B1as-y-bosques-en-p%C3%ADxeles-de-16-bits-ubicaci%C3%B3n-de-la.jpg",
        "https://img.freepik.com/vector-gratis/fondo-videojuego-dibujado-mano_23-2150307800.jpg",
        "https://amanecemetropolis.net/wp-content/uploads/2015/07/finn-and-jake-wallpaper.jpg",
        "https://wallpapers-clan.com/wp-content/uploads/2023/12/adventure-time-finn-jake-playing-game-desktop-wallpaper-preview.jpg",
        "https://www.nasa.gov/wp-content/uploads/2023/03/main_image_star-forming_region_carina_nircam_final-5mb.jpg?w=640",
        "https://img.freepik.com/vector-gratis/fondo-videojuego-dibujado-mano_23-2150309423.jpg?w=360",
        "https://img.freepik.com/vector-premium/fondo-videojuegos-retro_57490-242.jpg",
        "https://media.vandal.net/m/5-2023/20235101754480_1.jpg",
    ]

    //Array frases motivacionales
    const frasesMotivacion = [
        "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. Si amas lo que haces, tendrás éxito.",
        "El único lugar donde el éxito viene antes que el trabajo es en el diccionario.",
        "No importa lo lento que vayas, siempre y cuando no te detengas.",
        "El fracaso es la llave al éxito; cada error nos enseña algo.",
        "Cree en ti mismo y todo será posible.",
        "La motivación nos impulsa a comenzar y el hábito nos permite continuar.",
        "El verdadero éxito viene cuando superas tus propias limitaciones.",
        "La única forma de hacer un gran trabajo es amar lo que haces.",
        "No te preocupes por los fracasos, preocúpate por las oportunidades que pierdes cuando ni siquiera lo intentas.",
        "Nunca es tarde para ser lo que podrías haber sido.",
        "El camino hacia el éxito y el camino hacia el fracaso son casi exactamente los mismos.",
        "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
        "El único límite para tus logros es tu propia mente.",
        "La vida es 10% lo que nos sucede y 90% cómo reaccionamos ante ello.",
        "La diferencia entre lo imposible y lo posible reside en la determinación de una persona.",
        "Lo que la mente puede concebir, se puede lograr.",
        "Si te caes siete veces, levántate ocho.",
        "El verdadero éxito es encontrar satisfacción en dar un paso cada día hacia un objetivo digno.",
        "No te conformes con la vida que has vivido, mejor crea la vida que deseas.",
        "El momento en el que quieres renunciar es el momento en el que debes seguir adelante con más fuerza."
    ];

    // Array de autores de las frases de motivación
    const autores = [
        "-Albert Schweitzer",
        "-Vidal Sassoon",
        "-Confucio",
        "-Randy Pausch",
        "-Walt Disney",
        "-Jim Ryun",
        "-Tommy Lasorda",
        "-Steve Jobs",
        "-Jack Canfield",
        "-George Eliot",
        "-Colin R. Davis",
        "-Robert Collier",
        "-Napoleon Hill",
        "-Charles R. Swindoll",
        "-Tommy Lasorda",
        "-Napoleon Hill",
        "-Proverbio japonés",
        "-Vince Lombardi",
        "-Unknown",
        "-Tyler Perry"
    ];

    const indiceAleatorio = Math.floor(Math.random() * frasesMotivacion.length);


    const imagenAleatoria = Math.floor(Math.random() * imagenes.length);
    
    
    const fraseAleatoria = frasesMotivacion[indiceAleatorio];
    const autorFraseAleatoria = autores[indiceAleatorio];


    Swal.fire({
        html: `
        <div style="display:flex; align-items:center;">
            <img id="imagen_aleatoria" src="${imagenes[imagenAleatoria]}" style="width:150px; height:auto; margin-right:20px;">
            <div>
            <h5 style="font-size:18px; font-weight:bold; margin:0;">${fraseAleatoria}</h5>
            <p style="font-size:14px; color:gray; margin:5px 0 0 0;">${autorFraseAleatoria}</p>
            </div>
        </div>
        `,
        showConfirmButton: false // Oculta el botón de confirmación
    });

}


