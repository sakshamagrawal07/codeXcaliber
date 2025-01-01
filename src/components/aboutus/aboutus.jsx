import React from 'react';

const AboutUs = () => {
    return (
        <div
            className="w-full h-screen p-10 iceland-font">
            <h1
                className="text-7xl"
            >
                About Us
            </h1>
            <div
                className="w-full h-[90%] mt-5 grid justify-center items-center grid-rows-3 gap-y-2 text-md sm:text-3xl md:text-3xl lg:text-4xl"
            >
                <p
                    className=""
                >
                    CodeXCaliber is a transformative 3-month-long open-source journey organized by GDG on Campus IIIT Nagpur (formerly GDSC IIIT Nagpur). This program serves as a comprehensive platform for students to hone their coding, presentation, and leadership skills.
                </p>
                <p>
                    Inspired by Google Summer of Code (GSoC), CodeXCaliber invites students to pitch innovative project ideas. From these, the top 5 ideas are selected, forming the foundation for collaborative contributions. Participants get the opportunity to showcase their technical expertise by contributing to these projects, fostering an environment of learning and innovation.
                </p>
                <p>
                    To recognize and reward excellence, the top 3 contributors each month receive exciting rewards, motivating continuous engagement and effort.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;