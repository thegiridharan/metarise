"use client";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { toast, Toaster } from "sonner";


export default function Accounts() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conPassword, setConPassword] = useState("");

    const registerWork = () => {
        if (email && password && conPassword) {
            setEmail("");
            setPassword("");
            setConPassword("");
            toast.success("Registerd Successfully !");
        }
        else {
            toast.error("Fill the required fields !");
        }
    };

    const [remail, setRemail] = useState("");
    const [rpassword, setRpassword] = useState("");

    const loginWork = () => {
        if (remail && rpassword) {
            setRemail("");
            setRpassword("");
            toast.success("LogIn Successfully !");
        }
        else {
            toast.error("Fill the required fields !")
        }
    };

    return (
        <>
            <div className="h-[590px] flex items-center justify-center bg-dotted">
                <Tabs defaultValue="register" className="w-[500px]">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="register">Register</TabsTrigger>
                        <TabsTrigger value="log">LogIn</TabsTrigger>
                    </TabsList>
                    <TabsContent value="register">
                        <div className="flex flex-col gap-[10px] outline-1 rounded-[3px] p-[30px] h-[480px] bg-white text-gray-600">
                            <div className="px-[5px] mb-[15px]">
                                <p className="text-[26px] font-semibold text-black">Register</p>
                                <p className="text-gray-600">Click submit when you're done.</p>
                            </div>
                            <p className="px-[5px]">Email ID</p>
                            <input placeholder="New Email ID" className="mb-[15px] px-[5px] outline-1 py-[4px] rounded-[3px]" value={email} onChange={(e) => setEmail(e.target.value)} />

                            <p className="px-[5px]">New Password</p>
                            <input placeholder="New Password" className="mb-[15px] px-[5px] outline-1 py-[4px] rounded-[3px]" value={password} onChange={(e) => setPassword(e.target.value)} />

                            <p className="px-[5px]">Confirm New Password</p>
                            <input placeholder="Confirm New Password" className="mb-[15px] px-[5px] outline-1 py-[4px] rounded-[3px]" value={conPassword} onChange={(e) => setConPassword(e.target.value)} />

                            <button onClick={() => registerWork()} className="bg-black h-[40px] w-[120px] rounded-[4px] text-white font-semibold cursor-pointer">Submit</button>
                        </div>
                    </TabsContent>
                    <TabsContent value="log">
                        <div className="flex flex-col gap-[10px] outline-1 rounded-[3px] p-[30px] h-[480px] bg-white text-gray-600">
                            <div className="px-[5px] mb-[15px]">
                                <p className="text-[26px] font-semibold text-black">LogIn</p>
                                <p className="text-gray-600">Click submit when you're done.</p>
                            </div>
                            <p className="px-[5px]">Registered Email ID</p>
                            <input placeholder="Email ID" className="mb-[15px] px-[5px] outline-1 py-[4px] rounded-[3px]" value={remail} onChange={(e) => setRemail(e.target.value)} />

                            <p className="px-[5px]">Password</p>
                            <input placeholder="Password" className="mb-[15px] px-[5px] outline-1 py-[4px] rounded-[3px]" value={rpassword} onChange={(e) => setRpassword(e.target.value)} />

                            <button onClick={() => loginWork()} className="bg-black h-[40px] w-[120px] rounded-[4px] text-white font-semibold cursor-pointer">Submit</button>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
            <Toaster richColors />
        </>
    );
};