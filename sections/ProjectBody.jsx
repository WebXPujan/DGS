import React, { useEffect } from 'react';
import Footer from './Footer';
import Link from 'next/link';
import ProjectCard from '../Component/ProjectCard'
import Button from '../Component/Button'
import {motion, useDragControls} from 'framer-motion'
import IntroTextWrap from '../Component/IntroTextWrap';
import Trustee from '../sections/Trustee';
import {projects} from '../API/projects';
//import {CanvasJSChart} from 'canvasjs-react-charts';

const ProjectBody = ({loading,setLoading,title,direction,handleProjectClick,body,details}) => {
    const dragControls = useDragControls();
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
                            <img src="https://unsplash.it/1363" alt=""/>
                        </div>
                    </div>
                    <div className="column col-md-6 col-sm-12">
                        <div className="thumb">
                            <img src="https://unsplash.it/1364" alt=""/>
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
                    <img src="https://unsplash.it/1365" alt=""/>
                </div>
            </div>
            <div className="project-desc w50">
                <div className="container">
                    <div className="columns dual-text">
                        <div className="column col-md-12 col-sm-12">
                            <IntroTextWrap
                            intro1="Project"
                            intro2="Summary"
                            highlight=""
                            para=""/>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
            {
                details.type === "web" 
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
                    <img src="https://unsplash.it/1366" alt=""/>
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
                    <div className="columns dual">
                    <div className="column col-md-6 col-sm-12">
                        <div className="thumb">
                            <img src="/images/projects/vianet/avenues.jpg" alt=""/>
                        </div>
                    </div>
                    <div className="column col-md-6 col-sm-12">
                        <div className="thumb">
                            <img src="/images/projects/vianet/funnel.jpg" alt=""/>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <Trustee 
            title1="The Outcome"
            output={details.outcome} />
            
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
            <div className="project-gallery full w100">
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
            </div>
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
