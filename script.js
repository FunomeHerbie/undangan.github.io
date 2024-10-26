document.querySelector('.container-mobile').addEventListener('wheel', (event) => {
    event.preventDefault();
    document.querySelector('.container-mobile').scrollBy({
        top: event.deltaY,
        behavior: 'smooth'
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".session"); // Menangkap setiap elemen dengan class 'session'
    const navIcons = document.querySelectorAll(".icon-menu"); // Menangkap setiap elemen ikon navigasi

    // Fungsi untuk mengatur kelas 'active' pada ikon navigasi
    function setActiveIcon(index) {
        navIcons.forEach(icon => icon.classList.remove("active")); // Menghapus kelas 'active' dari semua ikon
        if (navIcons[index]) {
            navIcons[index].classList.add("active"); // Menambahkan kelas 'active' pada ikon yang sesuai
        }
    }

    // Menggunakan Intersection Observer untuk melacak ketika sesi muncul di viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) { // Memeriksa apakah sesi berada di dalam viewport
                const activeIndex = Array.from(sections).indexOf(entry.target); // Mendapatkan indeks sesi yang aktif
                setActiveIcon(activeIndex); // Mengatur ikon aktif berdasarkan indeks sesi
            }
        });
    }, {
        threshold: 0.5 // Mengatur threshold ke 50% agar sesi aktif saat setidaknya 50% dari elemen terlihat
    });

    // Mengamati setiap sesi
    sections.forEach(section => observer.observe(section));
});

document.addEventListener("DOMContentLoaded", function() {
    const session3 = document.getElementById("session-3");
    if (session3) {
        session3.scrollIntoView({ behavior: "smooth", block: "start" });
    }
});


function initMap() {
        // Menggunakan titik koordinat -9.731999 (lat) dan 124.2667 (lng)
        var location = { lat: -9.731999, lng: 124.2667 };

        // Inisialisasi peta
        var map = new google.maps.Map(document.getElementById("map"), {
            center: location,
            zoom: 12
        });

        // Menambahkan marker pada lokasi
        var marker = new google.maps.Marker({
            position: location,
            map: map
        });
    }


    
;


const images = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close-btn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

function openLightbox(index) {
    lightbox.style.display = 'flex';
    lightboxImg.src = images[index].src;
    currentIndex = index;
}

function closeLightbox() {
    lightbox.style.display = 'none';
}

function prevImage() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    lightboxImg.src = images[currentIndex].src;
}

function nextImage() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    lightboxImg.src = images[currentIndex].src;
}

images.forEach((img, index) => {
    img.addEventListener('click', () => openLightbox(index));
});

closeBtn.addEventListener('click', closeLightbox);

prevBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // 
    prevImage();
});

nextBtn.addEventListener('click', (e) => {
    e.stopPropagation(); 
    nextImage();
});


lightbox.addEventListener('click', (e) => {
    if (e.target === lightboxImg) return; 
    closeLightbox();
});