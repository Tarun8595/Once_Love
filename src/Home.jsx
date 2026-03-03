import { useEffect } from "react";
import FirstLove from './FirstLove.jsx';
import Gallery from './Gallery.jsx';
import './index.css'
import LiquidGlassFollower from './LiquidGlassFollower.jsx'
import LoveStart from './LoveStep.jsx';
import Navbar from './Navbar.jsx'
import WhenWork from './WhenWork.jsx';
import WhyLove from './WhyLove.jsx';
import Comment from './Comment.jsx';
import Footer from './Footer.jsx';


function Home() {

  useEffect(() => {
    const heading = document.querySelector(".love-start-heading");

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          heading.classList.add("show");
        }
      });
    });

    if (heading) {
      observer.observe(heading);
    }

    return () => observer.disconnect();
  }, []);
    
    return(

        <>
        <LiquidGlassFollower />
        <div id="Home" className="home">
             <Navbar />
        <div className="home-tagline-section">
            <div className="home-tagline-container">
                <p className='bottom-tagline'>ONCE <span style={{color: "rgb(239, 239, 239)"}}>LOVE</span></p>
            </div>
        </div>
        </div>
        <div id="Story" className="love-start-section">
            <div className="love-start-container">
                <h1 className="love-start-heading">ONE LOVE. TWO STORIES. ONE TURE.<br></br><span>Few Steps Of Every Love Story</span></h1>
                <ul className='love-start-list'>
                    <LoveStart bg_image="/public/attraction.jpg" bg_color="#D25353" text="ATTRACTION" mean="The Sprak" />
                    <LoveStart bg_image="/public/connection.jpg" bg_color="#FFD150" text="CONNECTION" mean="Getting Closer" />
                    <LoveStart bg_image="/public/bond.jpg" bg_color="#458B73" text="EMOTION" mean="Trust & Comfort"/>
                    <LoveStart bg_image="/public/inlove.jpg" bg_color="#3D74B6" text="REALIZATION" mean="More Than Just Liking"/>
                    <div className="mobile_heart"></div>
                    <LoveStart bg_image="/public/purpose.jpg" bg_color="#D78FEE" text="COMMITMENT" mean="Choosing Each Other"/>
                </ul>
            </div>
        </div>
        <WhyLove />
        <WhenWork />
        <Gallery />
        <FirstLove />
        <Comment />
        <Footer />
        </>
    );
}

export default Home