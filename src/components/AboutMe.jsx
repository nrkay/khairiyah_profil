import { IconContext } from "react-icons";
import { FaCode, FaHome } from "react-icons/fa";
function AboutMe() {
    return (
        <>
            <div data-aos="fade-left" className="">
                <div className="title-desc flex items-center">
                    <h1>About Me</h1>
                    <div className="line-title w-1/3 h-1 ml-3 lg:ml-8 rounded-full"></div>
                </div>
                <div className="main-desc mt-5">
                    <p>Hello there! I'm thrilled to welcome you to my portfolio. I am a passionate and versatile
                        full-stack developer with a keen interest in exploring the latest cutting-edge technologies.
                        My journey in the world of web development has been nothing short of exhilarating, and
                        I constantly strive to enhance my skills and embrace emerging trends in the industry.</p>
                </div>
                <div className="fill-desc mt-5">
                    <h3>What I Do</h3>
                    <div className="grid grid-cols-2 gap-1 mt-2">
                        {/* card 1 */}
                        <div className="p-3 bg-slate-200 rounded-lg">
                            <div className="fill-desc-title flex justify-center">
                                <div className="flex items-center">
                                    <IconContext.Provider value={{ size: "1em", className: "menu-select" }}>
                                        <FaCode />
                                    </IconContext.Provider>
                                    <h4 className="ml-2">Web Developer</h4>
                                </div>

                            </div>
                            <div className="fill-desc-main">
                                <p>As a developer, I find myself most
                                    captivated by the power and flexibility of
                                    NEXT.js. I'm always eager to dive into new
                                    projects that leverage NEXT.js and
                                    discover innovative ways to create fast,
                                    scalable, and user-friendly applications.</p>
                            </div>
                        </div>

                        {/* card 2 */}
                        <div className="p-3 bg-slate-200 rounded-lg">
                            <div className="fill-desc-title flex justify-center">
                                <div className="flex items-center">
                                    <IconContext.Provider value={{ size: "1em", className: "menu-select" }}>
                                        <FaCode />
                                    </IconContext.Provider>
                                    <h4 className="ml-2">Web Developer</h4>
                                </div>

                            </div>
                            <div className="fill-desc-main">
                                <p>As a developer, I find myself most
                                    captivated by the power and flexibility of
                                    NEXT.js. I'm always eager to dive into new
                                    projects that leverage NEXT.js and
                                    discover innovative ways to create fast,
                                    scalable, and user-friendly applications.</p>
                            </div>
                        </div>

                        {/* card 3 */}
                        <div className="p-3 bg-slate-200 rounded-lg">
                            <div className="fill-desc-title flex justify-center">
                                <div className="flex items-center">
                                    <IconContext.Provider value={{ size: "1em", className: "menu-select" }}>
                                        <FaCode />
                                    </IconContext.Provider>
                                    <h4 className="ml-2">Web Developer</h4>
                                </div>

                            </div>
                            <div className="fill-desc-main">
                                <p>As a developer, I find myself most
                                    captivated by the power and flexibility of
                                    NEXT.js. I'm always eager to dive into new
                                    projects that leverage NEXT.js and
                                    discover innovative ways to create fast,
                                    scalable, and user-friendly applications.</p>
                            </div>
                        </div>


                        {/* card 4 */}
                        <div className="p-3 bg-slate-200 rounded-lg">
                            <div className="fill-desc-title flex justify-center">
                                <div className="flex items-center">
                                    <IconContext.Provider value={{ size: "1em", className: "menu-select" }}>
                                        <FaCode />
                                    </IconContext.Provider>
                                    <h4 className="ml-2">Web Developer</h4>
                                </div>

                            </div>
                            <div className="fill-desc-main">
                                <p>As a developer, I find myself most
                                    captivated by the power and flexibility of
                                    NEXT.js. I'm always eager to dive into new
                                    projects that leverage NEXT.js and
                                    discover innovative ways to create fast,
                                    scalable, and user-friendly applications.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutMe;