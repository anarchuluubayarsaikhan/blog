import Link from "next/link";
import { useRouter } from 'next/router'
import { useState } from "react";


export function Nav({ className }) {
  const router = useRouter()
  const [selected, setSelected] =useState()


  console.log(router.pathname)

  const navigations = [
    {
      value: "home",
      name: "Home",
      link: "/"
    },
    { value: "blog",
      name: "Blog",
      link: "/blog"
    },
    { value: "contact",
      name: "Contact",
      link: "/contact"
    },
  ]

    return (
    <div className={`md:gap-10 hidden md:flex ${className}`}>
      {navigations.map((navigation, index) => (
        <Link href={navigation.link} key={index} onClick={()=> setSelected(navigation.value)} className={`${(router.pathname === navigation.link || router.pathname === router.pathname.includes("/","/"))? "font-bold" : ""} flex ${(router.pathname.includes("/","/") && selected===navigation.value)? "font-bold": ""}`} >{navigation.name}</Link>
      )
      )}
    </div>

  )
}