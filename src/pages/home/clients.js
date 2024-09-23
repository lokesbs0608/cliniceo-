import React from "react";
import Image from "next/image";

import Client1 from "../../assets/clients/clients1.png";
import Client2 from "../../assets/clients/clients2.png";
import Client3 from "../../assets/clients/clients3.png";
import Client4 from "../../assets/clients/clients4.png";
import Client5 from "../../assets/clients/clients5.png";
import Client6 from "../../assets/clients/clients6.png";
import Client7 from "../../assets/clients/clients7.png";
import Client8 from "../../assets/clients/clients8.png";
import Client9 from "../../assets/clients/clients9.png";
import Client10 from "../../assets/clients/clients10.png";
import Client11 from "../../assets/clients/clients11.png";
import Client12 from "../../assets/clients/clients12.png";
import Title from "@/components/Title";

const Clients = () => {
    const clientsObj = [
        Client1,
        Client2,
        Client3,
        Client4,
        Client5,
        Client6,
        Client7,
        Client8,
        Client9,
        Client10,
        Client11,
        Client12,
    ];

    return (
        <div className="container mx-auto py-8 px-6 overflow-hidden">
            <Title title={"Clientele"} />
            <div className="grid grid-cols-6 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6 gap-8 items-center justify-center overflow-hidden my-12 sliderContent">
                {clientsObj.map((client, index) => (
                    <Image
                        className="p-2"
                        key={index}
                        width={180}
                        height={150}
                        src={client}
                        alt={`Client ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Clients;
