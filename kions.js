

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

    // 1. Choix de la position et direction
    const posObj = DATA.positions[Math.floor(Math.random() * DATA.positions.length)];
    const dirObj = DATA.directions[Math.floor(Math.random() * DATA.directions.length)];
    
    // 2. Décider si on fait 3 ou 4 techniques
    // Math.random() < 0.5 donne 50% de chance d'avoir 3 ou 4.
    const nbTechniques = Math.random() < 0.5 ? 3 : 4;

    // 3. Mélanger et piocher le bon nombre
    const shuffled = [...DATA.techniques].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, nbTechniques)

    // Mise à jour de l'interface
    document.getElementById('position').innerText = pos;
    document.getElementById('direction').innerText = `(${dir})`
    // 5. Génération dynamique de la liste de techniques
    let techniquesHTML = "";
    selected.forEach((item, index) => {
        techniquesHTML += `${index + 1}. ${item}<br>`;
    });
    
    document.getElementById('techniques').innerHTML = techniquesHTML;
}

// On lie l'événement au bouton
document.getElementById('btnNext').addEventListener('click', generer);
