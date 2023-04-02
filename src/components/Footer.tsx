import React from 'react'

interface FooterProps {
    
}
 
const Footer: React.FC<FooterProps> = () => {
    return ( 
        <footer>
            <div className="footer-bottom">
                <div className="theme-container container">               
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <p className='text-center'> © Copyright {new Date().getFullYear()}. All rights reserved </p>                            
                        </div>
                    </div>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;