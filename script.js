const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const form = document.getElementById('contactForm');
const modal = document.getElementById('myModal');

btn1.addEventListener('click', openModal);
btn2.addEventListener('click', openModal);
btn3.addEventListener('click', openModal);

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if (!name || !email || !phone) {
        alert('Пожалуйста, заполните все обязательные поля.');
        return;
    }

    alert('Форма успешно отправлена!');
    form.reset();
});

document.getElementById('phone').addEventListener('input', function () {
    var value = this.value.replace(/\D/g, '').slice(0, 11);
    var formattedNumber = '+7 (' + value.substring(1, 4);
    if (value.length > 4) {
        formattedNumber += ') ' + value.substring(4, 7);
    }
    if (value.length > 7) {
        formattedNumber += '-' + value.substring(7, 9);
    }
    if (value.length > 9) {
        formattedNumber += '-' + value.substring(9, 11);
    }
    this.value = formattedNumber;
});

function openModal() {
    modal.classList.add('open');
    attachModalEvents();
}

function attachModalEvents() {
    modal.addEventListener('click', handleOutside);
    modal.querySelector('.close').addEventListener('click', closeModal);
}

function handleOutside(event) {
    const isClickOutside = !!event.target.closest('.modal-content');
    if (!isClickOutside) {
        closeModal();
    }
}

function closeModal() {
    modal.classList.remove('open');
    detachModalEvents();
}

function detachModalEvents() {
    modal.removeEventListener('click', handleOutside);
    modal.querySelector('.close').removeEventListener('click', closeModal);
}

