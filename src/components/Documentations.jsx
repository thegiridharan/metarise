import { SearchIcon } from "lucide-react";

export default function Documentation() {
    return (
        <>
            <div className="h-[400px] w-full relative">
                <img src="https://wallpaperbat.com/img/8627514-computer-system-wallpaper-free.jpg" className="h-[400px] w-screen" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-[20px]">
                    <p className="text-white text-[34px] font-semibold">Search Documentation</p>
                    <div className="bg-white rounded-[10px] w-[850px] h-[60px] flex flex-row gap-[10px] items-center px-[20px] shadow-2xl">
                        <SearchIcon className="text-gray-700 mr-[10px]" />
                        <input placeholder="Type your queries..." className="outline-none w-[800px]" />
                        <button className="cursor-pointer bg-black/80 hover:bg-black/90 rounded-[10px] text-white h-[40px] px-[10px]">Search</button>
                    </div>
                </div>
            </div>
        </>
    );
};