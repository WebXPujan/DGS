import React,{useContext, useEffect} from 'react';
import Footer from '../../sections/Footer';
import BannerInner from '../../Component/BannerInner';
import {useRouter} from 'next/router';
import {HomeContext} from "../../context/HomeContext"


const ServicePage = () => {
    const data = useContext(HomeContext);
    const router = useRouter();
    //remove flashing
    //gsap.from(document.querySelector('body'),{opacity:0}).to(document.querySelector('body'),{opacity:1});
    const { query } = router
    
    let service = data[0].services.filter((service )=> service.id.includes(query.service));
   
    return (
        <>
        {/* {JSON.stringify(service)} */}
        <BannerInner
        title={service[0].name}
        intro1="Code-breaking code"
        />
        <Footer />
        </>
    );
}

export default ServicePage;
