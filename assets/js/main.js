/*MENU*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*NO MENU*/
const navLink = document.querySelectorAll('.link_nav')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each link_nav, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*ACTIVE LINK*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.ul_nav a[href*=' + sectionId + ']'); // Asegúrate de que el selector sea correcto

        if (sectionsClass) { // Verifica si el elemento existe
            if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
                sectionsClass.classList.add('active-link');
            } else {
                sectionsClass.classList.remove('active-link');
            }
        }
    });
};
window.addEventListener('scroll', scrollActive)

/*ANIMACION SCROLL*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.inicio_data, .sobremi_img, .herramientas_subtitle, .herramientas_texto',{}); 
sr.reveal('.inicio_img, .sobremi_subtitle, .sobremi_texto, .herramientas_img',{delay: 400}); 
sr.reveal('.herramientas_data, .proyectos_img, .contact_input',{interval: 200}); 

/*PAUSAR REANUDAR VIDEO*/
document.querySelectorAll('.video_wrapper').forEach(wrapper => {
    const video = wrapper.querySelector('.proyectos_video');
    const button = wrapper.querySelector('.video_control');
    const icon = button.querySelector('i');

    button.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            icon.classList.remove('bx-play');
            icon.classList.add('bx-pause');
        } else {
            video.pause();
            icon.classList.remove('bx-pause');
            icon.classList.add('bx-play');
        }
    });
});
