"use client";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useEffect, useState } from "react";
import { Badge } from "./ui/badge";

export default function ChangeLog() {

    const [changelog, setChangelog] = useLocalStorage("changelog", []);
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) return null;

    return (
        <div className="p-[50px] text-gray-700 bg-dotted h-screen">
            <div>
                <p className="text-[24px] font-semibold text-gray-700 mb-[20px]">Changelog</p>
            </div>
            <div className="flex flex-col gap-[12px]">
                {[...changelog].reverse().map((value, index) => (
                    <div key={index} className="flex flex-col gap-[5px]">
                        <p className="text-[20px]">{value?.date}</p>
                        <p className="flex gap-[8px]"><Badge>Repository</Badge>{value?.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};