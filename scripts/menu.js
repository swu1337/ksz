window.onload = function() {
    let menu = document.querySelector('.menu');
    let nav = document.querySelector('nav');
    let icn = document.querySelector('.menu-icn > i');
    
    menu.addEventListener('click', function(){
        if(nav.classList.contains('open')) {
            nav.classList.remove('open');
            icn.classList.remove('fa-times');
            icn.classList.add('fa-bars');
        } else {
            nav.classList.add('open');
            icn.classList.remove('fa-bars');
            icn.classList.add('fa-times');
        }
    });    
}