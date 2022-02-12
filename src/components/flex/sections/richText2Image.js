import React from "react";
import tw, { styled } from "twin.macro"

import RichText from "../../basic/richText";
import Image from "../../basic/image";

const SSection = styled.section`
    ${ tw`
        grid w-10/12 mx-auto gap-5 mb-0
        sm:grid-cols-2 sm:grid-rows-[1fr 2fr]
        lg:grid-cols-[1fr 2fr 1fr] lg:grid-rows-1 lg:items-center   
    `}

    div.rich-text.text {

        ${ tw`
        ` }

        ${ ({ className }) => className.includes('about-us') && tw`
            sm:col-span-2
            lg:col-span-1
        ` }

        em {
            ${tw`                    
                text-main-500  not-italic
            `}
        }

    }

    div.img-container.image-1 {
        ${ ({ className }) => className.includes('about-us') && tw`
            md:object-cover
        ` }

        img {
            ${ tw`

            ` }

            ${ ({ className }) => className.includes('about-us') && tw`
                object-contain w-full max-h-[270px] object-cover object-bottom
                lg:max-h-[400px]
                
            ` }
        }

    }

    div.img-container.image-2 {

        ${ tw`
            
        ` }

        ${ ({ className }) => className.includes('about-us') && tw`
            w-[100px] mx-auto
            sm:w-[160px]    
            
        ` }

        img {
            ${ tw`

            ` }

            ${ ({ className }) => className.includes('about-us') && tw`
                object-contain w-full 
            ` }
        }

    }


    
`

const RichText2Image = ({ 
    data: 
        { 
            strapi_component, 
            text, 
            image_1, 
            image_2, 
            first_element, 
            second_element, 
            style, 
            animation_image_1, 
            animation_image_2 
        } 
}) => (
    
    <SSection
        id={ style && style.css_id }
        className={ `component ${strapi_component} ${style && style.css_classes }` }
        first_element= { first_element }
        second_element= { second_element }
    >
        <RichText text={ text } className='text'/>
        <Image 
            image={image_1}
            dataSal={ animation_image_1 && animation_image_1.type.replaceAll('_', '-') }
            dataSalDuration="800"
            className = 'image-1'
        />
        <Image 
            image={image_2}
            dataSal={ animation_image_2 && animation_image_2.type.replaceAll('_', '-') }
            dataSalDuration="800"
            className= 'image-2'
        />

        
    </SSection>
)

export default RichText2Image;