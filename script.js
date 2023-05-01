const html = document.querySelector('html');
const btnDarkMode = document.querySelector('#btn-dark-mode');
const darkMode = localStorage.getItem("dark-mode");


if (darkMode === "darkMode") {
  html.classList.add('dark-mode');
  btnDarkMode.classList.remove('fa-moon');
  btnDarkMode.classList.add('fa-sun');
} else {
  html.classList.remove('dark-mode');
  btnDarkMode.classList.add('fa-moon');
}


btnDarkMode.addEventListener('click', function () {
  html.classList.toggle('dark-mode');

  if (html.classList.contains('dark-mode')) {
    localStorage.setItem("dark-mode", "darkMode");
    btnDarkMode.classList.remove('fa-moon');
    btnDarkMode.classList.add('fa-sun');
  } else {
    localStorage.setItem("dark-mode", "lightMode");
    btnDarkMode.classList.add('fa-moon');
    btnDarkMode.classList.remove('fa-sun');
  }
});