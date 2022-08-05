import * as React from 'react';
import roomFell from "../../assets/icons/roomfell.gif"

const RoomFellIcon = ({ ...props }) => {
    return (
        <img src={roomFell} alt="Fell" {...props} />
    );
}

export default RoomFellIcon;