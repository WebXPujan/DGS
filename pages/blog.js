import React from 'react';
import Blog from '../sections/Blog';
import Footer from '../sections/Footer';

const BlogPage = ({loading,setLoading}) => {
    return (
        <>
            <Blog setLoading={setLoading} loading={loading}/>
            <Footer />
        </>
    );
}

export default BlogPage;
