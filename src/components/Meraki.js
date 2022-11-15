import React from 'react';
import '../stylesheets/SingleEvent.css';

function Meraki() {
  return (
    <div className="events-outer padding outer">
        <div className="main-heading">
            <h1>Meraki</h1>
            <p className="italic">"Tagline will come here"</p>
        </div>
        <div className="hr"></div>
        <div className="about-event">
        <div className="date">
            <p>Date of event</p>
            <p className="bold">30/01/2021</p>
        </div>
            <p className="grey half">TEDxVITVellore's Meraki- "the story of a story" was an online event that helped future writers and poets gain perspective on how to embody their thoughts and pen them down in words. A panel of recognized authors shared their experience traveling the road of ideation to execution, guiding new literary minds through the writing process. An interactive session followed, where questions were asked to gain inspiration and insight into how one can dictate their own story.</p>
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
                        <h2>Dr. Coomar Arunodaya</h2>
                        <p className="half grey">A patriot from heart, he has left no stone unturned to lit the flame of Patriotism in people's hearts. He started writing with the main aim of evolving society and bringing in basic morals among the people. Dr. Coomar is not only an excellent writer but also a skilled architect, outstanding educationist, and sensitive philanthropist. He is also well known as a brilliant speaker and versatile human being. He finds it appealing to be involved in deep ideological discussions on educational nationalism, cultural preservation, and social participation with the youth.</p>
                    </div>
                </div>
                <div className="speaker">
                    <div className="speaker-img">
                        <img width="160px" src="/assets/frame.png" alt="ripple logo"></img>
                    </div>
                    <div className="speaker-content">
                        <h2>Ms.Shreya Pattar</h2>
                        <p  className="half grey">Being an industry expert in content writing and digital marketing, she brings a refreshing perspective to the world of marketing and content. She uses the medium of her original and out-of-the-box work to inspire and communicate the true essence of brand vision. An avid and thought-provoking writer, she has been published in several magazines, newspapers, websites, and global digital media kits. Primarily a writer, Ms. Pattar is a multi-faceted talent pool including (but not limited to) baking, painting, musician, event management, and athletics. She truly is someone we hold to an ideal in the literary world and admire for her unique perspective, thought process, and writing style.</p>
                    </div>
                </div>
                <div className="speaker">
                    <div className="speaker-img">
                        <img width="160px" src="/assets/frame.png" alt="ripple logo"></img>
                    </div>
                    <div className="speaker-content">
                        <h2>Mr.Sarabjeet Garcha</h2>
                        <p  className="half grey">He is a bilingual wordsmith whose words transcend cultural boundaries and warm hearts with his scintillating anecdotes. He is the author of four enthralling books of poems, including "A Clock in the Far Past, Lullaby of the Ever-Returning, and The Half-Moon Halo," as well as a book of Hindi poetry. He has received a fellowship in Hindi literature from the Ministry of Culture of India, currently serving as an editor of a publishing company of scientifical, technical, and medical books. His unapologetic desire not to get limited by the incongruity of cultures made him translate the works of many American poets into Hindi. The keen desire to "express the constant malleability of this shielded life" compels him to write.</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Meraki