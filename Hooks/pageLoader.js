import {useState,useEffect, useRef} from "react"
import {useRouter} from "next/router"
import Loader from "../Component/Loader"
import {TimelineLite} from "gsap"
import { AnimatePresence } from "framer-motion"
export const Loading= () => {

    const [loading, setLoading] = useState(false);
    const router = useRouter();
   // const wrap = useRef(null);
   // const tl = new TimelineLite();

    useEffect(() => {
        let timeId;
        const handleStart = (url) => {
            setLoading(true);
           // console.log(router);
           // document.querySelector("body").style.overflow = "hidden";
            //tl.from(wrap.current,1,{opacity:0})
            //console.log(wrap.current);

        }
        // handleComplete event was not firing
        const handleComplete = (url) => {
           timeId = setTimeout(()=> {
                setLoading(false);
               // document.querySelector("body").style.overflow = "visible";
            },600);
            
            //console.log(router);
            
        }

        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleComplete)
        router.events.on('routeChangeError', handleComplete)

        return () => {
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleComplete)
            router.events.off('routeChangeError', handleComplete)
            clearTimeout(timeId)
        }
    },[])
    
    return (
        <AnimatePresence exitBeforeEnter>
        {
            loading && <Loader />
        }
        </AnimatePresence>
    );
}
export default Loading;