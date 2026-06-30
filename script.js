function celebrate() {
    // Hide the main card
    document.getElementById('proposalCard').classList.add('hidden');
    
    // Show the success screen with the bunny
    const successScreen = document.getElementById('successScreen');
    successScreen.classList.remove('hidden');

    // Burst flowers!
    createFlowerShower();
}

function createFlowerShower() {
    const container = document.getElementById('flowerContainer');
    const flowers = ['🌸', '🌹', '🌷', '🌺', '🌼', '✨'];
    const flowerCount = 60; // Total number of bursting flowers

    for (let i = 0; i < flowerCount; i++) {
        const flower = document.createElement('div');
        flower.classList.add('flower-pop');
        flower.innerText = flowers[Math.floor(Math.random() * flowers.length)];

        // Set starting position at the center of the viewport
        flower.style.left = '50%';
        flower.style.top = '50%';

        // Generate random explosion angles and distances using CSS custom variables
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * 300 + 100; // Distance traveled
        const moveX = Math.cos(angle) * radius + 'px';
        const moveY = Math.sin(angle) * radius + 'px';
        const rotation = Math.random() * 360 + 'deg';

        flower.style.setProperty('--mx', moveX);
        flower.style.setProperty('--my', moveY);
        flower.style.setProperty('--rt', rotation);

        // Randomize sizes slightly
        flower.style.fontSize = Math.random() * 1.5 + 1.5 + 'rem';

        container.appendChild(flower);

        // Clean up the DOM after animation completes
        setTimeout(() => {
            flower.remove();
        }, 1500);
    }
}

// Fun feature: Makes the 'No' button run away when hovered over
function moveNoButton() {
    const noBtn = document.getElementById('noBtn');
    
    // Calculate random position within viewport boundaries
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
}