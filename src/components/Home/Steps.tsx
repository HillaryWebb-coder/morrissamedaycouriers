import React from 'react'
import { motion } from 'framer-motion';

const stepsArr = [
    {
        title: 'Order',
        content: 'Request a quote via our website or by contacting us directly',
    },
    {
        title: 'Wait',
        content: 'Our staffs will be in contact with you to discuss the specifics',
    },
    {
        title: 'Deliver',
        content: 'Our driver will be dispatched to deliver your goods to the designated location',
    }
]

const stepsVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: .2,
            duration: .7,
            staggerChildren: .5,
            when: "beforeChildren"
        }
    }
}


const stepVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: .7,
        }
    }
}

const imageVariant = {
    hidden: {
        opacity: 0,
        x: 100,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            delay: .2,
            type: "spring",
            mass: .6,
        }
    }
}
 
const Steps: React.FC = () => {
    return ( 
        <section className="steps-wrap mask-overlay pad-120">                
            <div className="theme-container container">               
                <motion.div 
                    className="row"
                    variants={stepsVariant}
                    initial="hidden"
                    whileInView="visible"
                    >
                    {stepsArr.map((step, idx) => (
                        <motion.div 
                            className="col-lg-3 col-md-5 col-sm-6 d-flex" 
                            key={step.title}
                            variants={stepVariant}
                            >
                            <div className="font-2 fs-50">{idx + 1}.</div> 
                            <div className="steps-content"> 
                                <h2 className="title-3">{step.title}</h2> 
                                <p className="gray-clr">{step.content}</p>                                            
                            </div>  
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            <motion.div 
                className="step-img"
                variants={imageVariant}
                initial="hidden"
                whileInView="visible"
                > <img src="/step-img.png" alt="morrissameday couriers" /> </motion.div>
        </section>
     );
}
 
export default Steps;