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
        />
        <DisplayGrid col={2} type="team" loading={loading} setLoading={setLoading}/>
        <Footer />
    </>
    );
}

export default Team;
