function createCanvas(size){
// creates canvas grid with dimensions size x size
    const canvas = document.createElement("div");
    canvas.classList.add("canvas");
    for(let i = 0; i < size * size; i++){
        const pixel = document.createElement("div")
        pixel.classList.add("pixel");
        pixel.classList.add("grid");
        pixel.style.flexGrow = "1";
        pixel.style.flexBasis = `calc(100% / ${size})`
        pixel.addEventListener("mouseover", () => {
            pixel.style.backgroundColor = "black";
        })
        canvas.appendChild(pixel);
    }

    return canvas;
}

let canvas = createCanvas(16);

mainContent = document.querySelector("#main-content");

const pageTitle = document.createElement("h1");
pageTitle.textContent = "Etch - a - Sketch";

const checkBoxGroup = document.createElement("div");
checkBoxGroup.id = "checkBoxGroup";

const gridCheckBox = document.createElement("input");
gridCheckBox.type = "checkbox";
gridCheckBox.id = "grid-check-box";
gridCheckBox.checked = true;

gridCheckBox.addEventListener("change", () => {
    canvas.querySelectorAll(".pixel").forEach(childElement => {
        childElement.classList.toggle("grid");
    });
})

const gridCheckBoxLabel = document.createElement("label");
gridCheckBoxLabel.textContent = "Enable Grid: "
gridCheckBox.for = "grid-check-box";

checkBoxGroup.appendChild(gridCheckBoxLabel);
checkBoxGroup.appendChild(gridCheckBox);

const canvasSizeRange = document.createElement('input');
canvasSizeRange.classList.add("canvas-size-range");
canvasSizeRange.type = 'range';
canvasSizeRange.min = '1';
canvasSizeRange.max = '50';
canvasSizeRange.value = '16';

const canvasSizeRangeInfo = document.createElement("p");
canvasSizeRangeInfo.textContent = `${canvasSizeRange.value} x ${canvasSizeRange.value}`;

canvasSizeRange.addEventListener("input", () => {
    const newCanvas = createCanvas(canvasSizeRange.value);
    canvas.replaceWith(newCanvas);
    canvas = newCanvas;
    canvasSizeRangeInfo.textContent = `${canvasSizeRange.value} x ${canvasSizeRange.value}`;
})


mainContent.appendChild(pageTitle);
mainContent.appendChild(canvas);
mainContent.appendChild(canvasSizeRangeInfo);
mainContent.appendChild(canvasSizeRange);
mainContent.appendChild(checkBoxGroup);