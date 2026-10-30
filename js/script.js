AOS.init({
    duration: 1500,
    // once: true,
});

// Script Toggle Hamburger Menu Mobile
const menuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

// Buka / Tutup menu saat tombol hamburger diklik
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Tutup menu otomatis setelah salah satu link diklik
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});