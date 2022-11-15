import React from 'react';
import '../stylesheets/SingleEvent.css';

function Reunited() {
  return (
    <div className="events-outer padding outer">
        <div className="main-heading">
            <h1>ReuniTED</h1>
            <p className="italic">"Tagline will come here"</p>
        </div>
        <div className="hr"></div>
        <div className="about-event">
        <div className="date">
            <p>Date of event</p>
            <p className="bold">16/10/2021</p>
        </div>
            <p className="grey half">ReuniTED is an event where TEDxVITVellore's very own alums participated as guests and led us through a trip down memory lane. The guests spoke about their college life at VIT, their different experiences, and the choices that had to be made. They shared their experiences as a part of TEDxVITVellore; thus, the audience learned the processes involved in planning and organizing TEDx events. All in all, ReuniTED was a very wholesome and inspiring event.</p>
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
                        <h2>Vaibhav Jha</h2>
                        <p className="half grey">Vaibhav Jha is a triumphant alumnus of the VIT, Vellore institution of the batch 2020. He has paved the way for many future coordinators at VIT. After securing his undergraduate degree in Electronics and Communications, he is pursuing a career at Deloitte USI. He was an intrinsic and celebrated member of the TEDxVITVellore community.</p>
                    </div>
                </div>
                <div className="speaker">
                    <div className="speaker-img">
                        <img width="160px" src="/assets/frame.png" alt="ripple logo"></img>
                    </div>
                    <div className="speaker-content">
                        <h2>Saubhagya Kamal Singh</h2>
                        <p className="half grey">Saubhagya Kamal Singh from VIT, Vellore, has completed his undergraduate degree in Civil Engineering and is making his institution incredibly proud through the work he is doing through the medium of YourDOST. He was a pivotal component of the TEDxVITVellore team and has paved the way for many of his juniors.</p>
                    </div>
                </div>
                <div className="speaker">
                    <div className="speaker-img">
                        <img width="160px" src="/assets/frame.png" alt="ripple logo"></img>
                    </div>
                    <div className="speaker-content">
                        <h2>Soumyamitra Agarwal</h2>
                        <p className="half grey">Soumyamitra Agrawal is a proud VIT graduate from the batch of 2020. While at VIT, he pursued his B.Tech. in Computer Science Engineering with a specialization in Information Security. An integral part of the TEDxVITVellore team in 2019, Soumyamitra is someone all his juniors look up to in terms of work ethic and ambition. He has been selected to pursue his post-graduation program at the University of Illinois, USA.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reunited