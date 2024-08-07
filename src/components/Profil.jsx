import { IconContext } from "react-icons";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import ProfilFoto from "../Assets/profil.png";
import Email from "../Assets/profil/Email.png";
import Location from "../Assets/profil/Location.png";
import Phone from "../Assets/profil/phone.png";
import Download from "../Assets/social-media/download.png";
function Profil() {
    return (
        <>
            <div className="">
                <div className="profil rounded-md px-3 py-7 mt-16 lg:mt-20">
                    <div className="">
                        <div className="py-10 grid justify-items-center">
                            <img className="absolute img-profil" src={ProfilFoto} alt="" />
                        </div>

                        <div className="title text-center">
                            <h3>Nur Khairiyah</h3>
                            <p>Website Developer</p>
                        </div>
                        <div className="social-media flex justify-center px-5 pt-3 mx-auto">
                            <a href="https://www.linkedin.com/in/nrkay/">
                                <div className="p-1">
                                    <div className="icon-social px-3 py-4 grid justify-items-center rounded-md">
                                        <IconContext.Provider value={{ color: "#01204E", size: "2em" }}>
                                            <CiLinkedin />
                                        </IconContext.Provider>

                                    </div>
                                </div>
                            </a>

                            <a href="https://github.com/nrkay">
                                <div className="p-1">
                                    <div className="icon-social px-3 py-4 grid justify-items-center rounded-md">
                                        <IconContext.Provider value={{ size: "2em" }}>
                                            <FaGithub />
                                        </IconContext.Provider>
                                    </div>
                                </div>
                            </a>
                            <a href="https://www.instagram.com/nrkay_/">
                                <div className="p-1">
                                    <div className="icon-social px-3 py-4 grid justify-items-center rounded-md">
                                        <IconContext.Provider value={{ color: "#01204E", size: "2em" }}>
                                            <FaInstagram />
                                        </IconContext.Provider>
                                    </div>
                                </div>
                            </a>


                        </div>
                        <div className="contact rounded-md mt-3 px-4 py-2">
                            {/* phone */}
                            <div className="contact-main p-5 ">
                                <div className="grid grid-cols-4 mb-3">
                                    <div className="col-span-1  grid justify-items-center content-center">
                                        <img src={Phone} alt="" />
                                    </div>
                                    <div className="profil-desc col-span-3">
                                        <h4>Phone</h4>
                                        <p>+628- **** - ****</p>
                                    </div>
                                </div>
                                <hr />
                            </div>

                            {/* email */}
                            <div className="contact-main p-5 ">
                                <div className="grid grid-cols-4 mb-3">
                                    <div className="col-span-1  grid justify-items-center content-center">
                                        <img src={Email} alt="" />
                                    </div>
                                    <div className="profil-desc col-span-3">
                                        <h4>Email</h4>
                                        <p>nkh**********@gmail.com</p>
                                    </div>
                                </div>
                                <hr />
                            </div>

                            {/* locaton */}
                            <div className="contact-main p-5 ">
                                <div className="grid grid-cols-4 mb-3">
                                    <div className="col-span-1  grid justify-items-center content-center">
                                        <img src={Location} alt="" />
                                    </div>
                                    <div className="profil-desc col-span-3">
                                        <h4>Location</h4>
                                        <p>Padang, Sumatera Barat</p>
                                    </div>
                                </div>
                                <hr />
                            </div>
                            {/* button */}
                            <div className="mt-3 grid justify-items-center mb-4">
                                <button className="px-5 py-2 flex rounded-full btn-download"><span className="mr-2 mt-1"><img src={Download} alt="" /></span>Download Resume</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profil;