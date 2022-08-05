import * as React from 'react';
import roomFull from "../../assets/icons/roomfull.gif"

const RoomFullIcon = ({ ...props }) => {
    return (
        <img src={roomFull} alt="Empty" {...props} />
    );
}

export default RoomFullIcon;