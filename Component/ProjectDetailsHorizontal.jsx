
import {TimelineLite,gsap} from 'gsap';
import { useRef,useEffect, useState } from 'react';
import ProjectBody from '../sections/ProjectBody';


const ProjectDetailsHorizontal = ({viewPort,sticky,loading,setLoading,details,bodyDetail}) => {

    const transition = {duration: 1, ease: [0.43,0.73,0.23,0.96]};
    const t1 = new TimelineLite;
    const banner = useRef(null);
    const body = useRef(null);
    const dragConstraints = useRef(null);
    const [projectOpen,setProjectOpen] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            t1.to(
                banner.current,
                .6,{
                    css: {
                        width: window.innerWidth - sticky.current.clientWidth,
                        height: window.innerHeight-64,
                        left: 0+sticky.current.clientWidth,
                        top: 0
                     }
                }
            ) 
            t1.eventCallback("onComplete", myFunction, [banner.current]);
            
        },100);

        gsap.from(body.current,2,{
            x: '100%',
            opacity: 0,
            delay: 1,
            ease: "Power3.easeOut"
        })
        
    }, []);

    const myFunction = elem => {
        elem.classList.remove("active");
        setTimeout((elem)=>{
            elem.classList.remove("clip");
        },1000,elem);
        //console.log(details);
    }
    const handleProjectClick = elem => {
        //console.log(elem.currentTarget);
        //setProjectOpen(!projectOpen);
       
    }
    
    return (
        <section 
        className="offset fixed viewport" 
        style={{left:"24vw"}}>
            <div className="wrap" ref={dragConstraints}>
            <div 
            className="thumb clip active" 
            style={{position:"fixed",left:viewPort.x,top:viewPort.y,width:viewPort.width,height:viewPort.height}}
            ref={banner}>
                <img src={details.img} alt=""/>
            </div>
            <div className="body" style={{marginLeft:(window.innerWidth - sticky.current.clientWidth) - window.innerWidth/6}} ref={body}>
                <ProjectBody loading={loading} setLoading={setLoading} title={details.name} direction="hor" handleProjectClick={handleProjectClick} body={bodyDetail} drag={dragConstraints}/>
                
            </div>
            </div>
        </section>
    );
}

export default ProjectDetailsHorizontal;
