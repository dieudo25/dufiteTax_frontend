import React from "react";
import tw, { styled } from "twin.macro"
import { Link } from "gatsby"
import { FaUser } from 'react-icons/fa';

const SExternalButton = styled(Link)`
    ${ tw`
        flex items-center font-bold no-underline uppercase transition ease-in-out duration-500 p-3 gap-2
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

    svg {
        ${ tw`
            text-[20px]
        ` }
    }
`

const ExternalButton = ({ button: { text, bg_color, bg_color_hover, border_color, border_color_hover, text_color, text_color_hover, link }, dataSal, dataSalDuration, icon}) => (
    <div 
        className="btn-container"
        data-sal={dataSal}
        data-sal-duration={dataSalDuration}
    >
        {console.log(text)}
        {
            <SExternalButton
                href={ link } 
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
