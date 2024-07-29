import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
const navigations = ["Home", "Blog", "Contact"]

export function Header() {
  return (
    <div class="flex justify-between items-center xl:max-w-screen-xl xl:m-auto">
      <Image src="/allpics/Logo.png" width={158} height={36}/>
      <div class="xl:flex xl:gap-10 hidden">
        {navigations.map((navigation, index) => (
          <div key={index}>{navigation}</div>
        )
        )}
      </div>
      <div class="flex items-center">
        <input type="text" placeholder="Search" className="xl:block hidden" />
        <div>
          <FaSearch className="hidden xl:block"/>
          <IoMdMenu className="xl:hidden w-8 h-8"/>
        </div>
      </div>

    </div>
  )
}