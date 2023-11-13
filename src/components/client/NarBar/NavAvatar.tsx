"use client"
import { useAuthUserContext } from '@/contexts/useAuthContext';
import Link from 'next/link';

export default function NavAvatar(){
    const authUserContext = useAuthUserContext();
    const authUser = authUserContext ? authUserContext.authUser : null;
    const authReady = authUserContext && authUserContext.authStatus == "completed" ? true : false;
    return (
        <>
        {
            authReady && (
                <>
                    {
                        authUser ? (
                            <Link href="/profile">hi, {authUser.name}</Link>
                        ) : (
                            <Link href="/login">Login</Link>
                        )
                    }
                </>
            )
        }
        </>
    )
}