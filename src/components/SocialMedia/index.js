import React from "react";
import XSVGComponent from "../SVG/SocialMedia/x";
import WhatsAppSVGComponent from "../SVG/SocialMedia/whatsApp";
import LinkedInSVGComponent from "../SVG/SocialMedia/linkedIn";
import YoutubeSVGComponent from "../SVG/SocialMedia/Youtube";
import FaceBookSvgComponent from "../SVG/SocialMedia/faceBook";
import InstaSvgComponent from "../SVG/SocialMedia/insta";

import Link from "next/link";

const SocialMediaCard = ({ color }) => {
    const socialMediaObj = [
        {
            icon: FaceBookSvgComponent,
            path: "https://www.facebook.com/profile.php?id=61558920456150",
        },
        {
            icon: InstaSvgComponent,
            path: "https://www.facebook.com/profile.php?id=61558920456150",
        },
        {
            icon: LinkedInSVGComponent,
            path: " https://www.linkedin.com/company/honeyhive-talent-solutions/   ",
        },
        {
            icon: YoutubeSVGComponent,
            path: "https://www.youtube.com/channel/UCNjnh4fQabqDSi9LXSckTHw ",
        },
        { icon: XSVGComponent, path: "https://twitter.com/Honeyhive112 " },
        {
            icon: WhatsAppSVGComponent,
            path: "https://web.whatsapp.com/send?phone=+919880501267",
        },
    ];

    return (
        <div className="flex items-center justify-between sm:gap-12 gap-4 sm:min-w-full min-w-[90vw]">
            {socialMediaObj.map((item, index) => {
                const Icon = item.icon;
                return (
                    <div>
                        <a key={index} target="_blank" href={item?.path}>
                            <Icon color={color} />
                        </a>
                    </div>
                );
            })}
        </div>
    );
};

export default SocialMediaCard;
