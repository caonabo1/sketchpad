const container = document.getElementById('container');
const btn = document.querySelector('button');
container.addEventListener('mouseover', (e) => {
    if (e.target != container) {
        e.target.style.background = 'black'
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

function createGrid(size) {
    container.innerHTML = '';
    const gap = 2 * (size - 1);
    for (let i = 0; i < (size * size); i++) {
        const div = document.createElement('div');
        div.style.width = ((785 - gap) / size) + 'px';
        div.style.height = ((785 - gap) / size) + 'px';
        container.appendChild(div);
    }
}

createGrid(16);