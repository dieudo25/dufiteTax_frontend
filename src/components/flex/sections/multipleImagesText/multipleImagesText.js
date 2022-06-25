import React from "react";

import RichText from "../../../basic/richText"; 
import SSection from "./style/main";
import Image from "../../../basic/image/image"


const MultipleImagesText = ({
    data: {
        strapi_component,
        animatedText,
        images,
        style, 
        section, 
        container 
    }
}) => (
    <SSection
        id={ style && style.css_id}
        className={ `component ${strapi_component} ${style && style.css_classes }` }
        section={ section }
        container={ container }
    >
        <div className="section-container">
            <RichText 
                text={ animatedText.text }
                dataSal={ animatedText.animation_type.replaceAll('_', '-') }
                dataSalDuration="1000"
            />
            { images.map((animated_image) => (
                <Image
                    className={`multiple-img multiple-img-${animated_image.id}`}
                    image={ animated_image.Image.formats > 0 && animated_image.Image.formats !== null
                    ? 
                    animated_image.Image.formats.small || animated_image.Image.formats.medium
                    :
                    animated_image.Image
                    }
                    dataSal={ animated_image.animation_type.replaceAll('_', '-') }
                    dataSalDuration="1000"
                />
            )) }
        </div>
    </SSection>
)

export default MultipleImagesText;