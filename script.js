const userInput = document.getElementById("userInput");
const sendButton = document.getElementById("sendButton");
const chatMessages = document.querySelector(".chat-messages");

function addMessage(message, sender) {
    const messageElement = document.createElement("div");

    messageElement.classList.add("message");

    if (sender === "user") {
        messageElement.classList.add("user-message");
    } else {
        messageElement.classList.add("bot-message");
    }

    messageElement.textContent = message;

    chatMessages.appendChild(messageElement);

    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotResponse(message) {
    const text = message.toLowerCase();

    if (text.includes("hello") || text.includes("hi") || text.includes("sup")) {
        return "Hey! I'm Nexa.";
    }

    if (text.includes("how are you") || text.includes("how you doing")) {
        return "I'm doing great! Thanks for asking.";
    }

    if (text.includes("your name")) {
        return "My name is Nexa!";
    }

    if (text.includes("bye")) {
        return "See you later!";
    }

    return "Hmm... I'm not sure how to respond to that yet.";
}

function sendMessage() {
    const message = userInput.value.trim();

    if (message === "") {
        return;
    }

    addMessage(message, "user");

    const response = getBotResponse(message);

    addMessage(response, "bot");

    userInput.value = "";
}

sendButton.addEventListener("click", sendMessage);

userInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
