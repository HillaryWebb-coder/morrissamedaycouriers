import React from 'react';

interface TestimonialsProps {
    
}

interface TestimonialProps {
    name: string,
    content: string,
    image: string
}

const Testimonial: React.FC<TestimonialProps> = () => {
    return (
    <div className="item">
        <div className="testimonial-img darkclr-border theme-clr font-2 wow fadeInUp">
            <img alt="morrissameday couriers" src="/block/testimonial-1.png" />
            <span>,,</span>
        </div>
        <div className="testimonial-content">
            <p className="wow fadeInUp">
                <i className="gray-clr fs-16">
                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla
                    <br /> facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit
                    <br /> augue duis dolore te feugait nulla facilisi.
                </i>
            </p>
            <h2 className="title-2 pt-10 wow fadeInUp">
                <a href="#" className="white-clr fw-900"> Bushra Ahsani </a>
            </h2>
        </div>
    </div>
    );
}

const Testimonials: React.FC<TestimonialsProps> = () => {
    return ( 
        <section className="testimonial mask-overlay">
            <div className="theme-container container">               
                <div className="testimonial-slider no-pagination pad-120">
                    
                </div>
            </div>
        </section>
     );
}
 
export default Testimonials;