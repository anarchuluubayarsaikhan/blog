
import { Nav } from "./nav";
import { Logo } from "./logo";
import { IoMdMenu } from "react-icons/io";
const navigations = ["Home", "Blog", "Contact"]

export function Header() {
  return (

    <div className="flex justify-between items-center xl:max-w-screen-xl xl:m-auto p-5 xl:px-0 xl:py-8 font-sans">
      <Logo />
      <Nav />
      <form action="/search"> 
          <label className="input input-bordered md:flex items-center gap-2 hidden" >
            <input type="text" className="grow" placeholder="Search" name="q " />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="xl:h-4 xl:w-4 opacity-70 h-2 w-2">
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd" />
            </svg>
          </label>
          <IoMdMenu className="md:hidden" size={32}/>
      </form>
     

    </div>
  )
}