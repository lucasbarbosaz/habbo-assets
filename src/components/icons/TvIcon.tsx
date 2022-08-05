import * as React from 'react';
import tv from "../../assets/icons/tv_small.png"

const TvIcon = ({ ...props }) => {
    return (
        <img src={tv} alt="TV" {...props} />
    );
}

export default TvIcon;