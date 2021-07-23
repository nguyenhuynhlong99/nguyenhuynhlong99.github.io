
const menuIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('.nav-menu');


document.addEventListener('click', function(e){   
    if (menuIcon.contains(e.target)){
      navMenu.style.display = 'flex';
    } else{
        navMenu.style.display = 'none';
    }
  });

