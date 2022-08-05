import * as React from 'react';
import zoomOff from "../../assets/icons/icon_zoom_off_small.png"

const ZoomOffIcon = ({ ...props }) => {
    return (
        <img src={zoomOff} alt="ZoomOFF" {...props} />
    );
}

export default ZoomOffIcon;