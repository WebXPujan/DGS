
import {TimelineLite,gsap} from 'gsap';
import { useRef,useEffect, useState } from 'react';
import ProjectBody from '../sections/ProjectBody';
import {projects} from '../API/projects';


const ProjectDetailsHorizontal = ({viewPort,sticky,loading,setLoading,details,bodyDetail,projectBody}) => {

    
    const [projectDetails,setProjectDetails] = useState({});
    const t1 = new TimelineLite;
    const banner = useRef(null);
    const body = useRef(null);
    const dragConstraints = useRef(null);

    let project = projects.filter((p) => p.id === projectBody);
    useEffect(() => {

        
        setProjectDetails(project[0]);
        //console.log(project[0]);
        if(banner.current != undefined){
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
        }
        return () => {
           // t1.destroy();
            setProjectDetails({});
        }
    }, []);

    const myFunction = elem => {
        elem.classList.remove("active");
        setTimeout((elem)=>{
            elem.classList.remove("clip");
        },1000,elem);
        //console.log(details);
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
               
                <ProjectBody loading={loading} setLoading={setLoading} title={details.name} direction="hor" body={bodyDetail} details={project[0]} drag={dragConstraints}/>
                
            </div>
            </div>
        </section>
    );
}

export default ProjectDetailsHorizontal;
