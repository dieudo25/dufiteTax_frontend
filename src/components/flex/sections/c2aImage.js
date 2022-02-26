import React from "react";
import tw, { styled } from "twin.macro"

import Button from "../../basic/button";
import RichText from "../../basic/richText";
import Image from "../../basic/image";
import Anchor from "../../basic/anchor";

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

const SSection = styled.section`
    ${ tw` 
        mx-auto w-10/12  grid grid-rows-2 items-center gap-8 
        sm:grid-cols-2 sm:grid-rows-1 
    ` }

    ${ ({ bigger_items }) => bigger_items === 'none'
        ?
        tw`lg:grid-cols-2`
        :
        tw`lg:grid-cols-3`
    }

    ${ ({ section_width }) => section_width === 'full' 
        ? 
        tw`w-full` 
        :  
        tw`xl:w-[960px]` 
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
            ${tw`
                
            `}

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
            }
        }

        .btn-container {
            a {
                ${ tw`
                    uppercase
                `}
            }
        }
    }

    div.img-container.c2a-img {
        ${ tw`
            row-span-1 w-full h-[200px] 
            sm:row-start-1
            lg:h-[455px]
        ` }

        ${ ({ first_element, bigger_items }) => first_element === 'text' 
            && bigger_items
            ? 
            ImgbiggerItemsFirstElText(bigger_items)
            :  
            ImgbiggerItemsFirstElImage(bigger_items)
        } 

        ${ ({ className }) => (className.includes("home-about-cta") && tw`
            h-[400px]
        `)}

        img { 
            ${ tw`
                w-full h-full object-cover
                lg:object-cover
            ` }
        }
    }
`

const C2AImage = ({ 
    data: { 
        strapi_component,
        text,
        button,
        image,
        style,
        first_element,
        animation,
        anchor_down,
        anchor_up,
        section_width,
        bigger_items 
    }
}) => (
    <SSection
        id={ style && style.css_id }
        className={ `component ${strapi_component} ${style && style.css_classes }` }
        first_element={ first_element }
        button={ button }
        section_width={ section_width }
        bigger_items={ bigger_items }
    >   

        { anchor_up && 
            <Anchor 
                anchor={ anchor_up } 
                position="top"
                className="anchor-link" 
            />
        }

        <div className="c2a">
            <RichText text={ text }/>
            { button && <Button button={ button }/> }
        </div>
        <Image
            className="c2a-img"
            dataSal={ animation && animation.type.replaceAll('_', '-') }
            dataSalDuration="800"
            image={ image.formats > 0 && image.formats !== null
            ? 
            image.formats.small || image.formats.medium
            :
            image
            }
        />

        { anchor_down && 
            <Anchor 
                anchor={ anchor_down } 
                position="bottom"
                className="anchor-link" 
            />
        }

    </SSection>
)

export default C2AImage;