// Оголошуємо змінну для даних форми
const formData = { email: '', message: '' };
const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

// Функція для збереження даних у локальне сховище
form.addEventListener('input', (e) => {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});


window.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    emailInput.value = parsedData.email || '';
    messageInput.value = parsedData.message || '';
    formData.email = parsedData.email || '';
    formData.message = parsedData.message || '';
  }
});


form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Перевірка, чи всі поля заповнені
  if (formData.email === '' || formData.message === '') {
    alert('Please fill out all fields');
    return;
  }
  
  // Виводимо об'єкт formData в консоль
  console.log('Form submitted with data:', formData);
  
  // Очищуємо локальне сховище та форму
  localStorage.removeItem(STORAGE_KEY);
  e.target.reset();
  
  // Скидаємо значення formData
  formData.email = '';
  formData.message = '';
});
