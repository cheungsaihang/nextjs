import { useEffect, useState } from "react";
import { z } from "zod";
import { redirect } from 'next/navigation'
import { useAuthUserContext } from "@/contexts/useAuthContext";

export const loginSchema = z.object({
    username: z.string().min(1, { message: "Please enter username" }),
    password: z.string().min(1, { message: "Please enter password" })
});

export type TLoginSchema = z.infer<typeof loginSchema>;

export default function useLoginHooks() {
    const authUserContext = useAuthUserContext();
    const [isLogging, setIsLogging] = useState(false);
    const [loginStatus, setLoginStatus] = useState<'success' | 'fail' | null>(null);

    const handleLogin = async (data:TLoginSchema) => {
        setIsLogging(true);
        setLoginStatus(null);
        const res = await fetch('/api/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({username: data.username, password: data.password})
        }).then(data => {
            setIsLogging(false);
            return Promise.resolve(data.json());
        });

        if(res?.success && res?.token){
            authUserContext?.updateAuthToken(res.token);
            setLoginStatus('success');
        }
        else{
            setLoginStatus('fail');
        }
        return false;
    }

    useEffect(() => {
        if(loginStatus == 'success'){
            redirect('/');
        }
    },[loginStatus]);

    return {
        isLogging:isLogging,
        loginStatus:loginStatus,
        handleLogin:handleLogin,
    }
}