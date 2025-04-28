"use client";
import axios from "axios";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useEffect, useState } from "react";
import {
    Card, CardContent, CardDescription, CardHeader, CardFooter, CardTitle
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { toast, Toaster } from "sonner";

export default function Monitoring() {
    const [hasMounted, setHasMounted] = useState(false);
    const [mdata, setMdata] = useLocalStorage("mdata", []);
    const [load, setLoad] = useState(false);
    const [storage] = useLocalStorage("reponew", []);
    const [index] = useLocalStorage("repoindex", 0);
    const [isPaid] = useLocalStorage("paid", false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    useEffect(() => {
        if (!hasMounted || !isPaid || !storage.homepage) return;

        const homepageLink = storage.homepage;
        console.log(homepageLink)

        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.microlink.io/?url=${homepageLink}`);
                if (response.data.statusCode === 200) {
                    setMdata(response.data);
                    setLoad(true);
                } else {
                    setLoad(false);
                }
            } catch (e) {
                console.error(e);
                setLoad(false);
            }
        };

        fetchData();
    }, [hasMounted, isPaid, index, storage]);

    if (!hasMounted) return null;

    if (!isPaid) {
        return (
            <div className="h-[590px] w-screen flex items-center justify-center bg-dotted">
                <p className="text-black">Upgrade to paid to view monitoring data.</p>
            </div>
        );
    }

    if (!load) {
        return (
            <div className="h-[590px] w-screen flex items-center justify-center bg-dotted">
                <p className="text-black">Select Repository to View here.</p>
            </div>
        );
    }

    return (
        <>
            <div className="flex flex-1 items-center justify-evenly flex-wrap gap-6 h-screen bg-dotted">
                <Card className="w-[550px] h-[480px] p-[25px] bg-accent">
                    <CardHeader>
                        <CardTitle>Status</CardTitle>
                        <CardDescription>
                            The website live is <Badge className="bg-green-500">Success</Badge>
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-2">
                        <p>Status: {mdata.status}</p>
                        <p>Title: {mdata.data.title}</p>
                        <p>Publisher: {mdata.data.publisher}</p>
                        <a
                            href={mdata.data.image?.url}
                            className="outline-2 rounded-[7px] px-[10px] w-[200px] hover:text-white hover:bg-black hover:outline-none py-[5px] text-center my-[10px] cursor-pointer"
                        >
                            Image Download URL
                        </a>
                        <div className="rounded-[10px] max-h-[150px] max-w-[650px] flex items-center justify-center overflow-hidden">
                            <img src={mdata.data.image?.url} className="object-contain w-full h-auto" alt="Website preview" />
                        </div>
                    </CardContent>
                </Card>

                <Card className="w-[550px] min-h-[480px] p-[25px] bg-accent">
                    <CardHeader>
                        <CardTitle>Meta Data</CardTitle>
                        <CardDescription>Complete meta data from the website.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-2">
                        <p>Date: {mdata.data.date}</p>
                        <p>Public URL: {mdata.data.url}</p>
                        <p>Description: {mdata.data.description}</p>
                        <p>Deployed Date: {mdata.headers.date}</p>
                        <p>Server: {mdata.headers.server}</p>
                    </CardContent>
                    <CardFooter className="flex flex-row items-center justify-between px-[20px]">
                        <Avatar>
                            <AvatarImage src={mdata.data.logo?.url} alt="Logo" />
                            <AvatarFallback>{mdata.data.logo?.type || "NA"}</AvatarFallback>
                        </Avatar>
                        <a
                            href={mdata.data.logo?.url}
                            className="outline-2 rounded-[7px] px-[10px] w-[200px] hover:text-white hover:bg-black hover:outline-none py-[5px] text-center my-[10px] cursor-pointer"
                        >
                            Logo Download URL
                        </a>
                    </CardFooter>
                </Card>
            </div>
            <Toaster richColors />
        </>
    );
};