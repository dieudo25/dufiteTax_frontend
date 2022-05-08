import React from "react";

import RichText from "../../../basic/richText";
import SSection from "./style/main";

const Paragraph = ({ data: { strapi_component, text, color, style } }) => (
    <SSection
        id={ style && style.css_id }
        className={ `component ${strapi_component} ${style && style.css_classes }` }
        color={ color }
    >
        <RichText text={ text } />
    </SSection>
)

export default Paragraph;