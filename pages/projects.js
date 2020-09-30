import React, {useEffect,useContext} from 'react';
import Footer from '../sections/Footer';
import DisplayGrid from '../sections/DisplayGrid';
import {motion} from 'framer-motion';
import BannerInner from "../Component/BannerInner";
import {clientele} from "../API/projects";
import CTA from '../sections/CTA';

const Projects = ({loading,setLoading,setImagePos}) => {
    useEffect(() => {
        setLoading(!loading); 
    }, []);
    
    return (
     <motion.div exit={{opacity:0}}> 
      <BannerInner 
        page="projects"
        title="Our Projects"
        para="Every organization has distinct needs and goals.We communicate with your team to understand your goals, determine KPIs, set timelines, and make sure that your return on investment is high."
        
        />  
        
        <DisplayGrid col={2} type="projects" loading={loading} setLoading={setLoading} setImagePos={setImagePos}/>
        <section className="">
            <div className="container">
                <div className="column col-12">
                    <h1 className="title title__big big text-center title__border centered">
                        Trusted By
                    </h1>
                    <div className="clientele">
                        <ul>
                            {
                                clientele.map((c)=>(
                                    <li key={c.logo}>
                                        <img src={`/images/clients/${c.logo}`} alt={c.client_name} />
                                    </li>
                                ))
                            }
                            
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <CTA />
        <Footer />
    </motion.div>
    );
}

export default Projects;
