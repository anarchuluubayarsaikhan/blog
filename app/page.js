"use client"

import { Post } from "@/components/post";
import { Swipersnew } from "@/components/swiper";
import { Trending } from "@/components/trending";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home(params) {
  return (
    <main className=" p-8">
      <div>
        <Swipersnew/>
        <Trending/>
        <Post/>
      </div>
    </main>
  );
}