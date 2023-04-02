import React from 'react'
import { motion } from 'framer-motion';
 
const bannerVariant = {
    hidden: {
        opacity: 0,
        y: 200,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: .5,
            duration: .5,
            when: "beforeChildren"
        }
    }
}

const textVariant = {
    hidden: {
        opacity: 0,
        y: 100,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .5,
        }
    }
}

const Banner: React.FC = () => {
    return ( 
        <motion.section 
            className="banner mask-overlay pad-120 white-clr"
            variants={bannerVariant}
            initial="hidden"
            animate="visible"
            >
            <motion.div 
                className="container theme-container rel-div"
                variants={textVariant}
                >
                <img className="pt-10 effect animated fadeInLeft" alt="" src="assets/img/icons/icon-1.png" />
                <h1 className="fs-20 fw-600" style={{textTransform: 'uppercase'}}>morris sameday couriers</h1>
                <h2 className="section-title fs-48 mt-4" style={{letterSpacing: '8px', lineHeight: '64px'}}> same day courier <br /> services </h2>
            </motion.div>
            <div className="pad-50 visible-lg"></div>
        </motion.section>
     );
}
 
export default Banner;