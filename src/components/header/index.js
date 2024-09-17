import React, { useState, useEffect } from "react";
import Logo from "../../assets/clinceo_logo.png";
import Image from "next/image";
import Link from "next/link";
import WhatsappIcon from "../../assets/whatsapp_icon.png";
import EmailIcon from "../../assets/call_icon.png";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // Import icons for mobile menu
import SocialMediaCard from "../SocialMedia";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu toggle
    const [activePath, setActivePath] = useState("");

    useEffect(() => {
        // Ensure that the code only runs in the browser
        if (typeof window !== "undefined") {
            setActivePath(window.location.pathname);
        }
    }, []);

    const navBarObjects = [
        { title: "Home", logo: "", path: "/" },
        { title: "About Us", logo: "", path: "/about-us" },
        { title: "Product", logo: "", path: "/product" },
        { title: "Events", logo: "", path: "/events" },
        { title: "Blogs", logo: "", path: "/blogs" },
        { title: "Contact Us", logo: "", path: "/contact-us" },
        { title: "New Page", logo: "", path: "/new-page" },
        { title: "", logo: WhatsappIcon, path: "/whatsapp" },
        { title: "", logo: EmailIcon, path: "tel:+919513145995" },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">
            <nav className="container mx-auto p-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/">
                    <Image width={180} className="img-fluid" src={Logo} alt="Logo" />
                </Link>

                {/* Mobile Menu Toggle Icon */}
                <div className="lg:hidden">
                    {/* Toggle menu on click */}
                    <button onClick={() => setIsOpen(!isOpen)} className="text-3xl">
                        {isOpen ? (
                            <HiX className="text-[#000]" />
                        ) : (
                            <HiMenuAlt3 className="text-[#1c75bc]" />
                        )}
                    </button>
                </div>

                {/* Navigation links for large screens */}
                <ul className="hidden lg:flex gap-12 items-center">
                    {navBarObjects.map((item, index) => (
                        <li key={index}>
                            {item?.logo ? (
                                <Link href={item?.path}>
                                    <Image width={40} height={40} src={item?.logo} alt="Icon" />
                                </Link>
                            ) : (
                                <Link
                                    className={`poppins font-[500] text-[18px] max-w-max text-[#757575] hover:text-[#1c75bc]  transition-all ${item.path === activePath
                                        ? "text-[#1c75bc] font-[700]"
                                        : "font-[500]"
                                        }`}
                                    href={item?.path}
                                >
                                    {item?.title}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Mobile Navigation */}
                <div
                    className={`lg:hidden overflow-auto fixed top-28 left-0 w-full shadow-md h-full bg-white transform transition-transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                        }`}
                >
                    <nav className="p-8">
                        <ul className="flex flex-col gap-8 items-start">
                            {navBarObjects.map((item, index) => (
                                <li key={index}>
                                    {item?.logo ? (
                                        <Link href={item?.path}>
                                            <Image
                                                width={40}
                                                height={40}
                                                src={item?.logo}
                                                alt="Icon"
                                            />
                                        </Link>
                                    ) : (
                                        <Link
                                            className={`poppins font-[500] text-[18px] text-[#757575] hover:text-[#1c75bc]  transition-all ${item.path === activePath ? "text-[#1c75bc] " : ""
                                                }`}
                                            href={item?.path}
                                            onClick={() => setIsOpen(false)} // Close menu on link click
                                        >
                                            {item?.title}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </nav>

        </header>
    );
};

export default Header;
