// Get all modal buttons
const openModalBtns = document.querySelectorAll('.open-modal');
const closeModalBtns = document.querySelectorAll('.close');
const modals = document.querySelectorAll('.modal');

// Open correct modal
openModalBtns.forEach(button => {
    button.addEventListener('click', function () {
        const modalId = this.getAttribute('data-modal');
        document.getElementById(modalId).style.display = 'flex';
    });
});

// Close modals
closeModalBtns.forEach(button => {
    button.addEventListener('click', function () {
        this.closest('.modal').style.display = 'none';
    });
});


window.addEventListener('click', (e) => {
    modals.forEach(modal => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.swiper').forEach(swiperEl => {
        new Swiper(swiperEl, {
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },


            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    });
});

const music = document.getElementById('backgroundMusic');
const titlebar = document.querySelector('.titlebar');
const notification = document.querySelector('.notification');

titlebar.addEventListener('click', () => {
    if (music.paused) {
        music.play().catch(error => console.error('Playback failed:', error));
    } else {
        music.pause();
    }

    if (notification) {
        notification.style.opacity = "0";
        setTimeout(() => {
            notification.remove();
        }, 300);
    }
});
