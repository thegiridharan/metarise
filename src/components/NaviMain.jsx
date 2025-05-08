"use client";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Separator } from "./ui/separator";
import LandingPage from "./LandingPage";

export default function NaviMain() {
    return (
        <>
            <div className="flex flex-col shadow-md pt-2.5 gap-1 pb-[14px] sticky top-0 z-50 backdrop-blur">
                <div className="flex justify-between py-[5px] px-[10px]">
                    <div className="flex gap-3 items-center">
                        <a href="/" className="font-semibold text-[18px]">MetaRise</a>
                    </div>
                    <div className="flex gap-5 items-center">
                        <a href="/feedback"><Button variant="outline" className="cursor-pointer">Feedback</Button></a>
                        <p className="cursor-pointer hover:text-gray-600">Docs</p>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Avatar className="cursor-pointer">
                                    <AvatarImage src="https://plus.unsplash.com/premium_photo-1672201106204-58e9af7a2888?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JhZGllbnR8ZW58MHx8MHx8fDA%3D" alt="@metarise"></AvatarImage>
                                    <AvatarFallback>TG</AvatarFallback>
                                </Avatar>
                            </PopoverTrigger>
                            <PopoverContent className="w-[250px] mr-4 mt-2">
                                <div className="flex flex-col gap-1">
                                    <a href="/integrations" className="hover:bg-accent h-[34px] flex items-center rounded-[5px] pl-2 cursor-pointer">App</a>
                                    <Separator className="my-1" />
                                    <p className="hover:bg-accent h-[34px] flex items-center rounded-[5px] pl-2 cursor-pointer">My Account</p>
                                    <Separator className="my-0.5" />
                                    <p className="hover:bg-accent h-[34px] flex items-center rounded-[5px] pl-2 cursor-pointer">Settings</p>
                                    <div className="flex justify-evenly mt-1.5">
                                        <Button variant="outline" className="cursor-pointer hover:bg-accent">SignUp</Button>
                                        <Button className="cursor-pointer">LogIn</Button>
                                    </div>
                                </div>
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
            </div>
        </>
    );
};