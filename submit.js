// 1. Создание объекта formData
const formData = {
    name: '',
    email: '',
    phone: '',
    date: '',
    comment: '',
    
    // 2. Метод для вывода данных в консоль
    printData: function() {
        console.log(`Имя: ${this.name}`);
        console.log(`E-mail: ${this.email}`);
        console.log(`Телефон: ${this.phone}`);
        console.log(`Дата: ${this.date}`);
        console.log(`Комментарий: ${this.comment}`);
    }
};

// 3. Функция для сбора данных из формы
function submitForm(event) {
    event.preventDefault(); // предотвращаем стандартное поведение формы

    // Получаем значения полей формы
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const date = document.getElementById('date').value;
    const comment = document.getElementById('comments').value.trim();

    // Проводим валидацию
    if (!name || !email || !comment) {
        alert('Пожалуйста, заполните все обязательные поля!');
        return;
    }

    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/; // простое регулярное выражение для e-mail
    if (!emailPattern.test(email)) {
        alert('Пожалуйста, введите корректный e-mail!');
        return;
    }

    // Если все проверки пройдены, заполняем объект formData
    formData.name = name;
    formData.email = email;
    formData.phone = phone;
    formData.date = date; // дата может быть пустой
    formData.comment = comment;

    // Выводим данные в консоль
    formData.printData();
}

document.getElementById('contactForm').addEventListener('submit', submitForm);
