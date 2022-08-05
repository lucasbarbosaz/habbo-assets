import * as React from 'react';
import duckets from "../../assets/icons/duckets.png"

const DucketIcon = ({ ...props }) => {
    return (
        <img src={duckets} alt="Duckets" {...props} />
    );
}

export default DucketIcon;