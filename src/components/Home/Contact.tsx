import React from 'react'
import { motion } from 'framer-motion';
 
const Contact: React.FC = () => {
    return ( 
        <motion.section 
            className="contact-wrap contact-2 pad-120"
            initial={{ opacity:0 }}
            whileInView={{opacity:1}}
            >   
            <span className="bg-text center"> Contact </span>
            <div className="theme-container container">               
                <div className="row">
                    <div className="col-md-6 col-sm-8 col-sm-offset-2 col-md-offset-3">
                        <div className="title-wrap text-center">
                            <h2 className="section-title">contact us</h2>
                            <p className="" >Get in touch with us easily</p>
                        </div>
                        <ul className="contact-detail row">
                            <li className="gray-clr"> 
                                <span className="title-2">Phone Number:</span> +44-7501-827381 
                            </li>
                            <li className="gray-clr"> 
                                <span className="title-2">Email address:</span> morris@morrissamedaycouriers.uk
                            </li>
                        </ul>
                    </div>                        
                </div>
            </div>               
        </motion.section>
     );
}
 
export default Contact;