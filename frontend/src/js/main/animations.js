const header = document.querySelector('#header');
const profile = document.querySelector('#wrapper');
const images = document.querySelectorAll('.shadow-wrapper > img');

window.addEventListener("scroll", () => {
    const scroll = window.scrollY

    const smallScale = Math.max(0.7, 1 - scroll * 0.001);
    const bigScale = Math.min(1.0, 0.7 + scroll * 0.001);

    header.style.transform = `scale(${smallScale})`;
    profile.style.transform = `scale(${smallScale})`;
    images.forEach (img => img.style.transform = `scale(${bigScale})`);
    
})

const pause = document.querySelectorAll('.pause');

window.addEventListener('mousedown', (e) => {
    if (e.target.classList.contains('pause')) {
        e.target.src = 'ui/pause-press.png';
    };
});

window.addEventListener('mouseup', (e) => {
    if (e.target.classList.contains('pause')) {
        e.target.src = 'ui/pause.png';
    }
});

const secPause = document.querySelectorAll('.pause-sec')

window.addEventListener('load', () => {
    secPause.forEach(btn => btn.inert = true);
})

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('item-img')) {
        const closestBtn = e.target.parentElement.querySelector('.pause-sec')
        closestBtn.inert = true? false : true;
        closestBtn.classList.toggle('scale-0');
    }
});