import { IconContext } from "react-icons";
import { FaShoppingBag } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

function Resume() {
    return (
        <>
            <div data-aos="fade-left" className="">
                <div className="title-desc flex items-center">
                    <h1>Resume</h1>
                    <div className="line-title w-1/3 h-1 ml-3 lg:ml-8 rounded-full"></div>
                </div>
                <div className="experience-section grid grid-cols-2 justify-between">
                    {/* resume seection */}
                    <div className="education-section lg:p-3">
                        <div className="flex items-center mb-4 ">
                            <IconContext.Provider value={{ size: "2.2em", className: "resume-icon" }}>
                                <LuGraduationCap />
                            </IconContext.Provider>
                            <h1 className="pl-2">Education</h1>
                        </div>
                        <div className="mt-1 p-2 text-sm lg:text-base">
                            <div className="card-resume md:p-3 p-1 rounded-lg ">
                                <p>2020-2021</p>
                                <h4>Informatic Engineering</h4>
                                <h4>Universitas Negeri Padang</h4>
                            </div>
                        </div>
                        <div className="mt-1 p-2 text-sm lg:text-base">
                            <div className="card-resume md:p-3 p-1 rounded-lg ">
                                <p>2020-2021</p>
                                <h4>Informatic Engineering</h4>
                                <h4>Universitas Negeri Padang</h4>
                            </div>
                        </div>
                    </div>

                    {/* experience section */}
                    <div className="education-section lg:p-3">
                        <div className="flex items-center mb-4">
                            <IconContext.Provider value={{ size: "2.2em", className: "resume-icon" }}>
                                <FaShoppingBag />
                            </IconContext.Provider>
                            <h1 className="pl-2">Experience</h1>
                        </div>
                        <div className="mt-1 p-2 text-sm lg:text-base">
                            <div className="card-resume md:p-3 p-1 rounded-lg ">
                                <p>2020-2021</p>
                                <h4>Informatic Engineering</h4>
                                <h4>Universitas Negeri Padang</h4>
                            </div>
                        </div>
                        <div className="mt-1 p-2 text-sm lg:text-base">
                            <div className="card-resume md:p-3 p-1 rounded-lg ">
                                <p>2020-2021</p>
                                <h4>Informatic Engineering</h4>
                                <h4>Universitas Negeri Padang</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="skill-section grid grid-cols-2 pt-6">
                    <div className="title-experience">
                        <h1>Work Skills</h1>
                        <div className="grid grid-cols-2 lg:grid-cols-3 lg:pr-9 mt-2">
                            <div className="p-1">
                                <div className="mini-card p-1 rounded-md text-xs lg:text-base text-center">HTML</div>
                            </div>
                            <div className="p-1">
                                <div className="mini-card p-1 rounded-md text-xs lg:text-base text-center">HTML</div>
                            </div>
                            <div className="p-1">
                                <div className="mini-card p-1 rounded-md text-xs lg:text-base text-center">HTML</div>
                            </div>
                            <div className="p-1">
                                <div className="mini-card p-1 rounded-md text-xs lg:text-base text-center">HTML</div>
                            </div>
                            <div className="p-1">
                                <div className="mini-card p-1 rounded-md text-xs lg:text-base text-center">HTML</div>
                            </div>
                        </div>
                       

                    </div>
                    <div className="main-skill">
                        <h1>Soft SKills</h1>
                        <div className="grid grid-cols-2   lg:pr-9 mt-2">
                            <div className="p-1">
                                <div className="mini-card p-1 rounded-md text-xs lg:text-base text-center ">HTML</div>
                            </div>
                            <div className="p-1">
                                <div className="mini-card p-1 rounded-md text-xs lg:text-base text-center">HTML</div>
                            </div>
                            <div className="p-1">
                                <div className="mini-card p-1 rounded-md text-xs lg:text-base text-center">HTML</div>
                            </div>
                            <div className="p-1">
                                <div className="mini-card p-1 rounded-md text-xs lg:text-base text-center">HTML</div>
                            </div>
                            <div className="p-1">
                                <div className="mini-card p-1 rounded-md text-xs lg:text-base text-center">HTML</div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
}

export default Resume;