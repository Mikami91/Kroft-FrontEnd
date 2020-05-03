import { drawerWidth, transition, container } from '../../themes/theme.js';

const SalesStyle = (theme) => ({
    container: {
        ...container,
        zIndex: "2",
        position: "relative",
        // paddingTop: "5vh",
        color: "#FFFFFF",
        // paddingBottom: "10px",
        height: '100vh'
    },
    wrapper: {
        position: 'relative',
        top: '0',
        height: '100vh'
    },
    mainPanel: {
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`
        },
        overflow: 'auto',
        position: 'relative',
        float: 'right',
        ...transition,
        maxHeight: '100%',
        width: '100%',
        overflowScrolling: 'touch'
    },
    content2: {
        backgroundImage: 'linear-gradient(to bottom, #0D1522 0%, #0b463b 100%);',
        marginTop: '70px',
        padding: '30px 15px',
        minHeight: 'calc(100vh - 123px)'
    },
    // container,
    map: {
        marginTop: '70px'
    },
    content: {
        widht: '100%',
        height: '100vh'
    }
});

export default SalesStyle;
