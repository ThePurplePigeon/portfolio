"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageWrapper({ children }: { children: React.ReactNode }){
    const pathname = usePathname();
    //keep curr pathname till exit anim finishes
    const [displayedPath, setDisplayedPath] = useState(pathname);
    //keep displayed childred
    const [displayChildren, setDisplayChildren] = useState(children);

    useEffect(() => {

        //if route isn't changed, update as usual
        if (pathname === displayedPath) {
            setDisplayChildren(children);
        }
        //else, wait for onExitComplete to update
    }, [children, pathname, displayedPath]);

    return (
        <AnimatePresence 
            mode="wait"
            onExitComplete={() => {
                //when we've exited, update to new route and children
                setDisplayedPath(pathname);
                setDisplayChildren(children);
            }}
        >
            <motion.div
                key={displayedPath}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="min-h-screen flex flex-col pt-14"
            >
                {displayChildren}
            </motion.div>
        </AnimatePresence>
    );
}