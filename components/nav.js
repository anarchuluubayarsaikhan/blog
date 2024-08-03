import Link from "next/link";
import { Footer } from "./footer";
import { Header } from "./header";
export function Nav() {
    const navigations = [
        {name:"Home",
         link:"main"}, 
         {name:"Blog",
         link:"blog"}, 
         {name:"Contact",
         link:"contact"
         }]
    return (
    
        <div className={`xl:gap-10 hidden  ${Header?"xl:flex": "xl:flex-col"} }`}>
          {navigations.map((navigation, index) => (
            <Link href={navigation.link} key={index}>{navigation.name}</Link>
          )
          )}
        </div>

    )
  }