import * as React from 'react';
import diamonds from "../../assets/icons/diamonds.png"

const DiamondIcon = ({ ...props }) => {
    return (
        <img src={diamonds} alt="Diamonds" {...props} />
    );
}

export default DiamondIcon;