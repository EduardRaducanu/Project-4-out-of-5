const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];

const container = document.querySelector('#board');
const squaresNo = 3000;

for(let i = 0; i < squaresNo; i++){
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))
    container.append(square);
}

function setColor(element){
    element.style.backgroundColor = getRandomColor();
}

function removeColor(element){
    element.style.backgroundColor = '#1e1e1e'
}

function getRandomColor(){
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}