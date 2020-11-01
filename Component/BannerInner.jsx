import React, { useRef } from 'react';
import ProgressiveImage from "react-progressive-graceful-image";
import gsap from 'gsap';
import {motion} from 'framer-motion';
import {TransitionAnimation} from '../Hooks/TransitionAnimation';
import IntroTextWrap from './IntroTextWrap';
import Button from './Button';

const BannerInner = ({title,intro1,intro2,highlight,para,page,url,para2}) => {
    const anim = TransitionAnimation();
    const thumb = useRef(null);
    const handleImgload = (elem) => {
        gsap.to(elem,0.6,{opacity:1,delay:.1});
        gsap.from(
            thumb.current,
            2,
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
                            <strong className="number intro-title">{title}</strong>
                        </motion.h1>
                        {
                            page === "service" || page === "team" || page === "projects" ? (
                                <>
                                <motion.p initial="initial" animate="animate" variants={anim.fadeInUp(1)} className="para intro-text text-center">{para}</motion.p>
                                <motion.div initial="initial" animate="animate" variants={anim.fadeInUp(1)} className="col-12 text-center" style={{marginTop:60,marginBottom:60}}>
                                    <Button type="normal" title="Start Project" link={`/contact`} hasSlug={false} />
                                </motion.div>
                                </>
                            ) : null
                        }
                        
                        
                        {
                            page === "projects" ? null : (
                                <div className="thumb" ref={thumb}>
                                    <ProgressiveImage 
                                    src={url} 
                                    placeholder="">
                                        {src => {

                                            return <img src={src} alt="" onLoad={(ref) => handleImgload(ref.target)} style={{opacity:0}} />
                                        }

                                        }
                                    </ProgressiveImage>
                                </div>
                            )
                        }
                        {
                            page === "team" ? (
                                <IntroTextWrap 
                                intro1={intro1}
                                intro2={intro2}
                                highlight={highlight}
                                para={para2}/> 
                            ) : 
                            null
                        }
                        
                    </div>
                    
            </div>
        </section>
    );
}

export default BannerInner;
