import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Nav } from "./nav";
import { Logo } from "./logo";



export function Footer() {
    const icons = [
        {
            icon: <FaFacebook />,
            link: "https://www.facebook.com/"
        },
        {
            icon: <FaTwitter />,
            link: "https://x.com/"
        },
        {
            icon: <FaInstagram />,
            link: "https://www.instagram.com/"
        },
        {
            icon: <FaLinkedin />,
            link: "https://www.linkedin.com//"
        }]

    const subfooters = ["Terms of Use", "|", "Privacy Policy", "|", "Cookie Policy"]

    return (
        <div className=" bg-border-card-color pt-16 w-full px-8 xl:px-0 font-sans">
            <div className="xl:max-w-screen-xl m-auto gap-6 flex flex-col">
                <div className="flex justify-between">
                    <p className="text-desc-color font-semibold text-lg">About</p>
                    <Nav className="flex-col gap-4" />
                    <div className="flex gap-7">
                        {icons.map((part) => (
                            <Link href={part.link} className="w-4 h-4">{part.icon}</Link>
                        ))}
                    </div>
                </div>
                <p className="text-button-bg font-normal text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                <div className="flex flex-col gap-1">
                    <Link href="mailto:info@jstemplate.net"><b>Email</b> : info@jstemplate.net</Link>
                    <div><b>Phone</b> : 880 123 456 789</div>
                </div>
                <div className="flex flex-col gap-8 xl:justify-between md:justify-between xl:flex-row  items-center py-8 border border-t-border-color">
                    <Logo />
                    <div className="flex gap-4">
                        {subfooters.map((subfooter) => (
                            <div>{subfooter}</div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}