import {createContext} from 'react';
export const HomeContext = createContext();
export const HomeProvider = props => {

    const data = [{
        services:[
            {
                id: "website-development",
                name: "Website Development",
                nickname: "website",
                desc: "Website is the core of any business that wants to leverage the Digital Space. We help you build websites with great User Experience, Inbuilt SEO, Content services, and integrate tools and technologies which will help you scale your marketing.",
                brief: "A well-built website for any business is not only a means to represent the brand online but a medium through which the brand can connect to the audience, interact, and generate sales. We specialize in building applications that are tailored to your needs and provide ease of use to your user base.",
                banner: "/images/thumbnails/web-dev.jpg",
                images:[
                    {
                        url:"https://unsplash.it/1362",
                        alt: ""
                    },
                    {
                        url:"https://unsplash.it/1363",
                        alt: ""
                    },
                    {
                        url:"https://unsplash.it/1364",
                        alt: ""
                    },
                    {
                        url:"https://unsplash.it/1365",
                        alt: ""
                    },
                    {
                        url:"https://unsplash.it/1366",
                        alt: ""
                    }
                ],
                icon: "website.svg",
                testimonial: {
                    intro1: "Working with them",
                    intro2: "has been a ",
                    highlight: "Breeze",
                    title: "Excellent Work",
                    desc: `"The Digital Gurkha team delivered on our high expectation in terms of development quality, tight deadline and budget. Working with them has been a breeze. I would recommend them to anyone looking for a dedicated team for application development."`,
                    link: "https://"
                },
                process: [
                    {
                        title: "Accessing goals & requirements",
                        desc: "We begin the process by assessing how you want to represent your brand through the website. Our goal is to understand your business needs and potential user requirements in order to provide business value through the website. Here, we also explore your technical needs and constraints ( if there may be any)."
                    },
                    {
                        title: "Planning",
                        desc: "As your strategic partners, we device strategy for your current and future needs, workflow requirements, integrations while also respecting the budget and timeline to create a website that delivers value."
                    },
                    {
                        title: "Information Architecture, Design + Copywriting",
                        desc: "Scoping development appropriately from the get go, we are able to identify and handle the information architecture, content creation, website design and also your digital strategy. Since we provide end to end website development services, we drive a complete website solution customized to your needs."
                    },
                    {
                        title: "Front-End & Back-End Coding",
                        desc: "To serve our clients with the best website development solution, our teams are fluent in the whole range of modern website development languages, including  PHP, .Net, Java, HTML5, CSS and Javascript.\nWe practice both waterfall and agile methodology as per the convenience and preference of the clients. Every project is assigned with a dedicated technical Project Manager who ensures the project is delivered within scope, budget and time."
                    },
                    {
                        title: "QA",
                        desc: "Our team is ruthless in evaluating the site over 100 checkpoints to ensure the elimination of any bug or error before going live. We also get our clients involved before the site goes live to help us eradicate any anomaly on the website."
                    },
                    {
                        title: "CMS Training + Launch",
                        desc: "After the website is live, we prepare your team for handover. We walk you through the CMS and make sure everybody on the team is well informed and comfortable on how to and how not to use the site."
                    },
                ]
            },
            {
                id: "app-development",
                name: "App Development Services",
                nickname: "Mobile Application",
                desc: "We build Application using Hybrid App Development so that you save time and money while making sure that the journey of the customer is prioritized for Customer Engagement and Brand Loyalty while increasing revenue and sales.",
                brief: "Developing an application for your brand helps create an enhanced user experience, streamline operations, or even get a competitive edge over competitors. We use robust technology architecture and immaculate code that is engineered to deliver a seamless experience.",
                banner: "/images/thumbnails/app-dev.jpg",
                images:[
                    {
                        url:"https://unsplash.it/1362",
                        alt: ""
                    },
                    {
                        url:"https://unsplash.it/1363",
                        alt: ""
                    },
                    {
                        url:"https://unsplash.it/1364",
                        alt: ""
                    },
                    {
                        url:"https://unsplash.it/1365",
                        alt: ""
                    },
                    {
                        url:"https://unsplash.it/1366",
                        alt: ""
                    }
                ],
                icon: "creative.svg",
                testimonial: {
                    intro1: "Working with them",
                    intro2: "has been a ",
                    highlight: "Breeze",
                    title: "Excellent Work",
                    desc: `"The Digital Gurkha team delivered on our high expectation in terms of development quality, tight deadline and budget. Working with them has been a breeze. I would recommend them to anyone looking for a dedicated team for application development."`,
                    link: "https://"
                },
                process: [
                    {
                        title: "Accessing the technical requirements",
                        desc: "The first step in developing an app is understanding the purpose of the app and gathering information on how the user is intended to use the app. With this assessment, a strategy for the need and requirements of the app is deduced after which we ensure the technology is in place to deliver the requirements."
                    },
                    {
                        title: "Planning",
                        desc: "As per the requirement accessed, the features of the app as well as data integrations is planned. We ensure the UI/UX of the app is clean and user friendly. Depending on the client requirement, we may build one app or adjust the app for each operating system ( IOS and Android), or develop separately."
                    },
                    {
                        title: "Building a digital product",
                        desc: "We prefer to work in Agile sprints (Scrum methodology)  for two reasons. First, applications are required to be regularly updated and improved. Second, if you build every feature and permutation at once, chances are you’ll be late to market. This will enable us to develop a Minimum Viable Product (MVP) that includes core features your audience will use and love."
                    },
                    {
                        title: "QA + Launch",
                        desc: "QA begins when the development process is underway. This is when we use checkpoints to identify if there are any bugs in the application. We highly encourage our clients to be involved in the QA phase to help us identify any bugs before the app goes live. With QA accomplished, it’s time to launch."
                    },
                    {
                        title: "Maintenance, Iteration",
                        desc: "To enhance user experience in the app, the app should be in constant testing, iteration, and improvement, drawing upon user feedback. Hence ,testing, optimizing and updating as per the need of the customers should be an ongoing process."
                    },
                ]
            },
            {
                id: "content-strategy",
                name: "Content Strategy",
                nickname: "Creative Content",
                desc: "Do your customers read Blogs, or are they on social, or are on youtube? Wherever they are, we find them, build a strategy for Inbound Marketing so they will love what you do and never buy from your competitors.",
                brief: "A great content strategy not only helps bring qualified purchase but also helps drive conversion while providing a brand lift that continues generating value for years to come. We are committed to creating content that resonates with your target audience with well-crafted strategies and tracking the performance data to deliver content that works for your business.",
                banner: "/images/thumbnails/content-strategy.jpg",
                images:[
                    {
                        url:"https://unsplash.it/1362",
                        alt: ""
                    },
                    {
                        url:"https://unsplash.it/1363",
                        alt: ""
                    },
                    {
                        url:"https://unsplash.it/1364",
                        alt: ""
                    },
                    {
                        url:"https://unsplash.it/1365",
                        alt: ""
                    },
                    {
                        url:"https://unsplash.it/1366",
                        alt: ""
                    }
                ],
                icon: "googleadwords.svg",
                testimonial: {
                    intro1: "Working with them",
                    intro2: "has been a ",
                    highlight: "Breeze",
                    title: "Excellent Work",
                    desc: `"The Digital Gurkha team delivered on our high expectation in terms of development quality, tight deadline and budget. Working with them has been a breeze. I would recommend them to anyone looking for a dedicated team for application development."`,
                    link: "https://"
                },
                process: [
                    {
                        title: "Audience and Market Research",
                        desc: "The first step is to get to know your audience better - their interest, needs, and questions that they may be looking for answers for. With this, we also research on your target market and your competitors to understand what content has and has not worked in the past. One of the most important aspects of this process, however, is understanding the core value of the brand - how you work and what value the brand delivers to the target market."
                    },
                    {
                        title: "Ideation",
                        desc: "Once we understand your brand better, we conduct various brainstorming sessions to generate business-relevant ideas that will add value to your brand and your audience. This process involves constant feedback from you. After the concept is finalized, we then devise a full fetched customized content plan for every platform that the content is to be released in."
                    },
                    {
                        title: "Copywriting & Design",
                        desc: "The next step is the process is bringing the strategies and content plan to life. Our experienced copywriters and content writers apply your unique brand voice and perspective to create compelling pieces of content. The content team and the design team work together to ensure that the final product has outstanding visuals, grabs attention as well as provides value to the audience."
                    },
                    {
                        title: "Launch & Promotion",
                        desc: "In a very competitive digital space of today, launching the content does not simply reach the audience. Hence, we create strategies for online content promotion. The paid promotion has the benefit of not only expanding your reach but also gives tremendous insight into the target audience."
                    },
                    {
                        title: "Measurement + Iteration",
                        desc: "Measuring the success of any content is critical to generating future content and also to understand the target audience better. It is also equally important for a brand to be consistent in its content strategy in order to grow their audience. Each content is a launching pad to the next content."
                    },
                ]
            },
            {
                id: "build-saas",
                name: "SAAS Products",
                nickname: "SAAS Product",
                desc: "One of the most lucrative and scalable industries, we help you develop your SAAS Product with your customer in Mind and help you scale with our Digital Marketing Services. Agile Development for the agile company that you are.",
                brief: "The Software-as-a-Service (SaaS) distribution model allows the users to access applications hosted online, thus freeing them from possible installation, maintenance, or integration issues. The user data is stored in the cloud, users have the freedom to use any device to access their account or data. With SaaS products, updates and maintenance are faster to be implemented.",
                banner: "/images/thumbnails/saas.jpg",
                images:[
                    {
                        url:"https://unsplash.it/1362",
                        alt: ""
                    },
                    {
                        url:"https://unsplash.it/1363",
                        alt: ""
                    },
                    {
                        url:"https://unsplash.it/1364",
                        alt: ""
                    },
                    {
                        url:"https://unsplash.it/1365",
                        alt: ""
                    },
                    {
                        url:"https://unsplash.it/1366",
                        alt: ""
                    }
                ],
                icon: "buildsaas.svg",
                testimonial: {
                    intro1: "Working with them",
                    intro2: "has been a ",
                    highlight: "Breeze",
                    title: "Excellent Work",
                    desc: `"The Digital Gurkha team delivered on our high expectation in terms of development quality, tight deadline and budget. Working with them has been a breeze. I would recommend them to anyone looking for a dedicated team for application development."`,
                    link: "https://"
                },
                process: [
                    {
                        title: "Concept definition and functionality",
                        desc: "In order to accelerate your idea into reality, we begin with consulting to define the requirement and needs of the product. We analyze the needs of your target audience to help you shape an innovative product vision which is then translated into features, and roadmap features to releases, focusing on the priority and ROI."
                    },
                    {
                        title: "Conversion - driven UI/UX",
                        desc: "Retaining users on any SaaS platform is of utmost importance. User interface and experience play a crucial role in achieving that goal. Hence, our team develops user personas and scenarios to help deliver SaaS with an excellent user experience that is tailored to the potential user base."
                    },
                    {
                        title: "Architecture design and programming",
                        desc: "While Developing SaaS architecture, we prioritize high and easy scalability. We make sure that the SaaS solution withstands peak loads of customers and seamlessly adapts to the growth and expansion of your business. Our large pool of developers is on stand by to adapt to your project’s evolving needs."
                    },
                    {
                        title: "Testing and QA",
                        desc: "We pride ourselves in delivering stable, bug- free, and secure SaaS. Our intensive Quality Assurance (QA) approach comprises testing at all stages in the Software Development Life Cycle with regular code reviews, unit testing, integration testing, and the overall system testing."
                    },
                    {
                        title: "Evolution",
                        desc: "Using Agile methodology or Hybrid methods, we help your SaaS evolve. We combine the frequency of releases with high-quality code that is bug-free and stable. Ensuring seamless deployment and environmental integration, we make sure the updates are implemented smoothly."
                    },
                ]
            },
            {
                id: "search-engine-optimization",
                name: "Search Engine Optimization",
                nickname: "SEO",
                desc: "If you are on the top of the search Engines, you are almost of the top of your Marketing game. Help us bring you on top with Technical SEO, On Page SEO with Content Marketing services, build backlinks that drive traffic to your website.",
                brief: "Search Engine Optimization brings together context, content, and code to drive brand discovery and customer acquisition. Although SEO requires time to show results, it has enormous benefits in the long term and is more intent-based compared to other techniques.",
                banner: "/images/thumbnails/seo.jpg",
                images:[
                    {
                        url:"https://unsplash.it/1367",
                        alt: ""
                    },
                    {
                        url:"https://unsplash.it/1368",
                        alt: ""
                    },
                    {
                        url:"https://unsplash.it/1361",
                        alt: ""
                    },
                    {
                        url:"https://unsplash.it/1362",
                        alt: ""
                    },
                    {
                        url:"https://unsplash.it/1366",
                        alt: ""
                    }
                ],
                icon: "seo.svg",
                testimonial: {
                    intro1: "Working with them",
                    intro2: "has been a ",
                    highlight: "Breeze",
                    title: "Excellent Work",
                    desc: `"The Digital Gurkha team delivered on our high expectation in terms of development quality, tight deadline and budget. Working with them has been a breeze. I would recommend them to anyone looking for a dedicated team for application development."`,
                    link: "https://"
                },
                process: [
                    {
                        title: "Technical Optimization/ SEO Audit",
                        desc: "If we are building a website for you, we ensure that technical SEO is well integrated on your website from the get-go. We make sure to review the wireframes and mockups, redirects, and other optimization to optimize the website from the development phase itself. If we are working for SEO purposes, we will start by auditing your website. We access metrics such as keyword ranking, site and page structure, address code, backlink profile, and more. This sets a blueprint for work that needs to be done to make the website more search engine friendly."
                    },
                    {
                        title: "Keyword Research",
                        desc: "Keyword research helps us understand the underlying search intent of your brand’s targeted audience. It gives us invaluable data specifying the specific terms used by the potential customer and the volume of those terms. Answering questions such as - are the prospects just browsing for the product, or are they ready to buy? helps us shape the content and the website for maximum impact."
                    },
                    {
                        title: "Analytics Set-up",
                        desc: "We ensure the website analytics are properly set up. It is extremely important to track only relevant data and metrics. We typically use a range of tools to collect and visualize data. We use Google Search Console, SEMRush for search performance. We also integrate data from other platforms such as Facebook Ads Manager or Google Ads for a more holistic data collection approach."
                    },
                    {
                        title: "SEO Strategy",
                        desc: "SEO ranking can be bumped up quickly. However, those results do not last a long time and might even backfire to set the ranking even further back from its initial state. Hence, we only practice SEO techniques that are safe and will not flag our clients in any way. Our SEO strategy will help your brand set the stage for a search engine optimized future with progressive analytics over time."
                    },
                    {
                        title: "Reporting & Optimization",
                        desc: "Since Search Engine algorithms update regularly, it is important for our techniques to keep abreast with the changes as well. As per the analyzed data, we are always optimizing our techniques to help achieve the desired goal.SEO takes time, but progressive results that show brand lift or measurable impact can be tracked every month."
                    },
                ]
            },
            {
                id: "social-media-advertisement",
                name: "Social Media Advertisement",
                nickname: "Social Media Ads",
                desc: "You might be in industry but one thing is for sure, your customers are in Social media. We help you reach the right prospects by helping you create offers, testing Target Audiences, A/B testing Adverts, and building content that converts.",
                brief: "Social Media can become an engine for incredible growth when branding, content, and strategic distribution across the right channels work together. With our talented team of strategists, copywriters, designers, and paid media specialists, we specialize in creating engaging and click-worthy social experiences for your brand.",
                banner: "/images/thumbnails/social-media.jpg",
                images:[    
                    {
                        url:"/images/sms/hongshi.jpg",
                        alt: ""
                    },
                    {
                        url:"/images/sms/folliderm.png",
                        alt: ""
                    },
                    {
                        url:"/images/sms/iims.jpg",
                        alt: ""
                    },
                    {
                        url:"/images/sms/hardrock.jpg",
                        alt: ""
                    },
                    {
                        url:"/images/sms/vianet.jpg",
                        alt: ""
                    }
                ],
                icon: "socialmedia.svg",
                testimonial: {
                    intro1: "Working with them",
                    intro2: "has been a ",
                    highlight: "Breeze",
                    title: "Excellent Work",
                    desc: `"The Digital Gurkha team delivered on our high expectation in terms of development quality, tight deadline and budget. Working with them has been a breeze. I would recommend them to anyone looking for a dedicated team for application development."`,
                    link: "https://"
                },
                process: [
                    {
                        title: "Audience Research",
                        desc: "Before planning or strategizing, it is very important to know your target audience on a personal level. We understand not just potential customer’s demographics but also their attitude, lifestyle, and interests. We also identify platforms your competitors are using to interact with the audience and drive data from their interaction with their followers regarding what their followers like, and share."
                    },
                    {
                        title: "Platform recognition and Optimization",
                        desc: "Every social platform offers different advantages and different types of demographics. We ensure that your business is on the right platforms, and creating the right content for each channel. Our team will help you optimize your brand identity cohesively across your company pages on different platforms."
                    },
                    {
                        title: "Content Creation",
                        desc: "Creative content meets analytics. Our talented and creative copywriters and design experts will ensure that we deliver the best form and version of the content, from story-driven posts to compelling advertising. We combine creative content with insights to recommend the type of content your target audience will respond to and customize it as per the needs of every platform."
                    },
                    {
                        title: "Organic Social",
                        desc: "In order to leverage organic growth, our team creates a content calendar for each platform as per their unique audiences. We constantly overview analytics so as to integrate the data obtained from organic followers to paid campaigns."
                    },
                    {
                        title: "Paid Social",
                        desc: "Our paid media team recognizes the best content with precise audience targeting. We then periodically monitor audience behavior towards the ad while constantly optimizing it to ensure maximum ROI for the ad amount spent. Data received from the ad not only helps to understand the audience better but also helps in selecting ads for future campaigns."
                    },
                    {
                        title: "Measurement + Reporting",
                        desc: "We monitor all the campaigns and identify the campaign’s KPIs to measure the, against a campaign’s goals. Ongoing monitoring of social ads gives us a big-picture view regarding the target audience and their view towards the brand. Reporting is usually monthly and only the metrics that are relevant to the campaign’s goal are included. It helps us understand ways to improve targeting, generate more advocates, and increase brand visibility across platforms."
                    }
                ]
            }

        ]

    },
    {
      trustee: [
          {
              client_name: "prazada",
              logo: "prazada.jpg"
          },
          {
            client_name: "folliderm",
            logo: "folliderm.jpg"
        },
        {
            client_name: "genese",
            logo: "genese.jpg"
        },
        {
            client_name: "infocus",
            logo: "infocus.jpg"
        },
        {
            client_name: "hongshi",
            logo: "hongshi.jpg"
        },
        {
            client_name: "hard rock",
            logo: "hardrock.jpg"
        },
        {
            client_name: "vianet",
            logo: "vianet.jpg"
        },
        {
            client_name: "xpertspool",
            logo: "xpertspool.jpg"
        },
        {
            client_name: "iims",
            logo: "iims.jpg"
        }
      ]  
    },
    {
       testimonials: [
           {
               client_name: "John Doe",
               client_company: "Hongshi Cement",
               client_post: "CEO",
               testimonial: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
               title: "Excellent & Exceptional Result",
               case_study: "/project/hongshi-cement",
               client_img: "/images/clients/hongshi.jpg"
           },
            {
                client_name: "Janny Doe",
                client_company: "Hard Rock",
                client_post: "CEO",
                testimonial: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                title: "Excellent & Exceptional Result",
                case_study: "/project/hard-rock",
                client_img: "/images/clients/hardrock.jpg"
            },
            {
                client_name: "Josheph Doe",
                client_company: "Infocus",
                client_post: "CEO",
                testimonial: "The Digital Gurkha team delivered on our high expectation in terms of development quality, tight deadline, and budget. Working with them has been a breeze. I would recommend them to anyone looking for a dedicated team for application development.",
                title: "Working with them has been a breeze",
                case_study: "",
                client_img: "/images/clients/mykitchen.jpg"
            }
       ] 
    }];

    
    return(
        <HomeContext.Provider value={data}>
            {props.children}
        </HomeContext.Provider>
    );
}