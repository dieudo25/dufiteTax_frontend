import React from "react";
import tw, { styled } from "twin.macro"

import Button from "../../basic/button";
import RichText from "../../basic/richText";
import Image from "../../basic/image";
import Anchor from "../../basic/anchor";

const SSection = styled.section`
    ${ tw` 
        mx-auto w-10/12  grid grid-rows-2 items-center gap-8 
        sm:grid-cols-2 sm:grid-rows-1 
        lg:grid-cols-3
    ` }

    ${ ({ section_width }) => section_width === 'full' 
        ? 
        tw`w-full` 
        :  
        tw`w-[960px]` 
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

        div.rich-text {
            ${tw`
                
            `}

            ${ ({ button }) => button && tw`
                mb-5
                sm:mb-10
            ` }

            em {
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
            lg:col-span-2 
            lg:h-[455px]
        ` }

        ${ ({ first_element }) => first_element === 'image' 
            ? 
            tw`sm:col-start-1` 
            :  
            tw`sm:col-start-2` 
        }

        img { 
            ${ tw`
                w-full h-full object-cover
                lg:object-cover
            ` }
        }
    }
`

const C2AImage = ({ data: { strapi_component, text, button, image, style, first_element, animation, anchor_down, anchor_up, section_width } }) => (
    <SSection
        id={ style && style.css_id }
        className={ `component ${strapi_component} ${style && style.css_classes }` }
        first_element={ first_element }
        button={ button }
        section_width={ section_width }
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