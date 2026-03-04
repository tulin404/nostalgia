const header = document.querySelector('#header');
const profile = document.querySelector('#profile-wrapper');
const images = document.querySelectorAll('.shadow-wrapper > img');

window.addEventListener("scroll", () => {
    const scroll = window.scrollY

    const smallScale = Math.max(0.7, 1 - scroll * 0.001);

    header.style.transform = `scale(${smallScale})`;
    profile.style.transform = `scale(${smallScale})`;
})

const pause = document.querySelectorAll('.pause');

window.addEventListener('mousedown', (e) => {
    if (e.target.classList.contains('pause')) {
        e.target.src = 'ui/pause-press.png';
    } else if (e.target.classList.contains('x')) {
        e.target.src = 'ui/x-press.png';
    } else if (e.target.classList.contains('check')) {
        e.target.src = 'ui/check-press.png';
    };
});

window.addEventListener('mouseup', (e) => {
    if (e.target.classList.contains('pause')) {
        e.target.src = 'ui/pause.png';
    } else if (e.target.classList.contains('x')) {
        e.target.src = 'ui/x.png';
    } else if (e.target.classList.contains('check')) {
        e.target.src = 'ui/check.png';
    };
});



const itemPause = document.querySelectorAll('.pause-item');
const itemRemove = document.querySelectorAll('.remove-item');
const profilePanel = document.getElementById('profile-edit-panel');
const itemEditPanel = document.getElementById('item-edit-panel');
const removeConfirm = document.getElementById('confirm-remove-wrapper');
const blackBack = document.getElementById('back-black');

window.addEventListener('load', () => {
    itemPause.forEach(pause => pause.inert = true);
    itemRemove.forEach(remove => remove.inert = true);
    profilePanel.inert = true;
    itemEditPanel.inert = true;
    removeConfirm.inert = true;
});

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('pause-item')) {
        itemEditPanel.inert = false;
        itemEditPanel.classList.remove('translate-y-[100dvh]');
        blackBack.classList.remove('hidden');
        document.documentElement.classList.add('overflow-y-hidden');
    } else if (e.target.id === 'close-item-edit') {
        itemEditPanel.inert = true;
        itemEditPanel.classList.add('translate-y-[100dvh]');
        blackBack.classList.add('hidden');
        document.documentElement.classList.remove('overflow-y-hidden')
    } else if (e.target.classList.contains('remove-item')) {
        removeConfirm.inert = false;
        removeConfirm.classList.remove('translate-y-[100dvh]');
        blackBack.classList.remove('hidden');
        document.documentElement.classList.add('overflow-y-hidden');
    } else if (e.target.classList.contains('item-img')) {
        itemPause.forEach(pause => pause.classList.add('scale-0'));
        itemRemove.forEach(remove => remove.classList.add('scale-0'));
        const closestPauseBtn = e.target.parentElement.querySelector('.pause-item');
        const closestRemoveBtn = e.target.parentElement.querySelector('.remove-item');
        closestPauseBtn.inert = false;
        closestPauseBtn.classList.toggle('scale-0');
        closestRemoveBtn.inert = false;
        closestRemoveBtn.classList.toggle('scale-0');
    } else {
        itemPause.forEach(pause => pause.classList.add('scale-0'));
        itemRemove.forEach(remove => remove.classList.add('scale-0'));
        itemPause.forEach(pause => pause.inert = true);
        itemRemove.forEach(remove => remove.inert = true);
    };
});

// ONLOAD RENDERED ITEMS 

const xProfile = document.getElementById('close-profile-edit');

xProfile.addEventListener('click', () => {
    profilePanel.classList.add('translate-y-[100dvh]');
    profilePanel.inert = true;
    blackBack.classList.add('hidden');
    document.documentElement.classList.remove('overflow-y-hidden');
});

const pauseProfile = document.getElementById('pause-profile');

pauseProfile.addEventListener('click', () => {
    profilePanel.classList.remove('translate-y-[100dvh]');
    profilePanel.inert = false;
    blackBack.classList.remove('hidden');
    document.documentElement.classList.add('overflow-y-hidden');

});

const closeItemEdit = document.getElementById('close-item-edit');

closeItemEdit.addEventListener('click', () => {
    removeConfirm.inert = true;
    removeConfirm.classList.add('translate-y-[100dvh]');
    blackBack.classList.add('hidden');
    document.documentElement.cldy.classList.remove('overflow-y-hidden');
});