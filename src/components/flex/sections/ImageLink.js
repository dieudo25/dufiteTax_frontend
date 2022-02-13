import React from "react"

import Image from "../../basic/image";

const ImageLink = ({ data }) => (
    <div>
        <a href={ data.external_page }>
                <Image image={ data.image } />
        </a>
    </div>
)

export default ImageLink;