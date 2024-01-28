const Circle = require('./shapes/circle');
const Triangle = require('./shapes/triangle');
const Square = require('./shapes/square');

function renderLogo(data) {
    if (data.shape == 'Circle') {
        logo = new Circle(data.color, data.textColor, data.initials).render()
    } else if (data.shape == 'Triangle') {
        logo = new Triangle(data.color, data.textColor, data.initials).render()
    } else if (data.shape == 'Square') {
        logo = new Square(data.color, data.textColor, data.initials).render()
    }
}

function generateLogo(data) {
    renderLogo(data)
    return `
    <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g>
            ${logo}
        </g>
    </svg> `
}

module.exports = generateLogo;