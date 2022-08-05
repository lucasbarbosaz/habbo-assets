import * as React from 'react';
import zoomOver from "../../assets/icons/icon_zoom_over_small.png"

const ZoomOverIcon = ({ ...props }) => {
    return (
        <img src={zoomOver} alt="ZoomOver" {...props} />
    );
}

export default ZoomOverIcon;