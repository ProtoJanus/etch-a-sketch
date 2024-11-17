function createCanvas(size){
// creates canvas grid with dimensions size x size
    const canvas = document.createElement("div");
    canvas.classList.add("canvas");
    for(let i = 0; i < size * size; i++){
        const pixel = document.createElement("div")
        pixel.classList.add("pixel");
        pixel.style.flexGrow = "1";
        pixel.style.flexBasis = `calc(100% / ${size})`
        pixel.addEventListener("mouseover", () => {
            pixel.style.backgroundColor = "black";
        })
        canvas.appendChild(pixel);
    }

    return canvas;
}

mainContent = document.querySelector("#main-content")
let canvas = createCanvas(16);

const canvasSizeRange = document.createElement('input');
canvasSizeRange.type = 'range';
canvasSizeRange.min = '1';
canvasSizeRange.max = '16';
canvasSizeRange.value = '16';

canvasSizeRange.addEventListener("input", () => {
    const newCanvas = createCanvas(canvasSizeRange.value);
    canvas.replaceWith(newCanvas);
    canvas = newCanvas;
})

mainContent.appendChild(canvas);
mainContent.appendChild(canvasSizeRange);