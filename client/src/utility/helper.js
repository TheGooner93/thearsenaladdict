import ReactGA from 'react-ga';

const initializeGA = () => {
    ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
};

const registerGAEvent = (event) => {
    const { 
        category = '',
        action = ''
    } = event;

    ReactGA.event({
        category,
        action
    });
};

export default {
    initializeGA,
    registerGAEvent
};