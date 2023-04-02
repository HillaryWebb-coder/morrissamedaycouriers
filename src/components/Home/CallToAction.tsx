import { useDispatch } from "react-redux";
import { toggle } from "../../../slices/RequestQuoteSlice";
import { motion } from "framer-motion";

const ctaVariant = {
    hidden: {
        x: -100,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay: .3,
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
 

const CallToAction: React.FC = () => {

    const dispatch = useDispatch()

    return (
        <section className="prod-delivery pad-120 ">
            <div className="theme-container container">
                <div className="row">
                    <div className="col-md-11 col-md-offset-1">
                        <motion.div 
                            className="pt-120 rel-div"
                            variants={ctaVariant}
                            initial="hidden"
                            whileInView="visible"
                            >
                            <div className="pb-50 hidden-xs"></div>
                            <h2 className="section-title"> Get the <span className="theme-clr"> fastest </span> product delivery </h2>
                            <div className="row">
                                <div className="col-lg-6 row justify">
                                    <p className="fs-16">We at morrissameday couriers recognise the value of quick and secure delivery, which is why we provide a variety of services to satisfy your individual requirements. We have you covered whether you &apos; re delivering locally, nationally, or worldwide.</p>
                                    <a className="btn-1 col-md-5 ms-2 mt-2" onClick={() => dispatch(toggle())}>Request Quote</a>
                                </div>
                            </div>
                            <div className="pb-120 hidden-xs"></div>
                        </motion.div>
                        <motion.div 
                            className="delivery-img pt-5" style={{top: -15}}
                            variants={imageVariant}
                            initial="hidden"
                            whileInView="visible"
                            >
                            <img alt="morrissameday couriers" src="/delivery.png" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CallToAction;