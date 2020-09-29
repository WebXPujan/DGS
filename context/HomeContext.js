import {createContext} from 'react';
export const HomeContext = createContext();
export const HomeProvider = props => {

    const data = [{
        services:[
            {
                id: "website-development",
                name: "Website Development",
                desc: "Website is the core of any business that wants to leverage the Digital Space. We help you build websites with great User Experience, Inbuilt SEO, Content services, and integrate tools and technologies which will help you scale your marketing.",
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
                desc: "We build Application using Hybrid App Development so that you save time and money while making sure that the journey of the customer is prioritized for Customer Engagement and Brand Loyalty while increasing revenue and sales.",
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
                desc: "Do your customers read Blogs, or are they on social, or are on youtube? Wherever they are, we find them, build a strategy for Inbound Marketing so they will love what you do and never buy from your competitors.",
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
                icon: "googleadwords.svg"
            },
            {
                id: "build-saas",
                name: "SAAS Products",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
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
                icon: "buildsaas.svg"
            },
            {
                id: "search-engine-optimization",
                name: "Search Engine Optimization",
                desc: "If you are on the top of the search Engines, you are almost of the top of your Marketing game. Help us bring you on top with Technical SEO, On Page SEO with Content Marketing services, build backlinks that drive traffic to your website.",
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
                icon: "seo.svg"
            },
            {
                id: "social-media-advertisement",
                name: "Social Media Advertisement",
                desc: "You might be in industry but one thing is for sure, your customers are in Social media. We help you reach the right prospects by helping you create offers, testing Target Audiences, A/B testing Adverts, and building content that converts.",
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
            client_name: "remax",
            logo: "remax.jpg"
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
               client_img: "https://unsplash.it/1366"
           },
            {
                client_name: "Janny Doe",
                client_company: "Hard Rock",
                client_post: "CEO",
                testimonial: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                title: "Excellent & Exceptional Result",
                case_study: "/project/hard-rock",
                client_img: "https://unsplash.it/1367"
            },
            {
                client_name: "Josheph Doe",
                client_company: "Infocus",
                client_post: "CEO",
                testimonial: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                title: "Excellent & Exceptional Result",
                case_study: "/project/infocus",
                client_img: "https://unsplash.it/1368"
            }
       ] 
    }];

    
    return(
        <HomeContext.Provider value={data}>
            {props.children}
        </HomeContext.Provider>
    );
}