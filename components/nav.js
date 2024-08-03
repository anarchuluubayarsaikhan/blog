import Link from "next/link";
import { Header } from "./header";
import { useState } from "react";
export function Nav() {
    const navigations = [
        {name:"Home",
         link:"main"}, 
         {name:"Blog",
         link:"blog"}, 
         {name:"Contact",
         link:"contact"
         }]
    const[selected, setSelected] = useState("Home")
    return (
    
        <div className={`md:gap-10 hidden  ${Header?"md:flex": "md:flex-col"} }`}>
          {navigations.map((navigation, index) => (
            <Link href={navigation.link} key={index} onClick={()=> {setSelected(navigation.name)}} className={`${selected== navigation.name? "font-bold": ""}`}>{navigation.name}</Link>
          )
          )}
        </div>

    )
  }