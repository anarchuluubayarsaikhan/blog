import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



export function Footer() {
    const footerparts = ["Home","Blog", "Contact"]
    const icons=[
        {icon: <FaFacebook />,
        link: "https://www.facebook.com/"},
        {icon: <FaTwitter />,
            link: "https://x.com/"},
        {icon: <FaInstagram />,
            link: "https://www.instagram.com/"},
        {icon: <FaLinkedin />,
            link: "https://www.linkedin.com//"}]

        const subfooters=["Terms of Use","|", "Privacy Policy", "|", "Cookie Policy"]

    return (
        <div className="flex flex-col gap-11">
           <div className="flex gap-56">
                <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-3">
                            <p className="text-desc-color font-semibold text-lg">About</p>
                            <p className="text-button-bg font-normal text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div><b>Email</b> : info@jstemplate.net</div>
                            <div><b>Phone</b> : 880 123 456 789</div>
                        </div>
                </div>
                <div className="flex gap-8">
                    {footerparts.map((footerpart)=>
                        <div>{footerpart}</div>)}
                </div>
                <div className="flex gap-7">
                    {icons.map((part) => (
                        <Link href={part.link} className="w-4 h-4">{part.icon}</Link>
                    ))}
                </div>
            </div>
            <hr/>
            <div className="flex gap-4">
                {subfooters.map((subfooter)=>(
                    <div>{subfooter}</div>
                ))}
            </div>
        </div>
    )
  }