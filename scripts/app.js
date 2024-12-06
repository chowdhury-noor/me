
let aboutMeTabs = document.getElementsByClassName('about-me-tab');
let aboutMeContents = document.getElementsByClassName('about-me-tab-contents');

function openTab(tabname){
    for(tab of aboutMeTabs){
        tab.classList.remove('active-tab');
    }
    for(content of aboutMeContents){
        content.classList.remove('active-tab-content');
    }

    event.currentTarget.classList.add('active-tab');
    document.getElementById(tabname).classList.add('active-tab-content');
}

let sideMenu = document.getElementById('sidemenu');

function openMenu(){
    sideMenu.style.right = '0';
}

function closeMenu(){
    sideMenu.style.right = '-280px';
}

let toTop = document.querySelector('.to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 250) {
        toTop.classList.add("scroll-active");
    }else {
        toTop.classList.remove("scroll-active");
    }
})