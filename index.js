function createCanvas(){
// creates canvas grid of size 16 x 16 pixels
    const canvas = document.createElement("div");
    for(let i = 0; i < 16; i++){
        for(let z = 0; z < 16; z++){
            const pixel = document.createElement("div")
            pixel.classList.add("pixel");
            canvas.appendChild(pixel);
        }
    }

    return canvas;
}

mainContent = document.querySelector("#main-content")
const canvas = createCanvas();
canvas.classList.add("canvas");

mainContent.appendChild(canvas);
