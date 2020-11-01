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
        para2="We are the Growth hackers who help you build and scale at an Affordable Cost? How do we achieve that? Our office in the United States works with the latest technology, best practices, and strategies, whereas our Field Office in Nepal makes sure that we have an inexhaustible pool of talent at an affordable cost. While these two points intersect, we have been able to provide high-end Customer-Driven Services to clients worldwide as a fraction of the cost that other agencies can provide. Our Leadership Team consists of a Product Manager, Project Manager, UI/UX Expert, Full Stack Developer, and a Marketing Expert with a combined experience of more than 15 years running different agencies, and this combined Leadership team is adept at Building and Scaling."
        />
        <DisplayGrid col={2} type="team" loading={loading} setLoading={setLoading}/>
        <CTA />
        <Footer />
    </>
    );
}

export default Team;
