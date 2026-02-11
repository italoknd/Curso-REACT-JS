import Input from "../components/Chabot/Input";
import Messages from "../components/Chabot/Messages";

type ChatMessage = {
  id: number;
  role: "user" | "assistant";
  content: string;
  time?: string;
};

const Chatbot = () => {
  const messages: ChatMessage[] = [];

  const sendMessage = (newMessage: ChatMessage) => {
    messages.push(newMessage);
    console.log("Mensagem enviada:", newMessage);
  };

  return (
    <div>
      <Messages messages={messages} />
      <Input sendMessage={sendMessage} idMessage={messages.length + 1} />
    </div>
  );
};

export default Chatbot;
