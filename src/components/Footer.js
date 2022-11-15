import React from 'react';
import '../stylesheets/Footer.css';

function Footer() {
  return (
    <div className="footer-outer">
        <div className="App outer">
        <div className="ending">
            <h2 className="italic">“Train yourself to let go of everything you fear to lose.”</h2>
        </div>
        <div className='footer-flex'>
            <div>
                <img width="200px" src="/assets/tedxlogo.png" alt="Samsung logo"></img>
            </div>
            <div className="contents">
            <div className="content">
                <p className='small-heading'>Learn about TEDx</p>
                <div className="liner">
                    <a href="https://www.ted.com/" target="_blank" className="anchor">TED</a>
                    <p className="separator">|</p>
                    <a href="https://www.ted.com/about/programs-initiatives/tedx-program" target="_blank" className="anchor">TEDx Program</a>
                    <p className="separator">|</p>
                    <a href="https://www.ted.com/about/our-organization/our-policies-terms/ted-com-terms-of-use" target="_blank" className="anchor">Terms of Use</a>
                    <p className="separator">|</p>
                    <a href="https://www.ted.com/about/our-organization/our-policies-terms/privacy-policy" target="_blank" className="anchor">Privacy Policy</a>
                </div>
            </div>
            <div className="content">
                <p className='small-heading'>TEDxVITVellore</p>
                <div className="liner">
                    <a href="https://www.linkedin.com/company/tedx-vitvellore/" target="_blank" className="anchor">LinkedIn</a>
                    <p className="separator">|</p>
                    <a href="https://www.instagram.com/tedxvitvellore/" target="_blank" className="anchor">Instagram</a>
                    <p className="separator">|</p>
                    <a href="https://twitter.com/TEDxVITVellore" target="_blank" className="anchor">Twitter</a>
                    <p className="separator">|</p>
                    <a href="https://www.linkedin.com/company/tedx-vitvellore/" target="_blank" className="anchor">Medium</a>
                    <p className="separator">|</p>
                    <a href="https://www.facebook.com/Tedxvitvellore/" target="_blank" className="anchor">Facebook</a>
                </div>
            </div>
            <div className="content">
                <p className='small-heading'>Contact Us</p>
                <div className="liner">
                    <a href="tel:+91-9179045326" className="anchor">+91-9179045326</a>
                    <p className="separator">|</p>
                    <a href="mailto:tedxvitvellore@gmail.com" target="_blank" className="anchor">tedxvitvellore@gmail.com</a>
                </div>
            </div>
            <p className="small">This independent TEDx event is operated under license from TED.</p>
        </div>
        </div>
        </div>
        
    </div>
  )
}

export default Footer