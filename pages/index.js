import { Header } from "@/components/header";
import { Posts } from "@/components/posts";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
     <Header/>
     <Posts/>
    </main>
  );
}
