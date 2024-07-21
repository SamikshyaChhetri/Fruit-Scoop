console.log(window.innerWidth);
const basketImage = document.getElementById("basketImg");
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    let b = basketImage.style.left;
    console.log(b);
    // if (b <= 1420) {
    basketImage.style.left = b + 10 + "px";
    // } else {
    //   alert("Boundary reached");
    // }
  }
});
