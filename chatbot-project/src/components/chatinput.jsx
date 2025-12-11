import { useState } from 'react'
import { Chatbot } from 'supersimpledev'

export function ChatInput({ chatMessages, setchatMessages, setLoading }) {
    const [inputText, setInputText] = useState("");

    function saveInput(event) {
        setInputText(event.target.value);
    }

    function sendMessage() {
        if (!inputText.trim()) return;

        const newchatMessages = [
            ...chatMessages,
            {
                message: inputText,
                sender: "user",
                id: crypto.randomUUID(),
            },
        ];

        setchatMessages(newchatMessages);
        setInputText("");

        setLoading(true);

        setTimeout(() => {
            const response = Chatbot.getResponse(inputText);

            setchatMessages([
                ...newchatMessages,
                {
                    message: response,
                    sender: "robot",
                    id: crypto.randomUUID(),
                },
            ]);

            setLoading(false);
        }, 1500);
    }

    function send(event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    }

    return (
        <div className="input">
            <input
                type="text"
                placeholder="Send a message to Chatbot"
                size="30"
                onChange={saveInput}
                value={inputText}
                onKeyDown={send}
                className="chatinput"
            />
            <button onClick={sendMessage} className="send-button">
                Send
            </button>
        </div>
    );
}