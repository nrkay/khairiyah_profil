import { IconContext } from "react-icons";
import { FaHome } from "react-icons/fa";
import { MdOutlineWorkOutline } from "react-icons/md";
import { RiBookletLine, RiContactsBook3Fill } from "react-icons/ri";

function Menu({ activeButton }) {
    // const [buttonClick, setButtonClick] = useState(1);
    return (
        <>
            <div className="flex justify-center lg:justify-end my-7 lg:my-0">
                <div className="menu-cover col-span-5 lg:col-span-3 py-2 rounded-2xl border-1 border-neutral-200 grid grid-cols-4 gap-4 px-2">
                    <div className="">

                        <div className="item-menu-select grid justify-items-center p-2 rounded-2xl text-center cursor-pointer" onClick={() => activeButton(1)}>
                            <IconContext.Provider value={{ size: "1.8em", className: "menu-select" }}>
                                <FaHome />
                            </IconContext.Provider>
                            <p className="pt-1 text-xs">Home</p>

                        </div>
                    </div>
                    <div className="">
                        <div className="item-menu-select grid justify-items-center p-2 rounded-2xl text-center cursor-pointer" onClick={() => activeButton(2)}>
                            <IconContext.Provider value={{ size: "1.8em", className: "menu-select" }}>
                                <RiBookletLine />
                            </IconContext.Provider>
                            <p className="pt-1 text-xs ">Resume</p>

                        </div>
                    </div>
                    <div className="">
                        <div className="item-menu-select grid justify-items-center p-2 rounded-2xl text-center cursor-pointer" onClick={() => activeButton(3)}>
                            <IconContext.Provider value={{ size: "1.8em", className: "menu-select" }}>
                                <MdOutlineWorkOutline />
                            </IconContext.Provider>
                            <p className="pt-1 text-xs">Work</p>

                        </div>
                    </div>
                    <div className="">
                        <div className="item-menu-select grid justify-items-center p-2 rounded-2xl text-center cursor-pointer" onClick={() => activeButton(4)}>
                            <IconContext.Provider value={{ size: "1.8em", className: "menu-select" }}>
                                <RiContactsBook3Fill />
                            </IconContext.Provider>
                            <p className="pt-1 text-xs">Contact</p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Menu;