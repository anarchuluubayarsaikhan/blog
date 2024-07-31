import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Imageslider } from "@/components/imageslider";
import { Posts } from "@/components/posts";
import { Slider } from "@/components/slider";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="xl:text-center p-8">
     <Header/>
     <Slider/>
     <Posts/>
     <Footer/>
    </main>
  );
}
