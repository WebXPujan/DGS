import dynamic from "next/dynamic"
import {useState} from "react"
import Banner from '../sections/Banner';
import Services from '../sections/Services';
import Trustee from '../sections/Trustee';
import WeAre from '../sections/WeAre';
import CTA from '../sections/CTA';
import Footer from '../sections/Footer';
import {projects} from '../API/projects'
import { useEffect } from "react";
import {services} from "../API/projects";
 const Blog = dynamic(() => import('../sections/Blog'));
 const Testimonial = dynamic(() => import('../sections/Testimonial'));

const Index = ({setImagePos,banner,setLoading,loading,setProjectOpen,service }) =>{

  const [loaded,setLoaded] = useState(false);

    useEffect(()=>{
      setLoading(!loading);
      // let timeoutId = setTimeout(() => {
        
      //   setLoaded(true)
      // },2000);
      //   return () => clearTimeout(timeoutId)
    },[])

   // if(!loaded) return <Loader />;
  
    return(
      
      <>
            <Banner setImagePos={setImagePos} banner={banner} projects={projects} loading={loading} setLoading={setLoading} setProjectOpen={setProjectOpen} />
            <Services services={service} />
            <Trustee 
            title1="Trusted by Small Business"
            title2="and Corporates"
            from="home"/>
            <WeAre />
            <Testimonial />
            <Blog setLoading={setLoading} loading={loading} from="home" /> 
            <CTA />
            <Footer />

      </>
    );

  

}

Index.getInitialProps = (ctx) => {
//   const res = await fetch(
//     "http://localhost:3000/api/project"
// ).then((res) => res.json());
 
  //const {query} = ctx;
  return { service: services }
}


export default Index;