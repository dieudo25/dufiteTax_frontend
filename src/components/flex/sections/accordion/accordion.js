import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import RichText from "../../../basic/richText";
import SSection from "./style/main";



const CustomAccordion = ({
    data: {
        strapi_component,
        headingText,
        style, 
        section, 
        container 
    }
}) => (
    <SSection
        id={ style && style.css_id}
        className={ `component ${strapi_component} ${style && style.css_classes }` }
        section={ section }
        container={ container }
    >
        <div className="section-container">
            <Accordion
                allowZeroExpanded
            >
                { headingText.map((item) => (
                    <AccordionItem key={item.id} >
                        <AccordionItemHeading>
                            <AccordionItemButton>
                               <h2>{ item.heading }</h2>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <RichText text={ item.text } />
                        </AccordionItemPanel>
                    </AccordionItem>
                )) }
            </Accordion>
        </div>
    </SSection>
)

export default CustomAccordion;