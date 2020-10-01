import {createContext} from 'react';
export const HomeContext = createContext();
export const HomeProvider = props => {

    const data = [{
        services: []
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