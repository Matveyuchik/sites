document.addEventListener('DOMContentLoaded', () => {
    let header = document.getElementById('sigma');
    let trashCount = 0;
    let trashDisplay = document.getElementById('trash-count');
    
    function updateTrashCount() {
        trashCount = document.querySelectorAll('.planet, .asteroid, .sun').length;
        if (trashDisplay) {
            trashDisplay.textContent = trashCount;
        }
    }
    
   
    const trashItems = document.querySelectorAll('.planet, .asteroid, .sun');
    trashItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            
            
            const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'];
            item.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            
            
            item.style.transform = 'scale(1.5)';
            setTimeout(() => {
                item.style.transform = '';
            }, 300);
            
            console.log('Rubbish activated', item.id || 'asteroid');
        });
    });
    
    updateTrashCount();
});


function addTrash() {
    const system = document.querySelector('.solar-system');
    const newTrash = document.createElement('div');
    newTrash.className = 'asteroid';
    newTrash.innerHTML = 'ß';
    
    
    const randomAngle = Math.random() * 360;
    const randomDistance = 200 + Math.random() * 300;
    const x = Math.cos(randomAngle) * randomDistance;
    const y = Math.sin(randomAngle) * randomDistance;
    
    newTrash.style.position = 'absolute';
    newTrash.style.left = `calc(50% + ${x}px)`;
    newTrash.style.top = `calc(50% + ${y}px)`;
    newTrash.style.fontSize = '30px';
    newTrash.style.animation = 'float 2s infinite alternate';
    
    newTrash.addEventListener('click', () => {
        newTrash.remove();
        document.getElementById('trash-count').textContent = 
            document.querySelectorAll('.planet, .asteroid, .sun').length;
    });
    
    system.appendChild(newTrash);
    
    document.getElementById('trash-count').textContent = 
        document.querySelectorAll('.planet, .asteroid, .sun').length;
}

document.getElementsByClassName('sun').item(0).addEventListener('click', () => {
    new Audio("explosion.mp3").play()
    document.getElementById("solar-system").style.display = 'none';
    document.getElementById('trash-counter').style.display = 'none';
});