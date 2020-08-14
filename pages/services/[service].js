import React,{useContext, useEffect, useState} from 'react';
import Footer from '../../sections/Footer';
import BannerInner from '../../Component/BannerInner';
import {useRouter} from 'next/router';
import {HomeContext} from "../../context/HomeContext"


const ServicePage = () => {
   

    const router = useRouter();
    //remove flashing
    //gsap.from(document.querySelector('body'),{opacity:0}).to(document.querySelector('body'),{opacity:1});
    const { query } = router
   // useEffect(()=>{console.log(query.service);})
   const data = useContext(HomeContext);
  
   
   const makeBanner = () => {
       let service = data[0].services.filter((service )=> service.id.includes(query.service));
       return (
           <>
           {
               service.map((s)=>(
                <BannerInner 
                title={s.name}
                intro1="Hello World!!!"
                key={s.id} />
               ))
           }
            
            </>
       );
   }
    
   
    return (
        <>
        { makeBanner() }
        <Footer />
        </>
    );
}
// ServicePage.getInitialProps = async (ctx) => {
//     const { query } = ctx;
    

//     return{
//         service: service
//     }
// }

export default ServicePage;
