"use client";

import { useEffect, useState } from "react";

export default function Setting() {

    const listitem = ["chat", "reponew", "account", "repoindex", "username", "changelog"];
    const [sizes, setSizes] = useState({});

    useEffect(() => {
        const tempSizes = {};
        listitem.forEach(key => {
            const data = localStorage.getItem(key);
            if (data !== null) {
                const bytes = new Blob([data]).size;
                const sizeInKB = (bytes / 1024).toFixed(2);
                tempSizes[key] = sizeInKB;
            } else {
                tempSizes[key] = "0.00";
            }
        });
        setSizes(tempSizes);
    }, []);

    return (
        <div className="p-[30px] bg-dotted">
            <div>
                <p className="text-[34px]">Settings</p>
                <p className="text-[20px] text-gray-600">Cache & Local Storage</p>
            </div>

            <div className="h-full flex flex-col items-center justify-center">
                <p className="mt-4 text-[18px] mb-[20px] font-semibold w-[400px] text-center">All Storages</p>
                {listitem.map((key, index) => (
                    <div key={index} className="flex justify-between w-[400px] mb-[15px] bg-accent h-[55px] rounded-[10px] items-center px-[10px]">
                        <p>{key}</p>
                        <p>{sizes[key] || "0.00"} KB</p>
                    </div>
                ))}
            </div>
        </div>
    );
};