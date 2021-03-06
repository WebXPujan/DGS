import React,{useState,useEffect}from 'react';
import IntroTextWrap from '../../Component/IntroTextWrap';
import ProgressiveImage from 'react-progressive-graceful-image';
import gsap from 'gsap';
import Footer from '../../sections/Footer';
import {useRouter} from 'next/router';
import BlogTitleMeta from '../../Component/BlogTitleMeta';
import Head from 'next/head';

import Error from 'next/error';



const BlogDetails = ({data}) => {
    const [image,setImage] = useState("");
    const [bannerImage,setBannerImage] = useState("");

    const router = useRouter();
    //remove flashing
    //gsap.from(document.querySelector('body'),{opacity:0}).to(document.querySelector('body'),{opacity:1});
    const { query } = router
   
   if(data.length == 0){
       return <Error statusCode="404" />
   }
    
    useEffect(() => {
        // let fImage = await fetch('https://digitalgurkha.com/blog/wp-json/wp/v2/media/'+data[0].featured_media);
        // let resp = await fImage.json();
        // if(resp) setImage(resp);
        // return () => setImage("")
        //console.log(data);
        if(data[0].featured_media != 0) {
        fetch('https://agency.digitalgurkha.academy/wp-json/wp/v2/media/'+data[0].featured_media)
        .then(res => res.json())
        .then(json => {
            //console.log(json);
                setImage(json.media_details.sizes.thumbnail.source_url)
                setBannerImage(json.source_url)
            
            
        });
    }

    },[])
    
   
    let shareUrl = `https://agency.digitalgurkha.academy/${query.blog}` || "";
    let title = data[0].title.rendered || "";
    let exerpt = data[0].excerpt.rendered || "";

    const handleImgload = (elem) => {
        gsap.to(elem,0.6,{opacity:1,delay:.1});
    }
    
    function createMarkup() {
        return {__html: data[0].content.rendered };
      }

    return (
        <>
        {/* {JSON.stringify(image)} */}
        <Head>
            <title>{title}</title>
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="csrf_token" content="" />
            <meta property="type" content="website" />
            <meta property="url" content={shareUrl} />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
            <meta name="theme-color" content="#ffffff" />
            <meta name="_token" content="" />
            <meta name="robots" content="noodp" />
            <meta property="title" content={title} />
            <meta property="quote" content={title} />
            <meta name="description" content={exerpt} />
            <meta property="image" content={image} />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:quote" content={title} />
            <meta property="og:hashtag" content="" />
            <meta property="og:image" content={image} />
            <meta content="image/*" property="og:image:type" />
            <meta property="og:url" content={shareUrl} />
            <meta property="og:site_name" content="CampersTribe" />
            <meta property="og:description" content={exerpt} />
        </Head>
        <section id="blog-wrapper">
        <div className="blog-banner">
            <IntroTextWrap
            intro1={data[0].title.rendered} />
            <BlogTitleMeta 
            title={title}
            shareUrl={shareUrl}
            date={data[0].date}
            author={data[0].author}
            />
            <div className="thumb">
                <ProgressiveImage 
                src={bannerImage}
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
            <BlogTitleMeta 
            title={title}
            shareUrl={shareUrl}
            date={data[0].date}
            author={data[0].author}
            />
        </div>
        </section>
        <Footer />
        </>
    );
}
BlogDetails.getInitialProps = async ({query}) => {
    const res = await fetch('https://agency.digitalgurkha.academy/wp-json/wp/v2/posts?slug='+query.blog);
    const errCode = res.ok ? false : res.statusCode ;
    const json = await res.json();
    if(!errCode){
        
        return {data: json}
    }
    return {data: {}}
}

export default BlogDetails;
