import React from 'react';
import '../stylesheets/SingleEvent.css';

function Tedcircle() {
  return (
    <div className="events-outer padding">
        <div className="main-heading">
            <h1>TedCircles</h1>
            <p className="italic">"Tagline will come here"</p>
        </div>
        <div className="hr"></div>
        <div className="about-event">
        <div className="date">
            <p>Date of event</p>
            <p className="bold">24/07/2022</p>
        </div>
            <p className="grey half">TEDxVITVellore's Ted Circles presented a Circle of leaders in a round table conference during the initial brink of the mass spread of COVID-19, where lockdown during the pandemic caused a stagnant plateau of activity and emotion all over the world. This event was an escape from monotonous boredom and a solution to the lack of inspiration that many were facing. The leaders who made the event possible talked of "How Change Happens," brewing an enticing amalgamation of insightful interaction and success stories.</p>
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
                        <h2>Mr.Anish Agarwal</h2>
                        <p className="grey half">He is the CEO of Kolkata-based Start-up Sabse Sasta Dukaan. Being a young, pragmatic, and optimistic engineer, he is trying to revolutionize the Healthcare Delivery Service. He has worked up the ladder of success with intricate and intense knowledge about startups. He brings energy and enthusiasm to any room he walks into. He believes that consistency, courage, and hard work are the magic trio that makes a startup successful.</p>
                    </div>
                </div>
                <div className="speaker">
                    <div className="speaker-img">
                        <img width="160px" src="/assets/frame.png" alt="ripple logo"></img>
                    </div>
                    <div className="speaker-content">
                        <h2>Kartik Pasrija</h2>
                        <p className="grey half">He currently serves as the Assistant Director, Ordnance Factory, under the Defence Ministry. He is a BE from Manipal Institute of Technology and completed his Master's in Technology from IIT Delhi. He is a supremely motivated and energetic man and brings an extensive insight on a host of topics.</p>
                    </div>
                </div>
                <div className="speaker">
                    <div className="speaker-img">
                        <img width="160px" src="/assets/frame.png" alt="ripple logo"></img>
                    </div>
                    <div className="speaker-content">
                        <h2>Ameya Abhyankar</h2>
                        <p className="grey half">He is currently serving as the Secretary in Sports and Youth Affairs, IT Department, & science and technology, Government of Arunachal Pradesh. Mr. Abhyankar was long associated with the IT ministry and was CEO of the Entertainment Society of Goa (ESG). In addition, he was the director of tourism before heading the IT department in 2015 and secretary to chief minister Laxmikant Parsekar in 2016.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tedcircle