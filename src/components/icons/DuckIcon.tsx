import * as React from 'react';
import duck from "../../assets/icons/duck.png"

const DuckIcon = ({ ...props }) => {
    return (
        <img src={duck} alt="Duck" {...props} />
    );
}

export default DuckIcon;