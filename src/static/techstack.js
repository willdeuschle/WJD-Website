import reactLogo from './images/react-logo.svg'
import reduxLogo from './images/redux-logo.svg'

const technologies = {
    python: {name: 'Python', img: null},
    javascript: {name: 'Javascript', img: null},
    elm: {name: 'Elm', img: null},
    react: {name: 'React', img: reactLogo, desc: 'Preferred frontend ' +
        'framework, used extensively at work and in most of my user-facing ' +
        'projects (including this one). Very comfortable integrating with ' +
        'Redux and other tools.'},
    react_native: {name: 'React Native', img: reactLogo, desc: 'Most of my ' +
        'mobile development is done with React Native, porting over ' +
        'functionality from C++ or Swift when necessary. Excellent for ' +
        ' rapid development and cross-platform purposes.'},
    django: {name: 'Django', img: null},
    redux: {name: 'Redux', img: reduxLogo, desc: 'My preferred state ' +
        'management library, particulary when used in conjunction with ' +
        'React. Extensive experience using this in a production ' +
        'environment along with Immutable and Reselect.'},
    tastypie: {name: 'Tastypie', img: null},
}

export default technologies
