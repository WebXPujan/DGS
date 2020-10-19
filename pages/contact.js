import React, {useEffect,useRef,useState} from 'react';
import Footer from '../sections/Footer';
import DisplayGrid from '../sections/DisplayGrid';
import {motion} from 'framer-motion';
import BannerInner from "../Component/BannerInner";
import {clientele} from "../API/projects";
import CTA from '../sections/CTA';
import IntroTextWrap from '../Component/IntroTextWrap';
import Button from '../Component/Button';
import emailjs from 'emailjs-com';

const Contact = ({loading,setLoading,setImagePos}) => {

    const brief = useRef(null);
    const loader = useRef(null);
    const [isFormOpen,setFormOpen] = useState(false);
    const [isSuccess,setSuccess] = useState(false);
    useEffect(() => {
        setLoading(!loading); 
        brief.current.addEventListener("click",handleClick);
        
        return () => {
            brief.current.removeEventListener("click",handleClick); 
        }
    }, []);

    function handleClick(e){
        e.preventDefault();
        setFormOpen(true);
        setSuccess(false);
    }
    
    //sending mail using emailjs
    function sendEmail(e) {
        e.preventDefault();
        if(e.target.elements["user_email"].value != ""){
            loader.current.style.display = "block";
            emailjs.sendForm('dg_contact', 'template_r9pt2jq', e.target, 'user_MYGOIcv7vVaCahj4eOEty')
            .then((result) => {
                console.log(result.text);
                setFormOpen(false);
                setSuccess(true);
            }, (error) => {
                console.log(error.text);
            });
        //console.log("ok");
        }
      }

    return (
     <motion.div exit={{opacity:0}}> 
      <IntroTextWrap 
        intro1="Let's build"
        intro2="Your business "
        highlight="together."
        contact={true}
        sendEmail={sendEmail}
        brief={brief}
        isFormOpen={isFormOpen}
        loader={loader}
        isSuccess={isSuccess}
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
