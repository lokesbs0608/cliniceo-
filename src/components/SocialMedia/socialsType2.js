import React from "react";
import WhatsappIcon from "../../assets/whatsapp_icon.png";
import CallIcon from "../../assets/call_icon.png";
import GmailIcon from "../../assets/gmail_icon.png";
import Image from "next/image";


const SocialsType2 = () => {
    const socialMediaObj = [
        {
            icon: WhatsappIcon,
            path: "https://www.facebook.com/profile.php?id=61558920456150",
        },
        {
            icon: CallIcon,
            path: "https://www.facebook.com/profile.php?id=61558920456150",
        },
        {
            icon: GmailIcon,
            path: "https://web.whatsapp.com/send?phone=+919880501267",
        },
    ];
    return (
        <div>
            <div className="flex items-center justify-between flex-col gap-4">
                {socialMediaObj.map((item, index) => {
                    return (
                        <div>
                            <a key={index} target="_blank" href={item?.path}>
                                <Image src={item?.icon} width={40} height={40} />
                            </a>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default SocialsType2
