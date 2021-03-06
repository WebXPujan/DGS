import {useContext, useState, useEffect, useRef} from 'react'
import Button from '../Component/Button';
import StickyProjectInfo from '../Component/StickyProjectInfo';
import {GlobalContext} from '../context/GlobalContext'
import {motion, useSpring, useTransform, useViewportScroll, AnimatePresence, useDragControls} from 'framer-motion'
import useSmoothScroll from "use-smooth-scroll";
import gsap from "gsap";
import { useRouter } from 'next/router';
import ProgressiveImage from 'react-progressive-graceful-image'
import Link from 'next/link'
import ProjectDetailsHorizontal from '../Component/ProjectDetailsHorizontal';
import { useSwipeable } from 'react-swipeable';
const Banner = (props) => {

   const router = useRouter();
    const sticky = {
        title: "Our Projects",
        desc: "Every organization has distinct needs and goals.We communicate with your team to understand your goals, determine KPIs, set timelines, and make sure that your return on investment is high."
    }

    
    const transition = {duration: 2, ease: [0.43,0.13,0.23,0.96]};
    const [cursor,setCursor] = useContext(GlobalContext);
    const x = useSpring(0, {stiffness: 200, damping: 300, ease: "ease.out"});
    
    const fadeOut = useTransform(x,[-30,0],[0,1]);
    const slideRight = useTransform(x,[-20,0],[20,0]);
    const [isDragged,setIsDragged] = useState(false);
    const [isProjectOpen,projectClose] = useState(false);
    const [viewPort,setViewPort] = useState({
        x:0,
        y:0,
        width:0,
        height:0
    });
    const [projectDetails,setProjectDetails] = useState({});
    const [projectBody,setProjectBody] = useState("");
    const [mobile,setMobile] = useState(0);
   // const [offset,setOffset] = useState(false);
    //const [timeLine,setTimeLine] = useState(null);

    const { scrollYProgress } = useViewportScroll();
    const showcaseSlide = useTransform(scrollYProgress,[0,1],[1,1.2]);
    const dragControls = useDragControls();
   
    let slider = useRef(null);
    let stickyy = useRef(null);
    let sliderWrapper = useRef(null);
    let cta = useRef(null);
    let titleBig = useRef(null);
    let featureImage = useRef(null);
    let detailBody = useRef(null);

    useEffect(() => {
        
        
        x.onChange(() => {
            x.get() < -50 ? setIsDragged(true) : setIsDragged(false);
            x.get() < -50 ? document.querySelector('#navBar .wrapper').classList.add('slideUp') : document.querySelector('#navBar .wrapper').classList.remove('slideUp');
            x.get() < -50 ? document.querySelector("body").style.overflow = "hidden" : document.querySelector("body").style.overflow = "visible";
        
            x.get() < -50 ? null : document.querySelector("#banner") && (document.querySelector("#banner").scrollLeft = 0) ;
            
      
        });
        setMobile(window.innerWidth);
   
       return () => {
           x.set(0);
           props.setProjectOpen(false);
           document.querySelector("body").style.overflow = "visible";
           projectClose(false);
            slider = false;
            stickyy = false;
            sliderWrapper = false;
            cta = false;
            titleBig = false;
            featureImage = false;
            detailBody = false;
            setProjectDetails({});
            setViewPort({
                x:0,
                y:0,
                width:0,
                height:0
            });
            setIsDragged(false);
            setProjectBody("");
        }
        
    }, [x]);

  
    
    const scrollTo = useSmoothScroll("x", slider);
    
    const actionOpen = elem => {
        document.querySelector('#navBar .wrapper').classList.remove('slideUp') 
        jQuery(elem).closest("li").addClass('active');
        jQuery(elem).closest(".image").removeClass('clip');
        jQuery(elem).closest("li").siblings().removeClass('active').addClass('hide');
        projectClose(true);
        scrollTo(0);
    } 

    const viewProject = (e,details) => {
    //e.preventDefault(); 
    props.setProjectOpen(true);
    //console.log(details);
    setProjectBody(details.slug);
    setProjectDetails(details);
    var elem = e.currentTarget;
    var offset = jQuery(e.currentTarget).closest(".image").offset();
    var w = jQuery(window);
    var sliderRect = slider.current.getBoundingClientRect();
    var stickyRect = stickyy.current.getBoundingClientRect();
    var velocity = (offset.left+slider.current.scrollLeft)-(stickyRect.width+25);
    //scrollTo(velocity)
    setViewPort({
            x: w.width() <= 1366 ? (offset.left-w.scrollLeft()) - 17 : (offset.left-w.scrollLeft()) - 26,
            y: w.width() <= 1366 ? (offset.top-w.scrollTop()) - 75 : (offset.top-w.scrollTop()) - 78,
            width:jQuery(elem).closest(".image").width(),
            height: jQuery(elem).closest(".image").height()
           });
    setTimeout(actionOpen,1000,elem);
       
    }

    function startDrag(event) {
        //console.log(event);
        dragControls.start(event, { snapToCursor: true })
    }

    

    const handleCloseProject = event => {
        //timeLine.reverse();
            props.setProjectOpen(false);
            document.querySelector('#navBar .wrapper').classList.add('slideUp') 
            projectClose(false);
            router.push("/");
            jQuery('li.expanded.hide').removeClass('hide');
        
    }
   
   
   
   const handleWheel = (e) => {
    let slides = gsap.utils.toArray(".showcase li.expanded");
    let $e = e.deltaY;
    Math.abs($e) < 100 ? $e = e.deltaY*33.33 : $e = $e;
    let velocity = $e * 2 + slider.current.scrollLeft;
    // if(isProjectOpen && (velocity > (detailBody.current.getBoundingClientRect().width - window.innerWidth/3))){
    //     setOffset(true);
    // } else{
    //     setOffset(false);
    // }

    scrollTo(velocity);
   
   
    let $list = slider.current;
    let $active = document.querySelector(".showcase li.expanded.active .info");
    

   }
  
  
   const handleImgload = (elem) => {
       gsap.to(elem,0.6,{opacity:1,delay:.1});
   }
   const dragReverse = () => {
        x.set(0);
        props.setProjectOpen(false);
        document.querySelector("body").style.overflow = "visible";
        projectClose(false);
       
   }
  // const mobSlider = useRef(null);
   const [mult,setMult] = useState(1);
   const mobileSlideLeft = amnt => {
        if(Math.abs(amnt) > document.querySelector('#mob-slider li').clientWidth*3){
            //setMult(1);
            return null;
        }
        document.querySelector('#mob-slider').style.marginLeft = amnt+"px";
        setMult(prev => prev + 1);
        console.log(amnt);
    }
    const mobileSlideRight = amnt => {
        console.log("right: "+document.querySelector('#mob-slider').style.marginLeft);
        if(document.querySelector('#mob-slider').style.marginLeft == "-"+document.querySelector('#mob-slider li').clientWidth*3+"px"){
            document.querySelector('#mob-slider').style.marginLeft = "-"+document.querySelector('#mob-slider li').clientWidth*2+"px";
            setMult(3);
        }
        if(document.querySelector('#mob-slider').style.marginLeft == "-"+document.querySelector('#mob-slider li').clientWidth*2+"px"){
            document.querySelector('#mob-slider').style.marginLeft = "-"+document.querySelector('#mob-slider li').clientWidth*1+"px";
            setMult(2);
        }
        if(document.querySelector('#mob-slider').style.marginLeft == "-"+document.querySelector('#mob-slider li').clientWidth*1+"px"){
            document.querySelector('#mob-slider').style.marginLeft = "0px";
            setMult(1);
        }
        // document.querySelector('#mob-slider').style.marginLeft = amnt+"px";
        // setMult(prev => prev - 1);
    }

   const handlers = useSwipeable({
    onSwipedLeft: () =>  mobileSlideLeft(-mult*document.querySelector('#mob-slider li').clientWidth),
    onSwipedRight: () => mobileSlideRight((mult-1)*document.querySelector('#mob-slider li').clientWidth),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  })

    return(
        
        <>
            <>
            
            {
                isDragged && (
                    isProjectOpen ? 

                    <AnimatePresence>
                        <StickyProjectInfo stickyTitle={projectDetails.name} stickyDesc={projectDetails.desc} close={true} sticky={stickyy} closeProject={handleCloseProject} />
                        {/* {
                            offset && (
                            <motion.div className="next--project" key={1} exit={{opacity:0,x:'30%'}} transition={{duration: 1.5, ease: [0.43,0.13,0.23,0.96]}}>
                                <Link href="/?project=hongshi-cement" as={`/project/hongshi-cement`}>
                                    <motion.a className="dg-link" initial={{opacity:0,x:'30%'}} animate={{opacity:1,x:'0%'}} transition={{duration: 1.5, ease: [0.43,0.13,0.23,0.96]}}>
                                        <ProjectCard details={{img_url:'https://unsplash.it/1361',name:"Hongshi Cement",tag:["Next project"]}} 
                                        type="projects" 
                                        setLoading={props.setLoading} 
                                        loading={props.loading} 
                                        handleProjectClick={handleProjectClick}/>
                                    </motion.a>
                                </Link>
                            </motion.div>
                            )
                        } */}
                        
                    </AnimatePresence>

                    :

                    <AnimatePresence exitBeforeEnter>
                        <StickyProjectInfo stickyTitle={sticky.title} stickyDesc={sticky.desc} close={true} sticky={stickyy} closeProject={dragReverse} />
                    </AnimatePresence>
                )
            }

            </>
       
            <motion.section 
            exit={{opacity:0}} 
            className={isDragged ? (isProjectOpen ? "sections has-offset visible viewport" : "sections has-offset visible") : "sections has-offset hidden"} 
            id="banner" 
            ref={slider} 
            onWheel={isDragged ? handleWheel : undefined}
            >
            
            
          
            <div className="container">
                <div className="columns">
                <div className="column col-md-12">
                    <motion.div className="hero-content" style={{ x: slideRight, opacity: fadeOut }}>
                        <motion.h1 
                        initial={{opacity:0,y:30}}
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: {delay:1.2,duration:1,ease:transition.ease}
                        }} 
                        className="title title__big" ref={titleBig}>
                            Build and Scale at <br/>
                            <span className="green big">An Affordable Cost</span>
                        </motion.h1>
                        <motion.p className="para"
                        className="para"
                        initial={{opacity:0,y:30}}
                        animate={{opacity:1,y:0,transition:{delay:1,...transition}}}
                        >
                           We help you Build and then Scale with the highest of Qualities at the most affordable cost.
                        </motion.p>
                        <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0,transition:{delay:1.4,...transition}}}>
                            <Button type="normal" title="Ask Us How?" link={`/contact`} hasSlug={false} />
                        </motion.p>
                    </motion.div>
                </div>
                <div className="column col-md-12"></div>
                </div>
            </div>
            
                {
                    isProjectOpen ?
                    (
                        <AnimatePresence exitBeforeEnter>
                            <ProjectDetailsHorizontal viewPort={viewPort} details={projectDetails} sticky={stickyy} setLoading={props.setLoading} loading={props.loading} bodyDetail={detailBody} projectBody={projectBody} />
                        </AnimatePresence>
                    )
                    :
                    (
                        <motion.section className={isDragged ? (isProjectOpen ? "offset fixed" : "offset fixed") : "offset"}
                        drag={"x"}
                        dragConstraints={{
                            left: -100,
                            right: 50,
                        }}
                        dragElastic={0.005}
                        style={{ x }}
                        transition={transition}
                        dragControls={dragControls}
                        >
                        <motion.ul className={isDragged ? (isProjectOpen ? "showcase expanded viewport" : "showcase expanded") : "showcase"}
                        onMouseEnter={() => setCursor(`${isDragged ? '' : 'dragged'}`)}
                        onMouseLeave={() => setCursor("")}
                        style={{ showcaseSlide, fadeOut }}
                        transition={transition}
                        ref={sliderWrapper}
                        onClick={isDragged ? undefined : startDrag}
                        >
                            
                            {
                                props.projects.map( (project,i) => project.featured && (
                                    <li 
                                    className={isDragged ? "expanded" : ""}
                                    key={project.id}
                                    >
                                        
                                            
                                        <div className="list-items">
                                            <div className={isDragged ? (isProjectOpen ? "thumbnail fadeOut" : "thumbnail") : "thumbnail"} 
                                            // style={{ background: `url('${project.img_url}') no-repeat` }}
                                            onMouseLeave={()=>setCursor(`${isDragged ? "" : "dragged"}`)}
                                    
                                            > 
                                                <div className={isDragged ? (isProjectOpen ? "info hide" : "info") : "info"} >
                                                    <strong className="number gray">{`0${i+1}`}</strong>
                                                    <h1 className="black title title__small text-capitalize">{project.name}</h1>
                                                    <p className="green subtitle subtitle__small big text-capitalize sec-font"><i className="fas fa-info-circle"></i>{project.tag[0]}</p>
                                                
                                                </div> 
                                                <div 
                                                className={isDragged ? (isProjectOpen ? "image" : "image clip") : "image"} 
                                                ref={featureImage}
                                                >
                                                    <ProgressiveImage src={project.img_url} placeholder="">
                                                        {src => {

                                                            return <img src={src} alt={project.name} onLoad={(ref) => handleImgload(ref.target)} style={{opacity:0}}/>
                                                        }

                                                        }
                                                    </ProgressiveImage>
                                                    

                                                    {
                                                        isDragged && (
                                                        <Button type="inverted" 
                                                        title="View case study" 
                                                        button={cta} 
                                                        link={`/?project=${project.id}`}
                                                        viewas={`/project/${project.id}`}
                                                        hasSlug={true}  
                                                        details={{name:project.name,desc:project.desc,img:project.img_url,slug:project.id}} 
                                                        onClick={viewProject}
                                                        /> )
                                                    }
                                                
                                                </div> 
                                            </div>
                                        </div>
                                    
                                            
                                            
                                        
                                    </li>
                                )

                                )
                            }
                            <li 
                            className={isDragged ? "expanded" : ""}
                            >
                                
                                    
                                <div className="list-items">
                                    <div className={isDragged ? (isProjectOpen ? "thumbnail fadeOut" : "thumbnail") : "thumbnail"} 
                                    onMouseLeave={()=>setCursor(`${isDragged ? "" : "dragged"}`)}
                            
                                    > 
                                        
                                        <div 
                                        className={isDragged ? (isProjectOpen ? "image" : "image clip show-more") : "image"} 
                                        ref={featureImage}
                                        style={{background:"none"}}
                                        >
                                            
                                            

                                            {
                                                isDragged && (
                                                <Button type="normal" 
                                                title="View more Case Studies" 
                                                button={cta} 
                                                link={`/projects`}
                                                viewas={`/project/`}
                                                hasSlug={false}
                                                /> )
                                            }
                                        
                                        </div> 
                                    </div>
                                </div>
                            
                                    
                                    
                                
                            </li>
                                
                            
                        </motion.ul>
                        </motion.section>
                    )
                }
            

            {
               mobile <= 1024 && (
                    <section className="sections mob-featured-projects" >
                            <ul id="mob-slider" {...handlers}>
                                {
                                     props.projects.map( (project,i) => project.featured && (
                                        <li key={project.name+i}>
                                        
                                                <div className="info" >
                                                    <strong className="number gray">{`0${i+1}`}</strong>
                                                    <h1 className="black title title__small text-capitalize">{project.name}</h1>
                                     <p className="green subtitle subtitle__small big text-capitalize sec-font"><i className="fas fa-info-circle"></i>{project.tag[0]}</p>
                                                </div> 
                                                <Link href="/project/[project]" as={`/project/${project.id}`}>
                                                <a>
                                                    <div className="thumb">
                                                        
                                                        <ProgressiveImage src={project.img_url} placeholder="">
                                                            {src => {

                                                                return <img src={src} alt={project.name} onLoad={(ref) => handleImgload(ref.target)} style={{opacity:0}}/>
                                                            }

                                                            }
                                                        </ProgressiveImage>
                                                        
                                                    </div>
                                                </a>
                                            </Link>
                                                
                                        </li>
                                     ))
                                }
                                
                                <li className="cta">
                                       
                                    <Link href="/projects">
                                    <a>
                                        <div className="thumb">

                                            <h1 className="title title__big">View more</h1>
                                            <span className="icons">
                                                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                viewBox="0 0 512 512" style={{enableBackground:"new 0 0 512 512"}}>
                                                <g>
                                                <g>
                                                <path d="M390.595,281.767c-3.206-5.581-9.139-9.02-15.569-9.02H136.969c-6.43,0-12.363,3.439-15.563,9.02
                                                c-3.2,5.581-3.17,12.441,0.078,17.992l119.028,203.365c3.218,5.497,9.115,8.876,15.486,8.876c6.37,0,12.268-3.385,15.492-8.876
                                                l119.022-203.365C393.759,294.209,393.801,287.348,390.595,281.767z M255.997,458.527l-87.734-149.892h175.462L255.997,458.527z"
                                                />
                                                </g>
                                                </g>
                                                <g>
                                                <g>
                                                <path d="M255.997,0c-9.911,0-17.944,8.033-17.944,17.944v272.748c0,9.911,8.033,17.944,17.944,17.944
                                                c9.911,0,17.944-8.033,17.944-17.944V17.944C273.941,8.033,265.908,0,255.997,0z"/>
                                                </g>
                                                </g>
                                                </svg>
                                            </span>

                                            
                                            
                                        </div>
                                    </a>
                                </Link>
                                    
                            </li>
                                
                            </ul>
                    </section>
                )
            }
            
        </motion.section>
        </>
    );
}
export default Banner;