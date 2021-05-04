import {useContext} from "react"
import {GlobalContext} from "../context/GlobalContext"
import Link from 'next/link'
import NavLink from '../Component/NavLink'
const Footer = () => {
    const [cursor,setCursor] = useContext(GlobalContext)
    return(
    <>
    <section className="sections has-offset" id="footer">
        <div className="container">
            <div className="columns">
                <div className="column col-4 col-md-12">
                    <h1 className="black title title__big big title__border">Digital Gurkha</h1>
                    <div className="columns presence">
                        
                        <div className="column col-12 col-md-12 col-xs-12">
                            <p className="para">
                            With our head office in Nepal, we are proud to serve a Global Audience with Field Offices in the Himalayan country of Nepal helping us give you the best of two countries,  and Creativity from Nepal helping us provide High Quality work in an affordable price.
                            </p>                           
                        </div>
                        <div className="column col-12">
                            <div className="social-sprite">
                                <ul>
                                    <li><a href="" 
                                    onMouseEnter={() => setCursor("hovered")}
                                    onMouseLeave={() => setCursor("")}>
                                        <span className="icons">
                                            
                                            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m437 0h-362c-41.351562 0-75 33.648438-75 75v362c0 41.351562 33.648438 75 75 75h151v-181h-60v-90h60v-61c0-49.628906 40.371094-90 90-90h91v90h-91v61h91l-15 90h-76v181h121c41.351562 0 75-33.648438 75-75v-362c0-41.351562-33.648438-75-75-75zm0 0"/></svg>
                                        </span>
                                    </a></li>
                                    <li><a href="" 
                                    onMouseEnter={() => setCursor("hovered")}
                                    onMouseLeave={() => setCursor("")}>
                                        <span className="icons">
                                            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                            viewBox="0 0 512 512" style={{enableBackground:"new 0 0 512 512"}}>
                                            <g>
                                            <g>
                                            <path d="M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016
                                            c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992
                                            c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056
                                            c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152
                                            c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792
                                            c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44
                                            C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568
                                            C480.224,136.96,497.728,118.496,512,97.248z"/>
                                            </g>
                                            </g>
                                            </svg>
                                        </span>
                                    </a></li>
                                    <li><a href="" 
                                    onMouseEnter={() => setCursor("hovered")}
                                    onMouseLeave={() => setCursor("")}>
                                        <span className="icons">
                                            <svg id="Bold" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m23.994 24v-.001h.006v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07v-2.185h-4.773v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243v7.801z"/><path d="m.396 7.977h4.976v16.023h-4.976z"/><path d="m2.882 0c-1.591 0-2.882 1.291-2.882 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909c-.001-1.591-1.292-2.882-2.882-2.882z"/></svg>
                                        </span>
                                    </a></li>
                                    <li><a href="" 
                                    onMouseEnter={() => setCursor("hovered")}
                                    onMouseLeave={() => setCursor("")}>
                                        <span className="icons">
                                            <svg viewBox="0 0 511 511" xmlns="http://www.w3.org/2000/svg"><path d="m510.949219 150.5c-1.199219-27.199219-5.597657-45.898438-11.898438-62.101562-6.5-17.199219-16.5-32.597657-29.601562-45.398438-12.800781-13-28.300781-23.101562-45.300781-29.5-16.296876-6.300781-34.898438-10.699219-62.097657-11.898438-27.402343-1.300781-36.101562-1.601562-105.601562-1.601562s-78.199219.300781-105.5 1.5c-27.199219 1.199219-45.898438 5.601562-62.097657 11.898438-17.203124 6.5-32.601562 16.5-45.402343 29.601562-13 12.800781-23.097657 28.300781-29.5 45.300781-6.300781 16.300781-10.699219 34.898438-11.898438 62.097657-1.300781 27.402343-1.601562 36.101562-1.601562 105.601562s.300781 78.199219 1.5 105.5c1.199219 27.199219 5.601562 45.898438 11.902343 62.101562 6.5 17.199219 16.597657 32.597657 29.597657 45.398438 12.800781 13 28.300781 23.101562 45.300781 29.5 16.300781 6.300781 34.898438 10.699219 62.101562 11.898438 27.296876 1.203124 36 1.5 105.5 1.5s78.199219-.296876 105.5-1.5c27.199219-1.199219 45.898438-5.597657 62.097657-11.898438 34.402343-13.300781 61.601562-40.5 74.902343-74.898438 6.296876-16.300781 10.699219-34.902343 11.898438-62.101562 1.199219-27.300781 1.5-36 1.5-105.5s-.101562-78.199219-1.300781-105.5zm-46.097657 209c-1.101562 25-5.300781 38.5-8.800781 47.5-8.601562 22.300781-26.300781 40-48.601562 48.601562-9 3.5-22.597657 7.699219-47.5 8.796876-27 1.203124-35.097657 1.5-103.398438 1.5s-76.5-.296876-103.402343-1.5c-25-1.097657-38.5-5.296876-47.5-8.796876-11.097657-4.101562-21.199219-10.601562-29.398438-19.101562-8.5-8.300781-15-18.300781-19.101562-29.398438-3.5-9-7.699219-22.601562-8.796876-47.5-1.203124-27-1.5-35.101562-1.5-103.402343s.296876-76.5 1.5-103.398438c1.097657-25 5.296876-38.5 8.796876-47.5 4.101562-11.101562 10.601562-21.199219 19.203124-29.402343 8.296876-8.5 18.296876-15 29.398438-19.097657 9-3.5 22.601562-7.699219 47.5-8.800781 27-1.199219 35.101562-1.5 103.398438-1.5 68.402343 0 76.5.300781 103.402343 1.5 25 1.101562 38.5 5.300781 47.5 8.800781 11.097657 4.097657 21.199219 10.597657 29.398438 19.097657 8.5 8.300781 15 18.300781 19.101562 29.402343 3.5 9 7.699219 22.597657 8.800781 47.5 1.199219 27 1.5 35.097657 1.5 103.398438s-.300781 76.300781-1.5 103.300781zm0 0"/><path d="m256.449219 124.5c-72.597657 0-131.5 58.898438-131.5 131.5s58.902343 131.5 131.5 131.5c72.601562 0 131.5-58.898438 131.5-131.5s-58.898438-131.5-131.5-131.5zm0 216.800781c-47.097657 0-85.300781-38.199219-85.300781-85.300781s38.203124-85.300781 85.300781-85.300781c47.101562 0 85.300781 38.199219 85.300781 85.300781s-38.199219 85.300781-85.300781 85.300781zm0 0"/><path d="m423.851562 119.300781c0 16.953125-13.746093 30.699219-30.703124 30.699219-16.953126 0-30.699219-13.746094-30.699219-30.699219 0-16.957031 13.746093-30.699219 30.699219-30.699219 16.957031 0 30.703124 13.742188 30.703124 30.699219zm0 0"/></svg>
                                        </span>
                                    </a></li>
                                    <li><a href="" 
                                    onMouseEnter={() => setCursor("hovered")}
                                    onMouseLeave={() => setCursor("")}>
                                        <span className="icons">
                                            <svg viewBox="-21 -117 682 682" xmlns="http://www.w3.org/2000/svg"><path d="m626.8125 64.035156c-7.375-27.417968-28.992188-49.03125-56.40625-56.414062-50.082031-13.703125-250.414062-13.703125-250.414062-13.703125s-200.324219 0-250.40625 13.183593c-26.886719 7.375-49.03125 29.519532-56.40625 56.933594-13.179688 50.078125-13.179688 153.933594-13.179688 153.933594s0 104.378906 13.179688 153.933594c7.382812 27.414062 28.992187 49.027344 56.410156 56.410156 50.605468 13.707031 250.410156 13.707031 250.410156 13.707031s200.324219 0 250.40625-13.183593c27.417969-7.378907 49.03125-28.992188 56.414062-56.40625 13.175782-50.082032 13.175782-153.933594 13.175782-153.933594s.527344-104.382813-13.183594-154.460938zm-370.601562 249.878906v-191.890624l166.585937 95.945312zm0 0"/></svg>
                                        </span>
                                    </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column col-8 col-md-12">
                    
                </div>
            </div>
        </div>
        <section className="offset">
            <h1 className="black title title__big big title__border">Our Presence</h1>
            <div className="wrap">
                <div className="columns">
//                     <div className="column col-6 col-xs-12">
//                     <h1 className="black title title__small big text-capitalized">U.S.A</h1>  
//                     <h3 className="subtitle subtitle__small">5435 Saturn Dr, <br/> Unit 6 Dallas, Texas, 75237, USA</h3>
//                     <br/>
//                     <p>
//                         <span className="icons">
//                         <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
//                                                 viewBox="0 0 512.006 512.006" style={{enableBackground:"new 0 0 512.006 512.006"}}>
//                             <g>
//                                 <g>
//                                     <g>
//                                         <path d="M502.05,407.127l-56.761-37.844L394.83,335.65c-9.738-6.479-22.825-4.355-30.014,4.873l-31.223,40.139
//                                             c-6.707,8.71-18.772,11.213-28.39,5.888c-21.186-11.785-46.239-22.881-101.517-78.23c-55.278-55.349-66.445-80.331-78.23-101.517
//                                             c-5.325-9.618-2.822-21.683,5.888-28.389l40.139-31.223c9.227-7.188,11.352-20.275,4.873-30.014l-32.6-48.905L104.879,9.956
//                                             C98.262,0.03,85.016-2.95,74.786,3.185L29.95,30.083C17.833,37.222,8.926,48.75,5.074,62.277
//                                             C-7.187,106.98-9.659,205.593,148.381,363.633s256.644,155.56,301.347,143.298c13.527-3.851,25.055-12.758,32.194-24.876
//                                             l26.898-44.835C514.956,426.989,511.976,413.744,502.05,407.127z"/>
//                                         <path d="M291.309,79.447c82.842,0.092,149.977,67.226,150.069,150.069c0,4.875,3.952,8.828,8.828,8.828
//                                             c4.875,0,8.828-3.952,8.828-8.828c-0.102-92.589-75.135-167.622-167.724-167.724c-4.875,0-8.828,3.952-8.828,8.828
//                                             C282.481,75.494,286.433,79.447,291.309,79.447z"/>
//                                         <path d="M291.309,132.412c53.603,0.063,97.04,43.501,97.103,97.103c0,4.875,3.952,8.828,8.828,8.828
//                                             c4.875,0,8.828-3.952,8.828-8.828c-0.073-63.349-51.409-114.686-114.759-114.759c-4.875,0-8.828,3.952-8.828,8.828
//                                             C282.481,128.46,286.433,132.412,291.309,132.412z"/>
//                                         <path d="M291.309,185.378c24.365,0.029,44.109,19.773,44.138,44.138c0,4.875,3.952,8.828,8.828,8.828
//                                             c4.875,0,8.828-3.952,8.828-8.828c-0.039-34.111-27.682-61.754-61.793-61.793c-4.875,0-8.828,3.952-8.828,8.828
//                                             C282.481,181.426,286.433,185.378,291.309,185.378z"/>
//                                     </g>
//                                 </g>
//                             </g>
//                             </svg>
//                         </span>
//                         <a href="" className="dg-link"
//                                 onMouseEnter={() => setCursor("pointer")}
//                                 onMouseLeave={() => setCursor("")}>+1 4103366654</a></p>
//                     <p style={{marginTop: -5}}>
//                         <span className="icons" style={{paddingTop:6}}>     
//                         <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
//                                                 viewBox="0 0 512.006 512.006" style={{enableBackground:"new 0 0 512.006 512.006"}}>
//                             <g>
//                                 <g>
//                                     <path d="M501.613,491.782c12.381,0,23.109-4.088,32.229-12.16L377.793,323.567c-3.744,2.681-7.373,5.288-10.801,7.767
//                                         c-11.678,8.604-21.156,15.318-28.434,20.129c-7.277,4.822-16.959,9.737-29.045,14.755c-12.094,5.024-23.361,7.528-33.813,7.528
//                                         h-0.306h-0.306c-10.453,0-21.72-2.503-33.813-7.528c-12.093-5.018-21.775-9.933-29.045-14.755
//                                         c-7.277-4.811-16.75-11.524-28.434-20.129c-3.256-2.387-6.867-5.006-10.771-7.809L16.946,479.622
//                                         c9.119,8.072,19.854,12.16,32.234,12.16H501.613z"/>
//                                     <path d="M31.047,225.299C19.37,217.514,9.015,208.598,0,198.555V435.98l137.541-137.541
//                                         C110.025,279.229,74.572,254.877,31.047,225.299z"/>
//                                     <path d="M520.059,225.299c-41.865,28.336-77.447,52.73-106.75,73.195l137.486,137.492V198.555
//                                         C541.98,208.396,531.736,217.306,520.059,225.299z"/>
//                                     <path d="M501.613,59.013H49.181c-15.784,0-27.919,5.33-36.42,15.979C4.253,85.646,0.006,98.97,0.006,114.949
//                                         c0,12.907,5.636,26.892,16.903,41.959c11.267,15.061,23.256,26.891,35.961,35.496c6.965,4.921,27.969,19.523,63.012,43.801
//                                         c18.917,13.109,35.368,24.535,49.505,34.395c12.05,8.396,22.442,15.667,31.022,21.701c0.985,0.691,2.534,1.799,4.59,3.269
//                                         c2.215,1.591,5.018,3.61,8.476,6.107c6.659,4.816,12.191,8.709,16.597,11.683c4.4,2.975,9.731,6.298,15.985,9.988
//                                         c6.249,3.685,12.143,6.456,17.675,8.299c5.533,1.842,10.655,2.766,15.367,2.766h0.306h0.306c4.711,0,9.834-0.924,15.368-2.766
//                                         c5.531-1.843,11.42-4.608,17.674-8.299c6.248-3.69,11.572-7.02,15.986-9.988c4.406-2.974,9.938-6.866,16.598-11.683
//                                         c3.451-2.497,6.254-4.517,8.469-6.102c2.057-1.476,3.605-2.577,4.596-3.274c6.684-4.651,17.1-11.892,31.104-21.616
//                                         c25.482-17.705,63.01-43.764,112.742-78.281c14.957-10.447,27.453-23.054,37.496-37.803c10.025-14.749,15.051-30.22,15.051-46.408
//                                         c0-13.525-4.873-25.098-14.598-34.737C526.461,63.829,514.932,59.013,501.613,59.013z"/>
//                                 </g>
//                             </g>
//                             </svg>
//                         </span>
//                         <a href="mailto:contact@digitalgurkha.com" className="dg-link"
//                                 onMouseEnter={() => setCursor("pointer")}
//                                 onMouseLeave={() => setCursor("")}>contact@digitalgurkha.com</a></p><br/>
//                     </div>
                    <div className="column col-6 col-xs-12">
                        <h1 className="black title title__small big text-capitalized">Nepal</h1>  
                    <h3 className="subtitle subtitle__small">2nd Floor - Pashupati Vision Complex,<br/> Kathmandu, Nepal</h3>
                    <br/>
                    {/* <p>
                        <span className="icons">
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                viewBox="0 0 512.006 512.006" style={{enableBackground:"new 0 0 512.006 512.006"}}>
                            <g>
                                <g>
                                    <g>
                                        <path d="M502.05,407.127l-56.761-37.844L394.83,335.65c-9.738-6.479-22.825-4.355-30.014,4.873l-31.223,40.139
                                            c-6.707,8.71-18.772,11.213-28.39,5.888c-21.186-11.785-46.239-22.881-101.517-78.23c-55.278-55.349-66.445-80.331-78.23-101.517
                                            c-5.325-9.618-2.822-21.683,5.888-28.389l40.139-31.223c9.227-7.188,11.352-20.275,4.873-30.014l-32.6-48.905L104.879,9.956
                                            C98.262,0.03,85.016-2.95,74.786,3.185L29.95,30.083C17.833,37.222,8.926,48.75,5.074,62.277
                                            C-7.187,106.98-9.659,205.593,148.381,363.633s256.644,155.56,301.347,143.298c13.527-3.851,25.055-12.758,32.194-24.876
                                            l26.898-44.835C514.956,426.989,511.976,413.744,502.05,407.127z"/>
                                        <path d="M291.309,79.447c82.842,0.092,149.977,67.226,150.069,150.069c0,4.875,3.952,8.828,8.828,8.828
                                            c4.875,0,8.828-3.952,8.828-8.828c-0.102-92.589-75.135-167.622-167.724-167.724c-4.875,0-8.828,3.952-8.828,8.828
                                            C282.481,75.494,286.433,79.447,291.309,79.447z"/>
                                        <path d="M291.309,132.412c53.603,0.063,97.04,43.501,97.103,97.103c0,4.875,3.952,8.828,8.828,8.828
                                            c4.875,0,8.828-3.952,8.828-8.828c-0.073-63.349-51.409-114.686-114.759-114.759c-4.875,0-8.828,3.952-8.828,8.828
                                            C282.481,128.46,286.433,132.412,291.309,132.412z"/>
                                        <path d="M291.309,185.378c24.365,0.029,44.109,19.773,44.138,44.138c0,4.875,3.952,8.828,8.828,8.828
                                            c4.875,0,8.828-3.952,8.828-8.828c-0.039-34.111-27.682-61.754-61.793-61.793c-4.875,0-8.828,3.952-8.828,8.828
                                            C282.481,181.426,286.433,185.378,291.309,185.378z"/>
                                    </g>
                                </g>
                            </g>
                            </svg>
                        </span>
                        <a href="" className="dg-link"
                                onMouseEnter={() => setCursor("pointer")}
                                onMouseLeave={() => setCursor("")}>+977-984000000</a></p>zz */}
                    <p style={{marginTop: -5}}>
                        <span className="icons" style={{paddingTop:6}}>     
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                viewBox="0 0 512.006 512.006" style={{enableBackground:"new 0 0 512.006 512.006"}}>
                            <g>
                                <g>
                                    <path d="M501.613,491.782c12.381,0,23.109-4.088,32.229-12.16L377.793,323.567c-3.744,2.681-7.373,5.288-10.801,7.767
                                        c-11.678,8.604-21.156,15.318-28.434,20.129c-7.277,4.822-16.959,9.737-29.045,14.755c-12.094,5.024-23.361,7.528-33.813,7.528
                                        h-0.306h-0.306c-10.453,0-21.72-2.503-33.813-7.528c-12.093-5.018-21.775-9.933-29.045-14.755
                                        c-7.277-4.811-16.75-11.524-28.434-20.129c-3.256-2.387-6.867-5.006-10.771-7.809L16.946,479.622
                                        c9.119,8.072,19.854,12.16,32.234,12.16H501.613z"/>
                                    <path d="M31.047,225.299C19.37,217.514,9.015,208.598,0,198.555V435.98l137.541-137.541
                                        C110.025,279.229,74.572,254.877,31.047,225.299z"/>
                                    <path d="M520.059,225.299c-41.865,28.336-77.447,52.73-106.75,73.195l137.486,137.492V198.555
                                        C541.98,208.396,531.736,217.306,520.059,225.299z"/>
                                    <path d="M501.613,59.013H49.181c-15.784,0-27.919,5.33-36.42,15.979C4.253,85.646,0.006,98.97,0.006,114.949
                                        c0,12.907,5.636,26.892,16.903,41.959c11.267,15.061,23.256,26.891,35.961,35.496c6.965,4.921,27.969,19.523,63.012,43.801
                                        c18.917,13.109,35.368,24.535,49.505,34.395c12.05,8.396,22.442,15.667,31.022,21.701c0.985,0.691,2.534,1.799,4.59,3.269
                                        c2.215,1.591,5.018,3.61,8.476,6.107c6.659,4.816,12.191,8.709,16.597,11.683c4.4,2.975,9.731,6.298,15.985,9.988
                                        c6.249,3.685,12.143,6.456,17.675,8.299c5.533,1.842,10.655,2.766,15.367,2.766h0.306h0.306c4.711,0,9.834-0.924,15.368-2.766
                                        c5.531-1.843,11.42-4.608,17.674-8.299c6.248-3.69,11.572-7.02,15.986-9.988c4.406-2.974,9.938-6.866,16.598-11.683
                                        c3.451-2.497,6.254-4.517,8.469-6.102c2.057-1.476,3.605-2.577,4.596-3.274c6.684-4.651,17.1-11.892,31.104-21.616
                                        c25.482-17.705,63.01-43.764,112.742-78.281c14.957-10.447,27.453-23.054,37.496-37.803c10.025-14.749,15.051-30.22,15.051-46.408
                                        c0-13.525-4.873-25.098-14.598-34.737C526.461,63.829,514.932,59.013,501.613,59.013z"/>
                                </g>
                            </g>
                            </svg>
                        </span>
                        <a href="mailto:career@digitalgurkha.com" className="dg-link"
                                onMouseEnter={() => setCursor("pointer")}
                                onMouseLeave={() => setCursor("")}>career@digitalgurkha.com</a></p><br/>
                    
                    </div>
                </div>
            </div>
        </section>
    </section>
    <footer>
        <div className="container">
            <div className="column col-12">
                <NavLink /><br/>
                <p className="foot-note">
                    &copy; 2020 DigitalGurkha. All rights Reserved.&nbsp;
                    <a href="" className="dg-link"
                                onMouseEnter={() => setCursor("pointer")}
                                onMouseLeave={() => setCursor("")}>Privacy policy</a> &nbsp;|&nbsp; 
                    <a href="" className="dg-link"
                                onMouseEnter={() => setCursor("pointer")}
                                onMouseLeave={() => setCursor("")}>Sitemap</a>
                </p>
            </div>
        </div>
        <div className="arrow">
            <img src="/images/arrow-green.png" alt=""/>
        </div>
        <div className="screen"></div>
    </footer>
    </>
    );
}
export default Footer;
