const slider = document.getElementById('pizza-slider');
const pizzas = document.querySelectorAll('.pizza');
let currentIndex = 0;
let currentRotation = 0;

slider.addEventListener('click', () => {
    // 1. Aumentamos la rotación 90 o 180 grados a la derecha
    currentRotation += 180; 
    slider.style.transform = `rotate(${currentRotation}deg) scale(1.1)`;

    // Pequeño efecto de rebote al clickear
    setTimeout(() => {
        slider.style.transform = `rotate(${currentRotation}deg) scale(1)`;
    }, 200);

    // 2. Cambiamos de sabor (imagen)
    pizzas[currentIndex].classList.remove('active');
    
    currentIndex = (currentIndex + 1) % pizzas.length; // Ciclo infinito
    
    pizzas[currentIndex].classList.add('active');
    
    // 3. Opcional: Cambiar el fondo o el texto del nombre según la pizza
    actualizarInfoSabor(currentIndex);
});