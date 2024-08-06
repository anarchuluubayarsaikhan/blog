import Link from "next/link";

export default function Contact() {
    function Input (){
        const input = document.getElementById("input")
        input.value = ""
        const input1 = document.getElementById("input1")
        input1.value = ""
        const input2 = document.getElementById("input2")
        input2.value = ""
        const input3 = document.getElementById("input3")
        input3.value = ""
    }
    return (
        <div className="xl: max-w-screen-xl m-auto flex flex-col gap-12 pt-28 pb-40 px-[291px]">
            <div className="flex flex-col gap-5">
                <p className="font-semibold text-4xl text-black">Contact Us</p>
                <p className="text-base font-normal text-button-bg ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                <div className="flex gap-12">
                    <div className="border border-border-card-color p-4 gap-3 flex flex-col">
                        <p className="font-semibold text-2xl text-black">Address</p>
                        <p className="text-lg font-normal text-button-bg ">1328 Oak Ridge Drive,  Saint  Louis, Missouri</p>
                    </div>
                    <div className="border border-border-card-color p-4 pr-28 gap-3 flex flex-col">
                        <p className="font-semibold text-2xl text-black">Contact</p>
                        <p className="text-lg font-normal text-button-bg ">313-332-8662 </p>
                        <Link href="mailto:info@email.com" className="text-lg font-normal text-button-bg ">info@email.com</Link>
                    </div>
                   
                </div>
            </div>
            <div className="bg-contact rounded-xl pt-7 pr-32 pb-6 pl-9 flex flex-col gap-6">
                <p className="font-semibold text-lg text-black">Leave a Message</p>
                <div className="flex flex-col gap-7">
                    <div className="flex flex-col gap-5">
                        <div className="flex gap-7">
                            <input type="text" placeholder="Your Name" class="input input-bordered w-full max-w-xs" id="input"/>
                            <input type="text" placeholder="Your Email" class="input input-bordered w-full max-w-xs" id="input1" />
                        </div>
                        <input type="text" placeholder="Subject" class="input input-bordered w-full max-w-md" id="input2"/>
                        <textarea class="textarea textarea-bordered" placeholder="Write a message" id="input3"></textarea>
                    </div>
                    <button className="btn w-[130px] btn-primary" onClick={Input}>Send Message</button>
                </div>
            </div>
        </div>
        
    )
  }