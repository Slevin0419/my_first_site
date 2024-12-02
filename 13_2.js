// Обработчик события mouseover для фотографии студента
document.getElementById('student-photo').addEventListener('mouseover', function() {
    this.style.width = '220px'; // увеличиваем ширину
    this.style.height = '220px'; // увеличиваем высоту
});

// Обработчик события click для замены фотографии
document.getElementById('student-photo').addEventListener('click', function() {
    this.src = 'teacher.jpg'; // замените на путь к фотографии любимого преподавателя
});

// Обработчик события dblclick для фотографии студента
document.getElementById('student-photo').addEventListener('dblclick', function() {
    alert('Не налегай, у меня не так много любимых преподавателей');
});