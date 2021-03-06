import ProjectBanner from '../../sections/ProjectBanner';
import {useRouter} from 'next/router' 
import React from 'react'
import ProjectBody from '../../sections/ProjectBody';
import {projects} from '../../API/projects';
import Error from 'next/error';

const fetcher = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
  
    if (res.status !== 200) {
      throw new Error(data.message)
    }
    return data
  }

const ProjectDetails = ({imagePos,loading,setLoading,project}) => {
    const router = useRouter();
    //remove flashing
    //gsap.from(document.querySelector('body'),{opacity:0}).to(document.querySelector('body'),{opacity:1});
    const { query } = router
    // const { data, error } = useSWR(
    //   () => query.project && `/api/projects/${query.project}`,
    //   fetcher
    // )
  
    //  if (error) return <div>{error.message}</div>
    //  if (!data) return <div>Loading...</div>
    //let project = projects.filter((p) => p.id === query.project);
  
    if(project.length == 0){
      return <Error statusCode="404" />
    }
    return (
        
        
                <>
                
                {
                  project.map((p,i) => (
                    <React.Fragment key={i}>
                    <ProjectBanner page="inner" width={imagePos.width} height={imagePos.height} x={imagePos.x} y="64" stickyTitle={p.name} stickyDesc={`Every organization has distinct needs and goals. Scroll down to see the case study of ${p.name}.`} img={p.img_url} />
                    <ProjectBody loading={loading} setLoading={setLoading} title={p.name} details={p} />
                    </React.Fragment>
                    ))
                }

                </>
        
    );
}

ProjectDetails.getInitialProps = (ctx) => {
    const { query } = ctx;
  
    //const res = await fetch("http://localhost:3000/api/project?id="+query);
    //const project = await res.json();

    return{
        project: projects.filter((p) => p.id === query.project)
    }
}

export default ProjectDetails;
