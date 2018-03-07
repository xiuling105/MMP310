const submitButton = document.getElementById("submit");
const exclamationInput = document.getElementById("exclamation");
const adverbInput = document.getElementById("adverb");
const nounInput = document.getElementById("noun");
const adjectiveInput = document.getElementById("adjective");

const message = document.createElement("p");
	  document.body.appendChild(message);

submitButton.onclick = function() {
	
	if (!exclamationInput.value) {
		message.textContent = "You forgot to add an exclamation!";
	} else if (!adverbInput.value) {
        message.textContent = "You forgot to add an adverb!"
    }else if (!nounInput.value) {
        message.textContent = "You forgot to add an noun!"
    }else if (!adjectiveInput.value) {
        message.textContent = "You forgot to add an adjective!"
    }
    else {
        message.textContent = exclamationInput.value
							+ " he said "
							+ adverbInput.value
							+ " as he jumped into his convertible "
							+ nounInput.value
							+ " and drove off with his "
							+ adjectiveInput.value
							+ " wife."
	}
	
};