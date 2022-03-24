import tw, { styled } from "twin.macro";

const SCard = styled.div`
    ${ tw`
        
    ` }

    /* BG COLOR */
    ${ ({ bg_color }) => bg_color
        ?
        `
            background-color: ${ bg_color };

        `
        :
        tw`bg-white hover:bg-gray-400`
    }

    /* BORDER COLOR */
    ${ ({ border_color }) => border_color
        ?
        `
            border: 2px solid ${ border_color };
        `
        :
        tw`bg-black hover:bg-gray-400`
    }

    /* TEXT COLOR */
    ${ ({ text_color }) => text_color
        ?
        `
            color: ${ text_color };
        `
        :
        tw`text-black`
    }

    .img-container {
        img {
            ${ tw`
                object-contain
            ` }
        }
    }

    .rich-text {
        p {
            ${ tw`
                text-white
            ` }
            a {
                ${ tw`
                    no-underline
                ` }
            }
        }
    }

    &:where(.home-slider-services-item) {
        ${ tw`
            border-t-0 border-r-0 border-l-0
        ` }
    }

    &:where(.about-values) {
        .img-container {
            ${ tw`
                w-[fit-content] h-[64px]  
            ` }
        }
    }
`

export default SCard;