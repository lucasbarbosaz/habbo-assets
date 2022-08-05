import * as React from 'react';
import offline from "../../assets/icons/offline_icon.png"

const HotelOfflineIcon = ({ ...props }) => {
    return (
        <img src={offline} alt="Offline" {...props} />
    );
}

export default HotelOfflineIcon;