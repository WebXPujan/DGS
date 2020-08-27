import React,{useContext} from 'react';
import {LinkedinShareButton, TwitterShareButton, FacebookShareButton, FacebookIcon, TwitterIcon, LinkedinIcon } from "react-share";
import {GlobalContext} from "../context/GlobalContext";
import useSWR from "swr";

const fetcher = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
  
    if (res.status !== 200) {
      throw new Error(data.message)
    }
    return data
  }
const BlogTitleMeta = ({title,shareUrl,date,author}) => {

    const [cursor, setCursor] = useContext(GlobalContext);

    const {data, error} = useSWR('https://digitalgurkha.com/blog/wp-json/wp/v2/users/'+author,fetcher)
    
    if (error) return ""
    if (!data) return "-"

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "short", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
      }
    
    return (
        <div className="title-meta">
            <ul>
                <li className="has-avtr">
                    <span className="avtr" style={{background: `#e1e1e1 url('${data.avatar_urls[48]}')`}}></span>
                    <h1 className="black title title__small text-capitalize">By {data.name}</h1>
                    <p className="green subtitle subtitle__small big text-capitalize sec-font"><i className="fas fa-info-circle"></i>{formatDate(date)}</p>
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
