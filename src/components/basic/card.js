import React from "react";
import tw, { styled } from "twin.macro";

import Image from "./image";
import RichText from "./richText";

const SCard = styled.div`
    ${ ({ className }) => (className.includes("header-info")) && tw`
        grid
        md:grid-rows-1 md:grid-cols-[20px 1fr] md:max-w-[300px] md:m-auto md:gap-4 md:items-center
    ` }

    .img-container {
        ${ ({ className }) => (className.includes("header-info")) && tw`
                w-[20px] h-[20px] 
        ` }

        img {
            ${ tw`
                object-contain
            ` }

            ${ ({ className }) => (className.includes("header-info")) && tw`
                w-full h-full
            ` }
        }
    }

    .rich-text {
        p {
            a {
                ${ ({ color }) => color &&
                    `color: ${ color };`  
                }

                ${ tw`
                    no-underline
                ` }

                ${ ({ className }) => (className.includes("footer-card-item")) && tw`
                    md:break-all
                ` }
            }
        }
    }

    &:hover {
        .img-container {
            ${ ({ className, color }) => (className.includes("services-grid") || className.includes("home-section")) && color
                    ? `background-color: ${ color };`
                    :
                    tw`bg-white`    
            }
        }

        .rich-text {
            p {
                ${ ({ className, color }) => (className.includes("services-grid") || className.includes("home-section")) && color &&
                    `color: ${ color };`  
                }
            }
        }
    }   
`

const Card = ({ data: { color, image, text }, className } ) => (
    <SCard className={`card-container ${ className }`} color={ color }>
        <Image 
            image={ image.formats > 0 && image.formats !== null
                ? 
                image.formats.small || image.formats.thumbnail
                :
                image
            }
        />
        <RichText text={ text } />
    </SCard>
)

export default Card;