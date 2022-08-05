import * as React from 'react';
import online from "../../assets/icons/online_icon.png"

const HotelOnlineIcon = ({ ...props }) => {
    return (
        <img src={online} alt="Online" {...props} />
    );
}

export default HotelOnlineIcon;