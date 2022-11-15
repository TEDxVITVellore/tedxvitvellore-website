import React from 'react';
import '../stylesheets/SingleEvent.css';

function Countdown() {
  return (
    <div className="events-outer padding outer">
        <div className="main-heading">
            <h1>Countdown</h1>
            <p className="italic">"Tagline will come here"</p>
        </div>
        <div className="hr"></div>
        <div className="about-event">
        <div className="date">
            <p>Date of event</p>
            <p className="bold">24/07/2022</p>
        </div>
            <p className="grey half">TEDxVITVellore's Countdown is a global initiative dedicated to championing and accelerating climate change solutions. This event aimed to cut greenhouse gas emissions in half, resulting in a cleaner, safer, and more equitable world by 2030. This event was unforgettable because of a blend of actionable and research-backed ideas, cutting-edge science, and moments of wonder and inspiration.</p>
        </div>
        <div className="speaker-section">
            <div className="heading">
                <h1>Speakers</h1>
            </div>
            <div className="all-speakers">
                <div className="speaker">
                    <div className="speaker-img">
                        <img width="160px" src="/assets/frame.png" alt="ripple logo"></img>
                    </div>
                    <div className="speaker-content">
                        <h2>Mr.Gaurav Patil</h2>
                        <p className="grey half">Mr.Gaurav is a marine biologist, nature photographer, and visual artist. He aims to spread awareness about the importance of the conservation of nature among ordinary people with the help of his fantastic photography. Being a marine biologist, he feels that people need to understand the importance of oceans and the wildlife that relates to them.</p>
                    </div>
                </div>
                <div className="speaker">
                    <div className="speaker-img">
                        <img width="160px" src="/assets/frame.png" alt="ripple logo"></img>
                    </div>
                    <div className="speaker-content">
                        <h2>MrGaurav Khatri</h2>
                        <p className="grey half">Mr. Khatri has been revolutionary in trying to help Castrol become a more sustainable company and reach its goal of becoming a net zero company by 2050. He has done his engineering from the University Institute of Technology RGPV and MBA from Symbiosis Centre for Management and Human Resource Development. He is also a part of the prestigious One Young World team, a global summit for young leaders, and has been trying to engage his colleagues in reducing carbon emissions.</p>
                    </div>
                </div>
                <div className="speaker">
                    <div className="speaker-img">
                        <img width="160px" src="/assets/frame.png" alt="ripple logo"></img>
                    </div>
                    <div className="speaker-content">
                        <h2>Mr.Ganesh Kumar Subramanian</h2>
                        <p className="grey half">Mr.Ganesh is the Co-founder and Operation Lead of Kabadiwalla Connect, a startup redefining waste management by leveraging data and technology to help segregate and recycle non-biodegradable waste. He is also a Mechatronics Engineer who enjoys coding. A self-taught programmer, he primarily focuses on Front End Development. His research interests vary from UI/UX design to Virtual Reality, and he firmly believes that gestural/natural user interfaces are the future of Human-Computer Interaction.</p>
                    </div>
                </div>
                <div className="speaker">
                    <div className="speaker-img">
                        <img width="160px" src="/assets/frame.png" alt="ripple logo"></img>
                    </div>
                    <div className="speaker-content">
                        <h2>Dr.R.K. Nair</h2>
                        <p className="grey half">He is the Co-founder of UGMA Gujarat and president of the Kerala association. Umbergoan, director of Shreekrishiraj apparels and a member of the ICDS under the textile ministry. He has adopted the method of Japanese professor Akira Miyawaki, a specialist in restoring the natural vegetation on degraded land, to create 40 forests in seven states across India.
In 2017, he was honored by the Maharashtra government by awarding the Vasundhara award. Gujrat chief minister Vijay Rupani also appreciated him for forestation. The International Peace University of Germany awarded him an honorary doctorate for growing 5,50,000 trees in India.</p>
                    </div>
                </div>
                <div className="speaker">
                    <div className="speaker-img">
                        <img width="160px" src="/assets/frame.png" alt="ripple logo"></img>
                    </div>
                    <div className="speaker-content">
                        <h2>Saurabh Nirmal</h2>
                        <p className="grey half">Saurabh Nirmal is a food blogger, reviewer, influencer, and engineer. He is a passionate food connoisseur who started as a Delhi foodie to take food lovers on a gourmet journey trying out cuisines from across the world. Saurabh shares plenty of Insta photos, live-cooking videos, and honest reviews for his followers. He takes his followers on a culinary tour of Delhi's rich food culture through his blogs. In his blogs, he shares a myriad of local food experiences that are enough to satiate every palate. His blog is all about the incredible food culture of the capital city of India and is a paradise for food enthusiasts.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Countdown