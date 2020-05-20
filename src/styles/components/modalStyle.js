// Theme
import { theme, primaryColor } from '../../themes/theme.js';

const modalStyle = {
    modal: {
        borderRadius: "6px"
    },
    modalHeader: {
        backgroundColor: primaryColor,
        color: "white",
        borderBottom: "none",
        padding: theme.spacing(2),
        minHeight: "16.43px"
    },
    modalTitle: {
        margin: "0",
        lineHeight: "1.42857143"
    },
    modalCloseButton: {
        // color: "#999999",
        // marginTop: "-12px",
        WebkitAppearance: "none",
        padding: "0",
        cursor: "pointer",
        background: "0 0",
        border: "0",
        fontSize: "inherit",
        opacity: ".9",
        textShadow: "none",
        fontWeight: "700",
        lineHeight: "1",
        float: "right"
    },
    modalClose: {
        width: "24px",
        height: "24px",
        // marginTop: 5,
    },
    modalBody: {
        paddingTop: "24px",
        paddingRight: "24px",
        paddingBottom: "16px",
        paddingLeft: "24px",
        position: "relative"
    },
    modalFooter: {
        padding: "15px",
        textAlign: "right",
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        margin: "0"
    },
    modalFooterCenter: {
        marginLeft: "auto",
        marginRight: "auto"
    }
};

export default modalStyle;
