"use client";
import { useState, useRef, useEffect } from "react";

const suggestions = [
  "What projects has Piyush built?",
  "What are his ML skills?",
  "Tell me about his certifications",
  "How can I contact Piyush?",
];

export default function AIChat() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hey! I'm Piyush's AI assistant. Ask me anything about his projects, skills, experience or how to get in touch. 👋",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function send(msg) {
    const text = msg || input.trim();
    if (!text) return;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text }]);
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", text: data.reply }]);
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", text: "Sorry, something went wrong. Try again!" }]);
    }
    setLoading(false);
  }

  return (
    <section id="ai" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/3 to-transparent pointer-events-none" />

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-cyan-400 text-sm font-mono tracking-widest uppercase">AI Assistant</span>
          <h2 className="text-4xl md:text-5xl font-black mt-2 text-white">
            Ask About <span className="gradient-text">Piyush</span>
          </h2>
          <p className="text-gray-400 mt-4">Powered by an AI trained on Piyush's portfolio</p>
        </div>

        <div className="bg-white/3 border border-white/10 rounded-2xl overflow-hidden">
          {/* Chat header */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10 bg-white/3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-sm">
              🤖
            </div>
            <div>
              <p className="text-white text-sm font-medium">Piyush's AI</p>
              <p className="text-green-400 text-xs flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full pulse-glow" />
                Online
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-5 space-y-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xs md:max-w-md px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-br-sm"
                      : "bg-white/5 border border-white/10 text-gray-300 rounded-bl-sm"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/10 px-4 py-3 rounded-2xl rounded-bl-sm">
                  <div className="flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"
                        style={{ animationDelay: `${i * 0.15}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Suggestions */}
          <div className="px-5 pb-3 flex flex-wrap gap-2">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => send(s)}
                className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-gray-400 hover:border-cyan-400/50 hover:text-cyan-400 transition-all"
              >
                {s}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="px-5 pb-5">
            <div className="flex gap-3 bg-white/5 border border-white/10 rounded-xl p-2 focus-within:border-cyan-400/50 transition-colors">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Ask about projects, skills, contact..."
                className="flex-1 bg-transparent text-gray-300 text-sm outline-none placeholder-gray-600 px-2"
              />
              <button
                onClick={() => send()}
                disabled={loading || !input.trim()}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-medium disabled:opacity-40 hover:opacity-90 transition-opacity"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
