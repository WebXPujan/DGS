import React,{useContext, useEffect, useState} from 'react';
import Footer from '../../sections/Footer';
import BannerInner from '../../Component/BannerInner';
import {useRouter} from 'next/router';
import {HomeContext} from "../../context/HomeContext";
import IntroTextWrap from "../../Component/IntroTextWrap";
import {GlobalContext} from "../../context/GlobalContext";
import ProgressiveImage from 'react-progressive-graceful-image'
import gsap from "gsap"
import Error from 'next/error'
import {services,testimonials} from "../../API/projects";

const ServicePage = ({service}) => {

    const [cursor,setCursor] = useContext(GlobalContext);
   

    const router = useRouter();
    //remove flashing
    //gsap.from(document.querySelector('body'),{opacity:0}).to(document.querySelector('body'),{opacity:1});
    const { query } = router
   // useEffect(()=>{console.log(query.service);})
//    const data = useContext(HomeContext);
   const handleImgload = (elem) => {
    gsap.to(elem,0.6,{opacity:1,delay:.1});
}
//let service = data[0].services.filter((service )=> service.id.includes(query.service));
   
//    const makeBanner = () => {
//        let service = data[0].services.filter((service )=> service.id.includes(query.service));
       if(service.length == 0){
        return <Error statusCode="404" />
       }
//        return (
//            <>
           
           
            
//             </>
//        );
//    }
    
   
    return (
        <>
        {
               service.map((s)=>(
                <BannerInner 
                page="service"
                intro1="Code Breaking"
                highlight="Code"
                title={s.name}
                para={s.brief}
                key={s.id}
                url={s.banner} />
               ))
            }
            {
               service.map((s)=>(
                
                    testimonials.map((t) => (
                        s.testimonial === t.id &&
                        (
                            <div className="container" key={s.id}>
                                <IntroTextWrap 
                                        intro1={t.intro1}
                                        intro2={t.intro2}
                                        highlight={t.highlight} />
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
                                            
                                            <p className="para">{t.testimonial}</p>
                                            <a 
                                                    href={t.case_study} className="dg-link"
                                                    onMouseEnter={() => setCursor("pointer")}
                                                    onMouseLeave={() => setCursor("")}>- {t.company}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    )) 
                
               ))
           }
           {
               service.map((s)=>(
                   <section className="sections-inside-service" key={s.id}>
                   
                       <div className="sliders">
                            <ul>
                                
                              {
                              s.images.map((i,cnt) => (
                                <li key={cnt}>
                                    <div className="thumb">
                                        <ProgressiveImage 
                                        src={i.url} 
                                        placeholder="">
                                            {src => {

                                                return <img src={src} alt={i.alt} style={{opacity:0}} onLoad={(ref) => handleImgload(ref.target)}/>
                                            }

                                            }
                                        </ProgressiveImage>
                                    </div>
                                </li>
                              ))     
                                
                                
                              }
                                
                                
                                
                            </ul>
                        </div>
                   </section>
               ))
           }
           {
               service.map((s) => (
                   <section className="sections" key={s.id}>
                    <div className="container">
                        <h2 className="title title__big title__border centered">Our Process</h2>
                        <div className="process">
                            <ul>
                                {
                                    s.process.map((p,i)=>(
                                        <li key={i}>
                                            <p><strong className="number green">0{i+1}</strong></p>
                                            <h2 className="title title__small big green">{p.title}</h2>
                                            <p className="para">{p.desc}</p>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                   </section>
               ))
           }
           <section id="cta" className="sections">
           {
               service.map((s)=>(
                    <BannerInner 
                    page="projects"
                    title={`Want to create a ${s.nickname}?`}
                    para="Let's talk, tell us what you want to achieve, and we will tell you how to do so."
                    key={s.id}
                    /> 
               ))
           }
           </section>
        <Footer />
        </>
    );
}
ServicePage.getInitialProps = (ctx) => {
    const { query } = ctx;
   // const data = useContext(HomeContext);
    //let service = service.filter((service )=> service.id.includes(query.service));
    return{
        service: services.filter((service )=> service.id === query.service)
    }
}

export default ServicePage;
