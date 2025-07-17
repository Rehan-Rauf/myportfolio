// Dark Mode Toggle
const darkToggle = document.getElementById('darkToggle');
darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

document.body.classList.add('light-mode');

const form = document.getElementById('contactForm');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Thanks for your message! We'll get back to you.");
});
