import React from "react"
import { Link } from "gatsby"
import tw, { styled } from "twin.macro"
import { useStaticQuery, graphql } from "gatsby"
import { FaFacebookF, FaTwitter, FaInstagramSquare, FaLinkedinIn } from "react-icons/fa"

import Image from "../basic/image"
import MenuList from "../basic/menuList"
import RichText from "../basic/richText"

const SFooter = styled.footer`
    ${ tw`
        border-solid border-t-4 border-l-0 border-r-0 border-b-0 border-main-500 mt-[50px]
        md:mt-[100px]
    ` }

    .top-footer-container {
        ${ tw`
            mx-auto my-10 w-10/12 max-w-[960px] grid gap-10 justify-center justify-items-center
            lg:grid-cols-[340px 1fr 340px]

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
                flex-col justify-center
                lg:gap-[50px]
            ` }

        }

        .footer-socials {
            ${ tw`
                grid grid-rows-1 grid-cols-4 gap-10 justify-end justify-self-end
            `}

            svg {
                ${ tw`
                    text-[32px] text-main-500
                `}
            }
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

const Footer = () => {
    const  { strapiFooter: { logo, menu, copyright, facebook, twitter, instagram, linkedin } }  = useStaticQuery(
        graphql`
            query {
                strapiFooter {
                    copyright
                    menu {
                        page {
                            title
                            slug
                        }
                    }
                    logo {
                        image {
                            created_at
                            url
                            width
                            height
                            alternativeText
                        }
                        text
                    }
                    facebook
                    twitter
                    instagram
                    linkedin
                }
            }
        `
    )

    return (
        <SFooter id="footer">
            <div className="top-footer-container">
                <div className="logo-container">
                    <div className="footer-logo">
                        <Link to="/">
                            { logo.image && <Image image={ logo.image } /> }
                        </Link>
                    </div>
                    <RichText text={ logo.text }/>
                </div>
                <MenuList menu={ menu } isMenuActive={ true } className="footer-nav" />
                <div className="footer-socials">
                    { facebook && <FaFacebookF /> }
                    { twitter && <FaTwitter /> }
                    { instagram && <FaInstagramSquare /> }
                    { linkedin && <FaLinkedinIn /> }
                </div>
            </div>
            <div className="bottom-footer-container">
                <div className="footer-copyright">
                    <p>{ copyright }</p>
                </div>
            </div>
        </SFooter>
    )
}

export default Footer;
