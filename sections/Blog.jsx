import {useEffect,useState, useRef} from 'react';
import Button from '../Component/Button';
import BlogCard from '../Component/BlogCard';
import useOnScreen from '../Hooks/useOnScreen';
import useSWR, { useSWRInfinite } from "swr";


const fetcher = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
  
    if (res.status !== 200) {
      throw new Error(data.message)
    }
    if(url == null) return null
    return data
  }

  const BlogDummy = () => {
      return (
        <article className="article__card dummy">
            <div className="thumb gradient"></div>
            <div className="excerpt">
                <h1 
                className="title title__article gradient"
                >
                </h1>
                <p className="para gradient"></p>
            </div>
        </article>
      )
  }

  const getKey = (pageIndex, previousPageData) => {
    if (previousPageData && previousPageData.length < 6) return null // reached the end
    return `https://agency.digitalgurkha.academy/wp-json/wp/v2/posts?page=${pageIndex+1}&per_page=6`                    // SWR key
  }
const Blog = ({setLoading,loading,from}) => {
    
    
    // const $loadMoreButton = useRef(null);
    // const isOnScreen = useOnScreen($loadMoreButton, "0px");

    // React.useEffect(() => {
    //    console.log(isOnScreen);
    // if (isOnScreen) handleConcat();
    // }, [isOnScreen,loading]);
    const [loaded,setLoaded] = useState(false);

    const {data, size, error, setSize} = useSWRInfinite(getKey,fetcher);
    if (!data) return(
        <section id="blog" className="sections">
            <div className="container">
                <div className="columns">
                    <div className="col-12">
                        <h1 className="title title__big big centered title__border">News & Blog</h1>
                    </div>
                    <div className="col-12 news-wrap">
                        <BlogDummy />
                        <BlogDummy />
                    </div>
                </div>
            </div>
        </section>
    )
    //if(error) return null
    //if(data.length <)
    
    const handleConcat = (e) => {
        e.preventDefault();
        setSize(size + 1);
    }
    return(
        
        <section id="blog" className="sections" onLoad={()=>setLoading(!loading)}>
        <div className="container">
            <div className="columns">
                <div className="col-12">
                    <h1 className="title title__big big centered title__border">News & Blog</h1>
                </div>
                <div className="col-12 news-wrap">
                    
                    

                    {
                        data.map((posts,i)=>(
                            
                            posts.map((post,j) => (
                                <BlogCard key={j} 
                                title={post.title.rendered} 
                                desc={post.excerpt.rendered}
                                img={post.featured_media}
                                slug={post.slug}
                                id={post.id}
                                />
                            ))
                            
                            
                        ))
                    }
                </div>
                {/* <div className="col-12 text-center">
                    <Button onClick={handleConcat} type="normal" title="Load More"/>
                </div> */}
                <div className="col-12 cta">
                    {
                        from === "home" ? <Button type="normal" link="/blog" hasSlug={false} title="Explore More"/> : null
                    }
                    
                </div>
            </div>
            
        </div>
    </section>
    )
}
export default Blog;