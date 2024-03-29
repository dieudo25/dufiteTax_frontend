import tw, { styled } from "twin.macro"


// Switch that determine wich item is bigger depending on the first elemnt
const C2AbiggerItemsFirstElImage = (bigger_items) => {
    switch(bigger_items) {
        case 'text':
            return tw`
                lg:col-start-2 lg:col-span-2
            `
        case 'image':
            return tw`
                lg:col-start-3 lg:col-span-1
            `
        default:
            return tw`lg:col-start-2 lg:col-span-1`
    }
}

const C2AbiggerItemsFirstElText = (bigger_items) => {
    switch(bigger_items) {
        case 'text':
            return tw`
                lg:col-start-1 lg:col-span-2
            `
        case 'image':
            return tw`
                lg:col-start-1 lg:col-span-1
            `
        default:
            return tw`lg:col-start-1 lg:col-span-1`
    }
}

const ImgbiggerItemsFirstElImage = (bigger_items) => {
    switch(bigger_items) {
        case 'text':
            return tw`
                lg:col-start-1 lg:col-span-1
            `
        case 'image':
            return tw`
                lg:col-start-1 lg:col-span-2
            `
        default:
            return tw`lg:col-start-1 lg:col-span-1`
    }
}

const ImgbiggerItemsFirstElText = (bigger_items) => {
    switch(bigger_items) {
        case 'text':
            return tw`
                lg:col-start-3 lg:col-span-1
            `
        case 'image':
            return tw`
                lg:col-start-2 lg:col-span-2
            `
        default:
            return tw`lg:col-start-2 lg:col-span-1`
    }
}

// Style
const SSection = styled.section`
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
    
    div.section-container {
        ${ tw` 
            mx-auto
            sm:grid sm:grid-cols-2 sm:grid-rows-1 sm:items-center sm:gap-8
        ` }
        
        /* Container width */
        ${ ({ container }) => container.is_full_width
            ?
            tw`w-full`
            :
            tw`
                w-10/12
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
        ${ ({ container }) => container.borer_color != null &&
            `
                border: 1px solid ${ container.borer_color };

                &:hover {
                    border: 1px solid ${ container.borer_color_hover };
                }
            ` 
        }

        /* C2A Bigger items */
        ${ ({ bigger_items }) => bigger_items === 'none'
            ?
            tw`lg:grid-cols-2`
            :
            tw`lg:grid-cols-3`
        } 
        
        div.c2a {
            ${ tw`
                row-span-1
                sm:row-start-1 sm:text-right
            `}
    
            ${ ({ first_element }) => first_element === 'text' 
                ? 
                tw`
                    sm:col-start-1 sm:text-left
                ` 
                :  
                tw`
                    sm:col-start-2 sm:text-right
                    lg:col-start-3
                `  
            }
    
            ${ ({ first_element, bigger_items }) => first_element === 'text' 
                && bigger_items
                ? 
                C2AbiggerItemsFirstElText(bigger_items)
                :  
                C2AbiggerItemsFirstElImage(bigger_items)
            }
    
            div.rich-text {
                ${ tw`
                    mb-[25px]
                    sm:mb-0
                ` }
    
                ${ ({ button }) => button && tw`
                    mb-5
                    sm:mb-10
                ` }
    
                strong, em {
                    ${tw`                    
                        text-main-500  not-italic
                    `}
                }
    
                p {
                    ${ tw`
                        text-justify
                    ` }
    
                    ${ ({ first_element }) => first_element === 'text' 
                        ? 
                        tw`
                            sm:text-left
                        ` 
                        :  
                        tw`
                            sm:text-right
                        ` 
                    }

                    a {
                        ${ tw`
                            no-underline
                        ` }
                    }
                }
            }
    
            .btn-container {
                a {
                    ${ tw`
                        uppercase mb-[25px]
                        sm:mb-0
                    `}
                }
            }
        }
    
        div.img-container.c2a-img {
            ${ tw`
                row-span-1 w-full h-[220px]
                sm:row-start-1
                lg:h-[455px]
            ` }

            
            /* FIRST ELEMENT & BIGGER ELEMENT */
            ${ ({ first_element, bigger_items }) => first_element === 'text' 
                && bigger_items
                ? 
                ImgbiggerItemsFirstElText(bigger_items)
                :  
                ImgbiggerItemsFirstElImage(bigger_items)
            } 
    
            img { 
                ${ tw`
                    w-full h-full object-cover
                    lg:object-cover
                ` }
            }
        }
    }

    &:where(.about-profile) {
        div.section-container {
            div.c2a {
                div.rich-text {
                    ${ tw`
                        italic
                    ` }
                }
            }

            div.img-container.c2a-img {
                ${tw`
                    h-[230px]
                    sm:h-[230px]
                    lg:h-[250px]
                    xl:h-[280px]
                `} 

                img {
                    ${ tw`
                    object-[0 30%]
                ` }
                }
            }
        }
    }

    &:where(.about-us-cta) {
        ${tw`
            object-contain
            lg:object-contain
        `}

        div.section-container {

            ${tw`
                gap-0
                sm:gap-8 
                lg:grid-cols-3
            `}

            div.c2a {
                ${tw`
                    mt-[50px]
                    sm:mt-0 sm:my-[100px] sm:row-span-2
                `}
            }

            div.img-container.c2a-img {
                img {
                    ${ tw`
                        object-contain
                        lg:object-contain
                    `}
                }
            }
            div.badge-pro-container {
                ${ tw`
                    
                `}
                a.badge-pro {
                    ${ tw`
                        no-underline block relative w-[216px] h-[172px] mx-auto mb-10
                    `}
                    img {
                        w-full h-full
                    }
                    div {
                        &.text-pro {
                            ${tw`
                                absolute left-0 right-0 z-20 text-[#fff] font-bold text-center top-[60px]                       
                            `
                            }
                        }
    
                        &.text-year {
                            ${tw`
                                absolute left-0 right-0 z-20 text-[#fff] font-bold text-center text-[38px] top-[80px]                            
                            `
                            }
                        }
                    }
                }
            }
        }
    } 
`


export default SSection;