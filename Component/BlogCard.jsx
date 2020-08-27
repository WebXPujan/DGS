import {useContext,useState} from 'react';
import Link from 'next/link';
import {GlobalContext} from '../context/GlobalContext'
import ProgressiveImage from 'react-progressive-graceful-image'
import {gsap} from 'gsap'
import useSWR from 'swr'

const fetcher = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
  
    if (res.status !== 200) {
      throw new Error(data.message)
    }
    return data
  }
const BlogDesign = ({title,desc,slug,id,data,handleImgload,setCursor,dummy}) => {

    return (
        <>
        {
            dummy ? (
                <article className="article__card dummy">
                    <div className="thumb gradient"></div>
                    <div className="excerpt">
                        <h1 
                        className="title title__article gradient"
                        onMouseEnter={() => setCursor("hovered")}
                        onMouseLeave={() => setCursor("")}
                        >
                        </h1>
                        <p className="para gradient"></p>
                    </div>
                </article>
            )
            :
            (
                <article className="article__card">
           
                    <div className="thumb">
                        
                        
                        <ProgressiveImage 
                        src={data.media_details.sizes.theseo_large.source_url} 
                        placeholder={data.media_details.sizes.theseo_last41.source_url}
                        rootMargin="0% 0% 0%"
                        threshold={[1]}
                        delay={1000}>
                            {src => {

                                return <img src={src} alt={title} onLoad={(ref) => handleImgload(ref.target)} style={{opacity:0}} />
                            }

                            }
                        </ProgressiveImage>
                    </div>
                    <div className="excerpt">
                        <h1 
                        className="title title__article"
                        onMouseEnter={() => setCursor("hovered")}
                        onMouseLeave={() => setCursor("")}
                        >
                                <Link href={`/blog/[blog]?id=${id}`} as={`/blog/${slug}`}>
                                    <a>{title}</a>
                                </Link>
                            
                        </h1>
                        <p className="para">{desc.replace(/<\/?[^>]+(>|$)/g, "")}</p>
                    </div>
                </article>
            )
        }
        </>
    )
}
const BlogCard = ({title,desc,img,slug,id}) => {

    

    const [cursor, setCursor] = useContext(GlobalContext)
    const [error,setError] = useState(false);

    const {data, err} = useSWR(`https://digitalgurkha.com/blog/wp-json/wp/v2/media/${img}`,fetcher)
    
       if (err) return <div>{err.message}</div>
       if (!data) return <BlogDesign dummy={true}/>


   const handleError = (e) => {
       setError(true);
   }
   const handleImgload = (elem) => {
    gsap.to(elem,0.6,{opacity:1,delay:.1});
}
    return (
        <BlogDesign 
        title={title}
        desc={desc}
        slug={slug}
        id={id}
        data={data} 
        handleImgload={handleImgload}
        setCursor={setCursor}
        dummy={false} />
    );
}

export default BlogCard;
