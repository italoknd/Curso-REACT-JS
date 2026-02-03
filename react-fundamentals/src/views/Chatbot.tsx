import Input from "../components/Chabot/Input";
import Messages from "../components/Chabot/Messages";

const Chatbot = () => {
  return (
    <div>
      <Messages message="Hello, how can I help you today?" />
      <Input />
    </div>
  );
};

export default Chatbot;
