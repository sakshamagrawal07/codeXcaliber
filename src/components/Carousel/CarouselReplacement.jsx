import { useEffect } from "react";

const CarouselReplacement = () => {


    return (
        <div id="sponsors">
            <header className="faq-header">
                <h1>Sponsors</h1>
                <p>Code X Caliber</p>
            </header>
            <div className="project-container">
                {/* <!-- Card 1 --> */}
                <div className="project-card">
                    <h2 className="justify-center flex text-center">Interview Buddy</h2>
                    <img src="images/sponsors/Interview_Buddy.png" alt="Interview Buddy" className="project-image" />
                </div>


                {/* <!-- Card 2--> */}
                <div className="project-card">
                    <h2 className="justify-center flex text-center">Balsamiq</h2>
                    <img src="images/sponsors/balsamiq.jpg" alt="Interview Buddy" className="project-image" />
                </div>

                {/* <!-- Card 3 --> */}
                <div className="project-card">
                    <h2 className="justify-center flex text-center">Github</h2>
                    <img src="images/sponsors/github_icon_2.png" alt="Interview Buddy" className="project-image" />
                </div>
            </div>
            <div className="announcement">
                <p>More Coming Soon</p>
            </div>

            <header class="faq-header">
                <h1>Community Partners</h1>
                <p>Code X Caliber</p>
            </header>
            <div class="project-container">
                {/* <!-- Card 1--> */}
                <div class="project-card">
                    <h2 className="justify-center flex text-center">IIIT Surat</h2>
                    <img src="images/community_partner/IIIT Surat.jpg" alt="Interview Buddy" className="project-image" />
                </div>

                {/* <!-- Card 2 --> */}
                <div class="project-card">
                    <h2 className="justify-center flex text-center">IIITDM Kurnool</h2>
                    <img src="images/community_partner/IIITDM Kurnool.jpg" alt="Interview Buddy" className="project-image" />
                </div>

                {/* <!-- Card 3 --> */}
                <div class="project-card">
                    <h2 className="justify-center flex text-center">Vishnu Institute of Technology, Bhimavaram</h2>
                    <img src="images/community_partner/Vishnu Institute of Technology ,Bhimavaram.jpeg"
                        alt="Interview Buddy" className="project-image" />
                </div>

                {/* <!-- Card 4 --> */}
                <div class="project-card">
                    <h2 className="justify-center flex text-center">BITS-Pilani</h2>
                    <img src="images/community_partner/BITS-Pilani-Logo.svg" alt="Interview Buddy" className="project-image" />
                </div>

                {/* <!-- Card 5 --> */}
                <div class="project-card">
                    <h2 className="justify-center flex text-center">Priyadarshini College of Engineering</h2>
                    <div className="h-full items-center flex">

                    <img src="images/community_partner/centered.png" alt="Interview Buddy" className="project-image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarouselReplacement;
