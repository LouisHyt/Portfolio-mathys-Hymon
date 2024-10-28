const codeBlock = document.querySelectorAll(".graphism__item > a");
const makeItGDD = document.querySelector(".makeit_gdd > .image");
const openables = document.querySelectorAll(".openable");
const imageFullScreen = document.querySelector(".imageFullScreen")
const overlay = imageFullScreen.querySelector(".overlay")
const closeOverlay = imageFullScreen.querySelector(".close")
const overlayImage = imageFullScreen.querySelector(".overlayImage")

codeBlock.forEach((elem, index) => {

    VanillaTilt.init(elem, {
        reverse: true,
        perspective: 3000,
        max: 18,
        speed: 1000
    })
})

VanillaTilt.init(makeItGDD, {
    reverse: true,
    perspective: 3000,
    max: 18,
    speed: 1000
})

openables.forEach(elem => {
    elem.addEventListener("click", () => {
        const elemUrl = elem.src;
        overlayImage.src = elemUrl;
        imageFullScreen.classList.add("active");
    })
})

overlay.addEventListener("click", () => {
    imageFullScreen.classList.remove("active");
})

closeOverlay.addEventListener("click", () => {
    imageFullScreen.classList.remove("active");
})

Draggable.create(".imagecompare-handle", {
    type: "x",
    bounds: { left: -20, width: 640 },
    onDrag: function() {
      var posx = this.x;
      document.querySelector('.imagecompare-content div:nth-child(2)').style = `clip-path: rect(0px calc(${posx}px + 1.55em) 2em 0px)`;
    }
  });