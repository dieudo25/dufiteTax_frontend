import React from "react";
import tw, { styled } from "twin.macro"

import RichText from "../../basic/richText";

const SSection = styled.section`
    ${ tw`
        mx-auto my-0 w-10/12
        xl:w-[960px]
    ` }

    .rich-text {
        ${ ({ className }) => className.includes('home-services-text') && tw`
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
   
`

const Paragraph = ({ data: { strapi_component, text, color, style } }) => (
    <SSection
        id={ style && style.css_id }
        className={ `component ${strapi_component} ${style && style.css_classes }` }
        color={ color }
    >
        <RichText text={ text } />
    </SSection>
)

export default Paragraph;