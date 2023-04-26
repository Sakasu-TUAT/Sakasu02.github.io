function showMessage() {
    alert('Hello World!');
}

const menuBtn = document.querySelector('.menu-btn');
const menuItems = document.querySelector('.menu-items');

menuBtn.addEventListener('click', () => {
  menuItems.classList.toggle('open');
  menuBtn.classList.toggle('open');
});

