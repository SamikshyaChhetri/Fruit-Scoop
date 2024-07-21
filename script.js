console.log(window.innerWidth);
const basketImage = document.getElementById("basketImg");
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    let b = parseInt(basketImage.style.left);
    if (b <= 1420 - 250) {
      basketImage.style.left = b + 10 + "px";
    } else {
      alert("Boundary reached");
    }
  } else if (e.key === "ArrowLeft") {
    let b = parseInt(basketImage.style.left);
    console.log(b);
    if (b >= 1420 - 1420) {
      basketImage.style.left = b - 10 + "px";
    } else {
      alert("Boundary Reached");
    }
  }
});
