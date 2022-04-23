import React from "react";

import RichText from "../../../basic/richText";
import Button from "../../../basic/button/button";
import SSection from "./style/main";

const RichTextButton = ({ 
    data: { 
        strapi_component, 
        text, 
        button, 
        first_element, 
        style, 
        animation_text, 
        animation_button, 
        section,
        container,
        text_color
    } 
}) => (
    <SSection
        id={ style && style.css_id }
        className={ `component ${strapi_component} ${style && style.css_classes }` }
        first_element={ first_element }
        section={ section }
        container={ container }
        text_color={ text_color }
    >
        <div className="section-container">
            <RichText 
                dataSal={ 
                    animation_text 
                    && animation_text.type 
                    && animation_text.type.replaceAll('_', '-') 
                }
                dataSalDuration="800"
                text={ text }
            />

            { button && 
                <Button 
                    button={ button }
                    dataSal={ 
                        animation_button
                        && animation_button.type 
                        && animation_button.type.replaceAll('_', '-') 
                    }
                    dataSalDuration="800"
                />
            }
        </div>
        
    </SSection>
)

export default RichTextButton;