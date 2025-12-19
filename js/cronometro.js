document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos TODOS los elementos por su CLASE en lugar de ID
    const elsHoras = document.querySelectorAll('.crono-horas');
    const elsMinutos = document.querySelectorAll('.crono-minutos');
    const elsSegundos = document.querySelectorAll('.crono-segundos');
    
    // Contenedores para accesibilidad (aria-label)
    const elsContenedores = document.querySelectorAll('.crono-contenedor');

    let prevH = null, prevM = null, prevS = null;

    function flashIfChanged(elements, value, prev) {
        if (prev === null) return; 
        if (value !== prev) {
            elements.forEach(el => {
                el.classList.add('animate-pulse', 'scale-105');
                setTimeout(() => el.classList.remove('animate-pulse'), 300);
                setTimeout(() => el.classList.remove('scale-105'), 200);
            });
        }
    }

    function updateCountdownToMidnight() {
        const now = new Date();
        const target = new Date(now);
        target.setHours(24, 0, 0, 0); // Próxima medianoche
        
        let diff = target - now;
        if (diff < 0) diff = 0;

        const totalSeconds = Math.floor(diff / 1000);
        const hrs = Math.floor(totalSeconds / 3600);
        const mins = Math.floor((totalSeconds % 3600) / 60);
        const secs = totalSeconds % 60;

        const hStr = String(hrs).padStart(2, '0');
        const mStr = String(mins).padStart(2, '0');
        const sStr = String(secs).padStart(2, '0');

        // Animación visual
        flashIfChanged(elsHoras, hStr, prevH);
        flashIfChanged(elsMinutos, mStr, prevM);
        flashIfChanged(elsSegundos, sStr, prevS);

        // Actualizar texto en TODOS los contadores
        elsHoras.forEach(el => el.textContent = hStr);
        elsMinutos.forEach(el => el.textContent = mStr);
        elsSegundos.forEach(el => el.textContent = sStr);

        // Actualizar accesibilidad
        elsContenedores.forEach(el => {
            el.setAttribute('aria-label', `Oferta limitada 24 horas. Tiempo restante ${hStr} horas ${mStr} minutos y ${sStr} segundos.`);
        });

        prevH = hStr; prevM = mStr; prevS = sStr;
    }

    updateCountdownToMidnight();
    setInterval(updateCountdownToMidnight, 1000);
});