class Square{
    constructor(color,textcolor,text){
        this.color=color;
        this.textcolor=textcolor;
        this.text=text;
    }
    render(){
        return `<rect x="55" y="15" width="200" height="200" fill="${this.color}" stroke-width="5"/>
        <text x="150" y="105" font-family="Cambria" font-size="70" text-anchor="middle" dominant-bsaeline="middle" fill="${this.textcolor}">${this.text}</text>`
    }
}
module.export=Square