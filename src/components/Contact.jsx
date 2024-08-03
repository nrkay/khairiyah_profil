import { DiscussionEmbed } from 'disqus-react';
import { IconContext } from "react-icons";
import { MdOutlineWavingHand } from "react-icons/md";

function Contact() {
    return (
        <>
            <div data-aos="fade-left" className="">
                <div className="title-desc-contact items-center">
                    <p>LOVE TO HEAR FROM YOU, </p>
                    <div className="flex">
                        <p>GET IN TOUCH</p>
                        <IconContext.Provider value={{ className: "ml-2 mt-1 icon-waving", color: "#F4CE14" }}>
                            <MdOutlineWavingHand />
                        </IconContext.Provider>
                    </div>

                </div>
                <div className="mt-3">
                    <p>I'm always open to discussing <span className="font-semibold">new project, opportunities in tech word, partnership</span></p>
                    <div className="flex justify-center mt-5">
                        <div className="w-3/4 lg:w-2/3">
                            <form className="mt-5" action="">
                                <div className="mb-5">
                                    <label for="name" className="block mb-2 text-sm font-semibold">Nama</label>
                                    <input type="text" id="name" className="bg-[#EEEEEE] rounded-md text-gray-900 text-sm focus:bg-white  focus:outline-none focus:border-b-2 focus:border-[#01204E] block w-full p-1 " required />
                                </div>   <div className="mb-5">
                                    <label for="email" className="block mb-2 text-sm font-semibold">Email</label>
                                    <input type="email" id="email" className="bg-[#EEEEEE] rounded-md text-gray-900 text-sm focus:bg-white  focus:outline-none focus:border-b-2 focus:border-[#01204E] block w-full p-1 " required />
                                </div>
                                <div className="mb-5">
                                    <label for="email" className="block mb-2 text-sm font-semibold">Message</label>
                                    <textarea type="email" id="email" className="bg-[#EEEEEE] rounded-md text-gray-900 text-sm focus:bg-white  focus:outline-none focus:border-b-2 focus:border-[#01204E] block w-full p-1 " required />
                                </div>
                                <div className="mb-5 flex justify-center">
                                    <button className='btn-send  px-5 py-1 rounded-md'>Send</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="disques mt-8">
                        <DiscussionEmbed
                            shortname='example'
                            config={
                                {
                                    url: "http://localhost:3000",
                                    identifier: "article-id",
                                    title: "Hve Fun",
                                }
                            }
                        />
                    </div>

                </div>



            </div>
        </>
    );
}


export default Contact;