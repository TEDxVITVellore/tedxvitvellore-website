import React from 'react';
import '../stylesheets/SingleEvent.css';

function Ripple() {
  return (
    <div className="events-outer padding outer">
        <div className="main-heading">
            <h1>Ripple</h1>
            <p className="italic">"Tagline will come here"</p>
        </div>
        <div className="hr"></div>
        <div className="about-event">
        <div className="date">
            <p>Date of event</p>
            <p className="bold">24/07/2022</p>
        </div>
            <p className="grey half">TEDxVITVELLORE-"The Ripple effect" was an event that focused on the butterfly effect and how small life choices and alterations can lead to a spreading, pervasive, and usually unintentional influence on our lives as well as others. The theme brought out the importance of action and how deep and meaningful it can be in its impact on life. To sum up, Ripple was a highly motivating event and gave the required push to the audience so that they followed their dreams fearlessly.</p>
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
                        <h2>Abhishek Jain</h2>
                        <p className="grey half">Mr. Abishiekh Jain is a writer, spokesperson, blogger, and founder of Hacker's Den and co-founder of BLENDnLend. He says his overnight success took him nine years to accomplish. Mr. Jain does not describe himself as an entrepreneur as he feels that has connotations of overnight success. Hacker's Den is a blog that aims to simplify technology for laymen. BLENDNLend is an online lending platform aimed at helping young people in the banking industry.</p>
                    </div>
                </div>
                <div className="speaker">
                    <div className="speaker-img">
                        <img width="160px" src="/assets/frame.png" alt="ripple logo"></img>
                    </div>
                    <div className="speaker-content">
                        <h2>Shreya Shrivastava</h2>
                        <p className="grey half">Shreya Shrivastava is a former TEDx speaker but also the creator of PsychX. She has given a thought-provoking TEDx talk on "AI assisting job choices" that helped people comprehend what goes into the decision-making process and assisted them in making better decisions.</p>
                    </div>
                </div>
                <div className="speaker">
                    <div className="speaker-img">
                        <img width="160px" src="/assets/frame.png" alt="ripple logo"></img>
                    </div>
                    <div className="speaker-content">
                        <h2>Pradeep Kashyap</h2>
                        <p className="grey half">Pradeep Kashyap, a former TEDx speaker, is also the creator of MART, an author, and a consultant for the World Bank and the United Nations. By establishing "Rural Marketing" as a subject in Business Management Schools, he has aided numerous students and citizens across the nation.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ripple