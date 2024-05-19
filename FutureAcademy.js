box1 = document.querySelector(".box1");
box2 = document.querySelector(".box2");
box3 = document.querySelector(".box3");
det = document.querySelector(".bottom1-left-wrap-second");
pod = document.querySelector(".bottom2-left-wrap-second");
vzr = document.querySelector(".bottom3-left-wrap-second");
video = document.querySelector("video");
play = document.querySelector(".play");
inp1 = document.querySelector(".inp");
inp2 = document.querySelector(".inp2");
inp3 = document.querySelector(".inp3");
btn = document.querySelector(".btn-wrap-sixth");
txt = document.querySelector(".text2-wrap-sixth");
scrbtn = document.querySelector(".secret-btn");
scrbtn2 = document.querySelector(".secret-btn2");
scrblock = document.querySelector(".scr-block");

scrbtn.onclick = () => {
  scrblock.style.display = "block";
  scrbtn2.style.display = "block";
  scrbtn.style.display = "none";
};
scrbtn2.onclick = () => {
  scrblock.style.display = "none";
  scrbtn2.style.display = "none";
  scrbtn.style.display = "block";
};

inps = [inp1, inp2, inp3];
pattern = {
  name: /^[a-z ,.'-]+$/i,
  phone: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
  email: /^\S+@\S+\.\S+$/,
};
function validate(field, regex) {
  if (regex.test(field.value)) {
    field.style.border = "greenyellow 1px solid";
  } else {
    field.style.border = "red 1px solid";
  }
}
let a;
let b;
let c;
btn.onclick = () => {
  if (inp1.style.border == "1px solid greenyellow") {
    a = true;
  } else {
    a = false;
  }
  if (inp2.style.border == "1px solid greenyellow") {
    b = true;
  } else {
    b = false;
  }
  if (inp3.style.border == "1px solid greenyellow") {
    c = true;
  } else {
    c = false;
  }

  if (a === false || b === false || c === false) {
    txt.innerHTML = "Произошла ошибка";
    txt.style.color = "red";
    txt.style.fontSize = "16px";
  } else {
    alert("Регистрация прошла успешно");
    txt.innerHTML =
      "Нажимая на кнопку, я соглашаюсь <br>на обработку персональных данных <br>и с правилами пользования <br> Платформой";
    txt.style.color = "#A7A7A7";
    txt.style.fontSize = "11px";
  }
};
inp1.onkeyup = () => {
  let name = inp1.name;
  validate(inp1, pattern[name]);
};
inp2.onkeyup = () => {
  let name = inp2.name;
  validate(inp2, pattern[name]);
};
inp3.onkeyup = () => {
  let name = inp3.name;
  validate(inp3, pattern[name]);
};

play.onclick = () => {
  video.play();
  play.style.opacity = "0";
  setTimeout(() => {
    play.style.display = "none";
  }, 500);
};
video.onclick = () => {
  video.pause();
  play.style.display = "block";
  play.style.opacity = "1";
};

box1.onclick = () => {
  det.style.display = "block";
  pod.style.display = "none";
  vzr.style.display = "none";
  box1.style.borderBottom = "4px solid";
  box1.style.borderImage =
    "linear-gradient(to right, #fba800, #00ffff ) 47% 0%";
  box2.style.borderBottom = "none";
  box3.style.borderBottom = "none";
};
box2.onclick = () => {
  det.style.display = "none";
  pod.style.display = "block";
  vzr.style.display = "none";
  box2.style.borderBottom = "4px solid";
  box2.style.borderImage =
    "linear-gradient(to right, #fba800, #00ffff ) 47% 0%";
  box1.style.borderBottom = "none";
  box3.style.borderBottom = "none";
};
box3.onclick = () => {
  det.style.display = "none";
  pod.style.display = "none";
  vzr.style.display = "block";
  box3.style.borderBottom = "4px solid";
  box3.style.borderImage =
    "linear-gradient(to right, #fba800, #00ffff ) 47% 0%";
  box1.style.borderBottom = "none";
  box2.style.borderBottom = "none";
};
