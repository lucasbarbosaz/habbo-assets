import * as React from 'react';
import pet from "../../assets/icons/pets_small.gif"

const PetIcon = ({ ...props }) => {
    return (
        <img src={pet} alt="Online" {...props} />
    );
}

export default PetIcon;