import { useState, useRef, useEffect } from 'react'
import { ChatInput } from './components/chatinput'
import RoboImage from './assets/robotimg.png'
import UserImage from './assets/userimg.png'
import './App.css'

function ChatMessage({ message, sender }) {
  // const { message, sender } = props; //shortcut

  return (
    <div className={sender === "user" ? "user-chat" : "robot-chat"}>
      {sender === "robot" && (
        <img src={RoboImage} className="img" />
      )}
      <div className="message">{message}</div>
      {sender === "user" && (
        <img src={UserImage} className="img" />
      )}
    </div>
  );
}

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
function App() {
  const [chatMessages, setchatMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  // const chatMessages = array[0];  //current data
  // const setchatMessages = array[1]; // update function
  // const [chatMessages, setchatMessages] = array //shortcut with a btr shortcut

  return (
    <div className="container">
      <ChatMessages chatMessages={chatMessages} loading={loading} />
      <ChatInput
        chatMessages={chatMessages}
        setchatMessages={setchatMessages}
        setLoading={setLoading}
      />
    </div>
  );
}

export default App
