import { useEffect, useState } from "react";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Profil from "../components/Profil";
import Resume from "../components/Resume";
import Work from "../components/Work";

function Landing() {
    const [sectionNow, setSectionNow] = useState(1);
    const [showIntro, setShowIntro] = useState(true);
    const handleMenu = (value) => {
        setSectionNow(value)
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowIntro(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <>
            {showIntro ? (
                <div className="intro min-w-full text-base lg:text-4xl">
                    <div className="introduction">Welcome</div>
                    <div className="introduction pl-1">
                        <span>to Nur Khairiyah's Personal Website </span>
                    </div>
                </div>

            ) : (
                <div className="px-5">
                    <Header></Header>
                    <div className="body grid lg:grid-cols-3">
                        <Profil />

                        <div className="body-core lg:col-span-2 pl-2 "> 
                            {/* <div className="bg-red-200">p</div> */}
                            <Menu activeButton={handleMenu} />
                            <div className="mt-2 px-5 lg:px-10 py-7 bg-white rounded-md">
                                {sectionNow === 1 && <AboutMe />}
                                {sectionNow === 2 && <Resume />}
                                {sectionNow === 3 && <Work />}
                                {sectionNow === 4 && <Contact />}
                            </div>
                        </div>
                    </div>
                </div>
            )}


        </>
    );
}

export default Landing;