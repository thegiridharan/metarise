"use client";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useLocalStorage } from "@/hooks/useLocalStorage"; // Update the import path accordingly
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Menu } from "lucide-react";
import { Toaster, toast } from "sonner";
import { LoadingButton } from "@mui/lab";
import FormattedMessage from "./FormattedMessage";

export default function ChatBot() {
    const [messages, setMessages] = useLocalStorage("chat", []);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { role: "user", content: input };
        const updatedMessages = [...messages, userMessage];
        setMessages(updatedMessages);
        setInput("");
        setLoading(true);

        try {
            const response = await axios.post(`/api/chat`, { message: input });
            const botMessage = { role: "assistant", content: response.data.reply };
            setMessages((prev) => [...prev, botMessage]);
        } catch (error) {
            console.error("Error:", error);
            toast.error("Failed to fetch response");
        } finally {
            setLoading(false);
        }
    };

    const clearCache = () => {
        setMessages([]);
        toast.success("Chat Memory Cleared!");
    };

    if (!isMounted) return null;

    return (
        <>
            <div className="h-[590px] w-full flex items-top justify-center pt-[25px] px-[50px] bg-dotted">
                <div className="rounded-full h-8 w-8 justify-center">
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Menu className="w-6 h-6 cursor-pointer text-black" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="absolute">
                            <DropdownMenuLabel>
                                <button className="cursor-pointer" onClick={clearCache}>Clear Chat</button>
                            </DropdownMenuLabel>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <div className="grid grid-flow-row grid-rows-5 h-[100%] w-[80%] mx-auto p-4">
                    <div className="overflow-y-auto p-2 row-span-4">
                        {messages.map((msg, index) => (
                            <div key={index} className={`p-2 my-1 rounded-md ${msg.role === "user" ? "text-black text-right bg-accent" : "bg-accent text-black text-left"}`}>
                                {<FormattedMessage message={msg.content} />}
                            </div>
                        ))}
                        <div ref={messagesEndRef}></div>
                    </div>
                    <div className="flex items-center mt-2 row-span-1 px-[20px] bg-accent rounded-2xl">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                            className="flex-1 p-2 rounded-lg border border-gray-300 focus:outline-none bg-white mr-[10px]"
                            placeholder="Ask anything..."
                        />
                        <LoadingButton
                            loadingPosition="start"
                            loading={loading}
                            variant="contained"
                            onClick={sendMessage}
                            className="cursor-pointer"
                            sx={{ backgroundColor: "black", textTransform: "none" }}
                        >
                            Submit
                        </LoadingButton>
                    </div>
                </div>
            </div>
            <Toaster richColors />
        </>
    );
};