import React, {useEffect} from 'react';
import Footer from '../sections/Footer';
import DisplayGrid from '../sections/DisplayGrid';
import BannerInner from '../Component/BannerInner';
import CTA from '../sections/CTA';

const Team = ({loading,setLoading}) => {
    
    useEffect(() => {
        setLoading(!loading); 
    }, []);

   


    return (
     <>   
        <BannerInner 
        page="team"
        title="Our Story"
        intro1="We Are Not Just An Agency,"
        intro2="We Are Your "
        highlight="Digital Partner."
        para="We are here to serve Growth Centric companies which would like to grow using Technology, Automation and Creative Digital Marketing strategies at an affordable price. We love psychology, creativity, and technology which helps us build and scale for our clienteles. Our data driven and creative campaigns have flourished businesses, built brands, and achieved high ROI."
        url="/images/team/team.webp"
        />
        <DisplayGrid col={2} type="team" loading={loading} setLoading={setLoading}/>
        <CTA />
        <Footer />
    </>
    );
}

export default Team;
