class Triangle {
    constructor(color, textcolor, text) {
        this.color = color;
        this.textColor = textcolor;
        this.text = text;
    }

    render() {
        return `<polygon points="150 10, 275 190, 25 190" fill="${this.color}" stroke-width="5"/>
        <text x="150" y="150" font-family="Cambria" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text>`
    }
}

module.exports = Triangle