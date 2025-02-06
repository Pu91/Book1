function openCard() {
    document.querySelector(".card").classList.add("open");

    // Play click sound & start music
    document.getElementById("click-sound").play();
    setTimeout(() => {
        document.getElementById("bg-music").play();
    }, 500);

    startConfetti();
}

/* Confetti Effect */
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
let confetti = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function createConfetti() {
    for (let i = 0; i < 100; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 6 + 2,
            dx: Math.random() * 2 - 1,
            dy: Math.random() * -3,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`
        });
    }
}

function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach((c, i) => {
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
        ctx.fillStyle = c.color;
        ctx.fill();
    });
}

function updateConfetti() {
    confetti.forEach((c, i) => {
        c.y += c.dy;
        c.x += c.dx;

        if (c.y > canvas.height) confetti[i].y = 0;
    });
}

function animateConfetti() {
    drawConfetti();
    updateConfetti();
    requestAnimationFrame(animateConfetti);
}

function startConfetti() {
    createConfetti();
    animateConfetti();
}
