import * as React from 'react';
import vip from "../../assets/icons/vip_small.png"

const VipIcon = ({ ...props }) => {
    return (
        <img src={vip} alt="VIP" {...props} />
    );
}

export default VipIcon;