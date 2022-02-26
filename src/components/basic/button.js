import React from "react";
import tw, { styled } from "twin.macro"
import { Link } from "gatsby"

const SButton = styled(Link)`
    ${ tw`
        inline-grid text-center font-bold no-underline uppercase transition ease-in-out duration-500
        p-3
        hover:transition ease-in-out
    `}

    ${ ({ bg_color, bg_color_hover }) => bg_color
        ?
        `
            background-color: ${ bg_color };
            &:hover {
                background-color: ${ bg_color_hover };
            }
        `
        :
        tw`bg-black hover:bg-gray-400`
    }

    ${ ({ border_color, border_color_hover }) => border_color
        ?
        `
            border: 2px solid ${ border_color };
            &:hover {
                border: 2px solid ${ border_color_hover }
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

const Button = ({ button: { text, bg_color, bg_color_hover, border_color, border_color_hover, text_color, text_color_hover, page }, dataSal, dataSalDuration}) => (
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
