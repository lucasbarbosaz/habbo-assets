import * as React from 'react';
import seasonal from "../../assets/icons/seasonal.png"

const SeasonalIcon = ({ ...props }) => {
    return (
        <img src={seasonal} alt="Seasonal" {...props} />
    );
}

export default SeasonalIcon;