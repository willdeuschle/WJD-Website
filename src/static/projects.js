import medium_simplifier_image from './images/medium_simplifier_image.png'
import blogio_image from './images/blogio_image.jpg'
import react_native_image from './images/react_native_image.png'
import fop_web_app_image from './images/fop_web_app_image.png'
import purplistsources_image from './images/purplistsources_image.png'
import open_source_image from './images/open_source_image.png'

const projectData = {
    purplist_sources: {
        link: 'http://www.purplistsources.com/',
        image: purplistsources_image,
        title: 'Purplist Sources',
        desc: 'Production web app and Chrome extension for saving, ' +
            'sharing, and discovering curated lists of articles.',
    },

    python_graphql_subscriptions: {
        link: 'https://github.com/willdeuschle/Python-GraphQL-Subscriptions',
        image: open_source_image,
        title: 'Python GraphQL Subscriptions',
        desc: 'Adds subscription support to GraphQL applications that ' +
            'use a Python backend. Unopinionated, but built to work nicely ' +
            'with Flask GraphQL Subscriptions Transport.',
        isOpenSource: true,
    },

    flask_graphql_subscriptions_transport: {
        link: 'https://github.com/willdeuschle/Flask-GraphQL-Subscriptions-Transport',
        image: open_source_image,
        title: 'Flask GraphQL Subscriptions Transport',
        desc: 'Subscriptions transport for GraphQL applications that use ' +
            'the Flask framework.',
        isOpenSource: true,
    },

    blogio: {
        link: 'https://itunes.apple.com/us/app/blogio/id1193012119?mt=8',
        image: blogio_image,
        title: 'BlogIO',
        desc: 'iOS application for listening to Medium articles as podcasts.',
    },

    medium_simplifier_image: {
        link: 'https://willdeuschle.github.io/twig/dist/index.html',
        image: medium_simplifier_image,
        title: 'Medium Simplifier',
        desc: 'Elm application for summarizing Medium articles.',
    },

    react_native_template: {
        link: 'https://github.com/willdeuschle/react-native-template',
        image: react_native_image,
        title: 'React Native Starter',
        desc: 'Get React Native apps running quickly from this starter template.',
    },

    fop_web_app: {
        link: 'http://foptrips.fas.harvard.edu/',
        image: fop_web_app_image,
        title: 'Harvard FOP Web App',
        desc: 'My first ever bare-bones web app, this serves leaders of Harvard\'s ' +
            'First-Year Outdoor Program (FOP).'
    },
}

export default projectData
