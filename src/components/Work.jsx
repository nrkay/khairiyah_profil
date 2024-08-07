import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";
import { db } from "../configuration";

function Work({ activeDetail }) {
    const [article, setArticle] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [type, setType] = useState("portofolio");

    const fetchData = async () => {
        setIsLoading(true)
        try {
            await getDocs(collection(db, 'portofolios'))
                .then((QuerySnapshot) => {
                    const newData = QuerySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                    setArticle(newData);
                })
        } catch (error) {
            setMessage(error.message);
        }
        setIsLoading(false)
    }

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <>
            {isLoading ? (
                <div className=" w-full h-96 flex justify-center items-center">
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
                <>
                    {article && article.length > 0 ? (
                        <div data-aos="fade-left" className="">
                            <div className="title-desc flex items-center">
                                <h1>Portofolio & Certificate</h1>
                                <div className="line-title w-1/3 h-1 ml-3 lg:ml-8 rounded-full"></div>
                            </div>
                            <div className="flex title-working ">
                                <p onClick={(() => { setType("portofolio") })} className="mr-2 text-zinc-700 cursor-pointer hover:text-sky-600">Portofolio</p>
                                <p onClick={(() => { setType("certificate") })} className="mr-2 text-zinc-700 cursor-pointer hover:text-sky-600">Certificate</p>
                            </div>
                            <div className="mt-3 grid grid-cols-2 lg:grid-cols-3 gap-2">
                                {article
                                    .filter(item => item.type === type) // Filter items based on the current type
                                    .map(item => (
                                        <button key={item.id} onClick={() => activeDetail(item.id)}>
                                            <div className="p-1 bg-[#F2F5F9] rounded text-left">
                                                <div className="rounded bg-gray-50 px-2">
                                                    <img
                                                        className="object-contain h-40 w-full"
                                                        src={item.image || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuT_ZQntoxW24XtuoMjO7vp_VwX3na6oY8Dg&s'}
                                                        alt='not-available'
                                                    />
                                                </div>
                                                <div className="pt-2">
                                                    <p className="section-title-work text-xs ">{item.Subject || 'No description'}</p>
                                                    <p className="truncate text-sm lg:text-base font-medium">{item.Title || 'No title'}</p>
                                                </div>
                                            </div>
                                        </button>
                                    ))}
                            </div>
                        </div>
                    ) : (
                        <h1>No data available</h1>
                    )}
                </>
            )}
        </>
    );
}

export default Work;