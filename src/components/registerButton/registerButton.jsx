import { HiOutlineArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { useEffect } from "react";

const RegisterButton = () => {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://apply.devfolio.co/v2/sdk.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    }, []);

    return (
        // <div
        //     className="apply-button"
        //     data-hackathon-slug="codexcaliber-1"
        //     data-button-theme="dark-inverted"
        //     style={{
        //         height: '44px',
        //         width: '312px'
        //     }}
        
        // >
        //     Apply Now
        // </div>
        <motion.div
            className="absolute bottom-16 left-0 right-0 mx-auto flex justify-center iceland-font"
            initial={{
                opacity: 0,
                y: 20
            }}
            animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5 }
            }}
        >
            <div
                className="w-[300px] mx-auto h-[55px] flex justify-center items-center rounded-[50px] p-[2px] bg-gradient-to-tr from-green-500 via-yellow-500 to-red-500 hover:shadow-glow transition-shadow duration-500"
            >
                <a
                    className="w-full h-full p-0.5 bg-black flex justify-center items-center text-2xl rounded-[48px]"
                    href="https://unstop.com/o/ug3Qeh2?lb=6J4bkAvM"
                    target="_blank"
                >
                    <p
                        className="flex justify-center flex-grow"
                    >
                        Register Now
                    </p>
                    <div
                        className="h-full aspect-square rounded-full flex justify-center items-center bg-[#1a1a1a]"
                    >
                        <HiOutlineArrowRight />
                    </div>
                </a>
            </div>
        </motion.div>
    );
};

export default RegisterButton;