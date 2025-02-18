import "./chat.css";
import ChatBox from "../../components/ChatBox";
import LeftSidebar from "../../components/leftSidebar";
import RightSidebar from "../../components/rightSidebar";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chat-container">
        <LeftSidebar />
        <ChatBox />
        <RightSidebar />
      </div>
    </div>
  );
};

export default Chat;
