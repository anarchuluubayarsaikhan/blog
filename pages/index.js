import { Blog } from "@/components/blog";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Imageslider } from "@/components/imageslider";
import { Posts } from "@/components/posts";
import { Slider } from "@/components/slider";
import Swipernew from "@/components/swipernew";
import { Inter } from "next/font/google";
import Swiper from "swiper";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className=" p-8">
      <Header/>
      <Blog/>
    </main>
  );
}
