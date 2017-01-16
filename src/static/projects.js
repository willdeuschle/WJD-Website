import medium_simplifier_image from './images/medium_simplifier_image.png'
import blogio_image from './images/blogio_image.jpg'
import react_native_image from './images/react_native_image.png'
import fop_web_app_image from './images/fop_web_app_image.png'

const projectData = {
    blogio: {
        link: 'https://itunes.apple.com/us/app/blogio/id1193012119?mt=8',
        image: blogio_image,
        title: 'BlogIO',
        desc: 'IOS application to listen to Medium articles as podcasts.',
    },

    medium_simplifier_image: {
        link: 'https://willdeuschle.github.io/twig/dist/index.html',
        image: medium_simplifier_image,
        title: 'Medium Simplifier',
        desc: 'Elm application to summarize Medium articles.',
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
