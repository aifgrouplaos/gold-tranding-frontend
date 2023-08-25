
import MainLayout from "@/components/layout/mainlayout"; 
import Loadings from "@/components/loading/loading";  
import Wrapper from "./wrapper";
export default function layout({ children }: { children: React.ReactNode }) {
  return <MainLayout> 
    <Loadings>
      <Wrapper/>
      {children}
    </Loadings> 
  </MainLayout>;
}
