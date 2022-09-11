import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { FaFacebookF, FaTwitter, FaInstagramSquare, FaLinkedinIn } from "react-icons/fa"

import Image from "../../basic/image/image"
import MenuList from "../../basic/menuList/menuList"
import RichText from "../../basic/richText"
import SFooter from "./style/main"

const Footer = () => {
    const  { 
        strapiFooter: { 
            logo, 
            menu, 
            copyright, 
            facebook, 
            twitter, 
            instagram, 
            linkedin,
        } 
    }  = useStaticQuery(
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
                    { facebook && 
                        <a href={facebook} target="_blank" rel="noreferrer">
                            <FaFacebookF />
                        </a> 
                    }
                    { twitter && 
                        <a href={twitter} target="_blank" rel="noreferrer">
                            <FaTwitter />
                        </a> 
                    }
                    { instagram && 
                        <a href={instagram} target="_blank" rel="noreferrer">
                            <FaInstagramSquare />
                        </a> 
                    }
                    { linkedin && 
                        <a href={linkedin} target="_blank" rel="noreferrer">
                            <FaLinkedinIn />
                        </a> 
                    }
                </div>
            </div>
            <div className="footer-mentions">
                <p>DUFITE TAX ADVISORS S.R.L. - I.T.A.A 52.390.508
                </p>
                <p>Rue Joseph Stevens 7, 
                    <span className="post-code">1000 Bruxelles</span>
                </p>
                <p>BCE 0785.282.108</p>
            </div>
            <div className="bottom-footer-container">
                <div className="footer-copyright">
                    <RichText text={ copyright } />
                </div>
            </div>
        </SFooter>
    )
}

export default Footer;
