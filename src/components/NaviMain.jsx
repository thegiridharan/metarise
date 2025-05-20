"use client";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Separator } from "./ui/separator";
import LandingPage from "./LandingPage";
import { AlignJustify, AlignLeft, AlignRight, AppWindow, CircleUserRound, IndianRupee, Settings } from "lucide-react";
import { motion } from "framer-motion";

export default function NaviMain() {
    return (
        <>
            <div className="flex flex-col shadow-md pt-2.5 gap-1 pb-[14px] sticky top-0 z-50 backdrop-blur-md">
                <div className="flex justify-between py-[5px] px-[10px]">
                    <div className="flex gap-3 items-center">
                        <a href="/" className="font-semibold text-[18px] bg-white px-[10px] py-[5px] rounded-[6px]">MetaRise</a>
                    </div>
                    <div className="flex gap-5 items-center">
                        <motion.a whileTap={{ scale: 0.95 }} href="/feedback"><button className="p-[5px] outline-1 outline-gray-400 cursor-pointer rounded-[5px] px-[10px] bg-white hover:bg-gray-200 transition-colors duration-200">Feedback</button></motion.a>
                        <motion.a
                            whileTap={{ scale: 0.95 }}
                            href="/docs"
                            className="cursor-pointer hover:bg-gray-200 bg-white rounded-[6px] px-[18px] py-[5px] transition-colors duration-200">
                            Docs
                        </motion.a>
                        <Popover>
                            <PopoverTrigger asChild>
                                <motion.div whileTap={{ scale: 0.95 }}>
                                    <Avatar className="cursor-pointer flex items-center justify-center bg-white hover:bg-gray-200 p-[5px]">
                                        <AlignRight className="h-[30px] w-[30px]" />
                                    </Avatar>
                                </motion.div>
                            </PopoverTrigger>
                            <PopoverContent className="w-[250px] mr-4 mt-2">
                                <div className="flex flex-col gap-1">
                                    <motion.a whileTap={{ scale: 0.95 }} href="/integrations" className="hover:bg-gray-200 h-[34px] flex items-center rounded-[5px] px-2 cursor-pointer justify-between transition-colors duration-200">App <AppWindow className="h-[20px] w-[20px]" /></motion.a>
                                    <Separator className="my-1" />
                                    <motion.a whileTap={{ scale: 0.95 }} href="/account" className="hover:bg-gray-200 h-[34px] flex items-center rounded-[5px] px-2 cursor-pointer justify-between transition-colors duration-200">My Account <CircleUserRound className="h-[20px] w-[20px]" /></motion.a>
                                    <Separator className="my-0.5" />
                                    <motion.a whileTap={{ scale: 0.95 }} href="/settings" className="hover:bg-gray-200 h-[34px] flex items-center rounded-[5px] px-2 cursor-pointer justify-between transition-colors duration-200">Settings<Settings className="h-[20px] w-[20px]" /></motion.a>
                                    <Separator className="my-0.5" />
                                    <motion.a whileTap={{ scale: 0.95 }} href="/subscriptions" className="hover:bg-gray-200 h-[34px] flex items-center rounded-[5px] px-2 cursor-pointer justify-between transition-colors duration-200">Subscriptions <IndianRupee className="h-[20px] w-[20px]" /></motion.a>
                                </div>
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
            </div>
        </>
    );
};