console.log(window.innerWidth);
let w = window.innerWidth;
const basketImage = document.getElementById("basketImg");
let basketleft = (0 + w) / 2;
console.log(basketleft);
basketImage.style.left = basketleft - 120 + "px"; //15rem=240px so half of 240
// window.location.reload();
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    let b = parseInt(basketImage.style.left);
    if (b <= 1420 - 250) {
      basketImage.style.left = b + 10 + "px";
    }
  } else if (e.key === "ArrowLeft") {
    let b = parseInt(basketImage.style.left);
    console.log(b);
    if (b >= 1420 - 1420) {
      basketImage.style.left = b - 10 + "px";
    }
  }
});
