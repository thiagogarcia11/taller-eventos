function saludar() {
  alert("Hola!");
}

const div = document.querySelector("div");
div.addEventListener("click", (e) => {
  if (e.target !== document.querySelector("button")) {
    alert("Hola! Soy el div");
  }
});
