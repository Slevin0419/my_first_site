// Обработчик события click на заголовок H1
document.querySelector('h1').addEventListener('click', function() {
    alert('Вы кликнули на заголовок - так держать!');
});

// Обработчик кнопки для смены тем на второй семестр
document.getElementById('second-semester-btn').addEventListener('click', function() {
    const topics = [
        'Базовое бэкенд-приложение',
        'HTTP-запросы',
        'JSON и работа с ним',
        'HTTP-ответы',
        'Проектирование API',
        'Роутинг и его настройка',
        'NoSQL базы данных',
        'Обеспечение авторизации и доступа пользователей',
        'Работа сторонних сервисов уведомления и авторизации',
        'Основы ReactJS',
        'Работа с компонентами динамической DOM',
        'Использование хуков в React',
        'Основы микросервисной архитектуры',
        'Разработка классических модулей веб-приложений',
        'Разработка классических модулей веб-приложений',
    ];

    const tableRows = document.querySelectorAll('.table2 tr:not(.table_header)');
    tableRows.forEach((row, index) => {
        if (index < topics.length) {
            row.children[1].textContent = topics[index];
        }
    });
});


console.log('Скрипты загружены без ошибок.');
