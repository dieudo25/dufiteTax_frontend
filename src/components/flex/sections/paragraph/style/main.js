import tw, { styled } from "twin.macro"


const SSection = styled.section`

/* Section width */
${ ({ section }) => section.is_full_width
    ?
    tw`w-full`
    :
    tw`
        w-10/12 mx-auto
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
${ ({ section }) => section.border_color != null &&
    `
        border: 1px solid ${ section.border_color };

        &:hover {
            border: 1px solid ${ section.border_color_hover };
        }
    ` 
}

div.section-container {

    ${ ({ className }) => className.includes('contact-p') && tw`
        py-[50px]
        md:py-[100px]
    ` }

    /* Container width */
    ${ ({ container }) => container.is_full_width
        ?
        tw`w-full`
        :
        tw`
            w-10/12 mx-auto
            xl:w-[960px]
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
    ${ ({ container }) => container.border_color != null &&
        `
            border: 1px solid ${ container.border_color };

            &:hover {
                border: 1px solid ${ container.border_color_hover };
            }
        ` 
    }

    .rich-text {
        ${ ({ className }) => className.includes('service-text') && tw`
            text-center
        ` }
    
        ${ ({ className }) => className.includes('contact-p') && tw`
            text-center
        ` }

        h2 {
            ${ tw`
                md:px-[30px]
            ` }
        }
    
        h3, h4, h5, em, strong {
            ${ tw`
                not-italic font-light 
                md:px-[100px]
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