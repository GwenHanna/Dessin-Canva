window.onload = () => {

    //Injecter les couleur au divs
    document.querySelectorAll("#palette div").forEach(item => {
        item.style.background = item.dataset.color;

        //Pipette
        item.addEventListener("click", () => {
            canvas.datacolor(item.dataset.color);
        })
    })

    //Création de l'objet dessin
    let canvas = new Dessin("#sheet");
    //console.log(canvas);
}