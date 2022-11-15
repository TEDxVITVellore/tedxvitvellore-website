import React from 'react';
import '../stylesheets/SingleEvent.css';

function Envisage() {
  return (
    <div className="events-outer padding outer">
        <div className="main-heading">
            <h1>Envisage</h1>
            <p className="italic">"Tagline will come here"</p>
        </div>
        <div className="hr"></div>
        <div className="about-event">
        <div className="date">
            <p>Date of event</p>
            <p className="bold">30/12/2021</p>
        </div>
            <p className="grey half">TEDxVITVellore's Envisage was an event focused on how we can envision, manifest, and accomplish our goals. Positive affirmations work as a tool that shifts our mindset and boosts confidence. But affirmations without actions would be useless. The speakers shared their success stories with the audience and the numerous obstacles they had to face. Each one had a different journey in envisioning and achieving their goals.</p>
        </div>
        <div className="speaker-section">
            <div className="main-heading">
                <h2>Speakers</h2>
            </div>
            <div className="all-speakers">
                <div className="speaker">
                    <div className="speaker-img">
                        <img width="160px" src="/assets/frame.png" alt="ripple logo"></img>
                    </div>
                    <div className="speaker-content">
                        <h2>Pratik Thakker</h2>
                        <p className="half grey">Pratik Thakker is the CEO of Webzoly. He is Israel's Tech Ambassador to India and a LinkedIn influencer with an incredible following. He has also been honored with the India Achievers' Award 2021.</p>
                    </div>
                </div>
                <div className="speaker">
                    <div className="speaker-img">
                        <img width="160px" src="/assets/frame.png" alt="ripple logo"></img>
                    </div>
                    <div className="speaker-content">
                        <h2>Dr. Shamoly Khera</h2>
                        <p className="half grey">Dr. Shamoly Khera is the director of 'One Take Media,' an author, a TV Presenter, an Executive Presence Coach & the Founder of 'Speak To Inspire Academy. She has helped several people transition between flourishing careers as well as paved an exemplary path on her own.</p>
                    </div>
                </div>
                <div className="speaker">
                    <div className="speaker-img">
                        <img width="160px" src="/assets/frame.png" alt="ripple logo"></img>
                    </div>
                    <div className="speaker-content">
                        <h2>Ashish Choudhary</h2>
                        <p className="half grey">Ashish Choudhary is the founder of the YouTube channel Commerce Baba, which is India's fastest-growing online platform in the commerce community. He selflessly provides free educational help to all Class XI & XII commerce students through his YouTube channel. He has played one of the pivotal roles in developing young careers through his platform.</p>
                    </div>
                </div>
                <div className="speaker">
                    <div className="speaker-img">
                        <img width="160px" src="/assets/frame.png" alt="ripple logo"></img>
                    </div>
                    <div className="speaker-content">
                        <h2>Ankita Sharma</h2>
                        <p className="half grey">Ankita Sharma is a young sustainability leader and ambassador to the Climate Force and has extensive experience establishing sustainability practices. She is also a 'Global Shaper of the World Economic Forum' and 'Lead India Fellow' Ankita is currently working in a leading position in an FMCG MNC and the past worked at Nestle, Marico, and Arvind Limited.</p>
                    </div>
                </div>
                <div className="speaker">
                    <div className="speaker-img">
                        <img width="160px" src="/assets/frame.png" alt="ripple logo"></img>
                    </div>
                    <div className="speaker-content">
                        <h2>Babar Ali</h2>
                        <p className="half grey">The 'youngest headmaster in the world by BBC in October 2009, Babar Ali is an Indian student and teacher from Murshidabad, West Bengal. For the last 18 years since its inception, more than 6000 students have benefited from complete free education from his institution. His biography is a part of the syllabus in different curricula across the globe. The Hon'ble President of India also mentioned his work in his speech on 25 January 2020.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Envisage