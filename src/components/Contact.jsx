import { DiscussionEmbed } from 'disqus-react';
import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { IconContext } from "react-icons";
import { MdOutlineWavingHand } from "react-icons/md";
import { ColorRing } from 'react-loader-spinner';
import { db } from '../configuration';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
        console.log("ini name ", name)
        console.log("ini value", value)
        console.log("data terbaru", formData)
    }

    const handleAddData = async (e) => {

        e.preventDefault();
        setIsLoading(true);
        try {
            const docRef = await addDoc(collection(db, 'messages'), {
                name: formData.name,
                email: formData.email,
                message: formData.message
            });

            setFormData({
                name: '',
                email: '',
                message: ''
            });
        } catch (error) {
            setMessage(e.message);
        }
        setIsLoading(false)
    }
    return (
        <>
            <div data-aos="fade-left" className="">
                {isLoading ? (
                    <div className="absolute w-full h-full loading-send flex justify-center items-center">
                        <ColorRing
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="color-ring-loading"
                            wrapperStyle={{}}
                            wrapperClass="color-ring-wrapper"
                            colors={['#01204e', '#1A365F', '#334C71', '#667994', '#CCD2DB']}
                        />
                    </div>
                ) : (
                    <></>
                )}
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
                            <form className="mt-5" onSubmit={handleAddData}>
                                <div className="mb-5">
                                    <label for="name" className="block mb-2 text-sm font-semibold">Nama</label>
                                    <input name='name' value={formData.name} onChange={handleChange} type="text" id="name" className="bg-[#EEEEEE] rounded-md text-gray-900 text-sm focus:bg-white  focus:outline-none focus:border-b-2 focus:border-[#01204E] block w-full p-1 " required />
                                </div>   <div className="mb-5">
                                    <label for="email" className="block mb-2 text-sm font-semibold">Email</label>
                                    <input name='email' value={formData.email} type="email" id="email" onChange={handleChange} className="bg-[#EEEEEE] rounded-md text-gray-900 text-sm focus:bg-white  focus:outline-none focus:border-b-2 focus:border-[#01204E] block w-full p-1 " required />
                                </div>
                                <div className="mb-5">
                                    <label for="message" className="block mb-2 text-sm font-semibold">Message</label>
                                    <textarea name='message' value={formData.message} type="text" id="message" onChange={handleChange} className="bg-[#EEEEEE] rounded-md text-gray-900 text-sm focus:bg-white  focus:outline-none focus:border-b-2 focus:border-[#01204E] block w-full p-1 " required />
                                </div>
                                <div className="mb-5 flex justify-center">
                                    <button type='submit' className='btn-send  px-5 py-1 rounded-md'>Send</button>
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