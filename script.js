const kal = document.getElementById("kal");
let num = document.getElementById("num");
let code = document.getElementById("charcode");
let b = null;

window.addEventListener("keydown", (e) => {
  if (e.key === "Backspace") {
    kal.innerHTML = `<b> backspace </b>`;
    b = e.keyCode;
    num.innerHTML = `${b}`;
    code.innerHTML = `Backspace --- ${b}`;
  } else if (e.key === " ") {
    kal.innerHTML = `<b> Space </b> `;
    b = e.keyCode;
    num.innerHTML = `${b}`;
    code.innerHTML = `Space --- ${b}`;
  } else {
    b = e.keyCode;
    c = e.key;
    kal.innerHTML = `(${c})`;
    num.innerHTML = `${b}`;
    code.innerHTML = `${c} --- ${b}`;
  }
});
