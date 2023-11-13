"use client"
import React, { useContext } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import MenuOutlined from '@mui/icons-material/MenuOutlined';
import { useAuthUserContext } from '@/contexts/useAuthContext';
import NavAvatar from './NavAvatar';

export default function NavTop({
    open,
    setOpen,
}:{
    open:boolean;
    setOpen:(open:boolean) => void;
}){
    const authUserContext = useAuthUserContext();
    const authUser = authUserContext ? authUserContext.authUser : null;
    const authReady = authUserContext && authUserContext.authStatus == "completed" ? true : false;

    return (
        <nav className="fixed inset-x-0 py-4 bg-white z-40 border-b">
            <div className="container mx-auto flex flex-row justify-between px-2">
                <Link href="/" className='block'><Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/vercel.svg"
                    alt="Next.js Logo"
                    width={120}
                    height={24}
                    priority
                /></Link>
                <div>
                    <ul className="hidden md:block">
                        <li className="inline-block ml-4"><Link href="/article">Article</Link></li>
                        <li className="inline-block ml-4"><Link href="/contact-us">Contact Us</Link></li>
                        <li className="inline-block ml-4"><NavAvatar /></li>
                    </ul>
                    <button className="md:hidden" onClick={() => setOpen(!open)}><MenuOutlined fontSize='large' style={{color:'#999999'}} /></button>
                </div>
            </div>
        </nav>
    );  
};