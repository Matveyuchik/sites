for (let i = 0; i < 1000; i++) {
    setTimeout(() => {
        const confetti = document.createElement('div');
        confetti.innerHTML = "ß";
        confetti.style.cssText = `
            position: fixed;
            left: ${Math.random() * 100}%;
            top: -20px;
            color: #ffffff;
            font-size: ${20 + Math.random() * 20}px;
            animation: confettiFall ${3 + Math.random() * 2}s linear;
            z-index: 9998;
         `;
        document.body.appendChild(confetti);
            
        setTimeout(() => confetti.remove(), 5000);
    }, i * 100);
}