const bodyEl = document.querySelector("body");


bodyEl.addEventListener("mousemove", (event)=>{
    const xPosition = event.offsetX;
    const yPosition = event.offsetY;
    const spanEl = document.createElement("span");
    spanEl.style.left = xPosition + "px";
    spanEl.style.top = yPosition + "px";
    bodyEl.appendChild(spanEl);
    const size =Math.random()*150;
    spanEl.style.width =size + "px";
    setTimeout(()=>{
        spanEl.remove();
    },6000);
});
