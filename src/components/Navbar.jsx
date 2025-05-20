"use client";
import React, { useEffect, useState } from "react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle, NavigationMenuTrigger } from "../components/ui/navigation-menu";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Separator } from "./ui/separator";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { motion } from "framer-motion";
import { AlignRight, Bot, CircleUserRound, ClockFading, GitCompareArrows, Github, IndianRupee, Settings } from "lucide-react";

export default function Navbar() {
    return (
        <>
            <div className="flex flex-col shadow-md pt-2.5 gap-1 pb-1 sticky top-0 z-50 backdrop-blur-2xl">
                <div className="flex justify-between py-[5px] px-[10px]">
                    <div className="flex gap-3 items-center">
                        <a href="/" className="font-semibold text-[18px]">MetaRise</a>
                        <p> \ </p>
                        <p>thegiridharan</p>
                        <motion.div whileHover={{ scale: 1.05 }}><Badge variant="outline">Free Trial</Badge></motion.div>
                    </div>
                    <div className="flex gap-[8px] items-center">
                        <motion.a whileTap={{ scale: 0.95 }} href="/feedback"><button className="p-[5px] outline-1 outline-gray-400 cursor-pointer rounded-[5px] px-[10px] bg-white hover:bg-gray-200 transition-colors duration-200">Feedback</button></motion.a>
                        <motion.a
                            whileTap={{ scale: 0.95 }}
                            href="/changelog"
                            className="cursor-pointer hover:bg-gray-200 bg-white rounded-[6px] px-[12px] py-[5px] transition-colors duration-200">
                            ChangeLog
                        </motion.a>
                        <div className="h-[18px] outline-1" />
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
                <div>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <motion.div whileTap={{ scale: 0.95 }}>
                                    <Link href="/integrations" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}><p className="text-[16px] font-normal flex gap-[7px] items-center"> <GitCompareArrows /> Integrations</p></NavigationMenuLink>
                                    </Link>
                                </motion.div>
                            </NavigationMenuItem>
                            <div className="h-[18px] outline-1" />
                            <NavigationMenuItem>
                                <motion.div whileTap={{ scale: 0.95 }}>
                                    <Link href="/chats" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}><p className="text-[16px] font-normal flex gap-[7px] items-center"> <Bot /> ChatAI</p></NavigationMenuLink>
                                    </Link>
                                </motion.div>
                            </NavigationMenuItem>
                            <div className="h-[18px] outline-1" />
                            <NavigationMenuItem>
                                <motion.div whileTap={{ scale: 0.95 }}>
                                    <Link href="/monitoring" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}><p className="text-[16px] font-normal flex gap-[7px] items-center"><ClockFading /> Monitoring</p></NavigationMenuLink>
                                    </Link>
                                </motion.div>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>
        </>
    );
};