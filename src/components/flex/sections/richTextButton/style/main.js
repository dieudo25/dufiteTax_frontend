import tw, { styled } from "twin.macro"


const SSection = styled.section`
/* Section width */
${ ({ section }) => section.is_full_width
    ?
    tw`w-full`
    :
    tw`
        w-10/12
        lg:w-[960px]
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

/* Section margin */
${ ({ section }) => section.bg_color != null &&
    tw`
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

/* TEXT COLOR */
${ ({ text_color }) => text_color &&
    `   
        color: ${ text_color.normal };
        &:hover {
            color: ${ text_color.hover };
        }
    `        
}


/* CLASSNAME - PAGE HOME - home-service-text-btn */
${ ({ className }) => (className.includes("home-service-text-btn")) && tw`
        mb-[25px!important]
        md:mb-[50px!important]
` }

div.section-container {
    ${ tw`
        mx-auto grid grid-cols-1 grid-rows-2 items-center justify-center 
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

    /* CLASSNAME - ALL PAGES - PRICING */
    ${ ({ className }) => (className.includes("home-pricing")) && tw`
        py-[50px]
        md:py-[calc(100px - 1.50rem)]
    ` }

    div.rich-text {
        ${ tw`
            mx-auto
            text-center max-w-[555px] 
        ` }

        /*  FIRST ELEMENT */
        ${ ({ first_element }) => first_element === 'text'
            ?
            tw`
                md:col-start-1 md:row-start-1 
            `
            :
            tw`
                md:col-start-2 md:row-start-1
            `
        }

        p {
            /* CLASSNAME - PAGE ALL - PRICING */
            ${ ({ className }) => (className.includes("home-pricing")) && tw`
                text-[20px]
            ` }
        }

    }
    
    div.btn-container {
        ${ tw`
            mx-auto
            /* md:mr-0 */
        ` }

        /* ${ ({ first_element }) => first_element === 'button'
            ?
            tw`
                md:col-start-1 md:row-start-1 
            `
            :
            tw`
                md:col-start-3 md:row-start-1
            `
        } */

        a.btn {
            ${ tw`
                
            ` }
        }   
    }
}
`

export default SSection;