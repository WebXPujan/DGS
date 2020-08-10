import React,{useRef,useState} from 'react';
import gsap from "gsap"
import {motion} from "framer-motion"

const Loader = () => {
    const wrap = useRef(null);
    const green = useRef(null);
    const blue = useRef(null);
    
    const transition = {duration: .5, ease: [0.43,0.13,0.23,0.96]};
    const [completed,setComplete] = useState(false);
    const overlay = {
        enter: {
            height:0,
        },
        animate: {
            height: "100%",
            bottom: null,
            top:0,
            transition: transition
        },
        exit: {
            height: 0,
            transition: transition
        }
    }
    
    return (
        //exit={{opacity:0,transition:{...transition,delay:.4}}}
        <motion.div className="loader" ref={wrap} exit={{opacity:0,transition:{...transition,delay:.4}}}>
            

            <motion.div 
            initial={{ height: 0 }} 
            animate={{ height: [0, window.innerHeight, 0], bottom: [0, 0, window.innerHeight] }}
            transition={{...transition, duration: 1, times: [0, 0.5, 1] }}
            className="green-overlay"
            onAnimationStart={()=>{
                setComplete(false)
            }} 
            ref={green}>

            </motion.div>

            <motion.div 
            initial={{ height: 0 }} 
            animate={{ height: [0, window.innerHeight, 0], bottom: [0, 0, window.innerHeight] }}
            transition={{...transition, duration: 1.5, times: [0, 0.5, 1] }}
            onAnimationComplete={()=>{
                setComplete(true)
            }}
            className="blue-overlay" 
            ref={blue}>

            </motion.div>
            
            
            {/* <motion.div initial="enter" animate="animate" exit="exit" variants={overlay} className="green-overlay" ref={blue}></motion.div> */}
        </motion.div>
       
    );
}

export default Loader;
