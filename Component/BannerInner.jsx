import React, { useRef } from 'react';
import ProgressiveImage from "react-progressive-graceful-image";
import gsap from 'gsap';
import {motion} from 'framer-motion';
import {TransitionAnimation} from '../Hooks/TransitionAnimation';

const BannerInner = ({title,intro1,intro2,highlight}) => {
    const anim = TransitionAnimation();
    const thumb = useRef(null);
    const handleImgload = (elem) => {
        gsap.to(elem,0.6,{opacity:1,delay:.1});
        gsap.from(
            thumb.current,
            1,
            {
                y:"30%",
                opacity:0,
                ease: "Power4.easeInOut"
            }
        )
    }

    return (
        <section id="story" className="sections" style={{marginTop: 64}}>
            <div className="container">
                    <div className="column col-md-12 col-sm-12">
                        <motion.h1 initial="initial" animate="animate" variants={anim.fadeInUp(1)} className="title title__big big text-center title__border centered">
                            <strong className="number">{title}</strong>
                        </motion.h1>
                        <div className="thumb" ref={thumb}>
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
                                <strong className="number">{intro1}</strong><br/>
                            <strong className="number">{intro2}<span className="green">{highlight}</span></strong>
                            </h1>
                            <p className="para">
                            The story that started with a chair is now a council of fifteen. We are the passionate Gurkhas- hungry for growth, and never afraid to challenge the status quo. We explore, we experiment, and we work relentlessly towards achieving our one common goal – to make a dent in the universe. Our data-driven & creative campaigns have flourished businesses, built brands, and achieved real-time results.
                            </p>
                        </div>
                    </div>
            </div>
        </section>
    );
}

export default BannerInner;
