const menuIcon = document.getElementById("menu-icon"); 
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("close-btn");
const links = document.querySelectorAll("#sidebar a"); // Mengambil semua link di sidebar


// Tampilkan sidebar saat ikon hamburger diklik
menuIcon.addEventListener("click", (e) => {
    e.stopPropagation(); // Agar ketika klik di menuIcon tidak dianggap klik di luar sidebar
    sidebar.style.right = "0";
});

// Sembunyikan sidebar saat tombol close diklik
closeBtn.addEventListener("click", () => {
    sidebar.style.right = "-250px";
});

// Tutup sidebar jika klik di luar area menu
document.addEventListener("click", (e) => {
    if (!sidebar.contains(e.target) && e.target !== menuIcon) {
        sidebar.style.right = "-250px";
    }
});

// Tutup sidebar jika salah satu link di klik
links.forEach(link => {
    link.addEventListener("click", () => {
        sidebar.style.right = "-250px";
    });
});

