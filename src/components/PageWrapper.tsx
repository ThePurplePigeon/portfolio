"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
  return (
    <motion.div
      key={pathname} 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0}}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="min-h-screen flex flex-col pt-14"
    >
      {children}
    </motion.div>
  );
}
