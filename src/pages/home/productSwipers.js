import React, { useState } from "react";
import SwiperFrame from "../../assets/productSwiper/swiperFrame.png";
import FrameSlide from "../../assets/productSwiper/frameSlide1.png";
import Image from "next/image";
import SwiperIcon1 from "../../assets/productSwiper/swliperIcon1.png";
import SwiperIcon2 from "../../assets/productSwiper/swiperIcon2.png";
import SwiperIcon3 from "../../assets/productSwiper/swiperIcons3.png";
import SwiperIcon4 from "../../assets/productSwiper/swiperIcons4.png";
import SwiperIcon5 from "../../assets/productSwiper/swiperIcons5.png";
import SwiperIcon6 from "../../assets/productSwiper/swiperIcons6.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ProductSwiper = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 6,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    const responsiveForSubSwiper = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    const swiperObj = [
        {
            title: "Appointment scheduler",
            icon: SwiperIcon1,
            subSwiperImagesURl: [FrameSlide, FrameSlide, FrameSlide, FrameSlide],
            content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
            link: "",
        },
        {
            title: "E-Prescription",
            icon: SwiperIcon2,
            subSwiperImagesURl: [FrameSlide],
            content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
            link: "",
        },
        {
            title: "Before and After Photo Gallery",
            icon: SwiperIcon3,
            subSwiperImagesURl: [FrameSlide],
            content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
            link: "",
        },
        {
            title: "Pharmacy",
            icon: SwiperIcon4,
            subSwiperImagesURl: [FrameSlide],
            content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
            link: "",
        },
        {
            title: "Reports",
            icon: SwiperIcon5,
            subSwiperImagesURl: [FrameSlide],
            content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
            link: "",
        },
        {
            title: "Reports",
            icon: SwiperIcon6,
            subSwiperImagesURl: [FrameSlide],
            content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
            link: "",
        },
    ];

    const [selectedSwiper, setSelectedSwiper] = useState(swiperObj[0]);
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <div className=" min-h-screen  bg-white relative ">
            <div
                style={{
                    background: "linear-gradient(90deg, #1D75BD 0%, #14B1EB 100%)",
                }}
                className="min-h-[70vh]"
            >
                <div className="container mx-auto flex flex-col items-center justify-between ">
                    <div className="flex items-center justify-between py-6 pt-20">
                        <div className="flex max-w-[20%] items-center justify-center w-[25%] opacity-[.4] ">
                            <Image
                                className="aspect-[2/2] object-contain transition-all duration-150 ease-linear"
                                width={90}
                                src={selectedSwiper?.icon}
                            />
                        </div>
                        <div className="w-[80%]">
                            <div className="absolute -top-[15%] left-1/2 -translate-x-1/2 z-10">
                                <Image className="aspect-auto" src={SwiperFrame} />
                            </div>
                            <div className="absolute -top-[15%] left-1/2 -translate-x-1/2 scale-90 z-40">
                                <Carousel responsive={responsiveForSubSwiper}>
                                    {selectedSwiper?.subSwiperImagesURl?.map((items) => {
                                        return (
                                            <Image
                                                alt="carouseALt"
                                                className="aspect-auto"
                                                src={items}
                                            />
                                        );
                                    })}
                                </Carousel>
                            </div>
                        </div>
                        <div className="text-left leading-[25px] w-[20%] m-6  text-white font-poppins font-[400] text-[16px]   flex flex-col items-center gap-2 ">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy
                                text ever since the 1500s,
                            </p>
                            <div className=" flex w-full items-center justify-center text-center border-white border-2 max-w-max  rounded-[10px] text-[#fff] my-2 py-1 px-3">
                                <p className="flex gap-2 items-center font-[400] text-[16px] font-poppins leading-[38px]  cursor-pointer">
                                    Explore More
                                    <span>
                                        <svg
                                            width="26"
                                            height="14"
                                            viewBox="0 0 26 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M0 6.85416C0 6.64791 0.0826547 6.45011 0.229782 6.30426C0.376909 6.15842 0.576456 6.07649 0.784525 6.07649L23.3202 6.22233L18.3824 1.32924C18.2351 1.18322 18.1524 0.985162 18.1524 0.778651C18.1524 0.57214 18.2351 0.374087 18.3824 0.228061C18.5298 0.082036 18.7296 4.86557e-09 18.9379 0C19.1462 -4.86557e-09 19.346 0.082036 19.4933 0.228061L25.7695 6.44941C25.8426 6.52165 25.9005 6.60747 25.9401 6.70195C25.9796 6.79642 26 6.89771 26 7C26 7.10229 25.9796 7.20358 25.9401 7.29805C25.9005 7.39253 25.8426 7.47835 25.7695 7.55059L19.4933 13.7719C19.346 13.918 19.1462 14 18.9379 14C18.7296 14 18.5298 13.918 18.3824 13.7719C18.2351 13.6259 18.1524 13.4279 18.1524 13.2213C18.1524 13.0148 18.2351 12.8168 18.3824 12.6708L23.3202 7.77767L0.784525 7.63183C0.576456 7.63183 0.376909 7.5499 0.229782 7.40405C0.0826547 7.25821 0 7.06041 0 6.85416Z"
                                                fill="#fff"
                                            />
                                        </svg>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className=" mt-4">
                        <Carousel
                            responsive={responsiveForSubSwiper}
                        //   className="mt-12 font-poppins grid grid-cols-6 z-50  "
                        >
                            {swiperObj.map((items, index) => {
                                return (
                                    <div
                                        style={{
                                            background:
                                                index === selectedIndex
                                                    ? "rgba(255, 255, 255, 0.3)"
                                                    : "transparent",
                                            border: index === selectedIndex ? "1px solid #fff" : "",
                                            borderRadius: index === selectedIndex ? "33px" : "",
                                        }}
                                        onClick={() => {
                                            setSelectedSwiper(items);
                                            setSelectedIndex(index);
                                        }} // Fixed "onClick"
                                        className={`cursor-pointer transition-all   duration-200 ease-linear flex items-center justify-center gap-12 flex-col p-5  py-3 m-1  ${index === selectedIndex ? "shadow-md" : ""
                                            } `}
                                    >
                                        <div>
                                            <Image
                                                className="aspect-[2/2] object-contain"
                                                width={90}
                                                alt="cline"
                                                src={items?.icon}
                                            />
                                        </div>
                                        <div className="text-white text-center text-[14px] w-[70%]">
                                            {items?.title}
                                        </div>
                                    </div>
                                );
                            })}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductSwiper;
