let gridColor;
let colorLightness;
let lightnessDecrease;
const container = document.getElementById('container');
const btn = document.querySelector('button');

container.addEventListener('mouseover', (e) => {
    if (e.target != container) {
        if (!e.target.style.background) {
            e.target.style.hsl = gridColor;
            e.target.style.background = gridColor;            
        } else {
            const squareColor = e.target.style.hsl;
            const squareHSLValues = squareColor.split(',');
            const oldLightnessVal = Number(squareHSLValues[2].slice(1, -2));
            const newLightnessVal = ` ${oldLightnessVal - lightnessDecrease}%)`;
            squareHSLValues[2] = newLightnessVal;
            const newColor = squareHSLValues.join(',');
            e.target.style.hsl = newColor;
            e.target.style.background = newColor;
        }
    }
});

btn.addEventListener('click', () => {
    const gridSize = Number(prompt('Enter a number of squares per side (up to 100)'));
    if (gridSize > 100) {
        alert('Number is out of range, try again');
    } else {
        createGrid(gridSize);
    }
});

function getColor() {
    const h = Math.round(Math.random() * 360);
    const s = Math.round(Math.random() * 100);
    const l = Math.round(Math.random() * 100);
    colorLightness = l;
    return `hsl(${h}, ${s}%, ${l}%)`;
}

function createGrid(size) {
    gridColor = getColor();
    lightnessDecrease = colorLightness / 10;
    container.innerHTML = '';
    const gap = 2 * (size - 1);
    for (let i = 0; i < (size * size); i++) {
        const div = document.createElement('div');
        div.style.width = ((784 - gap) / size) + 'px';
        div.style.height = ((784 - gap) / size) + 'px';
        container.appendChild(div);
    }
}

createGrid(16);