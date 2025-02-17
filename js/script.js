// Toggle berfungsi Menambahkan atau menghilangkkan kelas aktif pada element html//
const navbarNav = document.querySelector('.navbar-nav');
//Ketika hamburger menu di klik//
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// Klik di luar sidebar untuk menghilangkan navbar
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});
