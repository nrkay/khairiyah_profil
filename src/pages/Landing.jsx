import { useEffect, useState } from "react";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Profil from "../components/Profil";
import Resume from "../components/Resume";
import Work from "../components/Work";
import AOS from 'aos';
import 'aos/dist/aos.css';
import DetailPorto from "../components/DetailPorto";

function Landing() {
    const [sectionNow, setSectionNow] = useState(1);
    const [showIntro, setShowIntro] = useState(true);
    const [detail, setDetail] = useState(0);
    const handleMenu = (value) => {
        setSectionNow(value)
    }

    const handleDetail = (value) => {
        setDetail(value);
        setSectionNow(0)
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowIntro(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);


    useEffect(() => {
        AOS.init();
      }, [])
      console.log(detail)
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
                <div className="px-5 lg:px-20">
                    <Header></Header>
                    <div className="grid lg:grid-cols-3">
                        <Profil />

                        <div className="lg:col-span-2 px-2 ">
                            {/* <div className="bg-red-200">p</div> */}
                            <Menu activeButton={handleMenu} />
                            <div data-aos="fade-left"  className="mt-2 px-5 lg:px-10 py-7 bg-white rounded-md">
                                {sectionNow === 1 && <AboutMe />}
                                {sectionNow === 2 && <Resume />}
                                {sectionNow === 3 && <Work activeDetail={handleDetail} />}
                                {sectionNow === 4 && <Contact />}
                                {sectionNow === 0 && <DetailPorto id={detail}/>}
                            
                            </div>
                        </div>
                    </div>
                </div>
            )}


        </>
    );
}

export default Landing;