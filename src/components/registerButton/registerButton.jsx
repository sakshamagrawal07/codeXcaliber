import { HiOutlineArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";

const RegisterButton = () => {
    return (
        <motion.div
            className="fixed bottom-5 left-0 right-0 mx-auto flex justify-center"
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
                className="w-[300px] h-[55px] flex justify-center items-center rounded-[50px] p-[2px] bg-gradient-to-tr from-green-500 via-yellow-500 to-red-500 hover:shadow-glow transition-shadow duration-500"
            >
                <a
                    className="w-full h-full p-0.5 bg-black flex justify-center items-center text-2xl rounded-[48px]"
                    href="https://www.youtube.com/"
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
            {/* <p>
                    Dont't Be Late to the Party - Register Now!
                </p> */}
        </motion.div>
    );
};

export default RegisterButton;