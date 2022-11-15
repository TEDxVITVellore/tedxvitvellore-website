import React from 'react';
import '../stylesheets/Nav.css';

function Nav() {
  return (
    <div className="nav-outer">
        <div className="outer flexing">
        <div className="logo">
          <a href="/"><img width="120px" src="/assets/tedxlogo.png" alt="Samsung logo"></img></a>
        </div>
        <div className="right">
          <a href="/events">Events</a>
          <a href="/aboutus">About us</a>
          <a href="/blogs">Blogs</a>
        </div>
        </div>
    </div>
  )
}

export default Nav