import React from "react";
import SButton from "./style/main";

const Button = ({ 
    button: { 
        text,
        bg_color, 
        bg_color_hover, 
        border_color, 
        border_color_hover, 
        text_color, 
        text_color_hover, 
        page 
    }, 
    dataSal, 
    dataSalDuration
}) => (
    <div 
        className="btn-container"
        data-sal={dataSal}
        data-sal-duration={dataSalDuration}
    >
        {
            <SButton
                to={ page && page.slug !== 'accueil' ? `/${page.slug}` : '/' } 
                className="btn"
                bg_color={ bg_color }
                border_color_hover={ border_color_hover }
                border_color={ border_color }
                bg_color_hover={ bg_color_hover }
                text_color={ text_color }
                text_color_hover={ text_color_hover }
            >
                { text }
            </SButton>
        }
    </div>
)

export default Button;
