import React from 'react';
// @material-ui/core components
import Popover from '@material-ui/core/Popover';

export default function SimplePopover(props) {

    const { state, handleClose, content } = props;

    return (
        <Popover
            id="simple-popover"
            open={state.open}
            anchorEl={state.anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
        >
            {content}
        </Popover>
    );
}
