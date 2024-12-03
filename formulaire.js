document.getElementById('formulaire').addEventListener('submit', async function (e) {
    e.preventDefault();

    // Récupérer les valeurs du formulaire
    const pseudoDiscord = document.getElementById('forpseudodiscord').value;
    const pseudoRoblox = document.getElementById('forpseudoroblox').value;
    const idDiscord = document.getElementById('foriddiscord').value;
    const prénom = document.getElementById('forprénomhrp').value;
    const âge = document.getElementById('foragehrp').value;
    const pourquoi = document.getElementById('forpourquoivousmo').value;
    const motivation = document.getElementById('formotivationmo').value;
    const zonesSafe = document.getElementById('forzonesaferg').value;
    const winRP = document.getElementById('forwinrg').value;
    const métagaming = document.getElementById('fortmétagamingrg').value;
    
    // Récupérer la valeur du select
    const disponible = document.getElementById('foroui_non').value;

    // Préparer le message au format Discord Embed
    const webhookURL = 'https://discord.com/api/webhooks/1313511161844465664/XpBVFeiQV1q4xh0Ch6bEsys5CjnMOSFOAQ6oOZUc6eBrCj33SFhyO0pKrEgnzLNeWURB';

    const message = {
        embeds: [
            {
                title: "Une nouvelle demande à étais faites",
                color: 3447003,
                fields: [
                    { name: "Pseudo Discord", value: pseudoDiscord, inline: true },
                    { name: "Pseudo Roblox", value: pseudoRoblox, inline: true },
                    { name: "ID Discord", value: idDiscord },
                    { name: "Prénom", value: prénom, inline: true },
                    { name: "Âge", value: âge, inline: true },
                    { name: "Pourquoi vous ?", value: pourquoi },
                    { name: "Motivation", value: motivation },
                    { name: "Zones Safes", value: zonesSafe, inline: true },
                    { name: "WIN RP", value: winRP, inline: true },
                    { name: "Métagaming", value: métagaming },
                    { name: "Disponible pour un entretien", value: disponible, inline: true }
                ]
            }
        ]
    };

    try {
        const response = await fetch(webhookURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(message)
        });

        if (response.ok) {
            alert('Formulaire envoyé avec succès a la driection ! Vous aurez une réponse dans le salons discord');            
            setTimeout(() => {
                window.location.href = "/index.html"; // Redirection après validation
            }, 2000);
        } else {
            alert("Erreur lors de l'envoi !");
        }
    } catch (err) {
        alert("Erreur réseau !");
    }
});