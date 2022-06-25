import tw, { styled } from "twin.macro"

const SSection = styled.section`
/* Section width */
${ ({ section }) => section.is_full_width
    ?
    tw`w-full`
    :
    tw`
        w-10/12 mx-auto
        xl:w-[960px]
    `
}

/* Section BG COLOR */
${ ({ section }) => section.bg_color != null &&
    `
        background-color: ${ section.bg_color };

        &:hover {
            background-color: ${ section.bg_color_hover };
        }
    ` 
}

/* Section border color */
${ ({ section }) => section.border_color != null &&
    `
        border: 1px solid ${ section.border_color };

        &:hover {
            border: 1px solid ${ section.border_color_hover };
        }
    ` 
}

div.section-container {

    ${ ({ className }) => className.includes('contact-p') && tw`
        py-[50px]
        md:py-[100px]
    ` }

    /* Container width */
    ${ ({ container }) => container.is_full_width
        ?
        tw`w-full`
        :
        tw`
            w-10/12 mx-auto
            xl:w-[960px]
        `
    }

    /* Container BG Color */
    ${ ({ container }) => container.bg_color != null &&
        `
            background-color: ${ container.bg_color };

            &:hover {
                background-color: ${ container.bg_color_hover };
            }
        ` 
    }

    /* Controller border color */
    ${ ({ container }) => container.border_color != null &&
        `
            border: 1px solid ${ container.border_color };

            &:hover {
                border: 1px solid ${ container.border_color_hover };
            }
        ` 
    }

    ${tw`
        grid grid-cols-3 grid-rows-2 gap-5
        xl:h-[900px]
    `}

    div.rich-text {
        ${tw`
            col-start-1 col-end-4 row-start-1 row-end-2 w-10/12 mx-auto z-20 bg-[rgba(255, 255, 255, 0.85)] px-[15px] relative top-10
            sm:grid sm:m-auto sm:py-5
            xl:w-[960px]
        `}

        transition-delay: 0s;

        strong, em {
            ${tw`
                text-main-500 
            `}
        }
    }

    div.multiple-img-1 {
        ${tw`
            col-start-[1] col-end-[4] row-start-2 row-end-3 z-10 relative h-[500px] top-[-60px]
        `}

        img {
            ${tw`
                3xl:object-cover 3xl:object-[0% 33%]
            `}
        }

        transition-delay: 0.5s;
    }

    div.multiple-img-2 {
        ${tw`
            col-start-[1] col-end-[4] row-start-1 row-end-3 z-0
        `}
        
        transition-delay: 2s;
        transform-origin: bottom;

        img {
            ${tw`
                object-fill
            `}

            filter: blur(4px);
        }
    }

}
`

export default SSection;