import MainLayout from "@/components/layout/mainlayout";
import Loadings from "@/components/loading/loading";
 import Taplinkbar from "./taplinkbar";
export default function layout({ children }: { children: React.ReactNode }) {
   return (
    <MainLayout>
      <Loadings>
        <Taplinkbar />
        {children}
      </Loadings>
    </MainLayout>
  );
}
