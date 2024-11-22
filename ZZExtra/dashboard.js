document.addEventListener("DOMContentLoaded", () => {
    // Chatbot Button
    const chatbotButton = document.createElement("button");
    chatbotButton.textContent = "Chat with Assistant";
    chatbotButton.style.position = "fixed";
    chatbotButton.style.bottom = "20px";
    chatbotButton.style.left = "20px";
    chatbotButton.style.padding = "10px 15px";
    chatbotButton.style.backgroundColor = "#0073e6";
    chatbotButton.style.color = "white";
    chatbotButton.style.border = "none";
    chatbotButton.style.borderRadius = "5px";
    chatbotButton.style.cursor = "pointer";
    document.body.appendChild(chatbotButton);

    // Chat Popup
    const chatPopup = document.createElement("div");
    chatPopup.style.position = "fixed";
    chatPopup.style.bottom = "70px";
    chatPopup.style.left = "20px";
    chatPopup.style.width = "300px";
    chatPopup.style.height = "400px";
    chatPopup.style.backgroundColor = "white";
    chatPopup.style.border = "1px solid #ccc";
    chatPopup.style.borderRadius = "10px";
    chatPopup.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";
    chatPopup.style.display = "none";
    chatPopup.style.flexDirection = "column";
    chatPopup.style.overflow = "hidden";

    const chatHeader = document.createElement("div");
    chatHeader.textContent = "Ask your Doubts!";
    chatHeader.style.backgroundColor = "#0073e6";
    chatHeader.style.color = "white";
    chatHeader.style.padding = "10px";
    chatHeader.style.textAlign = "center";
    chatPopup.appendChild(chatHeader);

    const chatArea = document.createElement("div");
    chatArea.style.flexGrow = "1";
    chatArea.style.padding = "10px";
    chatArea.style.overflowY = "auto";
    chatPopup.appendChild(chatArea);

    const chatInputSection = document.createElement("div");
    chatInputSection.style.display = "flex";
    chatInputSection.style.padding = "10px";
    const chatInput = document.createElement("input");
    chatInput.placeholder = "Type your question...";
    chatInput.style.flexGrow = "1";
    chatInput.style.padding = "8px";
    chatInput.style.marginRight = "5px";
    chatInputSection.appendChild(chatInput);
    const sendButton = document.createElement("button");
    sendButton.textContent = "Send";
    sendButton.style.padding = "8px";
    chatInputSection.appendChild(sendButton);

    chatPopup.appendChild(chatInputSection);
    document.body.appendChild(chatPopup);

    chatbotButton.addEventListener("click", () => {
        chatPopup.style.display = chatPopup.style.display === "none" ? "flex" : "none";
    });

    sendButton.addEventListener("click", () => {
        const userMessage = chatInput.value;
        if (userMessage) {
            const userBubble = document.createElement("div");
            userBubble.textContent = userMessage;
            userBubble.style.backgroundColor = "#f1f1f1";
            userBubble.style.padding = "8px";
            userBubble.style.marginBottom = "10px";
            chatArea.appendChild(userBubble);
            const botResponse = document.createElement("div");
            botResponse.textContent = "This is a simulated response.";
            chatArea.appendChild(botResponse);
        }
        chatInput.value = "";
    });
});
