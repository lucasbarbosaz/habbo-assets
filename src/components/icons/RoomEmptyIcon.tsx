import * as React from 'react';
import roomEmpty from "../../assets/icons/roomempty.gif"

const RoomEmptyIcon = ({ ...props }) => {
    return (
        <img src={roomEmpty} alt="Empty" {...props} />
    );
}

export default RoomEmptyIcon;