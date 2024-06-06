import Carrousel from "@/components/Home/Carrousel";
import Cards from "@/components/Home/Cards/Cards";
import Instagram from "@/components/Home/Instagram";
import Newsletter from "@/components/Home/Newsletter/Newsletter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        <Carrousel/>
        <Cards/>
        <Instagram/>
        <Newsletter/>
    </main>
  );
}
