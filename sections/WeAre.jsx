import {useContext} from 'react'
import {GlobalContext} from '../context/GlobalContext'
import Button from '../Component/Button';
const WeAre = () => {

    const [cursor,setCursor] = useContext(GlobalContext)
    return(
        <section className="sections" id="who-we-are"
        onMouseEnter={()=>setCursor("inverted")}
        onMouseLeave={()=>setCursor("")}>
        <div className="container">
            <div className="columns">
              <div className="column col-5 col-md-12">
                  <div className="hero-content">
                    <div className="info">
                        <div className="wrap">
                            <h1 className="title xl-title inverted">WE<span>ARE</span></h1>
                            <p className="title title__big md-title inverted">
                                The Growth Hackers!
                            </p>
                            <p>
                                <Button 
                                type="inverted" 
                                title="Get Details"
                                link={`/team`}
                                viewas={`/team/`}
                                hasSlug={false}  />
                            </p>
                        </div>
                        
                    </div>
                    
                  </div>
              </div>
              <div className="column col-7 col-md-12">
                <div className="feature">
                    <ul>
                        <li className="list-items">
                            <h1 className="black title title__big inverted">Customer Experience</h1>
                            <p className="para inverted small">We build with your customers in mind, technology is there to help.</p>
                        </li>
                        <li className="list-items">
                            <h1 className="black title title__big inverted">Agile</h1>
                            <p className="para inverted small">We understand plans might change. We are as agile as you are.</p>
                        </li>
                        <li className="list-items">
                            <h1 className="black title title__big inverted">Passion</h1>
                            <p className="para inverted small">We love what we do, and we do what we love. And, we do it better. </p>
                        </li>
                        <li className="list-items">
                            <h1 className="black title title__big inverted">Creativity</h1>
                            <p className="para inverted small">We believe in being different. We believe in little tweaks and hacks which make a tremendous impact.</p>
                        </li>
                        <li className="list-items">
                            <h1 className="black title title__big inverted">Data-Driven</h1>
                            <p className="para inverted small">We love graphs, and charts, and ROI and growth metrics and everything data.</p>
                        </li>
                        <li className="list-items">
                            <h1 className="black title title__big inverted">Testing</h1>
                            <p className="para inverted small">We assume then we validate. We don't tell you what to do, your customers tell us, and we adapt.</p>
                        </li>
                        
                    </ul>
                </div> 
              </div>
            </div>
        </div>
        <span className="arrow"></span>
    </section>
    )
}
export default WeAre;