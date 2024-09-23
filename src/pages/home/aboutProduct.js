import Title from '../../components/Title'
import Image from 'next/image'
import React from 'react'
import AboutProductImage from '../../assets/aboutProduct.png'

const AboutProduct = () => {
    return (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 xl:gap-12 sm:gap-4 items-center justify-center min-h-screen px-4">
            <div className="md:col-span-1">
                <div className="max-w-max py-4">

                    <Title title={'About Product'} />
                </div>
                <p className="font-poppins sm:text-[20px] font-[400]  sm:leading-[28px] xl:leading-[38px]  text-left text-[#787878]">
                    At Cliniceo™, we understand that data management in healthcare, especially within aesthetic medical practice, is crucial for enhancing patient outcomes, streamlining operations, and ensuring the highest standards of care. The world of aesthetics thrives on shared decision-making, where practitioners must consider clinical findings, patient expectations, and their commitment to treatment before proceeding with aesthetic procedures.
                </p>
            </div>
            <div className="md:col-span-1">
                <Image src={AboutProductImage} alt="About Product" />
            </div>
        </div>
    )
}

export default AboutProduct;
