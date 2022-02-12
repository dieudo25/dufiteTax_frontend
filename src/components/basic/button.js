import React from "react";
import tw, { styled } from "twin.macro"
import { Link } from "gatsby"

const SButton = styled(Link)`
    ${ tw`
        inline-grid text-center font-bold no-underline transition ease-in-out duration-500
        p-3
        hover:transition ease-in-out
    `}

    ${ ({ color, color_hover }) => color
        ?
        `
            background-color: ${ color };
            &:hover {
                background-color: ${ color_hover };
                border: 2px solid ${ color }
            }
        `
        :
        tw`bg-black hover:bg-gray-400`
    }

    ${ ({ text_color, text_color_hover }) => text_color
        ?
        `
            color: ${ text_color };
            &:hover {
                color: ${ text_color_hover };
            }
        `
        :
        tw`text-black hover:text-gray-400`
    }
`

const Button = ({ button: { text, color, color_hover, text_color, text_color_hover, page }, dataSal, dataSalDuration}) => (
    <div 
        className="btn-container"
        data-sal={dataSal}
        data-sal-duration={dataSalDuration}
    >
        {console.log(text)}
        {<SButton
            to={page && page.slug !== 'accueil' ? `/${page.slug}` : '/' } 
            className="btn"
            color={ color }
            color_hover={ color_hover }
            text_color={ text_color }
            text_color_hover={ text_color_hover }
        >
            { text }
        </SButton>}
    </div>
)
export default Button;
