import Breadcrumbs from '@/components/Breadcrumbs'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { motion } from "framer-motion"
import Head from 'next/head'

const rightVariant = {
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

const leftVariant = {
    hidden: { 
        opacity: 0,
        x: -100,
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

export default function AboutUs() {
    return (
        <>
        <Head>
            <title>Morrissamedaycouriers - About Us</title>
        </Head>
        <Header />
        <article className="about-page"> 
        <Breadcrumbs pageTitle="About" pageDesc="Know about us more" />
            <motion.section className="pad-50 about-wrap">
                <span className="bg-text"> About </span>
                <motion.div 
                    className="theme-container container"
                    variants={rightVariant}
                    initial="hidden"
                    whileInView="visible"
                    >               
                    <div className="row align-items-center">
                        <div className="col">
                            <div className="about-us pt-10">
                                <p className="fs-16" style={{visibility: 'visible'}}>
                                    Welcome to morrissameday couriers, where efficiency and integrity underpin everything we do. We work hard to give our customers the best possible service because we recognise how important quick and reliable delivery is. To fulfil your demands, we provide a variety of delivery options, such as same-day, next-day, and fast delivery. But we are aware that speed alone is insufficient. Sincerity is a priority for us in all of our dealings with customers. Your shipment will be handled with care and attention when you use our courier service, and we&apos;ll keep you updated every step of the way.
                                </p>
                            </div>
                        </div>
                        <motion.div 
                            className="col-md-6 text-center"
                            variants={leftVariant}
                            initial="hidden"
                            whileInView="visible"
                            >                                
                            <img alt="" src="/about-img-2.jpg" className="effect animated fadeInRight" />
                        </motion.div>
                    </div>
                </motion.div>
            </motion.section>
            <section className="pad-30 more-about-wrap">
                    <div className="theme-container container pb-100">               
                        <div className="row">
                            <motion.div 
                                className="col-md-4 col-sm-4"
                                variants={rightVariant}
                                initial="hidden"
                                whileInView="visible"
                                >
                                <div className="more-about clrbg-before">
                                    <h2 className="title-1">Nationwide shipping</h2>
                                    <div className="pad-10"></div>
                                    <p>Morrissameday couriers provide a variety of quick delivery options to meet client needs, including same-day delivery, express delivery, and next-day delivery.</p>
                                </div>
                            </motion.div>
                            <motion.div 
                                className="col-md-4 col-sm-4"
                                variants={leftVariant}
                                initial="hidden"
                                whileInView="visible"
                                >
                                <div className="more-about clrbg-before">
                                    <h2 className="title-1">Scope of service</h2>
                                    <div className="pad-10"></div>
                                    <p>morrissameday couriers provides access to a variety of commercial vehicles, including flat beds, moffets, and hiabs, as well as small vans up to arctics. All of your needs are met with a single phone call, and all of your billing is handled by a single invoice.</p>
                                </div>
                            </motion.div>
                            <motion.div 
                                className="col-md-4 col-sm-4"
                                variants={rightVariant}
                                initial="hidden"
                                whileInView="visible"
                                >
                                <div className="more-about clrbg-before">
                                    <h2 className="title-1">Account Administration</h2>
                                    <div className="pad-10"></div>
                                    <p>We strive to build long-term relationships with our clients by providing knowledgeable staff, site visits, transportation evaluations, and regular site visits to ensure everything is running smoothly.</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </article>
            <Footer />
            </>
    )
}