import type { ReactNode } from "react";

export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col pt-14">
      {children}
    </div>
  );
}
