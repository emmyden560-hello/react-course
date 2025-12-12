import { useRef, useEffect } from 'react'
import { ChatMessage } from './chatmessage';
import './chatmessages.css';

function ChatMessages({ chatMessages, loading }) {
    const chatref = useRef(null);

    useEffect(() => {
        const containerElem = chatref.current;
        if (containerElem) {
            containerElem.scrollTop = containerElem.scrollHeight;
        }
    }, [chatMessages, loading]);

    return (
        <div className="message-container" ref={chatref}>
            {chatMessages.map((chatMessage) => {
                return (
                    <ChatMessage
                        message={chatMessage.message}
                        sender={chatMessage.sender}
                        time={chatMessage.time}
                        key={chatMessage.id}
                    />
                );
            })}

            {loading && (
                <div className="robot-chat">
                    <div className="message">
                        <div class="loader"></div>
                    </div>
                    <img src="/images/robotimg.png" className="img" />
                </div>
            )}
        </div>
    );
}

export default ChatMessages;