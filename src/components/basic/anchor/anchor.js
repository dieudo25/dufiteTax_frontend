import React from "react";

import Image from "../image/image";
import SAnchorLink from "./style/main";

const Anchor = ({ anchor, className, position }) => (
    <SAnchorLink 
        to={ `#${ anchor.to }` }
        title={ anchor.title }
        className={`anchor anchor-${ position } ${ className }`}
        position={ position }
    >
        <Image
            image={ anchor.image.formats > 0 && anchor.image.formats !== null
                ? 
                anchor.image.formats.small || anchor.image.formats.medium || anchor.image.formats.thumbnail
                :
                anchor.image
            }

            className="anchor-img"
        />
    </SAnchorLink>                      
)

export default Anchor;