"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function NavDrawer({
    open,
    setOpen,
}:{
    open:boolean;
    setOpen:(open:boolean) => void;
}){
    const shadowStyle = open ? "bg-black/80" : "hidden";
    const [drawerOpened, setDrawerOpen] = useState(false);

    const style = {
        width:200,
        right: drawerOpened ? 0 : -200,
        transition: "right .25s linear"
    }
    useEffect(() => {
        if(open && !drawerOpened){
            setDrawerOpen(true);
        }
        function handleResize() {
            if(open && window.innerWidth > 960){
                setOpen(false);
            }
        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', () => {});
        }
    },[open]);

    return (
        <div className={`fixed inset-0 ${shadowStyle} z-50 overflow-hidden`} onClick={() => closeDrawer()}>
            <div className="bg-white p-3 absolute inset-y-0" style={style}>
                <ul className="mt-10">
                    <li className="mb-4"><Link href="/article">Article</Link></li>
                    <li className="mb-4"><Link href="/contact-us">Contact Us</Link></li>
                </ul>
            </div>
        </div>
    );

    function closeDrawer(){
        setDrawerOpen(false);
        setTimeout(() => {
            setOpen(false);
        },300);
    }
};