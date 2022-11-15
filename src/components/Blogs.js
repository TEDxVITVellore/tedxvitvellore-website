import {React} from 'react';
import '../stylesheets/Blogs.css';

import allblogs from '../BlogDetails.json';

function Blogs() {
    const blogs = allblogs.data;
    if(blogs.length > 0){
        return(
            <div className="blogs-outer padding outer">
        <div className="main-heading">
            <h1><span className="highlight-yellow">Editorial's</span> word play</h1>
        </div>
        <div className="hr"></div>
        <div className="date">
        <p className="grey half">Participated as guests and led us through a trip down memory lane. The guests spoke about their college life at VIT, their different experiences, and the choices that had to be made. They shared their experiences as a part of TEDxVITVellore; thus, the audience learned the processes involved in planning and organizing TEDx events. All in all, ReuniTED was a very wholesome and inspiring event.</p>
        </div>
        <div className="all-blogs">
        {(blogs).map((blog, index) => {
            return(
                <div key={index} className="blog">
                <div className="blog-inner">
                    <div className="blog-img">
                    <a rel="noreferrer" href="/" target="_blank"><img src="/assets/frame.png" alt="Member"></img></a>
                    </div>
                    <div className="blog-content">
                        <p>{blog.title}</p>
                        <p className="grey"> <span className="italic">{blog.author}</span></p>
                    </div>
                </div>
        </div>
            )}
    )
}
        </div>
        </div>
        )
    }else{
        return(
            <div className="notfound-outer outer">
    <div className="middle">
    <div className="main-heading">
            <h1>Blogs not found</h1>
            <p className="italic">"Like your dad"</p>
        </div>
    </div>
        
    </div>
        )
    }
}

export default Blogs