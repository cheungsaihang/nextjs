"use client"
import { useAuthUserContext } from "@/contexts/useAuthContext";
import Link from "next/link";

export default function Profile(){
    const authUserContext = useAuthUserContext();

    return (    
        <div className="container mx-auto py-5 px-2">
            <h2 className={"font-bold text-xl"}>Profile</h2>
            <div className="mt-1 mb-5"></div>
            {
                (authUserContext?.authUser) && (
                    <div className="flex flex-wrap">
                        <div className="w-6/12">#ID:</div>
                        <div className="w-6/12">{authUserContext.authUser.userId}</div>
                        <div className="w-6/12">Username:</div>
                        <div className="w-6/12">{authUserContext.authUser.username}</div>
                        <div className="w-6/12">Name:</div>
                        <div className="w-6/12">{authUserContext.authUser.name}</div>
                    </div>
                )
            }
            <Link href={"/logout"} className="rounded px-4 py-1 inline-block mx-auto bg-slate-200 text-slate-500 mt-3">Logout</Link>
        </div>
    );
}
