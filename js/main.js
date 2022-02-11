function toggleMenu() {
  const menu = document.querySelector('.menu');
  const navigation = document.querySelector('.navigation');

  menu.classList.toggle('active');
  navigation.classList.toggle('active');
}

function changeActive() {
  const x = document.querySelector('.nav-link');
  x.classList.toggle('activate');
}
