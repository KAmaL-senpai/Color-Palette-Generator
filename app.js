const divs = document.querySelectorAll(".box");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  divs.forEach(div => {
    div.style.backgroundColor = generateRandomColor();
  });
});

divs.forEach(div => {
  div.addEventListener("click", () => copyToClipboard(div));
});

function generateRandomColor() {
  return `rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`;
}

function randomValue() {
  return Math.floor(Math.random() * 256);
}

function copyToClipboard(element) {
  const color = element.style.backgroundColor;
  navigator.clipboard.writeText(color).then(() => {
    alert(`${color} copied to clipboard!`);
  }).catch(err => {
    console.error('Error copying to clipboard: ', err);
  });
}
