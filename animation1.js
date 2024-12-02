document.getElementById('toggleButton').addEventListener('click', function() {
    const lectureTable = document.getElementById('lectureTable');
    
    if (lectureTable.classList.contains('table1')) {
        lectureTable.classList.remove('table1');
        // Используем setTimeout для добавления класса show после изменения display
        setTimeout(() => {
            lectureTable.classList.add('show');
        }, 10); // Небольшая задержка для активации анимации
        this.textContent = 'Скрыть лекции';
    } else {
        lectureTable.classList.remove('show');
        // Ждем завершения анимации перед изменением display
        setTimeout(() => {
            lectureTable.classList.add('table1');
        }, 500); // Должно соответствовать времени анимации
        this.textContent = 'Показать лекции';
    }
});
