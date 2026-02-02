

let wakeLock = null;

// Fonction pour l'anti-veille
async function requestWakeLock() {
    try {
        if ('wakeLock' in navigator) {
            wakeLock = await navigator.wakeLock.request('screen');
        }
    } catch (err) { console.log("WakeLock non actif"); }
}

function generer() {
    if (!wakeLock) requestWakeLock();

    // On pioche dans DATA
    const pos = DATA.positions[Math.floor(Math.random() * DATA.positions.length)];
    const dir = DATA.directions[Math.floor(Math.random() * DATA.directions.length)];
    
    const shuffled = [...DATA.techniques].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);

    // Mise à jour de l'interface
    document.getElementById('position').innerText = pos;
    document.getElementById('direction').innerText = `(${dir})`;
    document.getElementById('techniques').innerHTML = 
        `1. ${selected[0]}<br>2. ${selected[1]}<br>3. ${selected[2]}`;
}

// On lie l'événement au bouton
document.getElementById('btnNext').addEventListener('click', generer);
