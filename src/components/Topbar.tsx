import { useDispatch } from "react-redux";
import React from "react";
import { toggle } from "../../slices/RequestQuoteSlice";
import { motion } from "framer-motion"

interface TopbarProps {
    
}

const links = [
    {
        text: 'contact',
        href: '/contactUs'
    },
    {
        text: 'about',
        href: '/aboutUs'
    },
    {
        text: 'sitemap',
        href: '/sitemap'
    }
]

const topBar = {
    hidden: {
        opacity: 0,
        y: -30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring", 
            stiffness: 100,
            duration: .2,
            bounce: 0
        }
    }
}

const requestBtn = {
    hidden: {
        x: 200,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: .3   
        }
    }
}
 
const Topbar: React.FC<TopbarProps> = () => {

    const dispatch = useDispatch()

    return ( 
        <motion.div 
            variants={topBar}
            initial="hidden"
            animate="visible"
            className="top-bar font2-title1 white-clr">
            <div className="theme-container container">
                <div className="row">
                    <div className="col-md-5 col-sm-3">
                        <ul className="list-items fs-10">
                            {links.map(link => (
                                <li key={link.text}><a href={link.href}>{link.text}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-md-7 col-sm-9 fs-12">
                        <p className="contact-num">  
                            <i className="fa fa-phone"></i> Call us now: <span className="theme-clr"> +44-7501-827381 </span> 
                        </p>
                    </div>
                </div>
            </div>
            <motion.a className="sign-in fs-12 theme-clr-bg" onClick={() => dispatch(toggle())} variants={requestBtn}> Request Quote </motion.a>
        </motion.div>

     );
}
 
export default Topbar;