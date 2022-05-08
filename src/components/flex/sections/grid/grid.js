import React from "react";
import { Link } from "gatsby";

import RichText from "../../../basic/richText";
import Card from "../../../basic/card/card";
import Button from "../../../basic/button/button";

import SSection from "./style/main"

const Grid = ({ 
    data: { 
        strapi_component, 
        text, 
        cards, 
        style, 
        button, 
        section, 
        container 
    } 
}) => (
    <SSection
        id={ style && style.css_id }
        className={ `component ${strapi_component} ${style && style.css_classes }` }
        section={ section }
        container={ container }
    >
        <div className="section-container">
            { text && <RichText className="grid-text" text={ text } /> }
            <div className="cards-grid">
                { cards.map((item) => ( item.page
                    ?
                    <Link key={`card-${ item.id }`} to={item.page && item.page.slug !== 'accueil' ? `/${item.page.slug}` : '/' }>
                        <Card data={ item } className={ style.css_classes }/>
                    </Link>
                    :
                    <Card key={`card-${ item.id }`} data={ item }/>
                ))}
            </div>
            { button && <Button button={ button }/> }
        </div>
    </SSection>
)

export default Grid;