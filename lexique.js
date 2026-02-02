
function chargerLexique() {
    const container = document.getElementById('lexique-container');
    
    for (const [categorie, liste] of Object.entries(DATA)) {
        const titre = document.createElement('h2');
        titre.innerText = categorie.toUpperCase();
        container.appendChild(titre);

        const ul = document.createElement('ul');
        ul.className = "lexique-list";
        
        liste.forEach(item => {
            const li = document.createElement('li');
            // On affiche le Japonais en gras et le Français en petit à côté
            li.innerHTML = `<strong>${item.jp}</strong> <span class="traduction">: ${item.fr}</span>`;
            ul.appendChild(li);
        });

        container.appendChild(ul);
    }
}
window.onload = chargerLexique;
