import React, {useEffect} from 'react';
import Footer from '../sections/Footer';
import DisplayGrid from '../sections/DisplayGrid';
import BannerInner from '../Component/BannerInner';

const Team = ({loading,setLoading}) => {
    
    useEffect(() => {
        setLoading(!loading); 
    }, []);

   


    return (
     <>   
        <BannerInner 
        title="Our Story"
        intro1="We Are Not Just An Agency,"
        intro2="We Are Your "
        highlight="Digital Partner."
        para="The story that started with a chair is now a council of fifteen. We are the passionate Gurkhas- hungry for growth, and never afraid to challenge the status quo. We explore, we experiment, and we work relentlessly towards achieving our one common goal – to make a dent in the universe. Our data-driven & creative campaigns have flourished businesses, built brands, and achieved real-time results."
        />
        <DisplayGrid col={2} type="team" loading={loading} setLoading={setLoading}/>
        <Footer />
    </>
    );
}

export default Team;
