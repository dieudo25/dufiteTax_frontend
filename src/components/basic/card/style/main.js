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

    /* className -  home-slider-services-item */
    ${ ({ className }) => className.includes('home-slider-services-item') && tw`
        border-t-0 border-r-0 border-l-0
    ` }

    .img-container {

        ${ ({ className }) => className.includes('about-values') && tw`
            w-[fit-content] h-[64px]  
        ` }
        
        img {
            ${ tw`
                object-contain
            ` }
        }
    }

    .rich-text {
        p {
            a {
                ${ tw`
                    no-underline
                ` }
            }
        }
    }
`

export default SCard;