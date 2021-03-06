import tw, { styled } from "twin.macro"

const SExternalButton = styled.a`
    ${ tw`
        flex items-center font-bold no-underline uppercase transition ease-in-out duration-500 p-3 gap-2
        hover:transition hover:ease-in-out
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

export default SExternalButton;