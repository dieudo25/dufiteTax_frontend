import React from "react";
import tw, { styled } from "twin.macro"

import RichText from "../../basic/richText";
import Button from "../../basic/button";

const SSection = styled.section`
    ${ tw`
        mx-auto w-full grid grid-cols-1 grid-rows-2 items-center
        md:grid-rows-1 md:grid-cols-3 md:gap-5 md:w-10/12
        lg:w-full
       
    ` }

    div.rich-text {
        ${ tw`
            mx-auto
            md:col-span-2 max-w-[555px] 
        ` }

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
            ${ tw`
                text-center
                md:text-justify
            ` }
        }

    }
    
    div.btn-container {
        ${ tw`
            mx-auto
            md:mr-0
        ` }

        ${ ({ first_element }) => first_element === 'button'
            ?
            tw`
                md:col-start-1 md:row-start-1 
            `
            :
            tw`
                md:col-start-3 md:row-start-1
            `
        }

        a.btn {
            ${ tw`
                
            ` }
        }   
    }
`

const RichTextButton = ({ data: { strapi_component, text, button, first_element, style, animation_text, animation_button } }) => (
    <SSection
        id={ style && style.css_id }
        className={ `component ${strapi_component} ${style && style.css_classes }` }
        first_element={ first_element }
    >
        <RichText 
            dataSal={ animation_text && animation_text.type.replaceAll('_', '-') }
            dataSalDuration="800"
            text={ text }
        />

        { button && 
            <Button 
                button={ button }
                dataSal={ animation_button && animation_button.type.replaceAll('_', '-') }
                dataSalDuration="800"
            />
        }
        
    </SSection>
)

export default RichTextButton;