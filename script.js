const bioText = "👨‍💻 Hey! I'm Mehul Varshney — a tech enthusiast and BCA student passionate about frontend development, information security, and programming. I'm always eager to learn, build, and explore the evolving world of technology.";
let i = 0;
const speed = 30;

function typeBio() {
  if (i < bioText.length) {
    document.getElementById("typed-bio").innerHTML += bioText.charAt(i);
    i++;
    setTimeout(typeBio, speed);
  }
}

window.onload = typeBio;

function sayHello() {
  const greetBox = document.getElementById("greeting");
  greetBox.innerHTML = "👋 Thanks for visiting my page. Stay curious!";
}
