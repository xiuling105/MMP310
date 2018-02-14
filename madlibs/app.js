//html element references

const submitButton = document.getElementById("submit");
const exclamationInput = document.getElementById("exclamation");
const adverbInput = document.getElementById("adverb");
const nounInput = document.getElementById("noun");
const adjectiveInput = document.getElementById("adjective");

//listen for button press

submitButton.onclick = function (){
    const message = document.createElement("p");
    message.textContent = exclamationInput.value
                          +" he said "
                          +adverbInput.value
                          +" as he jumped into his convertible"
                          +nounInput.value
                          +" and drove off with his "
                          +adjectiveInput.value
                          +" wife. "
    document.body.appendChild(message);

}