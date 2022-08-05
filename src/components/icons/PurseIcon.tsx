import * as React from 'react';
import purse from "../../assets/icons/purse_small.gif"

const PurseIcon = ({ ...props }) => {
    return (
        <img src={purse} alt="Purse" {...props} />
    );
}

export default PurseIcon;