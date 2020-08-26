import React from 'react';
import IntroTextWrap from '../../Component/IntroTextWrap';
import ProgressiveImage from 'react-progressive-graceful-image';
import gsap from 'gsap';
import Footer from '../../sections/Footer';
import {useRouter} from 'next/router';
import useSWR from 'swr';

const fetcher = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
  
    if (res.status !== 200) {
      throw new Error(data.message)
    }
    return data
  }

const BlogDetails = () => {

    const router = useRouter();
    //remove flashing
    //gsap.from(document.querySelector('body'),{opacity:0}).to(document.querySelector('body'),{opacity:1});
    const { query } = router
    const {data, error} = useSWR('https://digitalgurkha.com/blog/wp-json/wp/v2/posts?slug='+query.blog,fetcher)
    
    if (error) return <div>{error.message}</div>
    if (!data) return <div>loading...</div>

    const handleImgload = (elem) => {
        gsap.to(elem,0.6,{opacity:1,delay:.1});
    }
    
    function createMarkup() {
        return {__html: data[0].content.rendered };
      }

    return (
        <>
        <section id="blog-wrapper">
        <div className="blog-banner">
            <IntroTextWrap
            intro1={data[0].title.rendered} />
            <div className="thumb">
                <ProgressiveImage 
                src="https://unsplash.it/1361"
                placeholder=""
                rootMargin="0% 0% 0%"
                threshold={[1]}
                delay={100}>
                    {src => {

                        return <img src={src} alt="sdf" onLoad={(ref) => handleImgload(ref.target)} style={{opacity:0}} />
                    }

                    }
                </ProgressiveImage>
            </div>
            <div className="blog-content" dangerouslySetInnerHTML={createMarkup()}>
                
            </div>
        </div>
        </section>
        <Footer />
        </>
    );
}

export default BlogDetails;
