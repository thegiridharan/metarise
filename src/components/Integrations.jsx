"use client";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogDescription,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import { toast, Toaster } from "sonner";
import { ScrollArea } from "./ui/scroll-area";
import { Loader2 } from "lucide-react";
import axios from "axios";
import { Skeleton } from "./ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import {
    Table,
    TableHead,
    TableRow,
    TableHeader,
    TableBody,
    TableCell,
} from "./ui/table";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Menu } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuLabel } from "./ui/dropdown-menu";
import { CircularProgress } from '@mui/material';
import { LinearProgress } from '@mui/material';
import { LoadingButton } from '@mui/lab';

export default function Integrations() {
    const [loading, setLoading] = useState(false);
    const [load, setLoad] = useState(false);
    const [alert, setAlert] = useState(false);
    const [account, setAccount] = useLocalStorage("account", []);
    const [loadData, setLoadData] = useState("");
    const [storage, setStorage] = useLocalStorage("reponew", []);
    const [sload, SetSload] = useState(false);
    const [index, setIndex] = useLocalStorage("repoindex", 0);
    const [isClient, setIsClient] = useState(false);
    const [isPaid, setIsPaid] = useLocalStorage("paid", []);
    const [username, setUsername] = useLocalStorage("username", []);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const sanitizeInput = async () => {
        const response = await fetch(`/api/github/${account}`);
        const result = response.data;

        if (result.status === "404" || result.message === "Not Found") {
            setLoading(false);
            setLoad(false);
            setAlert(true);
            toast.error("Wrong Account Name!")
            return false;
        }

        return true;
    };

    const getRepos = async () => {
        try {
            setLoading(true);

            if (await sanitizeInput()) {
                const response = await fetch(`/api/github/${account}`);
                const result = response.data;

                setStorage(Array.isArray(result) ? result : []);
                setLoad(true);
                setLoadData(true);

                const uname = response.data.owner.login;
                setUsername(uname);
                toast.success("Repository Fetched Successfully!")
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
            setIndex(0);
        }
    };

    const secondaryData = (index) => {
        setIndex(index);
        SetSload(true);
        return;
    };

    const [initializedPage, setInitializedPage] = useLocalStorage(
        "initedpage",
        []
    );
    const [newPage, setNewPage] = useState(false);
    const [newPageLoad, setNewPageLoad] = useState(false);

    const triggerInitializedPage = (index) => {
        const repo = Array.isArray(storage) ? storage[index] : null;
        if (repo) {
            setStorage(repo);
            setNewPage(true);
            setNewPageLoad(true);
            setIsPaid(true);
            toast.info("Repository Added Successfully!")
        }
    };

    const deleteRepo = async () => {
        await getRepos();
        setNewPage(false);
        setNewPageLoad(false);
        setIsPaid(false);
        toast.error("Repository Deleted Successfully!");
    };

    const clearCache = () => {
        setStorage([]);
        toast.success("Cache Cleared!");
    };

    if (!isClient) return null;

    return (
        <>
            {isPaid ? (
                <div className="flex flex-col items-center justify-center h-[590px] bg-dotted">
                    <div className="h-[380px] w-[600px] bg-accent p-[10px] rounded-[7px] shadow-2xs">
                        <div className="h-[85%] w-full">
                            <div className="flex items-center justify-between px-[10px] h-[50px]">
                                <Avatar>
                                    <AvatarImage src={storage.owner.avatar_url} />
                                    <AvatarFallback>MR</AvatarFallback>
                                </Avatar>
                                <Badge className="bg-green-500">Live</Badge>
                            </div>
                            <div className="flex flex-col gap-2 pl-[30px] pt-[10px]">
                                <p>Project Name: {storage.name}</p>
                                <p>Project ID: {storage.id}</p>
                                <p>Full Name: {storage.full_name}</p>
                                <p>Owner</p>
                                <p>Owner's Login: {storage.owner.login}</p>
                                <p>Owner's ID: {storage.owner.id}</p>
                                <p>Repository Type: {storage.owner.user_view_type}</p>
                            </div>
                        </div>
                        <div className="w-full flex items-center justify-center">
                            <AlertDialog>
                                <AlertDialogTrigger className="cursor-pointer bg-black text-white rounded-[7px] h-[38px] px-[15px] text-[15px] ">
                                    Terminate Repository
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Confirm this action?</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            You gonna terminate this process, Are you sure?
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel className="cursor-pointer">
                                            Cancel
                                        </AlertDialogCancel>
                                        <AlertDialogAction
                                            className="cursor-pointer"
                                            onClick={() => deleteRepo()}
                                        >
                                            Continue
                                        </AlertDialogAction>
                                        <Toaster />
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="bg-dotted">
                    <div className="flex justify-between m-5 p-2.5 bg-accent rounded-[7px]">
                        <div className="rounded-full flex items-center h-8 w-8 justify-center">
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <Menu className="w-6 h-6 cursor-pointer" />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="absolute">
                                    <DropdownMenuLabel>
                                        <button className="cursor-pointer" onClick={() => clearCache()}>Clear Cache</button>
                                    </DropdownMenuLabel>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                        <div>
                            <Dialog>
                                <DialogTrigger className="bg-black text-white rounded-[7px] h-[38px] px-[10px] text-[15px] cursor-pointer">
                                    New Repository
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                        <DialogTitle>Add New Repository</DialogTitle>
                                        <DialogDescription>
                                            Make your GitHub repository available to access from this site.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="flex flex-col gap-2">
                                        <p className="font-semibold">GitHub's Username</p>
                                        <Input
                                            placeholder="Username"
                                            className="outline-2 outline-accent"
                                            type="text"
                                            value={account}
                                            onChange={(e) => setAccount(e.target.value)}
                                        />
                                    </div>
                                    <DialogFooter>
                                        <LoadingButton loadingPosition="start" loading={loading} variant="contained" onClick={() => getRepos()} className="cursor-pointer" sx={{ backgroundColor: "black", textTransform: "none" }}>Submit</LoadingButton>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[20px] md:gap-0 md:flex-row md:justify-evenly py-[50px]">
                        <div>
                            <ScrollArea className="h-[500px] w-[600px] rounded-md bg-white ring-2 ring-gray-300">
                                <div className="p-5 flex flex-col gap-2">
                                    {storage && Array.isArray(storage) ? (
                                        loading ? (
                                            <div className="flex flex-col gap-3 mt-10 px-6">
                                                <Skeleton className="h-3 w-[350px]" />
                                                <Skeleton className="h-3 w-[300px]" />
                                            </div>
                                        ) : (
                                            storage.map((data, index) => (
                                                <div
                                                    key={index}
                                                    className="flex flex-row gap-[20px] h-[60px] items-center hover:bg-accent px-[20px] py-[40px] rounded-[7px] border-[3px] border-accent"
                                                    onClick={() => secondaryData(index)}
                                                >
                                                    <Avatar>
                                                        <AvatarImage src={data.owner.avatar_url} />
                                                        <AvatarFallback>MR</AvatarFallback>
                                                    </Avatar>
                                                    <div>
                                                        <p>{data.name}</p>
                                                        <p>
                                                            {data.homepage ? (
                                                                <Badge className="bg-green-500">Deployed</Badge>
                                                            ) : (
                                                                <Badge variant="outline">Not Deployed</Badge>
                                                            )}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))
                                        )
                                    ) : null}
                                </div>
                            </ScrollArea>
                        </div>

                        <div>
                            <ScrollArea className="h-[400px] w-[600px] rounded-md bg-white ring-2 ring-gray-300">
                                <div className="p-5 flex flex-col gap-2">
                                    {storage && Array.isArray(storage) ? (
                                        loading ? (
                                            <div className="flex flex-col gap-3 mt-10 px-6">
                                                <Skeleton className="h-3 w-[350px]" />
                                                <Skeleton className="h-3 w-[300px]" />
                                            </div>
                                        ) : storage[index] ? (
                                            <div className="flex flex-col gap-8">
                                                <div className="flex flex-row justify-between items-center p-[20px] bg-accent rounded-[7px]">
                                                    <p>{storage[index].name}</p>
                                                    <Avatar>
                                                        <AvatarImage
                                                            src={storage[index].owner.avatar_url}
                                                        />
                                                        <AvatarFallback>MR</AvatarFallback>
                                                    </Avatar>
                                                </div>
                                                <div>
                                                    {storage[index].homepage ? (
                                                        <a
                                                            href={storage[index].homepage}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            Status:{" "}
                                                            <Badge className="bg-green-500 ml-2">
                                                                Deployed
                                                            </Badge>
                                                            <button className="outline-blue-600 outline-2 rounded-full px-[15px] cursor-pointer hover:bg-blue-100 bg-blue-50 ml-3">
                                                                Link
                                                            </button>
                                                        </a>
                                                    ) : (
                                                        <p>
                                                            Status:{" "}
                                                            <Badge className="bg-red-500 ml-2">
                                                                Not Deployed
                                                            </Badge>
                                                        </p>
                                                    )}
                                                </div>
                                                <div>
                                                    <Table>
                                                        <TableHeader>
                                                            <TableRow>
                                                                <TableCell>Issues</TableCell>
                                                                <TableCell>Projects</TableCell>
                                                                <TableCell>Downloads</TableCell>
                                                                <TableCell>Wiki</TableCell>
                                                                <TableCell>Pages</TableCell>
                                                                <TableCell>Discussions</TableCell>
                                                            </TableRow>
                                                        </TableHeader>
                                                        <TableBody>
                                                            <TableRow>
                                                                <TableCell>
                                                                    {storage[index].has_issues ? (
                                                                        <Badge>True</Badge>
                                                                    ) : (
                                                                        <Badge className="bg-red-500">False</Badge>
                                                                    )}
                                                                </TableCell>
                                                                <TableCell>
                                                                    {storage[index].has_projects ? (
                                                                        <Badge>True</Badge>
                                                                    ) : (
                                                                        <Badge className="bg-red-500">False</Badge>
                                                                    )}
                                                                </TableCell>
                                                                <TableCell>
                                                                    {storage[index].has_downloads ? (
                                                                        <Badge>True</Badge>
                                                                    ) : (
                                                                        <Badge className="bg-red-500">False</Badge>
                                                                    )}
                                                                </TableCell>
                                                                <TableCell>
                                                                    {storage[index].has_wiki ? (
                                                                        <Badge>True</Badge>
                                                                    ) : (
                                                                        <Badge className="bg-red-500">False</Badge>
                                                                    )}
                                                                </TableCell>
                                                                <TableCell>
                                                                    {storage[index].has_pages ? (
                                                                        <Badge>True</Badge>
                                                                    ) : (
                                                                        <Badge className="bg-red-500">False</Badge>
                                                                    )}
                                                                </TableCell>
                                                                <TableCell>
                                                                    {storage[index].has_discussions ? (
                                                                        <Badge>True</Badge>
                                                                    ) : (
                                                                        <Badge className="bg-red-500">False</Badge>
                                                                    )}
                                                                </TableCell>
                                                            </TableRow>
                                                        </TableBody>
                                                    </Table>
                                                </div>
                                            </div>
                                        ) : null
                                    ) : null}
                                </div>
                                {storage.length !== 0 && (
                                    <div className="flex justify-center items-end h-[100px]">
                                        <AlertDialog>
                                            <AlertDialogTrigger className="cursor-pointer bg-black text-white rounded-[7px] h-[38px] px-[15px] text-[15px] ">
                                                Initialize Repository
                                            </AlertDialogTrigger>
                                            <AlertDialogContent>
                                                <AlertDialogHeader>
                                                    <AlertDialogTitle>Confirm this action?</AlertDialogTitle>
                                                    <AlertDialogDescription>
                                                        You currently have 1 credit available to initialize a
                                                        new repository.
                                                    </AlertDialogDescription>
                                                </AlertDialogHeader>
                                                <AlertDialogFooter>
                                                    <AlertDialogCancel className="cursor-pointer">
                                                        Cancel
                                                    </AlertDialogCancel>
                                                    <AlertDialogAction
                                                        className="cursor-pointer"
                                                        onClick={() => triggerInitializedPage(index)}
                                                    >
                                                        Continue
                                                    </AlertDialogAction>
                                                </AlertDialogFooter>
                                            </AlertDialogContent>
                                        </AlertDialog>
                                    </div>
                                )}
                            </ScrollArea>
                        </div>
                    </div>
                </div>
            )}
            <Toaster richColors />
        </>
    );
};