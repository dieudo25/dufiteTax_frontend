import React from "react"
import { Link } from "gatsby"
import tw, { styled } from "twin.macro"
import { useStaticQuery, graphql } from "gatsby"

import Image from "../basic/image"
import MenuList from "../basic/menuList"
import ImageLink from "../flex/sections/ImageLink"

const SFooter = styled.footer`
    ${ tw`
        border-solid border-t-4 border-l-0 border-r-0 border-b-0 border-main-500 mt-[50px]
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
            }
        }

        .menu {
            ${ tw`
                flex-col justify-center
                lg:gap-[50px]
            ` }

        }

        .footer-socials {
            ${ tw`
                grid grid-rows-1 grid-cols-[20px 20px 20px] gap-5 justify-end
            `}

            .img-container {
                ${ tw`
                    w-[20px] h-[20px]
                `}

                img {
                    ${ tw`
                        object-contain
                    `}
                }
            }
        }
    }

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
`

const Footer = () => {
    const  { strapiFooter: { logo, menu, copyright, socials } }  = useStaticQuery(
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
                    menu {
                        page {
                        slug
                        title
                        }
                    }
                    copyright
                    socials {
                        external_page
                        image {
                          alternativeText
                          url
                        }
                    }
                }
            }
        `
    )

    return (
        <SFooter id="footer">
            <div className="footer-container">
                <div className="logo-container">
                    <div className="footer-logo logo-1">
                        <Link to='/'>
                            { logo.image ? <Image image={ logo.image } /> : logo.text }
                        </Link>
                    </div>
                </div>
                <MenuList menu={ menu } isMenuActive={ true } className="footer-nav" />
                <div className="footer-socials">
                    { socials.map(social => (
                        <ImageLink data={ social } />
                    ))}
                </div>
            </div>
            <div className="footer-copyright"><p>{ copyright }</p></div>
        </SFooter>
    )
}

export default Footer;
