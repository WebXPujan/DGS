import React,{useContext} from 'react';
import {LinkedinShareButton, TwitterShareButton, FacebookShareButton, FacebookIcon, TwitterIcon, LinkedinIcon } from "react-share";
import {GlobalContext} from "../context/GlobalContext";
const BlogTitleMeta = ({title,shareUrl,date}) => {

    const [cursor, setCursor] = useContext(GlobalContext);

    return (
        <div className="title-meta">
            <ul>
                <li>
                    <h1 className="black title title__small text-capitalize">By DG Solutions</h1>
                    <p className="green subtitle subtitle__small big text-capitalize sec-font"><i className="fas fa-info-circle"></i>{date}</p>
                </li>
                <li>
                    <LinkedinShareButton 
                    url={shareUrl} 
                    className="share-button" 
                    onMouseEnter={() => setCursor("pointer")}
                    onMouseLeave={() => setCursor("")}>
                        <LinkedinIcon size={48} round={false} iconFillColor="#303030" bgStyle={{fill: 'none'}} />
                    </LinkedinShareButton>
                    <TwitterShareButton
                        url={shareUrl}
                        title={title}
                        className="share-button"
                        onMouseEnter={() => setCursor("pointer")}
                        onMouseLeave={() => setCursor("")}
                    >
                        <TwitterIcon size={48} round={false} iconFillColor="#303030" bgStyle={{fill: 'none'}}  />
                    </TwitterShareButton>

                    <FacebookShareButton 
                    hashtag="digitalGurkha" 
                    quote={title}
                    url={shareUrl}
                    className="share-button"
                    onMouseEnter={() => setCursor("pointer")}
                    onMouseLeave={() => setCursor("")} >
                        <FacebookIcon size={48} round={false} iconFillColor="#303030" bgStyle={{fill: 'none'}}  />
                    </FacebookShareButton>
                </li>
            </ul>
        </div>
    );
}

export default BlogTitleMeta;
