import { IconContext } from "react-icons";
import { BiLogoPostgresql, BiLogoSpringBoot } from "react-icons/bi";
import { FaBootstrap, FaCss3Alt, FaHtml5, FaJava, FaLaravel, FaPhp, FaReact, FaShoppingBag } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { LuGraduationCap } from "react-icons/lu";
import { RiTailwindCssFill } from "react-icons/ri";

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
                            <div className="card-resume md:p-5 p-3 rounded-lg ">
                                <p>2020-2024</p>
                                <h4 className="font-bold">Informatic Engineering, GPA 3.6</h4>
                                <h6 className="text-xs font-light">Universitas Negeri Padang</h6>
                            </div>
                        </div>
                        <div className="mt-1 p-2 text-sm lg:text-base">
                            <div className="card-resume md:p-5 p-3 rounded-lg ">
                                <p>Aug 2023- Mar 2024 (Bootcamp)</p>
                                <h4>Back-end Java</h4>
                                <h6 className="text-xs font-light">BCA SYNRGY Academy</h6>
                            </div>
                        </div>
                        <div className="mt-1 p-2 text-sm lg:text-base">
                            <div className="card-resume md:p-5 p-3 rounded-lg ">
                                <p>Fab 2023- Jun 2024 (MBKM's Study Independent)</p>
                                <h4>Frontend Developer</h4>
                                <h6 className="text-xs font-light">Skilvul</h6>
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
                            <div className="card-resume md:p-5 p-3 rounded-lg ">
                                <p>feb 2024- now (Full time)</p>
                                <h4>Back-end Developer </h4>
                                <h6 className="text-xs font-light">PT. ARG SOLUSI TEKNOLOGI</h6>
                            </div>
                        </div>

                        <div className="mt-1 p-2 text-sm lg:text-base">
                            <div className="card-resume md:p-5 p-3 rounded-lg ">
                                <p>Fab 2023- Jun 2024 (MBKM's Internship)</p>
                                <h4>Programmer</h4>
                                <h6 className="text-xs font-light">Yayasan Hasnur Centre</h6>
                            </div>
                        </div>
                        <div className="mt-1 p-2 text-sm lg:text-base">
                            <div className="card-resume md:p-5 p-3 rounded-lg ">
                                <p>Oct 2022- Desc 2022 (Volunteer)</p>
                                <h4>Team IT</h4>
                                <h6 className="text-xs font-light">Innovillage by Telkom</h6>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="skill-section grid grid-cols-2 pt-6">
                    <div className="title-experience">
                        <h1>Work Skills</h1>
                        <div className="grid grid-cols-4 lg:grid-cols-6 gap-1 lg:pr-9 mt-2">
                            <div className="mini-card p-2 lg:p-3 rounded-md w-max">
                                <IconContext.Provider value={{ size: "1em" }}>
                                    <FaHtml5 />
                                </IconContext.Provider>
                            </div>
                            <div className="mini-card p-2 lg:p-3 rounded-md w-max">
                                <IconContext.Provider value={{ size: "1em" }}>
                                    <FaCss3Alt />
                                </IconContext.Provider>
                            </div>
                            <div className="mini-card p-2 lg:p-3 rounded-md w-max">
                                <IconContext.Provider value={{ size: "1em" }}>
                                    <BiLogoSpringBoot />
                                </IconContext.Provider>
                            </div>
                            <div className="mini-card p-2 lg:p-3 rounded-md w-max">
                                <IconContext.Provider value={{ size: "1em" }}>
                                    <FaJava />
                                </IconContext.Provider>
                            </div>
                            <div className="mini-card p-2 lg:p-3 rounded-md w-max">
                                <IconContext.Provider value={{ size: "1em" }}>
                                    <IoLogoJavascript />
                                </IconContext.Provider>
                            </div>
                            <div className="mini-card p-2 lg:p-3 rounded-md w-max">
                                <IconContext.Provider value={{ size: "1em" }}>
                                    <FaPhp />
                                </IconContext.Provider>
                            </div>

                            <div className="mini-card p-2 lg:p-3 rounded-md w-max">
                                <IconContext.Provider value={{ size: "1em" }}>
                                    <FaBootstrap />
                                </IconContext.Provider>
                            </div>
                            <div className="mini-card p-2 lg:p-3 rounded-md w-max">
                                <IconContext.Provider value={{ size: "1em" }}>
                                    <RiTailwindCssFill />
                                </IconContext.Provider>
                            </div>
                            <div className="mini-card p-2 lg:p-3 rounded-md w-max">
                                <IconContext.Provider value={{ size: "1em" }}>
                                    <FaLaravel />
                                </IconContext.Provider>
                            </div>
                            <div className="mini-card p-2 lg:p-3 rounded-md w-max">
                                <IconContext.Provider value={{ size: "1em" }}>
                                    <FaReact />
                                </IconContext.Provider>
                            </div>
                            <div className="mini-card p-2 lg:p-3 rounded-md w-max">
                                <IconContext.Provider value={{ size: "1em" }}>
                                    <IoLogoFirebase />
                                </IconContext.Provider>
                            </div>

                            <div className="mini-card p-2 lg:p-3 rounded-md w-max">
                                <IconContext.Provider value={{ size: "1em" }}>
                                    <GrMysql />
                                </IconContext.Provider>
                            </div>
                            <div className="mini-card p-2 lg:p-3 rounded-md w-max">
                                <IconContext.Provider value={{ size: "1em" }}>
                                    <BiLogoPostgresql />
                                </IconContext.Provider>
                            </div>
                            {/* <div className="p-1">
                                <div className="mini-card p-1 rounded-md text-xs lg:text-base text-center">CSS</div>
                            </div> */}

                        </div>


                    </div>
                    <div className="main-skill">
                        <h1>Soft SKills</h1>
                        <div className="grid grid-cols-1 lg:grid-cols-2 lg:pr-9 mt-2">
                            <div className="p-1">
                                <div className="mini-card p-1 rounded-md text-xs lg:text-base text-center ">Problem-Solving</div>
                            </div>
                            <div className="p-1">
                                <div className="mini-card p-1 rounded-md text-xs lg:text-base text-center">Communication</div>
                            </div>
                            <div className="p-1">
                                <div className="mini-card p-1 rounded-md text-xs lg:text-base text-center">Teamwork and Collaboration</div>
                            </div>
                            <div className="p-1">
                                <div className="mini-card p-1 rounded-md text-xs lg:text-base text-center">Time Management</div>
                            </div>
                            <div className="p-1">
                                <div className="mini-card p-1 rounded-md text-xs lg:text-base text-center"> Stress Management</div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
}

export default Resume;