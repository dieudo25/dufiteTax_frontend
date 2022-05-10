import tw, { styled } from "twin.macro"


const SSection = styled.section`
${ tw`
    mx-auto my-0 w-10/12
    xl:w-[960px]
` }

${ ({ className }) => className.includes('contact-header') && tw`
    my-0
` }

/* Section width */
    ${ ({ section }) => section.is_full_width
        ?
        tw`w-full`
        :
        tw`
            w-10/12
            xl:w-[960px]
        `
    }

    /* Section BG COLOR */
    ${ ({ section }) => section.bg_color != null &&
        `
            background-color: ${ section.bg_color };

            &:hover {
                background-color: ${ section.bg_color_hover };
            }
        ` 
    }

    /* Section border color */
    ${ ({ section }) => section.borer_color != null &&
        `
            border: 1px solid ${ section.borer_color };

            &:hover {
                border: 1px solid ${ section.borer_color_hover };
            }
        ` 
    }

    div.section-container {
        ${ tw`
            mx-auto
            xl:w-[960px]
        
        ` }
    
        /* Container width */
        ${ ({ container }) => container.is_full_width
            ?
            tw`w-full`
            :
            tw`
                w-10/12
                lg:w-[960px]
            `
        }
    
        /* Container BG Color */
        ${ ({ container }) => container.bg_color != null &&
            `
                background-color: ${ container.bg_color };
    
                &:hover {
                    background-color: ${ container.bg_color_hover };
                }
            ` 
        }
    
        /* Controller border color */
        ${ ({ container }) => container.borer_color != null &&
            `
                border: 1px solid ${ container.borer_color };
    
                &:hover {
                    border: 1px solid ${ container.borer_color_hover };
                }
            ` 
        }

        .rich-text {
            ${ ({ className }) => className.includes('service-text') && tw`
                text-center
            ` }
        
            ${ ({ className }) => className.includes('contact-header') && tw`
                text-center
            ` }
        
            h3, h4, h5, em, strong {
                ${ tw`
                    not-italic
                ` }
        
                ${ ({ color }) => color && `
                    color: ${ color.normal };
                ` }
        
                &:hover {
                    ${ ({ color }) => color && `
                        color: ${ color.hover };
                    ` } 
                }
            }
        }
    }
`

export default SSection;