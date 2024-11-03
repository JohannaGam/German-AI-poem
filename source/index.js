function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Vanitas",
    autoStart: true,
    delay: 3,
    cursor: "",
  });
}

let poemForm = document.querySelector("#generator-form");
poemForm.addEventListener("submit", generatePoem);
