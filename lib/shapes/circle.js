class Circle {
    constructor(color, textcolor, text){
        this.color=color;
        this.textcolor=textcolor;
        this.text=text;
    }

    render() {
        return`<circle cx="150" cy="100" r="95" fill="${this.color}" stroke-width="5"/>
        <text x="80" y="120" font-family="Cambria" font-size="70" fill="${this.textcolor}">${this.text}</text>`
    }
}
module.exports=Circle
