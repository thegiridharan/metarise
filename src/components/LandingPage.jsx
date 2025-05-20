"use client";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

function SectionA() {
    return (
        <div className="relative h-screen w-full">
            <img
                src="https://bambooagile.eu/wp-content/uploads/2021/09/1-10.png"
                className="absolute inset-0 w-full h-full object-cover"
                alt="Background"
            />
            <div className="h-full w-full absolute inset-0 flex flex-col items-start justify-center text-white bg-black/40 px-4 text-center bg-gradient-to-r from-black to-transparent">
                <p className="text-3xl md:text-5xl font-bold mb-4">MetaRise, An SEO App</p>
                <p className="text-lg md:text-2xl text-gray-200">Delivering Values through Software and AI.</p>
            </div>
        </div>
    );
};


function SectionB() {
    return (
        <>
            <div className="h-[250px] bg-accent flex flex-row p-[20px]">
                <a className="w-[350px]" href="/">
                    <p className="text-[28px] font-semibold">MetaRise</p>
                    <p className="text-[22px] text-gray-500">Delivering Values</p>
                </a>
                <div className="flex flex-row gap-[50px] justify-center w-full">
                    <div className="flex flex-col gap-[10px]">
                        <p className="font-semibold">Application Review</p>
                        <motion.a whileTap={{ scale: 0.95 }} href="/docs" className="mt-[10px] hover:bg-gray-200 rounded-[7px] p-[5px] flex flex-row gap-[10px] transition-colors duration-200">Documentation <ArrowUpRight /></motion.a>
                        <motion.a whileTap={{ scale: 0.95 }} href="/feedback" className="hover:bg-gray-200 rounded-[7px] p-[5px] flex flex-row gap-[10px] w-fit transition-colors duration-200">FeedBack <ArrowUpRight /></motion.a>
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <p className="font-semibold">Application Usage</p>
                        <motion.a whileTap={{ scale: 0.95 }} href="/account" className="mt-[10px] hover:bg-gray-200 rounded-[7px] p-[5px] flex flex-row gap-[10px] w-fit transition-colors duration-200">LogIn / Register <ArrowUpRight /></motion.a>
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <p className="font-semibold">Core Application Features</p>
                        <motion.a whileTap={{ scale: 0.95 }} href="/integrations" className="mt-[10px] hover:bg-gray-200 rounded-[7px] p-[5px] flex flex-row gap-[10px] w-fit transition-colors duration-200">Integrations<ArrowUpRight /></motion.a>
                        <motion.a whileTap={{ scale: 0.95 }} href="/chats" className="hover:bg-gray-200 rounded-[7px] p-[5px] flex flex-row gap-[10px] w-fit transition-colors duration-200">ChatBot<ArrowUpRight /></motion.a>
                        <motion.a whileTap={{ scale: 0.95 }} href="/monitoring" className="hover:bg-gray-200 rounded-[7px] p-[5px] flex flex-row gap-[10px] w-fit transition-colors duration-200">Monitoring<ArrowUpRight /></motion.a>
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <p className="font-semibold">Value Added Features</p>
                        <motion.a whileTap={{ scale: 0.95 }} href="/changelog" className="mt-[10px] hover:bg-gray-200 rounded-[7px] p-[5px] flex flex-row gap-[10px] w-fit transition-colors duration-200">ChangeLog<ArrowUpRight /></motion.a>
                        <motion.a whileTap={{ scale: 0.95 }} href="/settings" className="hover:bg-gray-200 rounded-[7px] p-[5px] flex flex-row gap-[10px] w-fit transition-colors duration-200">Settings<ArrowUpRight /></motion.a>
                        <motion.a whileTap={{ scale: 0.95 }} href="/subscriptions" className="hover:bg-gray-200 rounded-[7px] p-[5px] flex flex-row gap-[10px] w-fit transition-colors duration-200">Subscriptions<ArrowUpRight /></motion.a>
                    </div>
                </div>
            </div>
            <p className="bg-accent flex justify-center w-full h-[30px] items-center">All Rights Reserved @ MetaRise</p>
        </>
    );
};

export default function LandingPage() {

    return (
        <>
            <SectionA />
            <SectionB />
        </>
    );
};