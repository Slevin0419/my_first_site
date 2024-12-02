const description = document.querySelector('.description');

// Хранит текущее состояние цвета фона
let isActive = false;

description.addEventListener('click', function() {
    if (isActive) {
        // Если активен, меняем цвет на изначальный
        description.style.backgroundColor = '';
    } else {
        // Если не активен, меняем цвет на желтый
        description.style.backgroundColor = 'yellow';
    }
    // Смена состояния
    isActive = !isActive;
});