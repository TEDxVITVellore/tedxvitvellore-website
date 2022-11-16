import React from 'react';
import '../stylesheets/Events.css';
import Fade from 'react-reveal/Fade';


function Allevents() {
  return (
    <div className="events-outer outer padding">
        <Fade>
        <div className="main-heading">
            <h1><span className="highlight-red">History</span> was made!</h1>
            
            
        </div>
        </Fade>
        <div className="hr"></div>
        <p className="grey half">Participated as guests and led us through a trip down memory lane. The guests spoke about their college life at VIT, their different experiences, and the choices that had to be made. They shared their experiences as a part of TEDxVITVellore; thus, the audience learned the processes involved in planning and organizing TEDx events. All in all, ReuniTED was a very wholesome and inspiring event.</p>
        <div className="all-events">
            <div className="event">
                <div className="event-inner">
                    <div className="event-img">
                    <a href="/event/envisage"><img src="/assets/envisage.png" alt="Samsung logo"></img></a>
                    </div>
                    {/* <div className="event-content">
                    <i class="bi bi-calendar"></i><p>24/12/2022</p>
                    </div> */}
                </div>
            </div>
            <div className="event">
                <div className="event-inner">
                    <div className="event-img">
                    <a href="/event/meraki"><img src="/assets/meraki.png" alt="Samsung logo"></img></a>
                    </div>
                </div>
            </div>
            <div className="event">
                <div className="event-inner">
                    <div className="event-img">
                    <a href="/event/divergent"><img src="/assets/divergent.png" alt="Samsung logo"></img></a>
                    </div>
                </div>
            </div>
            <div className="event">
                <div className="event-inner">
                    <div className="event-img">
                    <a href="/event/reunited"><img src="/assets/reunited.png" alt="Samsung logo"></img></a>
                    </div>
                </div>
            </div>
            <div className="event">
                <div className="event-inner">
                    <div className="event-img">
                    <a href="/event/ripple"><img src="/assets/ripple.png" alt="Samsung logo"></img></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Allevents