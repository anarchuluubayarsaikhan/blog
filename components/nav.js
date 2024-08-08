import Link from "next/link";
import { useState } from "react";


export function Nav({ className }) {

  const [selected, setSelected] = useState()


  const navigations = [
    {
      value: "home",
      name: "Home",
      link: "/"
    },
    {
      value: "blog",
      name: "Blog",
      link: "/blog"
    },
    {
      value: "contact",
      name: "Contact",
      link: "/contact"
    },
    { link: "/trending" }
  ]

  return (
    <div className={`gap-10 hidden md:flex ${className} font-sans`}>
      {navigations.map((navigation, index) => (
        <Link href={navigation.link} key={index} onClick={() => setSelected(navigation.value)} className={`${selected === navigation.value ? "font-bold" : ""}`}  >{navigation.name}</Link>
      )
      )}
    </div>

  )
}