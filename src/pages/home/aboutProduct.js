import Title from "../../components/Title";
import Image from "next/image";
import React from "react";
import AboutProductImage from "../../assets/aboutProduct.png";

const AboutProduct = () => {
    return (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 xl:gap-12 sm:gap-4 items-center justify-center min-h-screen px-4">
            <div className="md:col-span-1">
                <div className="max-w-max py-4">
                    <Title title={"About Product"} />
                </div>
                <p className="font-poppins sm:text-[20px] font-[400]  sm:leading-[28px] xl:leading-[38px]  text-left text-[#787878]">
                    At Cliniceo™, we understand that data management in healthcare,
                    especially within aesthetic medical practice, is crucial for enhancing
                    patient outcomes, streamlining operations, and ensuring the highest
                    standards of care. The world of aesthetics thrives on shared
                    decision-making, where practitioners must consider clinical findings,
                    patient expectations, and their commitment to treatment before
                    proceeding with aesthetic procedures.
                </p>
                <div className="flex items-end flex-col justify-end text-[#1C75BC]">
                    <p className="flex gap-2 items-center justify-end font-[400] text-[20px] font-poppins leading-[38px] pr-8 cursor-pointer">
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
                                    fill="#1C75BC"
                                />
                            </svg>
                        </span>
                    </p>
                </div>
            </div>
            <div className="md:col-span-1">
                <Image src={AboutProductImage} alt="About Product" />
            </div>
        </div>
    );
};

export default AboutProduct;
