import React from "react";

import Image from "../image/image";
import RichText from "../richText";
import SCard from "./style/main";
import { Link } from "gatsby";



const Card = ({ data: { text_color, bg_color, border_color, image, text, css_classes, page, anchor} } ) => (
    <SCard 
        className={`card-container ${ css_classes }`} 
        text_color={ text_color }
        bg_color={ bg_color }
        border_color={ border_color }
    >
        { page && page.slug 
            ?
            <Link to={ `${page.slug}#${anchor && anchor}` }> 
                <Image 
                    image={ image.formats > 0 && image.formats !== null
                        ? 
                        image.formats.small || image.formats.thumbnail
                        :
                        image
                    }
                />
                <RichText text={ text } />
            </Link>
            :
            <>
                <Image 
                    image={ image.formats > 0 && image.formats !== null
                        ? 
                        image.formats.small || image.formats.thumbnail
                        :
                        image
                    }
                />
                <RichText text={ text } />
            </>
        }
    </SCard>
)

export default Card;