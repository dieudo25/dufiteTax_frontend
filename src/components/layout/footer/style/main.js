import tw, { styled } from "twin.macro"


const SFooter = styled.footer`
    ${ tw`
        border-solid border-t-4 border-l-0 border-r-0 border-b-0 border-main-500
    ` }

    .top-footer-container {
        ${ tw`
            mx-auto my-[50px] w-10/12 max-w-[960px] grid gap-10 justify-center justify-items-center items-center
            md:mt-[100px] md:mb-[0]
            lg:grid-cols-[340px 1fr 1fr]

        ` }

        .logo-container {
            ${ tw`
                grid gap-5
            ` }
            .footer-logo {
                ${ tw`
                    xl:w-[340px]
                ` }
                a {
                    .img-container {
                        ${ tw`
                            w-[200px] m-auto
                            lg:m-0
                        ` }
                    }
                }
            }
            .rich-text {
                p {
                    ${ tw`
                        font-light
                    ` }
                    strong {
                        ${ tw`
                            text-main-500
                        ` }
                    }
                }
            }
        }

        .menu {
            ${ tw`
                flex-col justify-center text-center 
                lg:gap-[50px] lg:grid-cols-[1fr 1fr] lg:w-[275px]
            ` }

        }

        .footer-socials {
            ${ tw`
                grid grid-rows-1 grid-cols-2 gap-5 justify-end 
                lg:justify-self-end
            `}

            svg {
                ${ tw`
                    text-[32px] text-main-500
                `}
            }
        }
    }

    .footer-mentions {
        ${ tw`
            mx-auto my-[50px] w-10/12 max-w-[960px] text-sm
            lg:flex justify-between
        ` }

        p {
            ${ tw`
                text-center mx-auto uppercase
            ` }
            span {
                ${ tw`
                    inline-block
                ` }

                &.post-code {
                    ${ tw`
                        ml-1
                    ` }
                }
            }

            &:nth-of-type(2) {
                ${ tw`
                w-[310px] m-auto
                ` }
            }
        }
    }
    
    .bottom-footer-container {
        .footer-copyright {
            ${ tw`
                m-auto bg-main-500  grid m-auto
            ` }

            p {
                ${ tw`
                    text-center text-white
                ` }

                a {
                    ${ tw`
                        text-white
                    ` }
                }
            }
        }
    }
    
`

export default SFooter;