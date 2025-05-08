"use client";
import { toast, Toaster } from "sonner";
import { useState } from "react";
import { Checkbox } from "./ui/checkbox";

export default function FeedBackForm() {

    const [feedback, setFeedback] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");

    const sendFeedback = () => {
        if (feedback && fname && lname && email) {
            setFeedback("");
            setFname("");
            setLname("");
            setEmail("");
            toast.success("Feedback sent successfully!");
        }
        else {
            toast.error("Fill all important fields!");
        }
    };

    return (
        <>
            <div className="h-[620px] w-screen bg-dotted flex items-center justify-center">
                <div className="outline-2 outline-accent bg-white p-[30px] flex flex-col gap-[8px] text-gray-600">
                    <p className="text-[28px] font-bold text-black">Simple Feedback Form</p>
                    <div className="h-[2px] bg-black" />
                    <p>We would love to hear your thoughts</p>
                    <p>Type <span className="text-red-700">*</span></p>
                    <div className="flex items-center justify-evenly">
                        <div className="flex gap-[5px] items-center">
                            <Checkbox id="bugs" className="cursor-pointer" />
                            <label htmlFor="bugs">Bugs</label>
                        </div>
                        <div className="flex gap-[5px] items-center">
                            <Checkbox id="questions" className="cursor-pointer" />
                            <label htmlFor="questions">Questions</label>
                        </div>
                        <div className="flex gap-[5px] items-center">
                            <Checkbox id="comments" className="cursor-pointer" />
                            <label htmlFor="comments">Comments</label>
                        </div>
                    </div>
                    <p>Your Feedback</p>
                    <textarea className="outline p-1 rounded-[2px]" placeholder="Your Comments" value={feedback} onChange={e => setFeedback(e.target.value)} />
                    <p>Name <span className="text-red-700">*</span></p>
                    <div className="flex gap-[10px]">
                        <input className="outline p-1 rounded-[2px]" placeholder="First" value={fname} onChange={e => setFname(e.target.value)} />
                        <input className="outline p-1 rounded-[2px]" placeholder="Last" value={lname} onChange={e => setLname(e.target.value)} />
                    </div>
                    <p>Email <span className="text-red-700">*</span></p>
                    <input className="outline p-1 rounded-[2px]" placeholder="name@example.com" value={email} onChange={e => setEmail(e.target.value)} />
                    <button onClick={() => sendFeedback()} className="mt-[20px] bg-black text-white h-[40px] rounded-[5px] cursor-pointer">Send Feedback</button>
                </div>
            </div>
            <Toaster richColors />
        </>
    );
};