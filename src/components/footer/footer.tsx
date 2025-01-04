import React from "react"
import { FaDiscord } from "react-icons/fa"
import { HiOutlineArrowRight } from "react-icons/hi"
import { RiInstagramFill } from "react-icons/ri"
import { TiSocialLinkedin } from "react-icons/ti"

const Footer = () => {
    return (
        <>
            <div
                className="h-[1px] w-[100vw] bg-gradient-to-r from-black via-white to-black"
            />
            <div
                className="w-full h-72 flex items-center justify-between px-2 sm:px-5 md:px-10 lg:px-16 mb-0 bg-[#060606] iceland-font"
            >
                <div
                    className=""
                >
                    <img
                        className="h-10 sm:h-20 md:h-32 aspect-square"
                        src="/images/x.png"
                        alt="x"
                    />
                    <div
                        className="w-full mt-5 flex justify-center text-sm sm:text-2xl md:text-5xl"
                    >
                        <a
                            href="https://www.instagram.com/gdg_iiitn/"
                            target="_blank"
                        >
                            <RiInstagramFill />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/gdsc-iiitn/posts/?feedView=all"
                            target="_blank"
                        >
                            <TiSocialLinkedin />
                        </a>
                        <a
                            // href="https://www.linkedin.com/company/gdsc-iiitn/posts/?feedView=all"
                            target="_blank"
                        >
                            <FaDiscord />
                        </a>
                    </div>
                </div>
                <div
                    className=""
                >
                    <p
                        className="text-lg sm:text-xl md:text-2xl lg:text-3xl"
                    >
                        RESOURCES
                    </p>
                    <a
                        className="block text-sm sm:text-lg md:text-xl mt-5 mb-2 hover:underline cursor-pointer"
                        target="_blank"
                        href="/documents/event_brochure.pdf"
                    >
                        Event Brochure
                    </a>
                    <a
                        className="text-sm sm:text-lg md:text-xl hover:underline cursor-pointer"
                    >
                        Sponsorship Brochure
                    </a>
                    <p
                        className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-5"
                    >
                        © GDG IIIT NAGPUR 2024
                    </p>
                </div>
                <div>
                    <a
                        className="w-20 md:w-40 lg:w-56 text-lg sm:text-2xl lg:text-4xl xl:text-5xl flex flex-wrap text-start hover:underline decoration-2 cursor-pointer"
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=gdg@iiitn.ac.in"
                        target="_blank"
                    >
                        Email Us For More Details<HiOutlineArrowRight />
                    </a>
                </div>
            </div>
        </>
    )
}

export default Footer