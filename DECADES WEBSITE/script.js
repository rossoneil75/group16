// Get all modal buttons and modals
const openModalBtns = document.querySelectorAll('.open-modal');
const closeModalBtns = document.querySelectorAll('.close');
const modals = document.querySelectorAll('.modal');

// Open a modal and prevent page scrolling
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

// Close a modal and restore page scrolling
function closeModal(modal) {
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

// Open the correct modal when a button is clicked
openModalBtns.forEach(button => {
    button.addEventListener('click', function () {
        const modalId = this.getAttribute('data-modal');
        openModal(modalId);
    });
});

// Close modals when a close button is clicked
closeModalBtns.forEach(button => {
    button.addEventListener('click', function () {
        closeModal(this.closest('.modal'));
    });
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (e) => {
    modals.forEach(modal => {
        if (e.target === modal) {
            closeModal(modal);
        }
    });
});

// Close modal when the Escape key is pressed
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        modals.forEach(modal => closeModal(modal));
    }
});

// Initialize Swiper.js for each swiper instance in the modals
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.swiper').forEach(swiperEl => {
        new Swiper(swiperEl, {
            loop: true,
            navigation: {
                nextEl: swiperEl.querySelector('.swiper-button-next'),
                prevEl: swiperEl.querySelector('.swiper-button-prev'),
            },
            pagination: {
                el: swiperEl.querySelector('.swiper-pagination'),
                clickable: true,
            },
        });
    });
});
