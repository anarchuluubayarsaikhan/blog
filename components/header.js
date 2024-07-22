import Image from "next/image";
import { FaSearch } from "react-icons/fa";
const navigations = ["Home", "Blog", "Contact"]

export function Header() {
  return (
    <div class="flex justify-between items-center">
      <Image src="/allpics/Logo.png" width={158} height={36}/>
      <div class="flex gap-10">
        {navigations.map((navigation, index) => (
          <div key={index}>{navigation}</div>
        )
        )}
      </div>
      <div class="flex items-center">
        <input type="text" placeholder="Search" />
        <div>
          <FaSearch />
        </div>
      </div>

    </div>
  )
}