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
    {link: "/trending"}
  ]

    return (
    <div className={`md:gap-10 hidden md:flex ${className}`}>
      {navigations.map((navigation, index) => (
        <Link href={navigation.link} key={index} onClick={()=> setSelected(navigation.value)} className={`${(router.pathname === navigation.link || (router.pathname.includes("/","/") && selected===navigation.value))? "font-bold" : ""} flex`} >{navigation.name}</Link>
      )
      )}
    </div>

  )
}