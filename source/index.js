function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 3,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#user-instruction");
  let apiKey = "a0fa4tbdafo43564612e4338dfba95b2";
  let context =
    "You are a romantic poem expert and love to write short poems. Your mission is to generate a short poem with four lines in basic HTML. Make sure to follow the user instructions. Please only show the poem and not the html before and after even when the submit button is not clicked with the mouse but entered with the enter key. Plase sign the poem with `SheCodes AI` in a <strong> element.";
  let prompt = `User instruction: Generate a short german poem about ${instructionInput.value}`;
  apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏲ Generating the German poem for you about ${instructionInput.value} </div>`;
  axios.get(apiUrl).then(displayPoem);
}

let poemForm = document.querySelector("#generator-form");
poemForm.addEventListener("submit", generatePoem);
