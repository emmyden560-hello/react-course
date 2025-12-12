import RoboImage from '../assets/robotimg.png'
import UserImage from '../assets/userimg.png'
import './chatmessage.css'
import dayjs from "dayjs";


export function ChatMessage({ message, sender, time }) {
    // const { message, sender } = props; //shortcut

    return (
        <div className={sender === "user" ? "user-chat" : "robot-chat"}>
            {sender === "robot" && (
                <img src={RoboImage} className="img" />
            )}
            <div className="message">{message}
                <div className='time'>
                    {dayjs(time).format("h:mma")}
                </div>
            </div>
            {sender === "user" && (
                <img src={UserImage} className="img" />
            )}
        </div>
    );
}