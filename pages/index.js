import { Post } from "@/components/post";
import { Swipersnew } from "@/components/swiper";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className=" p-8">
      <Swipersnew/>
      <Post/>
    </main>
  );
}
