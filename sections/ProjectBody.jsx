import React from 'react';
import Footer from './Footer';
import Link from 'next/link';
import ProjectCard from '../Component/ProjectCard'
import Button from '../Component/Button'

const ProjectBody = ({loading,setLoading,title,direction}) => {
    return (
        <>
        <section className={`project-body ${direction === "hor" ? "hor" : "ver"}`}>
            <div className="project-meta">
                <div className="columns">
                    <div className="column col-md-4">
                        <p className="para">Client Name</p>
                        <h1 className="black title title__big big">Infocus</h1>
                    </div>
                    <div className="column col-md-4">
                        <p className="para">Date</p>
                        <h1 className="black title title__big big">2018</h1>
                    </div>
                    <div className="column col-md-4">
                        <p className="para">Services</p>
                        <ul className="services">
                            <li><p className="title title__small big">UI/UX</p></li>
                            <li><p className="title title__small big">App Design</p></li>
                            <li><p className="title title__small big">Website Development</p></li>
                            <li><p className="title title__small big">Experience Design</p></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="project-gallery">
                <div className="container">
                    <div className="columns dual">
                    <div className="column col-md-6">
                        <div className="thumb">
                            <img src="https://unsplash.it/1363" alt=""/>
                        </div>
                    </div>
                    <div className="column col-md-6">
                        <div className="thumb">
                            <img src="https://unsplash.it/1364" alt=""/>
                        </div>
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
                        <div className="column col-md-6">
                            <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est cum rerum obcaecati, sapiente accusamus aperiam deleniti illo sint eaque doloribus aspernatur, vel veniam. Sed, architecto officia! Voluptatum repudiandae ab explicabo.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-gallery full">
                <div className="thumb">
                    <img src="https://unsplash.it/1366" alt=""/>
                </div>
            </div>
            <div className="project-gallery">
                <div className="container">
                    <div className="columns dual">
                    <div className="column col-md-6">
                        <div className="hero-content">
                            <h1 className="title title__big big">{`Want to create a web experience as `}<span className="green">{`${title}'s?`}</span></h1>
                            <p className="para">We have got an Idea</p>
                            <Button type="normal" title="Lets Get Started" link="/" />
                        </div>
                    </div>
                    <div className="column col-md-6">
                        <ul>
                        <Link href="/project/[project]" as={`/project/hongshi-cement`}>
                            <a className="dg-link">
                            <ProjectCard details={{img_url:'https://unsplash.it/1361',name:"Hongshi Cement",tag:["Next project"]}} type="projects" setLoading={setLoading} loading={loading} />
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
            
        </section>
        
        </>
    );
}

export default ProjectBody;