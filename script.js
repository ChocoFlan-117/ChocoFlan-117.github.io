// Get the container for the stars
const starrySky = document.getElementById('starry-sky');

// Function to generate a star at a random position
function createStar(x, y) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.width = Math.random() * 2 + 'px'; // Random width for star size
    star.style.height = star.style.width; // Make it a circle
    star.style.top = `${y}px`;
    star.style.left = `${x}px`;
    star.style.animationDuration = Math.random() * 3 + 2 + 's'; // Random star animation speed
    star.style.animationDelay = Math.random() * 2 + 's'; // Random delay before animation starts
    starrySky.appendChild(star);
}

// Create multiple stars on the screen
function generateStars() {
    for (let i = 0; i < 100; i++) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        createStar(x, y);
    }
}

// Event listener to move stars with the mouse
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Add stars near the mouse position
    createStar(mouseX, mouseY);
});

// Call generateStars to create initial stars
generateStars();
