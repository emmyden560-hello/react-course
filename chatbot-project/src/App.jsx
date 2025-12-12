import { useState } from 'react'
import { ChatInput } from './components/chatinput'
import ChatMessages from './components/chatmessages';

import './App.css'




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
