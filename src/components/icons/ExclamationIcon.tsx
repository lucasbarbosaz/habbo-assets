import * as React from 'react';
import exclamation from "../../assets/icons/exclamation_smal.png"

const ExclamationIcon = ({ ...props }) => {
    return (
        <img src={exclamation} alt="Exclamation" {...props} />
    );
}

export default ExclamationIcon;