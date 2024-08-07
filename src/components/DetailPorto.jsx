import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { CiLink } from "react-icons/ci";
import { ColorRing } from "react-loader-spinner";
import { db } from "../configuration";
import { useNavigate } from "react-router-dom";

function DetailPorto({ id }) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("");

    const fetchData = async () => {
        setIsLoading(true)
        try {
            const detailArticle = doc(db, "portofolios", id);
            const docSnap = await getDoc(detailArticle);
            setData(docSnap.data())
        } catch (error) {
            setMessage(error.message);
            console.log("error terjadi")
        }
        setIsLoading(false)
    }
    useEffect(() => {
        fetchData();
    }, [])

    console.log(data)
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
                   
                    <div className="mt-2 grid grid-cols-1 lg:grid-cols-3">
                        <div className="">
                            <img
                                className="object-contain h-40 w-full"
                                src={data.image || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuT_ZQntoxW24XtuoMjO7vp_VwX3na6oY8Dg&s'}
                                alt='not-available'
                            />
                        </div>
                        <div className="detail-work px-5 lg:col-span-2 pt-2 lg:pt-0">
                            <p className="text-base lg:text-lg font-light">{data.Subject || ''}</p>
                            <h1 className="text-xl lg:text-2xl font-bold">{data.Title || ''}</h1>
                        </div>
                    </div>
                    <div className="mt-6">
                        <p>{data.Desc}</p>
                    </div>
                    <div className="mt-5 flex">
                        <CiLink />
                        <p className="ml-2 font-bold text-base text-zinc-700">Link :</p>
                        <p className="ml-2 font-normal text-sky-600">{data.Link || '-'}</p>
                    </div>

                </>
            )}


        </>
    );
}

export default DetailPorto;