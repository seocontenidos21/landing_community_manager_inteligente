document.addEventListener('DOMContentLoaded', () => {
    
    // Control del Navbar al hacer scroll
    const navbar = document.getElementById('main-nav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            navbar.classList.add('shadow-lg', 'bg-white/95', 'backdrop-blur-md');
            navbar.classList.remove('bg-white', 'py-4');
            navbar.classList.add('py-4');
        } else {
            navbar.classList.remove('shadow-lg', 'bg-white/95', 'backdrop-blur-md', 'py-4');
            navbar.classList.add('bg-white', 'py-4');
        }
    });

    // Manejo suave de los detalles del temario (Acordeón)
    const details = document.querySelectorAll("details");
    details.forEach((targetDetail) => {
        targetDetail.addEventListener("click", () => {
            // Opcional: Si quieres que se cierre uno al abrir otro, descomenta esto:
            // details.forEach((d) => {
            //     if (d !== targetDetail) {
            //         d.removeAttribute("open");
            //     }
            // });
        });
    });
});