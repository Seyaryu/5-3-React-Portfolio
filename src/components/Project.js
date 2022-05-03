import React from 'react';

const projects = [
    {
        title: "SlitherIn",
        image: "/images/img1.PNG",
        url: "https://slither-in.herokuapp.com/"
    },
    {
        title: "National Parks Project",
        image: "/images/img2.PNG",
        url: "https://seyaryu.github.io/National-Park-Project/"
    },
    {
        title: "Work Day Scheduler",
        image: "/images/img3.PNG",
        url: "https://seyaryu.github.io/1-18_Homework/"
    },
    {
        title: "Weather Dashboard",
        image: "/images/img4.PNG",
        url: "https://seyaryu.github.io/1-25-Homework/"
    },
    {   
        title: "Dispatch Log (Work in progress)",
        image: "/images/img5.PNG",
        url: "https://seyaryu.github.io/Dispatch_Log/"
    },
    {
        title: "Text Editor (Work in progress)",
        image: "",
        url: "https://dashboard.heroku.com/apps/pwa-text-editor-4-26"
    }
]

function Project() {
    var allCards = [<h2><a id="projects">Projects</a></h2>]
        for(let i=0; i< projects.length; i++) {
            const newCard = 
            <div className="card">
                <a href={projects[i].url}>
                    
                    <h3>{projects[i].title}</h3>
                    <img src={process.env.PUBLIC_URL + projects[i].image} alt={projects[i].title}></img>
                </a>
            </div>
            allCards.push(newCard);
        }
    return allCards;
}

export default Project;