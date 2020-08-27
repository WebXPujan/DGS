import {useEffect,useState} from 'react';
import Button from '../Component/Button';
import BlogCard from '../Component/BlogCard';
import useSWR from 'swr';


const fetcher = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
  
    if (res.status !== 200) {
      throw new Error(data.message)
    }
    return data
  }


const Blog = ({setLoading,loading,from}) => {
    const [isLoaded,loaded] = useState(false)
    
       // const { data, error } = useSWR(`https://newsapi.org/v2/top-headlines?country=us&apiKey=e6c514c259024fbfa5f9e2de2684fefd`,fetcher)
       let url = from === "home" ? "https://digitalgurkha.com/blog/wp-json/wp/v2/posts?per_page=4" : "https://digitalgurkha.com/blog/wp-json/wp/v2/posts";
        const {data, error} = useSWR(url,fetcher)
    
       if (error) return <div>{error.message}</div>
       if (!data) return ""
      
    
  
    return(
        
        <section id="blog" className="sections" onLoad={()=>setLoading(!loading)}>
        <div className="container">
            <div className="columns">
                <div className="col-12">
                    <h1 className="title title__big big centered title__border">News & Blog</h1>
                </div>
                <div className="col-12 news-wrap">
                    {
                       
                        data.map((post,i)=>(
                            <BlogCard key={i} 
                            title={post.title.rendered} 
                            desc={post.excerpt.rendered}
                            img={post.featured_media}
                            slug={post.slug}
                            id={post.id}
                            />
                        ))
                    }
                </div>
                <div className="col-12 cta">
                    {
                        from === "home" ? <Button type="normal" link="/blog" as="/blog" title="Explore More"/> : null
                    }
                    
                </div>
            </div>
            
        </div>
    </section>
    )
}
export default Blog;