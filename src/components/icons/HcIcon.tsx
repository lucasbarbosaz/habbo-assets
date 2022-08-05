import * as React from 'react';
import hc from "../../assets/icons/hc_small.png"

const HcIcon = ({ ...props }) => {
    return (
        <img src={hc} alt="HC" {...props} />
    );
}

export default HcIcon;