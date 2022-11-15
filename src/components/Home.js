import React from 'react';
import '../stylesheets/Home.css';
import Countdown from 'react-countdown';


function Home() {
  return (
    <div className="home">
      <div className="home-outer outer">
    {/* <div className="blob">
      <img src="/assets/blob.svg" alt="Member"></img>
    </div> */}
    {/* <div class="bg"></div> */}
        <div className="hero-content">
            <div>
            <p className="counter"><Countdown className="highlight-red" date={1670783400000} /></p>
            </div>
            <div className="main-heading">
                <h1>Melange.</h1>
                <h1>12/12/2022</h1>
            </div>
            <p className="grey">Our event, Embedded aimed at instilling a love for technology and science in students and encouraging them to think differently and follow the path of innovation. Our esteemed panel presented highly informative and captivating talks where they talked about how technology has shaped their lives and how it can be used to solve real world problems.
This conference inspired us to innovate and think differently and stimulated our minds through a series of empowering talks.</p>
<div>
    <button>Coming soon</button>
</div>
        </div>
    </div>
    <div className="tedx-info outer padding">
    <div className="main-heading big-gap">
            <h2>What is TED?</h2>
            <p className="grey gap">TED is an acronym for technology, entertainment, and design. It is a nonpartisan, nonprofit organization committed to spreading innovative ideas and exciting discoveries through 18-minute talks delivered in front of live audiences at TED conferences.TED is dedicated to researching and sharing knowledge that matters. Scientists, researchers, technologists, business leaders, artists, designers, and other world experts take the TED stage to present "Ideas Worth Spreading."</p>
        </div>
        <div className="main-heading big-gap">
            <h2>What is TEDx?</h2>
            <p className="grey gap">TEDx events are held at a local community level and are independently organized by volunteers. Much like TED, TEDx events center around short, prepared talks, performances, and demonstrations emphasizing ideas that provoke learning, inspiration, and wonder. The events lay emphasis on community and allow the speakers, who wouldn't usually get access to a stage, to speak and communicate their ideas. Like TED, TEDx encourages thought-provoking and impactful ideas and does not promote religious, commercial, or political bias/agenda.</p>
        </div>
        <div className="main-heading big-gap">
            <h2>What is <span className="highlight-red">TEDxVITVellore</span>?</h2>
            <p className="grey gap">Our mission at TEDxVITVellore is to serve as a local forum for ideas within our community that inspire individuals to transform their lives, destinies, and, eventually, our planet. We are a group of experienced, motivated, and inquisitive individuals who are driven by the purpose of bringing significant change. We work hard to create an experience for the audience by hosting events with motivational speakers who are prime leaders in their fields and performers who will entice you with their talent. We strive each year on the VIT campus in Vellore to make our concept a reality.</p>
        </div>
    </div>
    </div>
    
  )
}

export default Home