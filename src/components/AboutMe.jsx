import { IconContext } from "react-icons";
import { FaCode } from "react-icons/fa";
function AboutMe() {
    return (
        <>
            <div data-aos="fade-left" className="">
                <div className="title-desc flex items-center">
                    <h1>About Me</h1>
                    <div className="line-title w-1/3 h-1 ml-3 lg:ml-8 rounded-full"></div>
                </div>
                <div className="main-desc mt-5">
                    <p>Hello there! I'm Khairiyah. I recently 
                        graduated with a degree in Informatics eng, hold  GPA of 3.6. I have hightly interesting in sotware development 
                        and have 2 years of experience working on websites development,  utilizing Agile methodologies while working in teams 
                        and have focused mostly on monolithic apps. Lately, I’ve been exploring microservices. I am 
                        passionate about becoming a digital entrepreneur in the future.
                        </p>
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
                                <p>I have hands-on experience as a front-end developer, creating
                                    responsive and interactive user interfaces using modern
                                    technologies and frameworks.</p>
                            </div>
                        </div>

                        {/* card 2 */}
                        <div className="p-3 bg-slate-200 rounded-lg">
                            <div className="fill-desc-title flex justify-center">
                                <div className="flex items-center">
                                    <IconContext.Provider value={{ size: "1em", className: "menu-select" }}>
                                        <FaCode />
                                    </IconContext.Provider>
                                    <h4 className="ml-2">Back-end Developer</h4>
                                </div>

                            </div>
                            <div className="fill-desc-main">
                                <p>I have a strong interest in back-end development and am proficient in using
                                    Laravel and Spring Boot, which enables me to handle complex
                                    server-side tasks and build efficient APIs.</p>
                            </div>
                        </div>





                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutMe;