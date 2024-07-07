const deployment_types = {
    youtube: 'Youtube',
    website: 'Website',
    undeployed: 'Not deployed'
}

const projects = [
    {
        id: 1,
        title: "Housing Price Predictor",
        url: "https://github.com/wisdom-okwen/ml-california-housing/blob/main/california_housing.ipynb",
        description: "An ML Model that predicts the price of a house in California based on location, size, number of rooms, age and other factors ",
        built_with: ['ScikitLearn, ', 'Pandas, ', 'Matplotlib '],
        deployed: false,
        deployment_type: deployment_types.youtube
    },
    {
        id: 2,
        title: "UNC CSXL Website",
        url: "https://final-team-c2-comp590-140-24sp-evanesce.apps.unc.edu/announcements",
        description: "News page that helps 800+ students in the department get easy access to information about events/conferences/activities",
        built_with: ['Angular, ', 'Python, ', 'FastAPI, ', 'SQLAlchemy'],
        deployed: true,
        deployment_type: deployment_types.website
    },
    {
        id: 3,
        title: "Contageon Simulation",
        url: "https://github.com/wisdom-okwen/contageon-simulation",
        description: "A simulation of how epdemics propagate within a region from first contraction until recovery",
        built_with: ['Python'],
        deployed: false,
        deployment_type: deployment_types.undeployed
    },
    {
        id: 4,
        title: "Ping Pong Game",
        url: "",
        description: "A very good project that can lead to great things in life asd thweojowsdf aweohwoi waoihnjweof wfo iqa wefrwfew ",
        built_with: ['React, '],
        deployed: false,
        deployment_type: deployment_types.website
    },
    {
        id: 5,
        title: "Contageon Simulation",
        url: "",
        description: "A very good project",
        built_with: ['Express, ', 'React ', 'MongoDB '],
        media_type: 'video',
        deployed: false,
        deployment_type: deployment_types.website
    },
    {
        id: 6,
        title: "Contageon Simulation",
        url: "",
        description: "A very good project",
        built_with: ['React, '],
        media_type: 'video',
        deployed: false,
        deployment_type: deployment_types.youtube
    },
    {
        id: 7,
        title: "Contageon Simulation",
        url: "",
        description: "A very good project",
        built_with: ['React, '],
        deployed:false,
        deployment_type: deployment_types.undeployed
    }
]

export default projects