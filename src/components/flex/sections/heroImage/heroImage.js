import React from "react";

import Image from "../../../basic/image/image";
import RichText from "../../../basic/richText";
import Anchor from "../../../basic/anchor/anchor";
import SSection from "./style/main";

const HeroImage = ({ data: { strapi_component, text, image, style, animation, anchor_down } }) => (
    <SSection 
        id={ style && style.css_id }
        className={ `component ${strapi_component} ${style && style.css_classes }` }
    >
        <Image image={ image } className="hero-image"/>
        <RichText 
            dataSal={ animation && animation.type.replaceAll('_', '-') }
            dataSalDuration="800"
            text={ text }
        />

        { anchor_down && 
            <Anchor 
                anchor={ anchor_down } 
                position="bottom" 
                className="anchor-home-section" 
            /> 
        }

    </SSection>
)

export default HeroImage;