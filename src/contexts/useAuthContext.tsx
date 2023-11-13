"use client"

import { useEffect, useState, createContext, useContext } from "react";
import { setCookie, getCookie, hasCookie, deleteCookie } from "cookies-next";
import jwt from "jsonwebtoken";

type TAuthUser = {
    userId:number;
    username:string;
    name:string;
} | null;

type TAuthUserStatus = "checking" | "completed";

type TAuthUserContextProvider = {
    authUser:TAuthUser,
    authStatus:TAuthUserStatus,
    updateAuthToken:(token:string) => void,
    clearAuthData:() => void,
}

const AuthUserContext = createContext<TAuthUserContextProvider | null>(null);

export default function AuthUserContextProvider({children}:{children:React.ReactNode}){

    const [authUser, setAuthUser] = useState<TAuthUser>(null);
    const [authStatus, setAuthStatus] = useState<TAuthUserStatus>("checking");
    const [authToken, setAuthToken] = useState<string | null>(null);

    useEffect(() => {
        const token = authToken ? authToken : getCookieToken();
        if(token){
            try{
                const decodedUser = jwt.decode(token) as TAuthUser;
                setAuthUser(decodedUser);
                if(!authToken){
                    setAuthToken(token);
                }
            }
            catch(e){
                //Token decode fail
                clearAuthData();
            }
        }
        setAuthStatus("completed");
    },[authToken]);

    function updateAuthToken(token:string){
        setAuthToken(token);
        setCookieToken(token);
    }

    function clearAuthData(){
        deleteCookieToken();
        setAuthToken(null);
        setAuthUser(null);
    }

    return (
        <AuthUserContext.Provider value={{
            authUser:authUser,
            authStatus:authStatus,
            updateAuthToken:updateAuthToken,
            clearAuthData:clearAuthData
        }}>
            {children}
        </AuthUserContext.Provider>
    );
}

export function useAuthUserContext(){
    const context = useContext(AuthUserContext);

    if(context === undefined){
        throw new Error("useAuthUserContext must be used within a AuthUserContextProvider");
    }
    return context;
}

function setCookieToken(token:string){
    setCookie('token',token);
}

function getCookieToken():string | null{
    if(hasCookie('token')){
        const token = getCookie('token') as string;
        return token;
    }
    return null;
}

function deleteCookieToken(){
    if(hasCookie('token')){
        deleteCookie('token');
    }
}