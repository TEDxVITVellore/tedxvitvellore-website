import {React, useEffect} from 'react';
import '../stylesheets/Event.css';
import {
    useParams,
    useNavigate
  } from 'react-router-dom';

import events from '../EventDetails.json';
import Fade from 'react-reveal/Fade';


function Event() {
    
    const navigate = useNavigate();
    const { eventName } = useParams();
    const data = events[eventName];
    useEffect(() => {
        if(data === undefined){
            navigate("/notfound")
        }
    })
    if(data){
        return (
            <div className="events-outer padding outer">
            <Fade>
                <div className="main-heading">
                    <h1>{data.title}</h1>
                    <p className="italic">{data.tagline}</p>
                </div>
                </Fade>
                <div className="hr"></div>
                <div className="about-event">
                <div className="date">
                    <p className='gap'>Date of event</p>
                    <p className="bold">{data.date}</p>
                </div>
                    <p className="grey half gap">{data.summary}</p>
                </div>
                {data.speakers ? 
                    <div className="speaker-section">
                    <div className="heading">
                        <h1>Speakers</h1>
                    </div>
                    <div className="all-speakers">
                    {(data.speakers).map((speaker, index) => {
                        return(
                            <div key={index} className="speaker">
                            <div className="speaker-img">
                                <img width="160px" src={speaker.url} alt="ripple logo"></img>
                            </div>
                            <div className="speaker-content">
                                <h2>{speaker.name}</h2>
                                <p className="grey half">{speaker.about}</p>
                            </div>
                        </div>
                        )
                    })}
                    </div>
                </div> : <div></div>}
            </div>
          )
    }
}

export default Event