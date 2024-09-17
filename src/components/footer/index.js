import React from "react";
import Logo from "../../assets/logo_light.png";
import Image from "next/image";
import SocialMediaCard from "../SocialMedia";

const Footer = () => {
    return (
        <footer className="relative p-[20px] w-full min-h-[50vh]">
            <div
                className="absolute w-full  min-h-max p-6 rounded-t-[170px]"
                style={{
                    background: "linear-gradient(90deg, #1D75BD 0%, #14B1EB 100%)",
                    transform: "perspective(550px) rotate3D(1, 0, 0, 25deg)",
                    margin: "20px",
                }}
            >
                <div style={{
                    transform: "perspective(600px) rotate3D(1, 0, 0,-25deg)",
                }} className="relative container mx-auto px-4 py-16 text-white">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                        {/* Logo Section */}
                        <div className="md:col-span-1">
                            <Image src={Logo} alt="Logo" width={180} />
                        </div>

                        {/* Quick Links */}
                        <div className="md:col-span-1">
                            <h2 className="font-bold text-lg mb-4">Quick Links</h2>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="hover:text-gray-300">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-300">
                                        Product
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-300">
                                        Blogs
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-300">
                                        New Page
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-300">
                                        Contact Us
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* About */}
                        <div className="md:col-span-1">
                            <h2 className="font-bold text-lg mb-4">About</h2>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="hover:text-gray-300">
                                        Company
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-300">
                                        FAQs
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-300">
                                        Security Policy
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Features */}
                        <div className="md:col-span-1">
                            <h2 className="font-bold text-lg mb-4">Features</h2>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="hover:text-gray-300">
                                        Support
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-300">
                                        Terms and Conditions
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-300">
                                        Privacy Policy
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Form */}
                        <div className="md:col-span-1">
                            <h2 className="font-bold text-lg mb-4">Contact</h2>
                            <form className="flex">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full p-2 rounded-l-md bg-white text-black"
                                />
                                <button className="bg-blue-600 p-2 rounded-r-md hover:bg-blue-700">
                                    →
                                </button>
                            </form>

                            {/* Social Media */}
                            <div className="mt-8">
                                <h2 className="font-bold text-lg mb-4">Social Media</h2>
                                <div className="flex space-x-4">
                                    <SocialMediaCard color={"#fff"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
