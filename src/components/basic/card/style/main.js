import tw, { styled } from "twin.macro";

const SCard = styled.div`
    ${ tw`
        
    ` }

    ${ ({ bg_color }) => bg_color
        ?
        `
            background-color: ${ bg_color };

        `
        :
        tw`bg-white hover:bg-gray-400`
    }

    ${ ({ border_color }) => border_color
        ?
        `
            border: 2px solid ${ border_color };
        `
        :
        tw`bg-black hover:bg-gray-400`
    }

    ${ ({ text_color }) => text_color
        ?
        `
            color: ${ text_color };
        `
        :
        tw`text-black`
    }

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

    &:hover {
        .img-container {
            
        }

        .rich-text {
            p {
                
            }
        }
    }   
`

export default SCard;