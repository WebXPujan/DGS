import React,{useContext} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {TransitionAnimation} from '../Hooks/TransitionAnimation';
import {GlobalContext} from "../context/GlobalContext";
import Flow from './Flow';
import Success from './Success';

const IntroTextWrap = ({intro1,intro2,highlight,para,contact,sendEmail,brief,isFormOpen,loader,isSuccess}) => {
    const anim = TransitionAnimation();
    const [cursor,setCursor] = useContext(GlobalContext);
    return (
        <>
        {
            contact ? (
                <div className="intro-wrap contact">
                    <motion.h1 initial="initial" animate="animate" variants={anim.fadeInUp(1)} className="title title__big big text-center intro">
                        <motion.strong initial="initial" animate="animate" variants={anim.fadeInUp(1)} className="number">{intro1}</motion.strong><br/>
                        <motion.strong initial="initial" animate="animate" variants={anim.fadeInUp(1.5)} className="number">{intro2}<span className="green">{highlight}</span></motion.strong>
                    </motion.h1>
                    
                    
                    <motion.p initial="initial" animate="animate" variants={anim.fadeInUp(1)} className="para" style={{textAlign:"center",width:"100%"}}>
                    Let’s talk! Tell us what you want to achieve, and we will tell you how to do so.
                    </motion.p>
                    
                    
                    <div className="text-center">
                    <a className="dg-link dg-cta" href="#"
                        target="_top"
                        onMouseEnter={() => setCursor("hovered")}
                        onMouseLeave={() => setCursor("")}
                        ref={brief}>
                            Send us a brief
                            <span className="cta-icon">
                                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                viewBox="0 0 512 512" style={{enableBackground:"new 0 0 512 512"}}>
                                <g>
                                <g>
                                <path d="M390.595,281.767c-3.206-5.581-9.139-9.02-15.569-9.02H136.969c-6.43,0-12.363,3.439-15.563,9.02
                                c-3.2,5.581-3.17,12.441,0.078,17.992l119.028,203.365c3.218,5.497,9.115,8.876,15.486,8.876c6.37,0,12.268-3.385,15.492-8.876
                                l119.022-203.365C393.759,294.209,393.801,287.348,390.595,281.767z M255.997,458.527l-87.734-149.892h175.462L255.997,458.527z"
                                />
                                </g>
                                </g>
                                <g>
                                <g>
                                <path d="M255.997,0c-9.911,0-17.944,8.033-17.944,17.944v272.748c0,9.911,8.033,17.944,17.944,17.944
                                c9.911,0,17.944-8.033,17.944-17.944V17.944C273.941,8.033,265.908,0,255.997,0z"/>
                                </g>
                                </g>
                                </svg>
                            </span>
                    </a>
                    </div>
                    {
                        isSuccess  &&  <Success />
                    }
                    {
                    isFormOpen && (
                    <AnimatePresence exitBeforeEnter>
                        <Flow sendEmail={sendEmail} loader={loader}/>
                    </AnimatePresence>
                    )
                    }
                    <div className="text-center" style={{marginTop:60}}>
                        <a 
                        className="dg-link" 
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=career@digitalgurkha.com&subject=hello"
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => setCursor("pointer")}
                        onMouseLeave={() => setCursor("")}>Work at DG</a>
                    </div>

                </div>
            ): (
                <div className="intro-wrap">
                    <h1 className="title title__big big text-center intro">
                        <strong className="number">{intro1}</strong><br/>
                    <strong className="number">{intro2}<span className="green">{highlight}</span></strong>
                    </h1>
                    <p className="para">
                    {para}
                    </p>
                </div>
            )
        }
        </>
    );
}

export default IntroTextWrap;
