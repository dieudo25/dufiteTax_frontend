import React from "react";

import RichText from "../../../basic/richText";
import Image from "../../../basic/image/image";
import SSection from "./style/main";

const RichText2Image = ({ 
    data: 
        { 
            strapi_component, 
            text, 
            image_1, 
            image_2, 
            first_element, 
            second_element, 
            style, 
            animation_image_1, 
            animation_image_2 
        } 
}) => (
    
    <SSection
        id={ style && style.css_id }
        className={ `component ${strapi_component} ${style && style.css_classes }` }
        first_element= { first_element }
        second_element= { second_element }
    >
        <RichText text={ text } className='text'/>
        <Image 
            image={image_1}
            dataSal={ animation_image_1 && animation_image_1.type.replaceAll('_', '-') }
            dataSalDuration="800"
            className = 'image-1'
        />
        <Image 
            image={image_2}
            dataSal={ animation_image_2 && animation_image_2.type.replaceAll('_', '-') }
            dataSalDuration="800"
            className= 'image-2'
        />

        
    </SSection>
)

export default RichText2Image;