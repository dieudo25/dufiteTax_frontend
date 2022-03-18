import tw, { styled } from "twin.macro"


const SSection = styled.section`
${ tw`
    mx-auto my-0 w-10/12
    xl:w-[960px]
` }

.rich-text {
    ${ ({ className }) => className.includes('service-text') && tw`
        text-center
    ` }

    h3, h4, h5, em, strong {
        ${ tw`
            not-italic
        ` }

        ${ ({ color }) => color && `
            color: ${ color.normal };
        ` }

        &:hover {
            ${ ({ color }) => color && `
                color: ${ color.hover };
            ` } 
        }
    }
}

`

export default SSection;