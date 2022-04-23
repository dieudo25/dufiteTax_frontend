import React from "react";

const Image = ({ image: { url, width, height, alternativeText }, dataSal, dataSalDuration, className }) => (
    <div 
        className={ "img-container " + className} 
        data-sal={ dataSal }
        data-sal-duration={ dataSalDuration }
    >
        <img
            src={ url }
            alt={ alternativeText }
            draggable="false"
            height={ height }
            width={ width }
        />
    </div>
)

export default Image;