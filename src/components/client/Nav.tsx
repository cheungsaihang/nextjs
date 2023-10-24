"use client"

import React, { useState } from 'react';
import NavTop from './NavTop';
import NavDrawer from './NavDrawer';

export default function Nav(){
    const [open, setOpen] = useState(false);
    return (
        <>
            <NavTop open={open} setOpen={setOpen}/>
            <NavDrawer open={open} setOpen={setOpen}/>
        </>    
    );  
};