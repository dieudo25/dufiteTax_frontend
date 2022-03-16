import tw, { styled } from "twin.macro"

const textVerticalPositionSwitch = (text_vertical_position) => {
    switch(text_vertical_position) {
        case 'top':
            return tw`
                md:mb-auto
            `
        case 'center':
            return tw`
                md:m-auto
            `
        default:
            return tw`
                md:mt-auto
            `
    }
}

const textHorizontalPositionSwitch = (text_horizontal_position) => {
    switch(text_horizontal_position) {
        case 'left':
            return tw`
                md:text-left md:mr-auto
            `
        case 'center':
            return tw`
                md:text-center md:m-auto
            `
        default:
            return tw`
                md:text-right md:ml-auto
            `
    }
}

const SSection = styled.section`
    ${ tw`
       grid gap-[50px]
       md:grid-rows-1 md:grid-cols-1
    ` }

    ${ ({ is_full_width }) => is_full_width
        ?
        tw` w-full`
        :
        tw`
            w-10/12 mx-auto
            xl:w-[960px]
        `
    }

    .img-container {
        ${ tw`
            h-[400px]
            md:h-[500px] md:row-start-1 md:row-end-2 md:col-start-1 md:col-end-2
        ` }
        img {
            ${ tw`
                object-cover 
                lg:object-[21% 0%]
                xl:object-[0]

            ` }
        }
    }
    .rich-text {
        ${ tw`
            w-10/12 mx-auto
            md:row-start-1 md:row-end-2 md:col-start-1 md:col-end-2 
            xl:w-[960px]
        ` }

        ${ 
            ({ text_position: { vertical } }) => 
            textVerticalPositionSwitch(vertical) }

        * {
            ${ 
                ({ text_position: { horizontal } }) => 
                textHorizontalPositionSwitch(horizontal) 
            }

            ${ tw`
                md:w-[450px]
                xl:w-[500px]
            ` }
        }

        strong, em {
            ${ tw`
                text-main-500 not-italic
            ` }
        }
    }
`

export default SSection;