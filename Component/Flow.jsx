import React,{useContext} from 'react';
import {GlobalContext} from "../context/GlobalContext";
import {services} from "../API/projects";
import {motion} from "framer-motion";

const Flow = ({sendEmail,loader}) => {
    const [cursor,setCursor] = useContext(GlobalContext);
    const transition = {duration: 2, ease: [0.43,0.13,0.23,0.96]};
    const slideUp = {
            initial: {
                opacity: 0,
                y: "50%"
            },
            animate: {
            opacity: 1,
            y: 0,
            transition: {duration:1,ease:transition.ease}
            }
        
    }
    return (
        <form className="form-horizontal contact-form" onSubmit={sendEmail}>
            <div className="testimonial-inside-service flow">
                <motion.div initial="initial" animate="animate" variants={slideUp} className="thumb">
                    <h1 className="title title__big">
                        <span className="icons icons-quote">
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                width="191.614px" height="191.614px" viewBox="0 0 191.614 191.614" style={{enableBackground:"new 0 0 191.614 191.614"}}>
                            <g>
                                <g>
                                    <polygon points="191.614,45.206 81.708,45.206 136.659,80.929 		"/>
                                    <polygon points="81.708,50.705 81.708,93.137 139.064,93.137 139.064,116.65 191.614,116.65 191.614,50.705 136.659,86.427 		"/>
                                    <polygon points="60.462,102.992 60.462,146.408 132.829,146.408 132.829,102.992 96.647,126.509 		"/>
                                    <polygon points="96.647,122.886 132.829,99.376 60.462,99.376 		"/>
                                    <rect y="118.733" width="48.655" height="3.117"/>
                                    <rect x="6.235" y="91.429" width="47.992" height="3.118"/>
                                    <rect y="64.125" width="72.933" height="3.118"/>
                                </g>
                            </g>
                            </svg>
                        </span>
                    </h1>
                    
                </motion.div>
                <div className="desc">
                    
                    <motion.p initial="initial" animate="animate" variants={slideUp} className="para">Tell us About yourself.</motion.p>
                    <div className="columns">
                        <motion.div initial="initial" animate="animate" variants={slideUp} className="col-6 col-sm-12">
                            <div className="form-group">
                                <div className="col-3 col-sm-12">
                                <label className="form-label">Name</label>
                                </div>
                                <div className="col-9 col-sm-12">
                                <input className="form-input" type="text" id="input-example-1" placeholder="Name" name="user_name" />
                                </div>
                            </div>
                        </motion.div>
                        <motion.div initial="initial" animate="animate" variants={slideUp} className="col-6 col-sm-12">
                            <div className="form-group email">
                                <div className="col-3 col-sm-12">
                                    <label className="form-label">Email</label>
                                </div>
                                <div className="col-9 col-sm-12">
                                    <input className="form-input" type="email" name="user_email" placeholder="Email"/>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div initial="initial" animate="animate" variants={slideUp} className="col-12 col-sm-12">
                            
                             <div className="form-group service-inside-form">
                                <div className="col-12 col-sm-12">
                                 <label className="form-label">What do you want to do?</label>
                                </div>
                                <div className="col-12 col-sm-12">
                                <div className="wrap">
                                   {
                                        services.map((s,i) => (
                                                <React.Fragment key={i}>
                                                <input id={`"s-${i}"`} type="checkbox" name="package" value={s.name} /> 
                                                <label style={{backgroundImage:`url('/images/${s.icon}')`,backgroundRepeat:"no-repeat",backgroundSize:"80px 80px",backgroundPosition:"bottom center"}} htmlFor={`"s-${i}"`}>
                                                    {s.name}
                                                </label>
                                                </React.Fragment>
                                        ))
                                    }
                                </div>
                                </div>
                            </div>
                        </motion.div>
                        <div className="col-12 col-sm-12">
                            <div className="form-group">
                                
                                    <label className="form-label">Project brief</label>
                                
                                
                                    <textarea className="form-input" id="input-example-3" placeholder="Textarea" rows="3" name="message"></textarea>
                                
                            </div>
                        </div>
                        <div className="col-12 col-sm-12">
                            <div className="form-group">
                                <button className="btn btn-primary btn-lg has-icon-right" type="submit"
                                onMouseEnter={() => setCursor("pointer")}
                                onMouseLeave={() => setCursor("")}>Submit<i className="form-icon loading" ref={loader} style={{display:"none"}}></i></button>
                                
                            </div>
                        </div>
                    </div>

                    <a className="dg-link"
                            > 
                        
                            </a>
                </div>
                
            </div>
            
        </form>
    );
}

export default Flow;
