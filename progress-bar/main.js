const fill = document.querySelector('.js-fill');
const jsPer = document.querySelector('.per');
const csPer = document.querySelector('.percss');

const cssParent = document.querySelector('.css-bar');
const cssFill = document.querySelector('.fill');

const parentStyle = getComputedStyle(cssParent);
const parentWidth = Number.parseInt(parentStyle.inlineSize);

let width = 0;

function fillUpdate() {
  if (width === 100) {
    width = 0;
  }

  const childStyle = getComputedStyle(cssFill);
  const childWidth = Number.parseInt(childStyle.inlineSize);

  csPer.innerText = `${parseInt((childWidth / parentWidth) * 100, 10)}%`;

  // * Update JS-Bar width
  jsPer.innerText = `${width}%`;
  // * Increase JS-Bar width by 5% every 100ms
  fill.style.width = `${(width += 5)}%`;
}

setInterval(fillUpdate, 100);
