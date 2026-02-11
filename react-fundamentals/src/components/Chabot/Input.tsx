import { useState } from "react";
interface ChatMessage {
  id: number;
  role: "user" | "assistant";
  content: string;
  time?: string;
}

const Input = ({
  sendMessage,
  idMessage,
}: {
  sendMessage: (message: ChatMessage) => void;
  idMessage: number;
}) => {
  // const sendMessage = () => {
  //   console.log("onClick = Event");
  //   console.log("sendMessage = Event handler");
  //   console.log(
  //     "Ou seja, quando o usuário clicar no botão, a função sendMessage será chamada e executará o código dentro dela. Isso é o que chamamos de evento de clique (onClick) e a função sendMessage é o manipulador de eventos (event handler) para esse evento específico.",
  //   );
  // };

  const [completeMessage, setCompleteMessage] = useState({} as ChatMessage);
  const [message, setMessage] = useState<string>("");

  const handleSendMessage = () => {
    console.log("Message:", message);
    setCompleteMessage({
      id: idMessage,
      role: "user",
      content: message,
      time: new Date().toLocaleTimeString(),
    });

    console.log("Complete Message:", completeMessage);
    sendMessage(completeMessage);
    setMessage("");
    setCompleteMessage({} as ChatMessage);
  };
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex items-end gap-2 rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur px-3 py-3 shadow-lg">
        {/* Input */}
        <textarea
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          value={message}
          placeholder="Digite sua mensagem..."
          className="flex-1 resize-none rounded-xl border border-slate-800 bg-slate-950/50 px-4 py-3 text-sm text-slate-100
                     placeholder:text-slate-400 h-12 overflow-y-auto
                     focus:outline-none focus:ring-2 focus:ring-indigo-500/60 focus:border-indigo-500/40
                     disabled:opacity-60"
        />

        {/* Botão enviar */}
        <button
          className="h-11 w-11 shrink-0 rounded-xl bg-indigo-600 text-white
                     hover:bg-indigo-500 active:scale-[0.97] transition
                     disabled:opacity-40 disabled:cursor-not-allowed
                     focus:outline-none focus:ring-2 focus:ring-indigo-500/60"
          aria-label="Enviar mensagem"
          onClick={() => handleSendMessage}
        >
          {/* Ícone avião */}
          <svg className="mx-auto h-5 w-5" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 12l18-9-6 9 6 9-18-9z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Hint */}
      <p className="mt-2 text-center text-xs text-slate-500">
        Enter para enviar • Shift + Enter para quebrar linha
      </p>
    </div>
  );
};

export default Input;
