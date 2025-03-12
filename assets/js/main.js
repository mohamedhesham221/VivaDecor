const header = document.querySelector('header');
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', () => {
  header.classList.toggle('expand-header')
});
