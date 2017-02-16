import reactLogo from './images/react-logo.svg'
import reduxLogo from './images/redux-logo.svg'
import elmLogo from './images/elm-logo.png'
import jsLogo from './images/js-logo.png'
import pythonLogo from './images/python-logo.jpg'
import djangoLogo from './images/django-logo.png'
import jestLogo from './images/jest-logo.png'
import tastypieLogo from './images/tastypie-logo.png'
import graphqlLogo from './images/graphqlLogo.png'

const technologies = {
    python: {name: 'Python', img: pythonLogo, desc: 'Language used at work ' +
            'and in side projects for backend-related functionality - it is ' +
            'historically my most extensively used language.'},
    javascript: {name: 'JavaScript', img: jsLogo, desc: 'My bread and ' +
        'butter. I mostly develop using some variant of JS, both at work ' +
        'and in my side projects. ES6 preferred.'},
    elm: {name: 'Elm', img: elmLogo, desc: 'Purely functional language for ' +
        'web apps. I have experience building projects in Elm and am very ' +
        'interested in the opportunity it affords for stable and ' +
        'efficient web development.'},
    react: {name: 'React', img: reactLogo, desc: 'Preferred frontend ' +
        'framework, used extensively at work and in most of my user-facing ' +
        'side projects (including this one). Very comfortable integrating ' +
        'with Redux, Jest, and other tools.'},
    react_native: {name: 'React Native', img: reactLogo, desc: 'Most of my ' +
        'mobile development is done with React Native, porting over ' +
        'functionality from C++ or Swift when necessary. Excellent for ' +
        ' rapid development and cross-platform purposes.'},
    django: {name: 'Django', img: djangoLogo, desc: 'Python web framework ' +
        'used at work. Very comfortable with the ins-and-outs, drawbacks ' +
        'and benefits.'},
    redux: {name: 'Redux', img: reduxLogo, desc: 'My preferred state ' +
        'management library, particulary when used in conjunction with ' +
        'React. Extensive experience using this in a production ' +
        'environment along with Immutable and Reselect.'},
    graphql: {name: 'GraphQL', img: graphqlLogo, desc: 'An alternative to ' +
        'REST, GraphQL is a query language I am very fond of. I have found ' +
        'it to be a useful and powerful tool for maintaining ' +
        'consistency of data access between different platforms.'},
    jest: {name: 'Jest', img: jestLogo, desc: 'I believe very strongly in ' +
        'the benefits of TDD, and jest is my preferred tool for testing ' +
        'frontend code.'},
    tastypie: {name: 'Tastypie', img: tastypieLogo, desc: 'Thorough ' +
        'experience building and using REST APIs in a production ' +
        'environment using Tastypie.'},
}

export default technologies
