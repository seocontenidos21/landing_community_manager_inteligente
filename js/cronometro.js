document.addEventListener('DOMContentLoaded', () => {
    const domHoras = document.getElementById('horas');
    const domMinutos = document.getElementById('minutos');
    const domSegundos = document.getElementById('segundos');
    const domCrono = document.getElementById('cronometro');

    let prevH = null, prevM = null, prevS = null;
    function flashIfChanged(el, value, prev) {
        if (prev === null) return; // skip on first update
        if (value !== prev) {
            el.classList.add('animate-pulse', 'scale-105');
            setTimeout(() => el.classList.remove('animate-pulse'), 300);
            setTimeout(() => el.classList.remove('scale-105'), 200);
        }
    }

    function updateCountdownToMidnight() {
        const now = new Date();
        // target: next midnight (start of next day)
        const target = new Date(now);
        target.setHours(24, 0, 0, 0);
        let diff = target - now;
        if (diff < 0) diff = 0;

        const totalSeconds = Math.floor(diff / 1000);
        const hrs = Math.floor(totalSeconds / 3600);
        const mins = Math.floor((totalSeconds % 3600) / 60);
        const secs = totalSeconds % 60;

        const hStr = String(hrs).padStart(2, '0');
        const mStr = String(mins).padStart(2, '0');
        const sStr = String(secs).padStart(2, '0');

        flashIfChanged(domHoras, hStr, prevH);
        flashIfChanged(domMinutos, mStr, prevM);
        flashIfChanged(domSegundos, sStr, prevS);

        domHoras.textContent = hStr;
        domMinutos.textContent = mStr;
        domSegundos.textContent = sStr;

        if (domCrono) {
            domCrono.setAttribute('aria-label', `Oferta limitada 24 horas. Tiempo restante ${hStr} horas ${mStr} minutos y ${sStr} segundos.`);
        }

        prevH = hStr; prevM = mStr; prevS = sStr;
    }

    // initial update
    updateCountdownToMidnight();
    // update every second
    setInterval(updateCountdownToMidnight, 1000);
});