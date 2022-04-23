import tw, { styled } from "twin.macro"


const SSection = styled.section`
${ tw`
    h-[500px]
`}

div.cta-slider {
    .slick-list {
        .cta-image-item {
            ${ tw`
                relative
            `}

            .img-container {
                ${ tw`
                    h-[500px]
                `}

                img {
                    object-cover
                }
            }

            .cta-container {
                ${ tw`
                    absolute w-[960px] top-[50%] left-[50%] translate-x-[50%] translate-y-[50%] grid justify-end text-right
                `}
                transform: translate(-50%, -50%);

                .btn-container {
                    a {
                        ${ tw`
                            uppercase
                        `}   
                    }
                }
            }
        }
    }
}

`

export default SSection;