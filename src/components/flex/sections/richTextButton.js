import React from "react";
import tw, { styled } from "twin.macro"

import RichText from "../../basic/richText";
import Button from "../../basic/button";

const SSection = styled.section`
    ${ tw`
        w-full       
    ` }

    ${ ({ bg_color, text_color }) => bg_color && text_color &&
        `   
            color: ${ text_color.normal };
            background-color: ${ bg_color.color };
            &:hover {
                color: ${ text_color.hover };
                background-color: ${ bg_color.color_hover };
            }
        `        
    }

    div.section-container {
        ${ tw`
            mx-auto w-10/12 grid grid-cols-1 grid-rows-2 items-center justify-center py-[50px]
            md:py-[100px]
            xl:w-[960px]
        
        ` }

        div.rich-text {
            ${ tw`
                mx-auto
                text-center max-w-[555px] 
            ` }
    
            /* ${ ({ first_element }) => first_element === 'text'
                ?
                tw`
                    md:col-start-1 md:row-start-1 
                `
                :
                tw`
                    md:col-start-2 md:row-start-1
                `
            } */
    
            p {
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

const RichTextButton = ({ 
    data: { 
        strapi_component, 
        text, 
        button, 
        first_element, 
        style, 
        animation_text, 
        animation_button, 
        bg_color,
        text_color
    } 
}) => (
    <SSection
        id={ style && style.css_id }
        className={ `component ${strapi_component} ${style && style.css_classes }` }
        first_element={ first_element }
        bg_color={ bg_color }
        text_color={ text_color }
    >
        <div className="section-container">
            <RichText 
                dataSal={ 
                    animation_text 
                    && animation_text.type 
                    && animation_text.type.replaceAll('_', '-') 
                }
                dataSalDuration="800"
                text={ text }
            />

            { button && 
                <Button 
                    button={ button }
                    dataSal={ 
                        animation_button
                        && animation_button.type 
                        && animation_button.type.replaceAll('_', '-') 
                    }
                    dataSalDuration="800"
                />
            }
        </div>
        
    </SSection>
)

export default RichTextButton;