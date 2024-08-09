"use client"

import { Post } from "@/components/post";
import { Swipersnew } from "@/components/swiper";
import { Trendings } from "@/components/trendings";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home(params) {
  return (
    <main className=" p-8">
      <div>
        <Swipersnew/>
        <Trendings/>
        <Post/>
      </div>
    </main>
  );
}