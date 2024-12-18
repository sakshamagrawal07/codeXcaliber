import React from "react"
import "./styles2.css"

const Projects = () => {
    return (
        <>
            <header className="faq-header">
                <h1>Projects</h1>
                <p>Code X Caliber</p>
            </header>
            <div className="project-container">
                {/* <!-- Card 1 --> */}
                <div className="project-card">
                    <h2>1. TrendTrove-Ecommerce</h2>
                    <p>By Tejashri Taral</p>
                    <div className="tags">
                        <span>JS</span>
                        <span>HTML</span>
                        <span>CSS</span>
                    </div>
                    <a href="https://github.com/Tejashri-Taral/TrendTrove-Ecommerce" target="_blank">
                        <button className="details-btn">Project Details</button>
                    </a>
                </div>

                {/* <!-- Card 2 --> */}
                <div className="project-card">
                    <h2>2. Alimento</h2>
                    <p>By Vimal</p>
                    <div className="tags">
                        <span>PHP</span>
                        <span>JS</span>
                        <span>CSS</span>
                        <span>HTML</span>
                        <span>MySQL</span>
                        <span>Bootstrap</span>
                    </div>
                    <a href="https://github.com/Vimall03/Alimento" target="_blank">
                        <button className="details-btn">Project Details</button>
                    </a>
                </div>

                {/* <!-- Card 3 --> */}
                <div className="project-card">
                    <h2>3. Event Mint</h2>
                    <p>By Samyak Maitre</p>
                    <div className="tags">
                        <span>CSS</span>
                        <span>React.JS</span>
                        <span>JavaScript</span>
                    </div>
                    <a href="https://github.com/samyakmaitre/eventmint" target="_blank">
                        <button className="details-btn">Project Details</button>
                    </a>
                </div>

                {/* <!-- Card 4 --> */}
                <div className="project-card">
                    <h2>4. Online Book Sales</h2>
                    <p>By Trisha Sahu</p>
                    <div className="tags">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>NodeJS</span>
                        <span>ReactJS</span>
                        <span>MongoDB</span>
                        <span>ExpressJS</span>
                        <span>JavaScript</span>
                    </div>
                    <a href="https://github.com/Trisha-tech/OnlineBookSales" target="_blank">
                        <button className="details-btn">Project Details</button>
                    </a>
                </div>

                {/* <!-- Card 5 --> */}
                <div className="project-card">
                    <h2>5. SCROLLME--ECOMMERCE-WEBSITE</h2>
                    <p>By Saurabh Bakolia</p>
                    <div className="tags">
                        <span>React</span>
                        <span>JSON</span>
                        <span>NodeJS</span>
                        <span>MongoDB</span>
                        <span>ExpressJS</span>
                        <span>JavaScript</span>
                    </div>
                    <a href="https://github.com/saurabhbakolia/SCROLLME--ECOMMERCE-WEBSITE" target="_blank">
                        <button className="details-btn">Project Details</button>
                    </a>
                </div>

                {/* <!-- Card 6 --> */}
                <div className="project-card">
                    <h2>6. AlgoGenesis: C Algorithms</h2>
                    <p>By Pankaj Kumar Bind</p>
                    <div className="tags">
                        <span>C</span>
                        <span>CSS</span>
                        <span>HTML</span>
                        <span>JavaScript</span>
                    </div>
                    <a href="https://github.com/AlgoGenesis/C" target="_blank">
                        <button className="details-btn">Project Details</button>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Projects