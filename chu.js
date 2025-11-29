const text = "L";
const textEl = document.getElementById("text");
let i = 0;

function fadeInText() {
  if(i < text.length){
    const span = document.createElement("span");
    span.textContent = text[i];
    span.classList.add("fade-in");
    textEl.appendChild(span);

    // Trigger fade-in
    setTimeout(() => {
      span.classList.add("show");
    }, 50);

    i++;
    setTimeout(fadeInText, 300); // tốc độ fade từng chữ
  }
}

fadeInText();
