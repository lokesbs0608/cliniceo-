import React from "react";
import Header from "../header";
import Footer from "../footer";

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <main className="pt-16"> {/* Add padding-top to avoid content being hidden under the sticky header */}
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
