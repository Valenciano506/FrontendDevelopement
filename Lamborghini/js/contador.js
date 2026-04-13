// Selecciona el elemento del HTML con id "contador"
// Aquí se mostrará el tiempo en pantalla
const timeDisplay = document.getElementById("contador");

// Variable que guarda el tiempo total en segundos (empieza en 0)
let totalSeconds = 0;

// Función que se ejecuta cada segundo para actualizar el contador
function updateTime() {
    // Aumenta el contador en 1 segundo
    totalSeconds++;

    // Calcula las horas (dividiendo entre 3600 segundos)
    const hours = Math.floor(totalSeconds / 3600);

    // Calcula los minutos (resto de horas dividido entre 60)
    const minutes = Math.floor((totalSeconds % 3600) / 60);

    // Calcula los segundos restantes
    const seconds = totalSeconds % 60;
  
    // Formatea el tiempo en formato HH:MM:SS
    // padStart(2, '0') asegura que siempre haya 2 dígitos (ej: 05)
    const formattedTime = 
        String(hours).padStart(2, '0') + ":" + 
        String(minutes).padStart(2, '0') + ":" +
        String(seconds).padStart(2, '0');
       
    // Muestra el tiempo formateado en el HTML
    timeDisplay.innerText = formattedTime;

    // Cada 600 segundos (10 minutos), ejecuta una función de sonido
    if (totalSeconds % 600 === 0) {
        playSound(); // Llama a la función que reproduce un sonido
    }
}

// Ejecuta la función updateTime cada 1000 ms (1 segundo)
setInterval(updateTime, 1000);