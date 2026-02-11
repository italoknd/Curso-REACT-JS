type ChatMessage = {
  id: number;
  role: "user" | "assistant";
  content: string;
  time?: string;
};

const Messages = ({ messages }: { messages: ChatMessage[] }) => {
  return (
    <div className="flex-1 overflow-y-auto">
      <h1>Hello, how can I help you today? </h1>
      <div className="mx-auto w-full max-w-3xl px-4 py-6 space-y-4">
        {/* Separator */}
        <div className="flex items-center gap-3 py-2">
          <div className="h-px flex-1 bg-slate-800" />
          <span className="text-[11px] text-slate-500">Hoje</span>
          <div className="h-px flex-1 bg-slate-800" />
        </div>

        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex ${
              m.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-lg
                ${
                  m.role === "user"
                    ? "bg-indigo-600 text-white shadow-indigo-600/10"
                    : "bg-slate-900/70 border border-slate-800 text-slate-100 shadow-black/30"
                }`}
            >
              <p className="whitespace-pre-wrap">{m.content}</p>

              <div className="mt-2 flex items-center justify-end gap-2 text-[11px] opacity-80">
                <span
                  className={
                    m.role === "user" ? "text-indigo-100" : "text-slate-400"
                  }
                >
                  {m.time}
                </span>
                <span
                  className={`inline-flex h-2 w-2 rounded-full ${
                    m.role === "user" ? "bg-white/70" : "bg-emerald-400/70"
                  }`}
                />
              </div>
            </div>
          </div>
        ))}

        {/* Typing placeholder (visual apenas) */}
        <div className="flex justify-start">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 px-4 py-3 shadow-lg">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-slate-400/70" />
              <span className="h-2 w-2 rounded-full bg-slate-400/50" />
              <span className="h-2 w-2 rounded-full bg-slate-400/30" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
