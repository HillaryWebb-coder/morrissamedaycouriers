import React from "react";
import Navbar from "./Navbar";
import Topbar from "./Topbar";

interface HeaderProps {
    
}
 
const Header: React.FC<HeaderProps> = () => {
    return ( 
        <header className="header-main">
            <Topbar />
            <Navbar />
        </header>
     );
}
 
export default Header;