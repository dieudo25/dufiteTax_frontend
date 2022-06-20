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
                            lg:m-0 m-0
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
            grid text-center text-sm 
            md:grid-cols-[2fr 2fr 1fr] md:col-span-3 md:gap-10
        ` }

        p {
            /* span {
                ${ tw`
                    inline-block
                ` }
            } */
        }
    }

    .policies-container {
        ${ tw`
            text-center my-5
        `}
        a {
            ${ tw`
                no-underline text-main-500 text-sm
                hover:underline
            `}
        }
    }
    
    .bottom-footer-container {
        .footer-copyright {
            ${ tw`
                m-auto bg-main-500 text-white grid m-auto
            ` }

            p {
                ${ tw`
                    text-center
                ` }
            }
        }
    }
    
`

export default SFooter;