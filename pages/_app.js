import React,{useRef,useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Router from 'next/router';
import '../public/css/styles.css';
import NavBar from '../sections/NavBar';
import CustomCursor from '../Component/customCursor';
import {GlobalProvider} from '../context/GlobalContext';
import OffNav from '../sections/OffNav';
import Overlay from '../Component/Overlay';
import gsap from "gsap";
import { CursorProvider } from '../context/CursorContext';
import useWindowSize from "../Hooks/useWindowSize";
import {PageTransition} from "next-page-transitions"
import Loader from "../Component/Loader";
import {useRouter} from "next/router";
import Loading from '../Hooks/pageLoader';
import { HomeProvider } from '../context/HomeContext';

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const [toggleMenu,setToggleMenu] = React.useState(false);
  const [isProjectOpen,setProjectOpen] = React.useState(false);
  const [imagePos,setImagePos] = React.useState({
    x:0,
    y:0,
    width: 0,
    height: 0
  });

  const nav = useRef(null);
  const button = useRef(null);

 const router = useRouter();
  

  React.useEffect(() => {
   // console.log(pageLoading);
    const tl = gsap.timeline();
    if(nav.current != null){
        gsap.to(nav.current,0,{css:{visibility: "visible" }});
        tl.from(nav.current,.4,{
          opacity: 0,
          y: 0,
          height: 0,
          ease: "ease.Power4",
          delay: .1
      });
      tl.from([button.current,".logo-offnav",".ham-close"],.4,{
        opacity: 0,
        y: -20,
        delay: 0
      });
      tl.from("#animate-link a",.4,{
        y: 50,
        delay: 0,
        stagger: {
          amount: .2
        },
        ease: "ease.Power4"
      });
      
      
    }
    
      
    toggleMenu ? document.querySelector("body").style.overflow = "hidden" : (isProjectOpen ? document.querySelector("body").style.overflow = "hidden" : document.querySelector("body").style.overflow = "visible");
    
    !toggleMenu ? tl.reverse() : null;
  }, [toggleMenu]);

  //hook
  const size = useWindowSize();
  //Ref
  const app = useRef()
  const scrollContainer = useRef()

  //state
  const [height,setHeight] = useState(0);
  const [loading,setLoading] = useState(true);

 
 

  const skewConfigs = {
    ease: .1,
    current: 0,
    previous: 0,
    rounded: 0
  }
 

  useEffect(() => {
    

    // console.log(size);
    //  setHeight(size.height);
      //document.querySelector('body').style.height = `${scrollContainer.current.getBoundingClientRect().height+64}px`
      

  });


  // useEffect(() => {
  //   requestAnimationFrame(() => skewScrolling())
  // },[])
  
   
  // const skewScrolling = () => {
  //   skewConfigs.current = window.scrollY;
  //   skewConfigs.previous += (skewConfigs.current - skewConfigs.previous) * skewConfigs.ease;
  //   skewConfigs.rounded = Math.round(skewConfigs.previous *100) / 100;

  //   //vars
  //   const difference = skewConfigs.current - skewConfigs.rounded;
  //   const acceleration = difference / size.width;
  //   const velocity = +acceleration;
  //   const skew = velocity * 7.5;

  //   //
  //   //scrollContainer.current.style.transform = `translate3d(0,-${skewConfigs.rounded}px, 0) skewY(${skew}deg)`;
  //   //scrollContainer.current.style.transform = `translate3d(0,-${skewConfigs.rounded}px, 0)`;
  //   requestAnimationFrame(() => skewScrolling())
    
  // }
  
  
  return (
    
    <GlobalProvider>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="msapplication-tap-highlight" content="no" />
        <title>DG Solutions</title>
        <link rel="stylesheet" href="/css/spectre.min.css"/>
        <link rel="stylesheet" href="/css/spectre-exp.min.css"/>
        <link rel="stylesheet" href="/css/spectre-icons.min.css"/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="/js/main.js"></script>
      </Head>
      <CursorProvider>
      <CustomCursor />
      { Loading() }
      <Overlay />
      <OffNav toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} nav={nav} button={button}/>  
      <div className={`push ${toggleMenu ? "pushed" : ""}`}>
      <nav>    
        <NavBar toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      </nav>
        
      <div className="App" ref={app}>
        <div className="scroll" ref={scrollContainer} id="scroll-container">
        
            {/* <PageTransition
            timeout={300}
            classNames="page-transition"
            loadingComponent={<Loader />}
            loadingDelay={50000}
            loadingTimeout={{
              enter: 400,
              exit: 0,
            }}
            loadingClassNames="loading-indicator"
            loadingCallbackName="removeNav"
            onEnter={onEnter}
            onExit={onExit}
          >
           <Component {...pageProps} key={router.route} imagePos={imagePos} setImagePos={setImagePos} setLoading={setLoading} loading={loading} setProjectOpen={setProjectOpen} />
          </PageTransition> */}
          <HomeProvider>
            <Component {...pageProps} key={router.route} imagePos={imagePos} setImagePos={setImagePos} setLoading={setLoading} loading={loading} setProjectOpen={setProjectOpen} />
          </HomeProvider>
        </div>
      </div>
      
      </div>
      </CursorProvider>
    </GlobalProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
MyApp.getInitialProps = async ({ Component, router, ctx}) => {
  let pageProps = {}


  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  /* your own logic */

  return { pageProps }
}