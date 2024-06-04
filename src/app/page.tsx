import Carrousel from "@/components/Home/Carrousel";
import Cards from "@/components/Home/Cards/Cards";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Carrousel/>
      <Cards/>
    </main>
  );
}
