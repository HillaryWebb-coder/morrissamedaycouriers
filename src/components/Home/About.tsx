import React from 'react'
import { useDispatch } from 'react-redux';
import { toggle } from '../../../slices/RequestQuoteSlice';
import { motion } from 'framer-motion';
import Link from 'next/link';

const aboutVariant = {
    hidden: {
        x: -100,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay: .2,
            duration: 1,
        }
    }
}



const imageVariant = {
    hidden: {
        x: 100,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay: .2,
            duration: 1,
        }
    }
}
 
const About: React.FC = () => {

    const dispatch = useDispatch();

    return ( 
        <section className="pad-120 about-wrap about-2 clrbg-before">
            <span className="bg-text" style={{zIndex: -10}}> About </span>
            <div className="theme-container container">               
                <div className="row">
                    <motion.div 
                        className="col-md-6"
                        variants={aboutVariant}
                        initial="hidden"
                        whileInView="visible"
                        >
                        <div className="pt-80 visible-lg"></div>
                        <div className="about-us">
                            <h2 className="section-title pb-10"> About Us </h2>
                            <p className="fs-16">Welcome to morrissameday couriers, where we provide reliable and efficient delivery solutions for businesses and individuals. Our mission is to ensure that your packages and documents reach their destination on time, every time.</p>                                    
                        </div>
                        <div className="row pt-3 align-items-center px-3">
                            <Link className="fs-12 btn btn-link col-md-5 theme-clr text-uppercase" href="/aboutUs">Learn More</Link>
                            <Link href="#" className="btn-1 col-md-5 me-4" onClick={() => dispatch(toggle())}>Request Quote</Link>
                        </div>
                    </motion.div>
                    <motion.div 
                        className="col-md-6 pt-5"
                        variants={imageVariant}
                        initial="hidden"
                        whileInView="visible"
                        >                                
                        <img alt="about morrissameday couriers" src="/about-img-2.jpg" className="img-fluid my-auto" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
 
export default About;