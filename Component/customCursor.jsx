import React,{useState,useEffect,useContext, useRef} from 'react'
import {GlobalContext} from '../context/GlobalContext'
import { CursorContext } from '../context/CursorContext';

const Cursor = ({type,style,x,y,cursor,setScroll,isScrolled}) => {
    
    const [yPos,setYPos] = useState(y);
    
    // const [styles,setStyle] = useState({
    //     left: style.left,
    //     top: style.top
    // })
    useEffect(()=>{
        setYPos((y + document.documentElement.scrollTop) - y)
        window.addEventListener("scroll",handleScroll)
       // cursor.current.style.top = yPos
        // window.onscroll = (e) => {
        //     // z = y + document.documentElement.scrollTop;
        //     // oldY = z
        //     setStyle({
        //         left: x,
        //         top: y+ window.scrollY
        //     })
        //     //console.log()
        // }
    },[y])

    const handleScroll = e => {
        setScroll(true);
    }

    if(x <= 5 || y <= (yPos+5)) {
        return (
            <div className="cursor hidden" style={style} ref={cursor}></div>
        )
    }else{
        switch(type){
            case 'hovered':
                return(
                    <div className={isScrolled ? "cursor hidden" : "cursor hovered" } style={style} ref={cursor}></div>
                );
                break;
            case 'inverted-hovered':
                return(
                    <div className={isScrolled ? "cursor hidden" : "cursor inverted-hovered"} style={style} ref={cursor}></div>
                );
                break;
            case 'dragged':
                return(
                    <div className={isScrolled ? "cursor hidden" : "cursor dragged"} style={style} ref={cursor}><span></span><span></span></div>
                );
                break;
            case 'inverted':
                return(
                    <div className={isScrolled ? "cursor hidden" : "cursor inverted"} style={style} ref={cursor}></div>
                );
                break;
            case 'pointer':
                return(
                    <div className={isScrolled ? "cursor hidden" : "cursor pointer"} style={style} ref={cursor}></div>
                );
                break;
            case 'hidden':
                return(
                    <div className={isScrolled ? "cursor hidden" : "cursor hidden"} ref={cursor}></div>
                );
                break;
            case 'cross':
                return(
                    <div className={isScrolled ? "cursor hidden" : "cursor cross"} style={style} ref={cursor}><span></span><span></span></div>
                );
                break;
            case 'cross.focus':
                return(
                    <div className={isScrolled ? "cursor hidden" : "cursor cross focus"} style={style} ref={cursor}><span></span><span></span></div>
                );
                break;
            default:
                return(
                    <div className={isScrolled ? "cursor hidden" : "cursor"} style={style} ref={cursor}></div>
                );
                break;
        }
    }
    

}
const CustomCursor = () => {

    const [mousePos,setMousePos] = useState({
        x: 0,
        y: 0
    });
    const [isScrolled,setScroll] = useState(false);

    const [cursor,setCursor] = useContext(GlobalContext);
    const [mPos,setMPos] = useContext(CursorContext);


    const cur = useRef();

    const onMouseMove = e => {
        const {pageX: x, pageY: y} = e 
        setMousePos({x, y})
        setMPos({x,y})
        setScroll(false);
        //setCursor(cursor)
        // if(x <= 5 || y <= 5){
        //     setCursor("hidden")
        // }
        
        
    }

    
    // const onWindowScroll = e => {
    //     let top = document.body.scrollTop || document.documentElement.scrollTop
    //     let left = mousePos.x
    //     //cur.current.style.top = top+"px"
    //     setMousePos({x:mPos.x,y:top})
    //    // console.log(cur.current)
    // }

    useEffect(() => {
        document.addEventListener("mousemove", onMouseMove)
        // document.addEventListener("mouseout", mouseHandle)
        //document.addEventListener("scroll", onWindowScroll)
        //console.log(cursor);
        return () => {
            document.removeEventListener("mousemove", onMouseMove)
        //    document.removeEventListener("scroll", onWindowScroll)
        };
    }, []);


    return(
        
        <Cursor type={cursor} style={{left: mousePos.x, top: mousePos.y}} x={mousePos.x} y={mousePos.y} cursor={cur} setScroll={setScroll} isScrolled={isScrolled}/>
    );

}

export default CustomCursor;