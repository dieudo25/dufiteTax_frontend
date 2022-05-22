import tw, { styled } from "twin.macro"


const SSection = styled.section`
${ tw`
    mx-auto w-10/12 grid content-center items-center gap-10
    xl:w-[960px]
` }

section {
    ${ tw`
        md:max-h-[20vh] 
    ` }
}

div.cards-slider {
    ${ tw`
        grid grid-cols-[30px 1fr 30px]
        md:max-h-[80vh] md:gap-10
    ` }

    .slick-arrow{
        ${ tw`
            col-span-1 w-5 h-5 m-auto p-0 overflow-hidden bg-white border-0 bg-contain text-transparent bg-no-repeat cursor-pointer
            sm:w-10 sm:h-10
    ` }
    }

    .slick-arrow.slick-prev {
        background-image: url('/image/arrow_left_black.svg');
        
        ${ tw`
            ml-0
        ` }
    }

    .slick-arrow.slick-next {
        background-image: url('/image/arrow_left_black.svg');
        transform: rotateY(180deg);

        ${ tw`
            mr-0
        ` }
    }

    .slick-list {
        ${ tw`

        ` }

        a {
            ${ tw`
                no-underline text-dark-500
            ` }

            .card-container {
                ${ tw`
                    w-[225px] mx-auto max-h-[400px]
                    md:w-[300px]
                    lg:w-[225px]
                    
                ` } 

                .img-container {

                    ${ tw`
                        mx-auto w-[225px] h-[350px] relative z-20
                        md:w-[300px]
                        lg:w-[225px]
                    ` }

                    img {
                        ${ tw`
                            w-full h-full object-cover z-10 transition
                            
                        ` }
                    }
                }

                p {
                    ${ tw`
                        mx-auto w-[215px] text-center
                    ` }
                }
            }
        }
    }

    ul.slick-dots {
        ${ tw`
            m-auto p-0 w-full text-center col-span-3
        ` }

        li {
            ${ tw`
                w-auto inline-block mx-2 cursor-pointer 
            ` }

            button {
                ${ tw`
                    bg-gray-200 w-[50px] h-[5px] p-0 border-0 text-[0px]
                ` }
            }
        }

        li.slick-active {
            button {
                ${ tw`
                    bg-main-500
                ` }
            }
        }
    }
}

`

export default SSection;