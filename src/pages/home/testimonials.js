import Title from "@/components/Title";
import React, { useState, useRef, useEffect } from "react";
import Dummying from "../../assets/dummy/ssImage.png";
import Image from "next/image";
import Client from "../../assets/clients/clients1.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Testimonials = () => {
    const [videoModal, setVideoModal] = useState(false);
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    const [videoLink, setVideoLink] = useState("");
    const [selectedTestiMonial, setSelectedTestimonial] = useState({
        logo: Client,
        content:
            "I’m very happy that I chose Cliniceo for my patient management software in my clinic. It has really changed my clinic’s working style. It’s made everything work very smoothly. Everything has been streamlined",
        name: "Dr Ishan Sardesai",
        place: "Delhi",
        thumbNail: Dummying,
        videoSrc:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    });
    const testiMonialsObj = [
        {
            logo: Client,
            content:
                "I’m very happy that I chose Cliniceo for my patient management software in my clinic. It has really changed my clinic’s working style. It’s made everything work very smoothly. Everything has been streamlined",
            name: "Dr Ishan Sardesai",
            place: "Delhi",
            thumbNail: Dummying,
            videoSrc:
                "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        },
        {
            logo: Client,
            content:
                "I’m very happy that I chose Cliniceo for my patient management software in my clinic. It has really changed my clinic’s working style. It’s made everything work very smoothly. Everything has been streamlined",
            name: "Dr Ishan Sardesai",
            place: "Banglore",
            thumbNail: Dummying,
            videoSrc:
                "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        },
        {
            logo: Client,
            content:
                "I’m very happy that I chose Cliniceo for my patient management software in my clinic. It has really changed my clinic’s working style. It’s made everything work very smoothly. Everything has been streamlined",
            name: "Dr Ishan Sardesai",
            place: "Kolkata",
            thumbNail: Dummying,
            videoSrc:
                "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        },
        {
            logo: Client,
            content:
                "I’m very happy that I chose Cliniceo for my patient management software in my clinic. It has really changed my clinic’s working style. It’s made everything work very smoothly. Everything has been streamlined",
            name: "Dr Ishan Sardesai",
            place: "Mumbai",
            thumbNail: Dummying,
            videoSrc:
                "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        },
        {
            logo: Client,
            content:
                "I’m very happy that I chose Cliniceo for my patient management software in my clinic. It has really changed my clinic’s working style. It’s made everything work very smoothly. Everything has been streamlined",
            name: "Dr Ishan Sardesai",
            place: "Delhi",
            thumbNail: Dummying,
            videoSrc:
                "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        },
        {
            logo: Client,
            content:
                "I’m very happy that I chose Cliniceo for my patient management software in my clinic. It has really changed my clinic’s working style. It’s made everything work very smoothly. Everything has been streamlined",
            name: "Dr Ishan Sardesai",
            place: "Banglore",
            thumbNail: Dummying,
            videoSrc:
                "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        },
        {
            logo: Client,
            content:
                "I’m very happy that I chose Cliniceo for my patient management software in my clinic. It has really changed my clinic’s working style. It’s made everything work very smoothly. Everything has been streamlined",
            name: "Dr Ishan Sardesai",
            place: "Kolkata",
            thumbNail: Dummying,
            videoSrc:
                "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        },
        {
            logo: Client,
            content:
                "I’m very happy that I chose Cliniceo for my patient management software in my clinic. It has really changed my clinic’s working style. It’s made everything work very smoothly. Everything has been streamlined",
            name: "Dr Ishan Sardesai",
            place: "Mumbai",
            thumbNail: Dummying,
            videoSrc:
                "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        },
    ];

    const ActiveCards = ({ data }) => {
        const [fadeState, setFadeState] = useState("fade-in"); // Controls the fade state

        useEffect(() => {
            // Trigger fade-out when data changes, then fade-in
            setFadeState("fade-out");

            const timeoutId = setTimeout(() => {
                setFadeState("fade-in");
            }, 300); // Adjust the timing to match your CSS transition duration

            return () => clearTimeout(timeoutId); // Cleanup timeout on component unmount
        }, [data]);

        return (
            <div
                className={`border border-[#D9D9D9] rounded-[15px] w-[100%] flex flex-wrap  `}
            >
                <div className="w-[100%] sm:w-[66%] overflow-clip relative">
                    <Image className="   object-cover w-[100%] " src={data?.thumbNail} />
                    <div
                        onClick={() => {
                            setVideoLink(data?.videoSrc);
                            setVideoModal(!videoModal);
                        }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 group"
                    >
                        <svg
                            className="group-hover:stroke-[#1C75BC] last:cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out"
                            width="60"
                            height="60"
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M14.962 27.5c6.904 0 12.5 -5.596 12.5 -12.5S21.867 2.5 14.962 2.5 2.462 8.097 2.462 15s5.597 12.5 12.5 12.5"
                                stroke="white"
                                className="group-hover:stroke-[#1C75BC]"
                                strokeWidth="1.9047619047619047"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M10.925 15.287V13.2c0 -2.6 1.837 -3.663 4.087 -2.363l1.813 1.05 1.812 1.05c2.25 1.3 2.25 3.425 0 4.725l-1.812 1.05-1.813 1.05c-2.25 1.3-4.087 0.238-4.087-2.362z"
                                stroke="white"
                                strokeWidth="1.9047619047619047"
                                strokeMiterlimit="10"
                                className="group-hover:stroke-[#1C75BC]"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>
                <div className="w-[100%] sm:w-[33%] sm:gap-10 gap-5 flex flex-col px-6 sm:px-16 justify-evenly">
                    <div className="flex items-center justify-center w-full my-6">
                        <Image width={150} src={Client} />
                    </div>
                    <div className="scale-100 font-poppins">
                        <p>{data?.content}</p>
                    </div>
                    <div className="text-left font-poppins py-6">
                        <strong className="font-600 font-poppins">{data?.name}</strong>
                        <p className="font-light">{data?.place}</p>
                    </div>
                </div>
            </div>
        );
    };
    const InActiveCards = ({ data }) => {
        return (
            <div className="border border-[#D9D9D9]  rounded-[15px] w-[100%]  ">
                <div className="w-[100%] aspect-video relative">
                    <Image className="object-cover " src={data.thumbNail} />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 group">
                        <svg
                            className="group-hover:stroke-[#1C75BC] last:cursor-pointer  hover:scale-110 transition-all duration-300 ease-in-out"
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M14.962 27.5c6.904 0 12.5 -5.596 12.5 -12.5S21.867 2.5 14.962 2.5 2.462 8.097 2.462 15s5.597 12.5 12.5 12.5"
                                stroke="white"
                                className="group-hover:stroke-[#1C75BC]"
                                stroke-width="1.9047619047619047"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M10.925 15.287V13.2c0 -2.6 1.837 -3.663 4.087 -2.363l1.813 1.05 1.812 1.05c2.25 1.3 2.25 3.425 0 4.725l-1.812 1.05 -1.813 1.05c-2.25 1.3 -4.087 0.238 -4.087 -2.362z"
                                stroke="white"
                                stroke-width="1.9047619047619047"
                                stroke-miterlimit="10"
                                className="group-hover:stroke-[#1C75BC]"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>
                </div>
                <div className="w-[100%] px-8 py-6">
                    <div className="text-left font-poppins">
                        <strong className="font-600 font-poppins">{data?.name}</strong>
                        <p className="font-light">{data?.place}</p>
                    </div>
                </div>
            </div>
        );
    };
    const VideoModal = ({ open, onCLose, videoSrc }) => {
        const videoRef = useRef(null);

        useEffect(() => {
            // Pause the video when the modal is closed
            if (!open && videoRef.current) {
                videoRef.current.pause();
            }
        }, [open]);
        return (
            <>
                {open && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-0 px-2 ">
                        {/* Modal Container */}
                        <div className="relative bg-white rounded-lg overflow-hidden aspect-video ">
                            {/* Close Button */}
                            <button
                                onClick={onCLose}
                                className="absolute top-10 right-10 text-gray-700 text-lg hover:text-black z-50"
                            >
                                <svg
                                    width="48"
                                    height="48"
                                    viewBox="0 0 48 48"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx="24" cy="24" r="24" fill="white" />
                                    <path
                                        d="M12 13L35 34M35 13L12 34"
                                        stroke="#1C75BC"
                                        stroke-width="3"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </button>

                            <div className=" flex items-center justify-center z-50">
                                <video
                                    controls
                                    className="aspect-video"
                                    autoPlay
                                    src={videoSrc}
                                >
                                    <source controls autoPlay src={videoSrc} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                )}
            </>
        );
    };

    return (
        <div>
            <div className="container mx-auto px-4  scale-100 sm:scale-[75%] ">
                <Title title={"Testimonials"} />
                <div className="my-12  ">
                    <ActiveCards data={selectedTestiMonial} />
                </div>

                <div>
                    <Carousel responsive={responsive} className={"h-[550px]"}>
                        {testiMonialsObj.slice(1).map((items, index) => {
                            return (
                                <div
                                    onClick={() => setSelectedTestimonial(items)}
                                    key={index}
                                    className="px-3"
                                >
                                    <InActiveCards data={items} />
                                </div>
                            );
                        })}
                    </Carousel>
                </div>
            </div>
            <VideoModal
                videoSrc={videoLink}
                open={videoModal}
                onCLose={() => setVideoModal(false)}
            />
        </div>
    );
};

export default Testimonials;
