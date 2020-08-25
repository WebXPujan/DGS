import {useContext} from 'react'
import {GlobalContext} from '../context/GlobalContext'
import ProgressiveImage from 'react-progressive-graceful-image'
import {gsap} from 'gsap'

const ProjectCard = ({details,type,handleProjectClick}) => {

    const [cursor,setCursor] = useContext(GlobalContext);

    const handleImgload = (elem) => {
        gsap.to(elem,0.6,{opacity:1,delay:.1});
    }

   
    return (
        <li className="display-card"
        onClick={handleProjectClick}>
            <div 
            className="thumb clip"
            onMouseEnter={() => setCursor("hovered")}
            onMouseLeave={() => setCursor("")}
            >
                <ProgressiveImage 
                src={type === "team" ? `/images/team/${details.image_url}` : details.img_url} 
                placeholder=""
                rootMargin="0% 0% 0%"
                threshold={[1]}
                delay={100}>
                    {src => {

                        return <img src={src} alt={details.name} onLoad={(ref) => handleImgload(ref.target)} style={{opacity:0}} />
                    }

                    }
                </ProgressiveImage>
            </div>
            <div className="info">
    <h3 className="black title title__big"><strong className="number">{details.name}</strong></h3>
    <p className="para">
        {
            type === "team" ?
            details.title
            :
            details.tag.map(x => x+' ')
        }
    </p>
            </div>
        </li>
    );
}

export default ProjectCard;
