import React from "react";

import Image from "../../../basic/image/image";
import RichText from "../../../basic/richText";
import SSection from "./style/main";


const BgImageText = ({ 
    data: { 
        strapi_component, 
        image, 
        is_full_width, 
        text, 
        text_position, 
        text_animation, 
        style 
    } 
}) => (
    <SSection
        id={ style && style.css_id }
        className={ `component ${strapi_component} ${style && style.css_classes }` }
        is_full_width={ is_full_width }
        text_position={ text_position }
    >
        <Image
            className="bg-img"
            image={ image.formats > 0 && image.formats !== null
            ? 
            image.formats.small || image.formats.medium
            :
            image
            }
        />
        <RichText 
            text={ text }
            dataSal={ text_animation && text_animation.type.replaceAll('_', '-') }
            dataSalDuration="800"
        />
    </SSection>
)

export default BgImageText;