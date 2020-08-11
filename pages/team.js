import React, {useEffect} from 'react';
import Footer from '../sections/Footer';
import DisplayGrid from '../sections/DisplayGrid';
import ProgressiveImage from "react-progressive-graceful-image";
import gsap from "gsap";

const Team = ({loading,setLoading}) => {
    
    useEffect(() => {
        setLoading(!loading); 
    }, []);

    const handleImgload = (elem) => {
        gsap.to(elem,0.6,{opacity:1,delay:.1});
    }


    return (
     <>   
        <section id="story" className="sections" style={{marginTop: 64}}>
            <div className="container">
                    <div className="column col-md-12 col-sm-12">
                        <h1 className="title title__big big text-center title__border centered">
                            <strong className="number">Our Story</strong>
                        </h1>
                        <div className="thumb">
                            <ProgressiveImage 
                            src="https://unsplash.it/1367" 
                            placeholder=""
                            rootMargin="0% 0% 0%"
                            threshold={[1]}
                            delay={1000}>
                                {src => {

                                    return <img src={src} alt="" onLoad={(ref) => handleImgload(ref.target)} style={{opacity:0}} />
                                }

                                }
                            </ProgressiveImage>
                        </div>
                        <div className="intro-wrap">
                            <h1 className="title title__big big text-center intro">
                                <strong className="number">We Are Not Just An Agency,</strong><br/>
                                <strong className="number">We Are Your <span className="green">Digital Partner</span></strong>
                            </h1>
                            <p className="para">
                            The story that started with a chair is now a council of fifteen. We are the passionate Gurkhas- hungry for growth, and never afraid to challenge the status quo. We explore, we experiment, and we work relentlessly towards achieving our one common goal – to make a dent in the universe. Our data-driven & creative campaigns have flourished businesses, built brands, and achieved real-time results.
                            </p>
                        </div>
                    </div>
            </div>
        </section>
        <DisplayGrid col={2} type="team" loading={loading} setLoading={setLoading}/>
        <Footer />
    </>
    );
}

export default Team;
