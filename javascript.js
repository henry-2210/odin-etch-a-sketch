const pixels = [];

const container = document.querySelector(".container");

let pixelCount = 10;

const etchASketch = function () {
  const pixelSize = container.clientWidth / pixelCount;

  for (let i = 1; i <= pixelCount; i++) {
    const row = document.createElement("div");
    container.appendChild(row);
    row.classList.add("row");
    for (let j = 1; j <= pixelCount; j++) {
      const createPixel = document.createElement("div");

      createPixel.style.width = `${pixelSize}px`;
      createPixel.style.height = `${pixelSize}px`;

      pixels.push(createPixel);
      row.appendChild(createPixel);
    }
  }
  console.log(pixels);

  pixels.forEach((element) => {
    // element.setAttribute("style", "width:${pixelSize}px; height:${pixelSize}px;");

    element.style.border = "1px solid black";
    element.addEventListener("mouseover", () => {
      element.style.backgroundColor = "blue";
    });
  });
};

etchASketch();

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  pixelCount = +prompt("How many pixels do you want to use?");

  container.innerHTML = "";
  etchASketch();
});
