const html = document.querySelector('html');
const btnDarkMode = document.querySelector('#btn-dark-mode');
const darkMode = localStorage.getItem("darkMode");


if (darkMode === "true") {
  html.classList.add('dark-mode');
  btnDarkMode.classList.remove('fa-moon');
  btnDarkMode.classList.add('fa-sun');
} else {
  html.classList.remove('dark-mode');
  btnDarkMode.classList.add('fa-moon');
}


btnDarkMode.addEventListener('click', function(){
    html.classList.toggle('dark-mode');
  
    if (html.classList.contains('dark-mode')) {
      localStorage.setItem("darkMode", "true");
      btnDarkMode.classList.remove('fa-moon');
      btnDarkMode.classList.add('fa-sun');
    } else {
      localStorage.setItem("darkMode", "false");
      btnDarkMode.classList.add('fa-moon');
      btnDarkMode.classList.remove('fa-sun');
    }
  });