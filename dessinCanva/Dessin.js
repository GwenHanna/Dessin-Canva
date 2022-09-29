class Dessin{
    constructor(canvas){
        //Init
        this.draw = false;
        //Coordonnée
        this.prevX = 0;
        this.prevY = 0;

        //Context
        this.canvas = document.querySelector("#sheet");
        this.ctx = this.canvas.getContext("2d");
        //init trait dessin
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 2;
        console.log(this.ctx);


        this.canvas.addEventListener("mousedown", (e) => {
            //On dessine
            this.draw = true;

            //Stock les Coordonnée
            this.prevX = (e.clientX - this.canvas.offsetLeft) * 1000 / this.canvas.clientWidth;
            this.prevY = (e.clientY - this.canvas.offsetTop) * 1000 / this.canvas.clientHeight;
           // console.log(this.prevX);
        })
        this.canvas.addEventListener("mousemove", (e) => {
            //On va stocker les donner seulement SI on dessine
            if(this.draw){
                let currX = (e.clientX - this.canvas.offsetLeft) * 1000 / this.canvas.clientWidth;
                let currY = (e.clientY - this.canvas.offsetTop) * 1000 / this.canvas.clientHeight;

                //on applique la methode dessiner
                this.drawing(this.prevX, this.prevY, currX, currY);

                //On stock les derniere coordonnée
                this.prevX = currX;
                this.prevY = currY;
            }
        })
        this.canvas.addEventListener("mouseup", () => {
            this.draw = false;
        })
        this.canvas.addEventListener("mouseleave", () => {
            this.draw = false;
        })
        document.querySelector("#plus").addEventListener("click", ()=>{
            this.zoom();
        })
        document.querySelector("#minus").addEventListener("click", ()=>{
            this.zoomLast();
        })
        document.querySelector("#rubber").addEventListener("click", ()=>{
            this.rubber();
        })
        document.querySelector("#cross").addEventListener("click", ()=>{
            this.clear();
        })
    }

    //METHODES

    drawing(depX, depY, destX, destY) {
        this.ctx.beginPath();
        this.ctx.moveTo(depX, depY);
        this.ctx.lineTo(destX, destY);
        this.ctx.closePath();
        this.ctx.stroke();
    }
    zoom(){
        this.ctx.lineWidth += 1;
    }
    zoomLast(){
        if(this.ctx.lineWidth > 1)
            this.ctx.lineWidth -= 1;
    }
    rubber(){
        this.ctx.strokeStyle = "#fff";
    }
    clear(){
        this.ctx.clearRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight);
    }

    datacolor(color){
        this.ctx.strokeStyle = color;
    }
}