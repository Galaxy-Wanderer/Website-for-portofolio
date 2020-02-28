// Navigation
const navigation = document.querySelector('.links');
const burger = document.querySelector('.burger');
const links = navigation.querySelectorAll('.links a');

burger.addEventListener('click', () => {
    navigation.classList.toggle('links-active');
    burger.classList.toggle('toggle');
});

links.forEach(index => {
    index.addEventListener('click', () => {
        navigation.classList.toggle('links-active');
        burger.classList.toggle('toggle');
    });
});

// Form prevents default and clears the fields
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    document.querySelector('input').value = '';
});