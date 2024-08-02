import { IconContext } from "react-icons";
import { FaHome } from "react-icons/fa";
import { RiBookletLine, RiContactsBook3Fill  } from "react-icons/ri";
import { MdOutlineWorkOutline } from "react-icons/md";
import { useState } from "react";

function Menu({activeButton}) {
    // const [buttonClick, setButtonClick] = useState(1);
    return (
        <>
            <div className="grid grid-cols-5 my-7 lg:my-0 ">
                <div className="menu-cover col-span-5 lg:col-span-3 py-2 rounded-2xl border-1 border-neutral-200 grid grid-cols-4">
                    <div className="px-2 lg:px-4">
                        
                        <div className="item-menu-select grid justify-items-center py-2 rounded-2xl text-center cursor-pointer" onClick={() => activeButton(1)}>
                            <IconContext.Provider value={{ size: "1.2em", className: "menu-select" }}>
                                <FaHome />
                            </IconContext.Provider>
                            <p className="text-xs md:text-sm">Home</p>

                        </div>
                    </div>
                    <div className="px-2 lg:px-4">
                        <div className="item-menu-select grid justify-items-center py-2 rounded-2xl text-center cursor-pointer" onClick={() => activeButton(2)}>
                            <IconContext.Provider value={{ size: "1.2em", className: "menu-select" }}>
                                <RiBookletLine />
                            </IconContext.Provider>
                            <p className="text-xs md:text-sm">Resume</p>

                        </div>
                    </div>
                    <div className="px-2 lg:px-4">
                        <div className="item-menu-select grid justify-items-center py-2 rounded-2xl text-center cursor-pointer" onClick={() => activeButton(3)}>
                            <IconContext.Provider value={{ size: "1.2em", className: "menu-select" }}>
                                <MdOutlineWorkOutline />
                            </IconContext.Provider>
                            <p className="text-xs md:text-sm">Work</p>

                        </div>
                    </div>
                    <div className="px-2 lg:px-4">
                        <div className="item-menu-select grid justify-items-center py-2 rounded-2xl text-center cursor-pointer" onClick={() => activeButton(4)}>
                            <IconContext.Provider value={{ size: "1.2em", className: "menu-select" }}>
                                <RiContactsBook3Fill />
                            </IconContext.Provider>
                            <p className="text-xs md:text-sm">Contact</p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Menu;