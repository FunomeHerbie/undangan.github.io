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