import React, { useEffect } from 'react';
import Footer from './Footer';
import Link from 'next/link';
import ProjectCard from '../Component/ProjectCard'
import Button from '../Component/Button'
import {motion, useDragControls} from 'framer-motion'
import IntroTextWrap from '../Component/IntroTextWrap';
import Trustee from '../sections/Trustee';

const ProjectBody = ({loading,setLoading,title,direction,handleProjectClick,body,drag}) => {
    const dragControls = useDragControls();
    function startDrag(event) {
        dragControls.start(event, { snapToCursor: true })
      }
    const para = `
    We started the project for Hongshi Cement right from the beginning where they had no to minimum digital presence. 

First we determined the audience persona which turned out to be people who had the spending capacity of building new houses as well as construction workers and engineers who work in small and big construction projects. 

Once the audience persona was defined we planned the social media content accordingly to capture the theme: Emotional Connection with Family, Strength & Quality in Construction and Sustainable Choice

The social media profiles were optimized accordingly with proper story, contact details and cover photo. 

The Client wanted higher brand awareness, reach and recall so we opted to display advertisement from the get go ! The message was kept consistent across social media and google network. 

Also, we launched the “Hongshi Lion” video across facebook, instagram and video which was inlined with the TV Advertisement. 

Our combined effort in social and google network resulted in massive impressions and reach. It was like Hongshi was everywhere. 

We realized the audience group were very interactive so we regularly posted engagement posts and also ran engagement campaigns with gift hampers. The participation was amazing and more people were becoming aware of the Hongshi Cement. 

---- 
Once we had a consistent audience base interacting with it the Client gave us another challenge to accomplish. 

It was to build a campaign running over several months to promote the brand but not necessarily to sell. 

The Nepal tourism Year 2020 was coming and we thought to inline the campaign with it by running a campaign to share different perspectives pertaining to Nepal beyond the normally talked ones. 
The Campaign was named Mero Ankha Ma Nepal where people had to share a photo, video or a poem explaining their perspective of Nepal using the company and campaign hashtags. 

The Client loved the idea and we started off the campaign with a pillar video which itself portrayed different aspects of Nepal along with storytelling and visualization as well as including the details of the campaign on how to participate and what the prize would be!

We leveraged well known influencers to promote the campaign where they themselves had their take on the video as well.  

The campaign ran across 2 months, had 3 biweekly winners and 1 grand prize winner.  There were more than 3600 participants each having their unique perspective and creative presentations. 

The grand prize winner and other bi weekly winners were recognized across a closed ceremony. 

The campaign was a great success and this posed us further challenge to continue the momentum and upscale our efforts. 

The basics were repeated while we are constantly optimizing our adverts according to the client’s need and audience’s response.

    `;
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
            <div className="project-meta">
                <div className="container">
                <div className="columns">
                    <div className="column col-md-4 col-xs-12">
                        <p className="para">Client Name</p>
                        <h1 className="black title title__big big">Hongshi Cement</h1>
                    </div>
                    <div className="column col-md-4 col-xs-12">
                        <p className="para">Date</p>
                        <h1 className="black title title__big big">2018</h1>
                    </div>
                    <div className="column col-md-4 col-xs-12">
                        <p className="para">Services</p>
                        <ul className="services">
                            <li><p className="title title__small big">Social Media Marketing</p></li>
                            <li><p className="title title__small big">Search Engine Optimization</p></li>
                            <li><p className="title title__small big">Google PPC Adverts</p></li>
                            <li><p className="title title__small big">Conversion Optimization</p></li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
            <div className="project-gallery">
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
            <div className="project-intro">
                <div className="container">
                    <div className="columns">
                        <div className="column col-md-4 col-xs-12">
                            <h1 className="black title title__big big title__border">Brief</h1>
                            <p className="para">Building a digital brand for an FDI company based in Nepal</p>
                        </div>
                        <div className="column col-md-4 col-xs-12">
                            <h1 className="black title title__big big title__border">Challenge</h1>
                            <ul>
                                <li><p className="para">Activate the brand digitally</p></li>
                                <li><p className="para">Promote brand linking it with safety, quality and one of a kind</p></li>
                                <li><p className="para">Get people to interact and engage with brand</p></li>
                                <li><p className="para">Reach maximum people through social media and Google network</p></li>
                            </ul>
                        </div>
                        <div className="column col-md-4 col-xs-12">
                            <h1 className="black title title__big big title__border">About the client</h1>
                            <p className="para">Hongshi-Shivam cement, a joint venture of Shivam Group and China’s Hongshi Cement, is the largest producer of cement in Nepal producing 6000 metric tons daily with its first smoke and dust free factory in Nepal</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-gallery full">
                <div className="thumb">
                    <img src="https://unsplash.it/1365" alt=""/>
                </div>
            </div>
            <div className="project-desc">
                <div className="container">
                    <div className="columns dual-text">
                        <div className="column col-md-12 col-sm-12">
                            <IntroTextWrap
                            intro1="Emotional Connection with Family, Strength & "
                            intro2="Quality in Construction and "
                            highlight="Sustainable Choice"
                            para={para}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-gallery full">
                <div className="thumb">
                    <img src="https://unsplash.it/1366" alt=""/>
                </div>
            </div>
            <div className="project-strategy">
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
                                <li>
                                    <h1 className="black title title__big inverted">Website Revamp and On Page Optimization</h1>
                                    <p className="para inverted small">We first revamped the website which was mostly cluttered, unorganized and not so “SEO-friendly”. Along with our partners, we were able to create a structured website that would help it rank better as well as give the branded vibe.</p>
                                </li>
                                <li>
                                    <h1 className="black title title__big inverted">Content Marketing through blogs</h1>
                                    <p className="para inverted small">Different blogs were published on a regular basis which revolved around the courses but in a way that any student would find useful. Blogs like “What to do after BBA in Nepal” , “Why study BHM in Nepal” were written and marketed for primarily value giving as well as to get ranked. </p>
                                </li>
                                <li>
                                    <h1 className="black title title__big inverted">PPC advertisements for course</h1>
                                   <p className="para inverted small">As people were searching for higher study courses, we ran PPC advertisements in the admission time for all available courses which directed people to the landing page that would provide more information regarding the admission process & offered courses along with a form attached to capture the student details.</p>
                                </li>
                                <li>
                                    <h1 className="black title title__big inverted">Promoting “International TieUps”</h1>
                                    <p className="para inverted small">IIMS has several international tie ups for different courses and we promoted it to showcase that you can get an international level degree at Nepal itself.</p>
                                </li>
                                <li>
                                    <h1 className="black title title__big inverted">Social Presence with Friendly Brand Tone</h1>
                                    <p className="para inverted small">With IIMS we made sure that we were active socially trying to provide information as well as capture the context. Pop Culture was also focused to engage the audience base. Overall, we made sure that any student who would see the brand in Social Media felt that it would be relatable to them.</p>
                                </li>
                                <li>
                                    <h1 className="black title title__big inverted">Running Micro Campaigns</h1>
                                    <p className="para inverted small">Pertaining to the different events that happened at IIMs we promoted the brand’s social media accordingly by planning an entire campaign around such events. The yearly Sports Festival, IIMS Fest were some of the events that we built and ran campaigns. </p>
                                </li>

                            </ul>
                        </div>
                    </div>
                        
                    </div>
                </div>
            </div>
            <div className="project-gallery">
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
            <Trustee 
            title1="The Outcome" />
            <div className="project-gallery full">
                <div className="thumb">
                    <img src="https://unsplash.it/1369" alt=""/>
                </div>
            </div>
            <div className="project-intro">
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
            </div>
            <div className="project-gallery full">
                <div className="thumb">
                    <img src="https://unsplash.it/1368" alt=""/>
                </div>
            </div>
            <div className="project-gallery" style={{borderBottom:"1px solid #ececec"}}>
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
                        <Link href="/project/[project]" as={`/project/hongshi-cement`}>
                            <a className="dg-link">
                            <ProjectCard details={{img_url:'https://unsplash.it/1361',name:"Hongshi Cement",tag:["Next project"]}} 
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
