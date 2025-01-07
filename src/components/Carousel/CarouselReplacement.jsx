import { useEffect } from "react";

const CarouselReplacement = () => {
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
        <div id="sponsors">
            <header className="faq-header">
                <h1>Sponsors</h1>
                <p>Code X Caliber</p>
            </header>
            <div className="announcement flex flex-col">

                <div className="">
                    <img src="/images/devfolioLogo.png" alt="DEVFOLIO LOGO" />
                    {/* <img src="/images/polygonLogo.png" alt="POLYGON LOGO" />
                    <img src="/images/ethIndiaLogo.png" alt="ETHINDIA LOGO" /> */}
                </div>
                <p>More Coming Soon...</p>
            </div>
        </div>
    );
};

export default CarouselReplacement;
