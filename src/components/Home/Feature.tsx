import React from 'react'
import { motion } from 'framer-motion';

const features = [
    {
        title: 'Fast Delivery',
        content: 'Same-day delivery ensures timely delivery of urgent packages.',
        icon: '/icons/icon-2.png'
    },
    {
        title: 'secured service',
        content: 'Professional couriers handle packages with care and security measures.',
        icon: '/icons/icon-3.png'
    },
    {
        title: 'National shipping',
        content: 'We can efficiently and promptly deliver your cargo anywhere in the nation thanks to our wide network of couriers.',
        icon: '/icons/icon-4.png'
    }
]

const featureVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: { 
            duration: 1
        }
    }
}

const featuresVariant = {
    hidden: { 
        opacity: 0,
        x: 100,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: { 
            delay: .2,
            duration: 1,
            when: "beforeChildren"
        }
    }
}

const Feature: React.FC = () => {
    return ( 
        <motion.section 
            className="pad-50 feature feature-2 clrbg-before"
            variants={featuresVariant}
            initial="hidden"
            animate="visible"
        >                    
            <div className="theme-container container">  
                <div className="row">
                    {features.map(feature => (
                        <motion.div 
                            key={feature.title} 
                            className="col-sm-6 col-md-4 mb-4"
                            variants={featureVariant}
                            >
                            <img alt="morrissameday couriers" src={feature.icon} className="wow fadeInUp" /> 
                            <div className="feature-content wow rotateInDownRight"> 
                                <h2 className="title-1">{feature.title}</h2> 
                                <p>{feature.content}</p>                                            
                            </div>  
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
     );
}
 
export default Feature;