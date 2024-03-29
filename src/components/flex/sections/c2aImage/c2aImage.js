import React from "react";

import Button from "../../../basic/button/button";
import RichText from "../../../basic/richText";
import Image from "../../../basic/image/image";
import Anchor from "../../../basic/anchor/anchor";
import SSection from "./style/main"

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
        bigger_items,
        section,
        container
    }
}) => (
    <SSection
        id={ style && style.css_id }
        className={ `component ${strapi_component} ${style && style.css_classes }` }
        first_element={ first_element }
        button={ button }
        bigger_items={ bigger_items }
        section={ section }
        container={ container }
    >   

        { anchor_up && 
            <Anchor 
                anchor={ anchor_up } 
                position="top"
                className="anchor-link" 
            />
        }

        <div className={ `section-container ` }>
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

            { style && style.css_classes === "about-us-cta" &&
                <div className="badge-pro-container">
                    <a 
                        className="badge-pro"
                        href="https://www.starofservice.be/professionnel/comptabilite/wemmel/30734728/dufite-tax-advisors" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        alt="StarOfService" 
                    >
                        <img 
                            src="https://cdn-aurora.starofservice.com/static/media/icon.9fe15798.svg" 
                            alt="Start of service"
                        />
                        <div
                            className="text-pro" 
                            style={{
                                fontFamily: "Helvetica,Sans-Serif",

                            }}
                        >
                            TOP PRO
                        </div>
                        <div 
                            className="text-year" 
                            style={{
                                fontFamily: "Helvetica,Sans-Serif",
                            }}
                        >
                            2022
                        </div>
                    </a>    
                </div>
                
            }
              
            
        </div>

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