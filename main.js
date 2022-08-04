const login = document.querySelector('.login');
const enter = document.querySelector('.container');
const crossIcon = document.querySelector('.corss-icon');

login.addEventListener('click', function () {
    enter.classList.add('show-enter');
  });
  
  crossIcon.addEventListener('click', function () {
    enter.classList.remove('show-enter');
  });
  
  