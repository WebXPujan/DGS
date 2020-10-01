import React, { useContext } from 'react';
import Footer from './Footer';
import Link from 'next/link';
import ProjectCard from '../Component/ProjectCard'
import Button from '../Component/Button'
import {motion, useDragControls} from 'framer-motion'
import IntroTextWrap from '../Component/IntroTextWrap';
import Trustee from '../sections/Trustee';
import {projects} from '../API/projects';
import {GlobalContext} from "../context/GlobalContext";
//import {CanvasJSChart} from 'canvasjs-react-charts';

const ProjectBody = ({loading,setLoading,title,direction,handleProjectClick,body,details}) => {
    const dragControls = useDragControls();
    const [cursor,setCursor] = useContext(GlobalContext);
    function startDrag(event) {
        dragControls.start(event, { snapToCursor: true })
      }
    const getProject = id => {
        let project = projects.filter((p) => p.id === id);
        return {
            name: project[0].meta[0].client_name,
            id: project[0].id,
            img: project[0].meta[2].next_img
        }
    }
    // var dataPoint;
    // var total;
    // const options = {
    //     animationEnabled: true,
    //     title:{
    //         text: ""
    //     },
    //     data: [{
    //         type: "funnel",
    //         toolTipContent: "<b>{label}</b>: {y} <b>({percentage}%)</b>",
    //         indexLabelPlacement: "inside",
    //         indexLabel: "{label} ({percentage}%)",
    //         dataPoints: [
    //             { y: 1400, label: "Brand Awareness" },
    //             { y: 1212, label: "Engagement Campaigns" },
    //             { y: 1080, label: "Web Traffic Increment" },
    //             { y: 665,  label: "Lead Generation Campaign for data collection" },
    //             { y: 578, label: "Data Optimization and Retargeting" },
    //             { y: 200,  label: "Conversion" }
    //         ]
    //     }]
    // }
    // //calculate percentage
    // dataPoint = options.data[0].dataPoints;
    // total = dataPoint[0].y;
    // for(var i = 0; i < dataPoint.length; i++) {
    //     if(i == 0) {
    //         options.data[0].dataPoints[i].percentage = 100;
    //     } else {
    //         options.data[0].dataPoints[i].percentage = ((dataPoint[i].y / total) * 100).toFixed(2);
    //     }
    // }

    
    
    
    return (
        <>
        <motion.section 
        className={`project-body ${direction === "hor" ? "hor" : "ver"}`} 
        ref={body}
        // drag={"x"}
        // dragConstraints={drag}
        // dragElastic={0.005}
        // dragControls={dragControls}
        >
            <div className="project-meta w50">
                <div className="container">
                <div className="columns">
                    <div className="column col-md-4 col-xs-12">
                        <p className="para">Client Name</p>
                        <h1 className="black title title__big big">{details.meta[0].client_name}</h1>
                    </div>
                    <div className="column col-md-4 col-xs-12">
                        <p className="para">Date</p>
                        <h1 className="black title title__big big">{details.meta[0].project_year}</h1>
                    </div>
                    <div className="column col-md-4 col-xs-12">
                        <p className="para">Services</p>
                        <ul className="services">
                            {
                                details.meta[0].services.map((s,i) => (
                                    <li key={i}><p className="title title__small big">{s}</p></li>
                                ))
                            }
                            
                        </ul>
                    </div>
                </div>
                </div>
            </div>
            <div className="project-gallery w100">
                <div className="container">
                    <div className="columns dual">
                    <div className="column col-md-6 col-sm-12">
                        <div className="thumb">
                            <img src={details.meta[1].top_square.left} alt=""/>
                        </div>
                    </div>
                    <div className="column col-md-6 col-sm-12">
                        <div className="thumb">
                            <img src={details.meta[1].top_square.right} alt=""/>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="project-intro w50">
                <div className="container">
                    <div className="columns">
                        <div className="column col-md-4 col-xs-12">
                            <h1 className="black title title__big big title__border">Brief</h1>
                            <p className="para">{details.desc}</p>
                        </div>
                        <div className="column col-md-4 col-xs-12">
                            <h1 className="black title title__big big title__border">Challenge</h1>
                            <ul>
                               {
                                   details.challenge.map((c,i) => (
                                    <li key={i}><p className="para">{c}</p></li>
                                   ))
                               }
                            </ul>
                        </div>
                        <div className="column col-md-4 col-xs-12">
                            <h1 className="black title title__big big title__border">About the client</h1>
                            <p className="para">{details.desc}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-gallery full w100">
                <div className="thumb">
                    <img src="/images/projects/xpertspool/full-1.jpg" alt=""/>
                </div>
            </div>
            {
                details.hasOwnProperty('testimonial') && (
                    <div className="project-desc w50" style={{padding:"60px 0"}}>
                        <div className="container">
                            <IntroTextWrap 
                            intro1="Working with them"
                            intro2="has been a "
                            highlight="breeze"/>
                            <div className="column col-md-12 col-sm-12">
                                <div className="testimonial-inside-service">
                                    <div className="thumb">
                                        <h1 className="title title__big">
                                            <span className="icons icons-quote">
                                            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 95.333 95.332" style={{enableBackground: "new 0 0 95.333 95.332"}}>
                                                <g>
                                                    <g>
                                                        <path d="M30.512,43.939c-2.348-0.676-4.696-1.019-6.98-1.019c-3.527,0-6.47,0.806-8.752,1.793
                                                            c2.2-8.054,7.485-21.951,18.013-23.516c0.975-0.145,1.774-0.85,2.04-1.799l2.301-8.23c0.194-0.696,0.079-1.441-0.318-2.045
                                                            s-1.035-1.007-1.75-1.105c-0.777-0.106-1.569-0.16-2.354-0.16c-12.637,0-25.152,13.19-30.433,32.076
                                                            c-3.1,11.08-4.009,27.738,3.627,38.223c4.273,5.867,10.507,9,18.529,9.313c0.033,0.001,0.065,0.002,0.098,0.002
                                                            c9.898,0,18.675-6.666,21.345-16.209c1.595-5.705,0.874-11.688-2.032-16.851C40.971,49.307,36.236,45.586,30.512,43.939z"/>
                                                        <path d="M92.471,54.413c-2.875-5.106-7.61-8.827-13.334-10.474c-2.348-0.676-4.696-1.019-6.979-1.019
                                                            c-3.527,0-6.471,0.806-8.753,1.793c2.2-8.054,7.485-21.951,18.014-23.516c0.975-0.145,1.773-0.85,2.04-1.799l2.301-8.23
                                                            c0.194-0.696,0.079-1.441-0.318-2.045c-0.396-0.604-1.034-1.007-1.75-1.105c-0.776-0.106-1.568-0.16-2.354-0.16
                                                            c-12.637,0-25.152,13.19-30.434,32.076c-3.099,11.08-4.008,27.738,3.629,38.225c4.272,5.866,10.507,9,18.528,9.312
                                                            c0.033,0.001,0.065,0.002,0.099,0.002c9.897,0,18.675-6.666,21.345-16.209C96.098,65.559,95.376,59.575,92.471,54.413z"/>
                                                    </g>
                                                </g>
                                                </svg>
                                            </span>
                                        </h1>
                                        
                                    </div>
                                    <div className="desc">
                                        
                                        <p className="para">lorem lorem</p>
                                        {/* <a 
                                                href="" className="dg-link"
                                                onMouseEnter={() => setCursor("pointer")}
                                                onMouseLeave={() => setCursor("")}>View case study</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            
            {
                details.type === "tech" 
                ? 
                (
                    <div className="project-intro w50">
                    <div className="container">
                         <div className="columns">
                            
                            {
                                details.summary.lists.map((sm,i) => (
                                    <div className="column col-md-4 col-xs-12" key={i}>
                                        <h1 className="black title title__big big title__border">{sm.title}</h1>
                                        <p className="para">{sm.desc}</p>
                                        <ul>
                                        {
                                            sm.lists.map((c,i) => (
                                                <li key={i}><p className="para">{c}</p></li>
                                            ))
                                        }
                                        </ul>
                                    </div>
                                ))
                            }
                            
                        </div>   
                    </div>
                    </div>
                ):
                null
            }
            <div className="project-gallery full w100">
                <div className="thumb">
                    <img src="/images/projects/xpertspool/full-2.jpg" alt=""/>
                </div>
            </div>
            <div className="project-strategy w100">
                <div className="container">
                    <div className="columns">
                        <div className="column col-12">
                            <h1 className="title title__big big title__border centered"><strong className="number">The Strategy</strong></h1>
                        </div>
                    </div>
                    <div className="columns"> 
                    <div className="column col-md-12">
                        <div className="strategy-wrap">
                            <ul className="flex-box">
                                {/* {
                                    details.strategy.lists.map((s,i) => (
                                        <li key={i}>
                                            <h1 className="black title title__big inverted">{s.title}</h1>
                                            <p className="para inverted small">{s.desc}</p>
                                        </li>
                                    ))
                                } */}
                                {
                                    details.type === "marketing" 
                                    ? 
                                    (
                                        details.strategy.lists.map((s,i) => (
                                            <li key={i}>
                                                <h1 className="black title title__big inverted">{s.title}</h1>
                                                <p className="para inverted small">{s.desc}</p>
                                            </li>
                                        ))  
                                    )
                                    :
                                    (
                                        details.strategy.map((s,i) => (
                                            <li key={i} className="tech-strategy">
                                                <strong className="number">0{i+1}</strong>
                                                <h1 className="black title title__big inverted">{s.title}</h1>
                                                <p className="para inverted small">{s.desc}</p>
                                                <ul className="mini-list">
                                                    {
                                                        s.items.map((m,j) => (
                                                            <li key={j} className="list-item project-intro">
                                                                <h3 className="title title__small inverted">{m.title}</h3>
                                                                <p className="para">{m.desc}</p>
                                                                <ul className="minor-list">
                                                                    {
                                                                        m.lists.map((mi,k) => (
                                                                            <li key={k}>
                                                                                <p className="para inverted small">{mi}</p>
                                                                            </li>
                                                                        ))
                                                                    }
                                                                </ul>
                                                            </li>
                                                            ))
                                                    }
                                                </ul>
                                            </li>
                                        ))
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                        
                    </div>
                </div>
            </div>
            <div className="project-gallery w100">
                <div className="container">
                    {
                        details.type === "marketing" ? (
                            <h1 className="black title title__big big title__border centered">Avenues Used</h1>
                        ) : null
                    }
                    <div className="columns dual">
                    <div className="column col-md-6 col-sm-12">
                        <img src={details.meta[1].bottom_square.left} alt=""/>
                    </div>
                    <div className="column col-md-6 col-sm-12">
                        <img src={details.meta[1].bottom_square.right} alt=""/>
                    </div>
                    </div>
                </div>
            </div>
            {
                details.outcome.length != 0 && <Trustee 
                title1="The Outcome"
                output={details.outcome} />
            }
            
            {/* <div className="project-intro">
                <div className="container">
                    <div className="columns">
                        <div className="column col-md-4 col-xs-12">
                            <h1 className="black title title__big big title__border">Client Status</h1>
                            <p className="para">Retainer Based till 21st January, 2020</p>
                        </div>
                        <div className="column col-md-4 col-xs-12">
                            <h1 className="black title title__big big title__border">Campaign Name</h1>
                            <p className="para">Mero Aakha ma Nepal</p>
                        </div>
                        <div className="column col-md-4 col-xs-12">
                                <h1 className="black title title__big big title__border">Campaign Type</h1>
                                <p className="para">Shaping the perspective of the Nepalese Audience to showcasing the contributing “Hongshi Cement” towards Neaplese Society.</p>
                            </div>
                        
                    </div>
                    <div className="columns">
                        <div className="column col-md-4 col-xs-12">
                                <h1 className="black title title__big big title__border">Avenues Used</h1>
                                <ul>
                                    <li><p className="para">Display Ads</p></li>
                                    <li><p className="para">Social Media Marketing</p></li>
                                    <li><p className="para">Influencer Marketing</p></li>
                                    <li><p className="para">Video Marketing</p></li>
                                </ul>
                            </div>
                            <div className="column col-md-4 col-xs-12">
                                <h1 className="black title title__big big title__border">Campaign Details</h1>
                                <p className="para">People were asked to add pictures, Videos, Poems sharing message of what exactly is nepal in their eyes and tag Hongshi Shivam Cement generating huge number of audience engagement</p>
                            </div>
                            <div className="column col-md-4 col-xs-12">
                                <h1 className="black title title__big big title__border">Expected Output</h1>
                                <p className="para">3000 entries and</p>
                            </div>
                    </div>
                </div>
            </div> */}
            {/* <div className="project-gallery full w100">
                {
                    details.type === "marketing" ? (
                        // <CanvasJSChart options ={options} />
                        <p>ds</p>
                    ) : (
                        <div className="thumb">
                            <img src="https://unsplash.it/1368" alt=""/>
                        </div>
                    )
                }
            </div> */}
            <div className="project-gallery next-section w100" style={{borderBottom:"1px solid #ececec"}}>
                <div className="container">
                    <div className="columns dual">
                    <div className="column col-md-6 col-sm-12">
                        <div className="hero-content">
                            <h1 className="title title__big big">{`Want to create a web experience as `}<span className="green">{`${title}'s?`}</span></h1>
                            <p className="para">We have got an Idea</p>
                            <Button type="normal" title="Lets Get Started" link="/" />
                        </div>
                    </div>
                    <div className="column col-md-6 col-sm-12">
                        <ul>
                        <Link href="/project/[project]" as={`/project/${getProject(details.meta[2].next).id}`}>
                            <a className="dg-link">
                            <ProjectCard details={{img_url:details.meta[2].next_img,name:getProject(details.meta[2].next).name,tag:["Next Case Study"]}} 
                            type="projects" 
                            setLoading={setLoading} 
                            loading={loading} 
                            handleProjectClick={handleProjectClick}/>
                            </a>
                         </Link>
                       
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
            
            {
                direction === "hor" ? null : <Footer />
            }
            
        </motion.section>
        
        </>
    );
}

export default ProjectBody;
