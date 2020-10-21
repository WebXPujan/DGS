import Button from '../Component/Button';
import BannerInner from "../Component/BannerInner";
const CTA = () => {
    return(
        <section id="cta" className="sections">
        <div className="container">
            {/* <div className="info">
                <h1 className="green title md-title big text-center">Don't be shy, we don't bite!</h1>
                <p className="title title__small big inverted text-center">Lets talk, tell us what you want to achieve, and we will tell you how to do so.</p>
            </div>
            <div className="cta">
                <Button type="inverted-green" title="Start Your Project"/>
            </div> */}
            <BannerInner 
            page="projects"
            title="Let’s build your business together."
            para="Let’s talk! Tell us what you want to achieve, and we will tell you how to do so."
            
            /> 
        </div>
    </section>
    )
}
export default CTA;