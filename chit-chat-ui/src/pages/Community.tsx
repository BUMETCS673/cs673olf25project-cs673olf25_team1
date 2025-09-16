// src/pages/AI.tsx
import { useState, useEffect, useRef } from "react";
import io from "socket.io-client";

const USER_TYPING_TIMEOUT = 5000;
const socket = io("http://localhost:3000");

export default function AI() {
    const [messages, setMessages] = useState<string[]>([]);
    const [inputText, setInputText] = useState("");
    const [autoScroll, setAutoScroll] = useState(true);
    const [typingUsers, setTypingUsers] = useState<Set<string>>(new Set());

    const messagesContainerRef = useRef<HTMLDivElement | null>(null);
    const messagesEndRef = useRef<HTMLDivElement | null>(null);
    const typingTimeoutsRef = useRef<Map<string, NodeJS.Timeout>>(new Map());

    const handleButtonClick = () => {
        if (inputText.trim() !== "") {
            setMessages([...messages, `You: ${inputText}`]);
            setInputText("");
            socket.emit("chat-message", inputText);
        }
    };

    useEffect(() => {
        socket.on("connect", () => {
            setMessages((prev) => [
                ...prev,
                `Connected to server (ID: ${socket.id})`,
            ]);
        });

        socket.on("chat-message", (result) => {
            if (result.data[0] !== socket.id) {
                setMessages((prev) => [
                    ...prev,
                    `${result.data[0]}: ${result.data[1]}`,
                ]);
            }
        });

        socket.on("user-typing", (result) => {
            const userId = result.data[0];
            if (userId === socket.id) return;

            setTypingUsers((prev) => new Set(prev).add(userId));

            if (typingTimeoutsRef.current.has(userId)) {
                clearTimeout(typingTimeoutsRef.current.get(userId)!);
            }

            const timeout = setTimeout(() => {
                setTypingUsers((prev) => {
                    const newSet = new Set(prev);
                    newSet.delete(userId);
                    return newSet;
                });
                typingTimeoutsRef.current.delete(userId);
            }, USER_TYPING_TIMEOUT);

            typingTimeoutsRef.current.set(userId, timeout);
        });

        return () => {
            socket.off("connect");
            socket.off("chat-message");
            socket.off("user-typing");
        };
    }, []);

    useEffect(() => {
        if (autoScroll && messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages, typingUsers, autoScroll]);

    const handleScroll = () => {
        const container = messagesContainerRef.current;
        if (!container) return;
        const isAtBottom =
            container.scrollHeight - container.scrollTop <=
            container.clientHeight + 5;
        setAutoScroll(isAtBottom);
    };

    return (
        <div className="flex flex-col h-screen">
            {/* Messages */}
            <main
                ref={messagesContainerRef}
                onScroll={handleScroll}
                className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50"
            >
                {messages.map((msg, index) => {
                    const isUser = msg.startsWith("You:");
                    return (
                        <div
                            key={index}
                            className={`flex ${isUser ? "justify-end" : "justify-start"
                                }`}
                        >
                            <div
                                className={`max-w-xl px-4 py-3 rounded-2xl shadow-sm ${isUser
                                        ? "bg-blue-600 text-white rounded-br-none"
                                        : "bg-white text-gray-900 border rounded-bl-none"
                                    }`}
                            >
                                {msg}
                            </div>
                        </div>
                    );
                })}

                {/* Typing Indicator */}
                {typingUsers.size > 0 && (
                    <div className="text-sm italic text-gray-500">
                        {typingUsers.size === 1
                            ? "User is typing..."
                            : "Users are typing..."}
                    </div>
                )}

                <div ref={messagesEndRef} />
            </main>

            {/* Input */}
            <footer className="border-t bg-white p-4">
                <div className="flex items-center gap-3 max-w-3xl mx-auto">
                    <input
                        type="text"
                        value={inputText}
                        onChange={(e) => {
                            setInputText(e.target.value);
                            socket.emit("user-typing", { data: [socket.id] });
                        }}
                        placeholder="Send a message..."
                        className="flex-1 rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        onClick={handleButtonClick}
                        className="rounded-lg bg-gray-600 px-5 py-3 text-white text-sm font-medium hover:bg-gray-700 transition"
                    >
                        Send
                    </button>
                </div>
            </footer>
        </div>
    );
}
