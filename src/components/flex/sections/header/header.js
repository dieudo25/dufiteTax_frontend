import React from "react";

import Image from "../../../basic/image/image";
import capitalizeFirstChar from "../../../../utils/string";
import SSection from "./style/main";

const Header = ({ data: { strapi_component, text, image, style } }) => (
    <SSection
        id={ style && style.css_id }
        className={ `component ${strapi_component} ${style && style.css_classes }` }
    >
        <Image image={ image } />
        <div className="header-text">
            <h1>{ capitalizeFirstChar(text) }</h1>
        </div>
    </SSection>
)

export default Header;