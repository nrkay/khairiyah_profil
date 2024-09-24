import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { CiLink } from "react-icons/ci";
import { ColorRing } from "react-loader-spinner";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { db } from "../configuration";

function DetailPorto({ id }) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [images, setImages] = useState([]);
    const [message, setMessage] = useState("");

    const fetchData = async () => {
        setIsLoading(true)
        try {
            const detailArticle = doc(db, "portofolios", id);
            const docSnap = await getDoc(detailArticle);
            const articleData = docSnap.data();
            setData(docSnap.data())
            // if (articleData?.type == "certificate") {
                const imagesRef = collection(db, `portofolios/${id}/image`);
                const imagesSnapshot = await getDocs(imagesRef);
                const images = imagesSnapshot.docs.map(doc => doc.data());
                setImages(images);
            // }
            setIsLoading(false)
        } catch (error) {
            setMessage(error.message);
            setIsLoading(false)
        }
    }


    useEffect(() => {
        fetchData();
    }, [])

    return (

        <>
            {isLoading ? (
                <div className="w-full h-96 flex justify-center items-center">
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
                    {data.type === 'certificate' ? (
                        <>
                            <h1 className="text-xl lg:text-2xl font-bold mb-3 text-center">{data.Title || ''}</h1>
                            <div className="w-80 lg:w-full">
                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={50}
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
                            >
                                {images && images.length > 0 ? (
                                    <>
                                        {
                                            images.map(item => (
                                                <>
                                                    <SwiperSlide key={item.name}>
                                                        <div className="col-span-2 flex justify-center mb-5 ">
                                                            <img
                                                                className="h-auto max-w-80 lg:max-w-lg rounded-lg"
                                                                src={item.name || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuT_ZQntoxW24XtuoMjO7vp_VwX3na6oY8Dg&s'}
                                                                alt="description certificate"
                                                            />
                                                        </div>
                                                    </SwiperSlide>
                                                </>
                                            ))
                                        }
                                    </>
                                ) : (
                                    <SwiperSlide>
                                        <div className="col-span-2 flex justify-center mb-5">
                                            <img className="h-auto max-w-80 lg:max-w-lg rounded-lg"
                                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuT_ZQntoxW24XtuoMjO7vp_VwX3na6oY8Dg&s'
                                                alt="description empty"
                                            />
                                        </div>
                                    </SwiperSlide>
                                )}
                            </Swiper>
                            </div>
                           

                        </>
                    ) : (
                        <>
                            <div className="mt-2 grid grid-cols-1 lg:grid-cols-3">
                                <div className="">
                                    <img
                                        className="object-contain h-40 w-full"
                                        src={data.image || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuT_ZQntoxW24XtuoMjO7vp_VwX3na6oY8Dg&s'}
                                        alt="not-available"
                                    />
                                </div>
                                <div className="detail-work px-5 lg:col-span-2 pt-2 lg:pt-0">
                                    <p className="text-base lg:text-lg font-light">{data.Subject || ''}</p>
                                    <h1 className="text-xl lg:text-2xl font-bold">{data.Title || ''}</h1>
                                </div>
                            </div>
                            <div className="mt-6 px-5">
                                <p>{data.Desc}</p>
                            </div>
                            <div className="mt-5 flex">
                                <CiLink />
                                <p className="ml-2 font-bold text-base text-zinc-700">Link :</p>
                                <p className="ml-2 font-normal text-sky-600">{data.Link || '-'}</p>
                            </div>
                            <div className="mt-8 w-80 lg:w-full">
                                <>
                                    <Swiper
                                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                                        spaceBetween={50}
                                        slidesPerView={1}
                                        navigation
                                        pagination={{ clickable: true }}
                                    >
                                        {images && images.length > 0 ? (
                                            <>
                                                {
                                                    images.map(item => (
                                                        <>
                                                            <SwiperSlide key={item.name}>
                                                                <div className="col-span-2 flex justify-center mb-5 ">
                                                                    <img
                                                                        className="h-auto max-w-80 lg:max-w-lg rounded-lg"
                                                                        src={item.name || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuT_ZQntoxW24XtuoMjO7vp_VwX3na6oY8Dg&s'}
                                                                        alt="description certificate"
                                                                    />
                                                                </div>
                                                            </SwiperSlide>
                                                        </>
                                                    ))
                                                }
                                            </>
                                        ) : (
                                            <SwiperSlide>
                                                <div className="col-span-2 flex justify-center mb-5">
                                                    <img className="h-auto max-w-80 lg:max-w-lg rounded-lg"
                                                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuT_ZQntoxW24XtuoMjO7vp_VwX3na6oY8Dg&s'
                                                        alt="description empty"
                                                    />
                                                </div>
                                            </SwiperSlide>
                                        )}
                                    </Swiper>
                                </>
                            </div>
                        </>
                    )}
                </>
            )}
        </>
    );
}

export default DetailPorto;