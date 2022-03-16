import React from "react";
import { FaUser } from 'react-icons/fa';

import SExternalButton from "./style/main";

const ExternalButton = ({ button: { text, bg_color, bg_color_hover, border_color, border_color_hover, text_color, text_color_hover, link }, dataSal, dataSalDuration, icon}) => (
    <div 
        className="btn-container"
        data-sal={dataSal}
        data-sal-duration={dataSalDuration}
    >
        {
            <SExternalButton
                href={ link } 
                target="_blank"
                className="btn"
                bg_color={ bg_color }
                border_color_hover={ border_color_hover }
                border_color={ border_color }
                bg_color_hover={ bg_color_hover }
                text_color={ text_color }
                text_color_hover={ text_color_hover }
            >
                { text }
                { icon && icon === "FaUser" && <FaUser /> }
            </SExternalButton>
        }
    </div>
)
export default ExternalButton;
