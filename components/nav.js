import Link from "next/link";
import { Header } from "./header";
import { useState } from "react";
export function Nav() {

    const navigations = [
        {value:"home",
         name:"Home",
         link:"main"}, 
         {value:"blog",
         name:"Blog",
         link:"blog"}, 
         {value:"contact",
         name:"Contact",
         link:"contact"}]
    const[selected, setSelected] = useState("home")
    return (
    
        <div className={`md:gap-10 hidden  ${Header?"md:flex": "md:flex-col"} }`}>
          {navigations.map((navigation, index) => (
            <Link href={navigation.link} key={index} onClick={()=> {setSelected(navigation.value)}} className={`${selected=== navigation.value? "font-bold": ""} ${Header? "flex": "flex-col"}`}>{navigation.name}</Link>
          )
          )}
        </div>

    )
  }