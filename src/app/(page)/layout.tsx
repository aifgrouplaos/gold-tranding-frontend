"use client";
import MainLayout from "@/components/layout/mainlayout"; 
import Loadings from "@/components/loading/loading"; 
import { usePathname } from 'next/navigation';
export default function layout({ children }: { children: React.ReactNode }) {
  const pathname=usePathname();
  return <MainLayout> 
    <Loadings>
      <div className="text-grey paragraph">{pathname}</div>
      {children}
    </Loadings> 
  </MainLayout>;
}
