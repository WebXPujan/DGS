import React, {useEffect,useContext} from 'react';
import Footer from '../sections/Footer';
import DisplayGrid from '../sections/DisplayGrid';
import {motion} from 'framer-motion';
import BannerInner from "../Component/BannerInner";
import {clientele} from "../API/projects";
import CTA from '../sections/CTA';
import IntroTextWrap from '../Component/IntroTextWrap';
import Button from '../Component/Button';

const Contact = ({loading,setLoading,setImagePos}) => {
    useEffect(() => {
        setLoading(!loading); 
    }, []);
    
    return (
     <motion.div exit={{opacity:0}}> 
      <IntroTextWrap 
        intro1="Let's Do"
        intro2="Great Things "
        highlight="Together."
        contact={true}
      /> 
       
       <section className="contact-location">
       <h1 className="title title__big big text-center title__border centered">
            Our Presense
        </h1> 
        <DisplayGrid col={2} type="contact" loading={loading} setLoading={setLoading} setImagePos={setImagePos}/>
       </section>
        
        <section className="sections">
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
        <Footer />
    </motion.div>
    );
}

export default Contact;
