import * as React from "react"
import { Link } from "gatsby"
import tw, { styled } from "twin.macro"
import { useStaticQuery, graphql } from "gatsby"

import Image from "../basic/image"
import RichText from "../basic/richText" 
import MenuList from "../basic/menuList"
import Card from "../basic/card"

const SFooter = styled.footer`
    ${ tw`
        border-solid border-t-4 border-l-0 border-r-0 border-b-0 border-second-500 mt-[50px]
        md:mt-[100px]
    ` }

    .footer-container {
        ${ tw`
            mx-auto my-10 w-10/12 max-w-[960px] grid gap-10 justify-center
            lg:grid-cols-3
            xl:grid-cols-3

        ` }

        .logo-container {
            ${ tw`
                grid gap-10
            ` }
            .footer-logo {
                ${ tw`
                    xl:w-[340px]
                ` }
    
                a {
                    .img-container {
                        ${ tw`
                            w-[80px] m-auto
                            lg:m-0
                        ` }
                    }
                }
                
                .rich-text {
                    ${ tw`
                        text-center
                        lg:text-left
                    ` }
                }

                &.logo-2 {
                    .img-container {
                        ${ tw`
                            w-[140px] mx-auto
                            lg:mx-0
                        ` }
                    }
                }
            }
        }

        .menu {
            ${ tw`
                flex-col justify-center
                lg:justify-start lg:gap-[50px]
            ` }

        }

        .footer-cards {
            ${ tw`
                grid gap-5
            ` }

            .card-container {
                ${ tw`
                    grid mx-auto justify-center h-fit-content gap-4
                    lg:grid-cols-[57px 1fr] lg:gap-[10px] lg:min-w-[293.34px]
                ` }

                .img-container {
                    ${ tw`
                        w-[48px] h-[48px] m-auto
                    ` }
                }

                .rich-text {
                    ${ tw`
                        flex items-center
                    `}

                    p {
                        ${ tw`
                            text-center break-words m-0
                            lg:text-left
                        ` }

                        a {
                            ${ ({ color })  => color &&
                                `color: ${ color };`  
                            }
                        }
                    }
                }
            }
        }
    }

    .footer-copyright {
        ${ tw`
            m-auto bg-second-500 text-white grid m-auto
        ` }

        p {
            ${ tw`
                text-center
            ` }
        }
    }
`

const Footer = () => {
    const  { strapiFooter: { logo, logo_2, menu, text, text_2, card, copyright } }  = useStaticQuery(
        graphql`
            query {
                strapiFooter {
                    id
                    logo {
                        image {
                        url
                        alternativeText
                        }
                    }
                    logo_2 {
                        image {
                        url
                        alternativeText
                        }
                    }
                    menu {
                        page {
                        slug
                        title
                        }
                    }
                    text
                    text_2
                    copyright
                    card {
                        id
                        color
                        image {
                            id
                            url
                            alternativeText
                        }
                        text
                    }
                }
            }
        `
    )

    return (
        <SFooter id="footer" className="snap-start">
            <div className="footer-container">
                <div className="logo-container">
                    <div className="footer-logo logo-1">
                        <Link to='/'>
                            { logo.image ? <Image image={ logo.image } /> : logo.text }
                        </Link>
                        <RichText text={ text } />
                    </div>
                    <div className="footer-logo logo-2">
                        { logo_2.image ? <Image image={ logo_2.image } /> : logo_2.text }
                        <RichText text={ text_2 } />
                    </div>
                </div>
                <MenuList menu={ menu } isMenuActive={ true } className="footer-nav" />
                <div className="footer-cards">
                    { card.map((item) => <Card key={item.id} data={ item } className="footer-card-item"/>) }
                </div>
            </div>
            <div className="footer-copyright"><p>{ copyright }</p></div>
        </SFooter>
    )
}

export default Footer;
