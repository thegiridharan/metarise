"use client";
import { toast, Toaster } from "sonner";
import { useState } from "react";
import { Checkbox } from "./ui/checkbox";
import { motion } from "framer-motion";
import { Bug, CircleHelp, MessageCircleMore } from "lucide-react";

export default function FeedBackForm() {

    const [feedback, setFeedback] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");

    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);

    const sendFeedback = () => {
        if (feedback && fname && lname && email) {
            setFeedback("");
            setFname("");
            setLname("");
            setEmail("");
            setChecked1(false);
            setChecked2(false);
            setChecked3(false);
            toast.success("Feedback sent successfully!");
        }
        else {
            toast.error("Fill in all important fields!");
        }
    };

    return (
        <>
            <div className="h-[620px] w-screen bg-dotted flex items-center justify-center">
                <motion.div
                    whileHover={{ scale: 1.025 }}
                    className="outline-3 outline-accent bg-white p-[30px] flex flex-col gap-[8px] text-gray-600 rounded-[4px] shadow-2xl">
                    <p className="text-[28px] font-bold text-black">Simple Feedback Form</p>
                    <div className="h-[2px] bg-black mb-[15px]" />
                    <p>We would love to hear your thoughts.</p>
                    <p>Type <span className="text-red-700">*</span></p>
                    <div className="flex items-center justify-evenly mb-[10px]">
                        <div className="flex gap-[5px] items-center" onClick={() => setChecked1(true)}>
                            <Checkbox checked={checked1} id="bugs" className="cursor-pointer" />
                            <label htmlFor="bugs" className="cursor-pointer flex gap-[4px] items-center bg-red-500 p-[5px] rounded-[5px] text-white"><Bug className="h-[20px] w-[20px]" /> Bugs</label>
                        </div>
                        <div className="flex gap-[5px] items-center" onClick={() => setChecked2(true)}>
                            <Checkbox checked={checked2} id="questions" className="cursor-pointer" />
                            <label htmlFor="questions" className="cursor-pointer flex gap-[4px] items-center bg-green-500 p-[5px] rounded-[5px] text-white"><CircleHelp className="h-[20px] w-[20px]" /> Questions</label>
                        </div>
                        <div className="flex gap-[5px] items-center" onClick={() => setChecked3(true)}>
                            <Checkbox checked={checked3} id="comments" className="cursor-pointer" />
                            <label htmlFor="comments" className="cursor-pointer flex gap-[4px] items-center bg-yellow-500 p-[5px] rounded-[5px] text-white"><MessageCircleMore className="h-[20px] w-[20px]" /> Comments</label>
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
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 1.02 }}
                        className="mt-[20px] bg-black/80 text-white h-[40px] rounded-[5px] cursor-pointer hover:bg-black/90"
                        onClick={() => sendFeedback()}
                    >Send Feedback</motion.button>
                </motion.div>
            </div>
            <Toaster richColors />
        </>
    );
};