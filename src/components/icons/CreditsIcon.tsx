import * as React from 'react';
import credits from "../../assets/icons/credits.gif"

const CreditsIcon = ({ ...props }) => {
    return (
        <img src={credits} alt="Credits" {...props} />
    );
}

export default CreditsIcon;