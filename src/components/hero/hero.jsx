import RegisterButton from "../registerButton/registerButton";

const Hero = () => {
    return (
        <div className="max-w-[100vw] h-screen flex-col xs:flex items-center justify-center overflow-y-hidden relative">
            <div className="w-full xs:w-[450px] sm:w-[500px] md:w-[700px] lg:w-[700px] xl:w-[1000px] mt-20 xs:mt-0 xs:ml-[40px] md:ml-[65px] flex-col md:flex justify-center xs:justify-between text-4xl md:text-6xl lg:text-6xl xl:text-7xl -z-10 title-font">
                <p className="text-transparent bg-clip-text bg-gradient-to-b xs:bg-gradient-to-r from-white via-white to-transparent">code</p>
                <p className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-transparent">X</p>
                <p className="text-transparent bg-clip-text bg-gradient-to-b xs:bg-gradient-to-l from-white via-white to-transparent">caliber</p>
            </div>
            <img
                className="h-[40rem] xs:h-[20rem] sm:h-[30rem] md:h[35rem] lg:h-[40rem] xl:h-[60rem] animate-levitate absolute mx-auto left-0 right-0 top-52 xs:top-80 sm:top-52 lg:top-40 xl:top-12 -z-10"
                src="/images/hero-phone.png"
                alt="phone"
            />
            <div className="w-[100vw] h-screen absolute bg-gradient-to-b from-transparent via-transparent to-black" />
            <RegisterButton />
        </div>
    );
};

export default Hero;
