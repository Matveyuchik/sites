let kiss = new Audio("kiss.mp3");
kiss.volume = .5;

let kissSongs = {
    'rock': new Audio("kiss.mp3"),
};

let kissModeActivated = false;

function activateKissMode() {
    if (kissModeActivated) return;
    
    kissModeActivated = true;
    
   
    kiss.play();
    
    
    document.body.style.backgroundImage = "url('kiss.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    
    
    const logo = document.createElement('div');
    logo.innerHTML = "KISS";
    logo.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 48px;
        color: #ffd700;
        text-shadow: 0 0 20px red;
        font-family: 'Impact', fantasy;
        letter-spacing: 10px;
        z-index: 9999;
        animation: kissFloat 2s infinite;
    `;
    document.body.appendChild(logo);
    
    
    document.body.style.boxShadow = "inset 0 0 100px rgba(255, 215, 0, 0.5)";
    
    
    for(let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.innerHTML = "ß";
            confetti.style.cssText = `
                position: fixed;
                left: ${Math.random() * 100}%;
                top: -20px;
                color: #ffd700;
                font-size: ${20 + Math.random() * 20}px;
                animation: confettiFall ${3 + Math.random() * 2}s linear;
                z-index: 9998;
            `;
            document.body.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 5000);
        }, i * 100);
    }
    
    
    document.title = "KISS MODE ACTIVATED";
    
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes kissFloat {
            0%, 100% { transform: translateX(-50%) translateY(0); }
            50% { transform: translateX(-50%) translateY(-20px); }
        }
        @keyframes confettiFall {
            to { transform: translateY(100vh) rotate(360deg); }
        }
        * {
            transition: all 0.3s;
        }
    `;
    document.head.appendChild(style);
    
    
    alert("KISS MODE ACTIVATED\nROCK & ROLL ALL NIGHT!");
}


document.addEventListener('keydown', (e) => {
    if(e.key === 'k' || e.key === 'K') {
        activateKissMode();
    }
});