import {React} from 'react';
import '../stylesheets/Blogs.css';
import Fade from 'react-reveal/Fade';
import allblogs from '../BlogDetails.json';

function Blogs() {
    const blogs = allblogs.data;
    if(blogs.length > 0){
        return(
            <div className="blogs-outer padding outer">
            <Fade>
        <div className="main-heading">
            <h1><span className="highlight-yellow">Editorial's</span> word play</h1>
        </div>
        </Fade>
        <div className="hr"></div>
        <div className="date">
        <p className="grey half">Writing is an artform that is seldom celebrated to the extent that it should be. To be able to put words in an order that not only invokes thought but also leaves the reader with a sensation of wonder is nothing short of a skill. Here in blogs, the editorial team of TEDxVITVellore plays to the symphony of words to create interesting, creative, and thought provoking blogs.</p>
        </div>
        <div className="all-blogs">
        {(blogs).map((blog, index) => {
            return(
                <div key={index} className="blog">
                <div className="blog-inner">
                    <div className="blog-img">
                    <a rel="noreferrer" href={blog.url} target="_blank"><img src={blog.imageUrl} alt="Member"></img></a>
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