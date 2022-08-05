import * as React from 'react';
import close from "../../assets/icons/close_small.png"

const CloseButton = ({ ...props }) => {
    return (
        <img src={close} alt="Close" {...props} />
    );
}

export default CloseButton;