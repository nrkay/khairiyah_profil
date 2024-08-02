import { DiscussionEmbed } from 'disqus-react';
import { IconContext } from "react-icons";
import { MdOutlineWavingHand } from "react-icons/md";

function Contact() {
    return (
        <>
            <div className="">
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
                    <div className="grid grid-cols-3">
                        <div className="col-span-3 lg:col-span-2">
                            <form className="mt-5" action="">
                                <div class="mb-5">
                                    <label for="name" class="block mb-2 text-sm font-semibold">Nama</label>
                                    <input type="text" id="name" class="bg-[#EEEEEE] rounded-none text-gray-900 text-sm focus:bg-white focus:rounded-none focus:outline-none focus:border-b-2 focus:border-[#01204E] block w-full p-1 " required />
                                </div>   <div class="mb-5">
                                    <label for="email" class="block mb-2 text-sm font-semibold">Email</label>
                                    <input type="email" id="email" class="bg-[#EEEEEE] rounded-none text-gray-900 text-sm focus:bg-white focus:rounded-none focus:outline-none focus:border-b-2 focus:border-[#01204E] block w-full p-1 " required />
                                </div>
                                <div class="mb-5">
                                    <label for="email" class="block mb-2 text-sm font-semibold">Message</label>
                                    <textarea type="email" id="email" class="bg-[#EEEEEE] rounded-none text-gray-900 text-sm focus:bg-white focus:rounded-none focus:outline-none focus:border-b-2 focus:border-[#01204E] block w-full p-1 " required />
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