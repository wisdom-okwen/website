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
        description: "News page that helps 800+ students in the department get easy access to information about events/conferences/activities.",
        built_with: ['Angular, ', 'Python, ', 'FastAPI, ', 'SQLAlchemy'],
        deployed: true,
        deployment_type: deployment_types.website
    },
    {
        id: 3,
        title: "Contageon Simulation",
        url: "https://github.com/wisdom-okwen/contageon-simulation",
        description: "A simulation of how epdemics propagate within a region from first contraction until recovery.",
        built_with: ['Python'],
        deployed: false,
        deployment_type: deployment_types.undeployed
    },
    {
        id: 4,
        title: "Ping Pong Game",
        url: "",
        description: "A tabel tennis game with 2-player controls with each player taking turns to serve.",
        built_with: ['Python, ', 'Pygame'],
        deployed: false,
        deployment_type: deployment_types.website
    },
    {
        id: 5,
        title: "My Fun App",
        url: "https://github.com/wisdom-okwen/My-Fun",
        description: "A fullstack app for people to share their experiences about their trips/hikes. AI integrated to recommend places to visit.",
        built_with: ['FastAPI, ', 'React, ', 'PostgreSQL, ', 'SQLAlchemy'],
        media_type: 'video',
        deployed: false,
        deployment_type: deployment_types.website
    },
    {
        id: 6,
        title: "Project Management App",
        url: "",
        description: "A fullstack app for organizing, setting budgets and developing metrics for projects.",
        built_with: ['React, ', 'GraphQL, ', 'Express, ', 'MongoDB'],
        media_type: 'video',
        deployed: false,
        deployment_type: deployment_types.youtube
    },
]

export default projects