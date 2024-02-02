// Animer les articles au survol
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.classList.add('animate__pulse'); // Ajoute la classe d'animation au survol
    });

    card.addEventListener('mouseout', () => {
        card.classList.remove('animate__pulse'); // Supprime la classe d'animation à la fin du survol
    });
});

// Animer les logos LinkedIn au survol
document.querySelectorAll('.linkedin-logo').forEach(logo => {
    logo.addEventListener('mouseover', () => {
        logo.style.transform = 'rotate(360deg)'; // Fait tourner le logo de 360 degrés au survol
    });

    logo.addEventListener('mouseout', () => {
        logo.style.transform = 'rotate(0deg)'; // Réinitialise la rotation à 0 degrés à la fin du survol
    });
});

