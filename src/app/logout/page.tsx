"use client"

import { useEffect } from "react";
import { useAuthUserContext } from "@/contexts/useAuthContext"
import { redirect } from "next/navigation";

export default function Logout(){
    const authUserContext = useAuthUserContext();

    useEffect(() =>{
        authUserContext?.clearAuthData();
        redirect('/');
    },[]);

    return null;
}