import React from "react";
import Header from "../header";
import Footer from "../footer";
import SocialsType2 from "../SocialMedia/socialsType2";

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <main className="">
                {/* Add padding-top to avoid content being hidden under the sticky header */}
                {children}
            </main>
            {/* <Footer /> */}
            <div className="fixed bottom-[45px] right-[30px]">
                <SocialsType2 />
            </div>
        </div>
    );
};

export default Layout;
