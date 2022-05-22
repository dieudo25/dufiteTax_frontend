import React, { useState } from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { MdPhone, MdLocationOn } from "react-icons/md"

import MenuList from "../../basic/menuList/menuList"
import Image from "../../basic/image/image"
import Button from "../../basic/button/button"
import ExternalButton from "../../basic/externalButton/externalButton"
import RichText from "../../basic/richText"
import SHeader from "./style/main"

const Header = () => {
  const  { strapiNavigation: { logo, phone, location, menu, contact_us, customer_zone } }  = useStaticQuery(
    graphql`
      query {
        strapiNavigation {
          contact_us {
            border_color
            border_color_hover
            bg_color
            bg_color_hover
            text
            text_color
            text_color_hover
            page {
              title
              slug
            }
          }
          customer_zone {
            bg_color
            bg_color_hover
            border_color
            border_color_hover
            link
            text
            text_color
            text_color_hover
          }
          location
          logo {
            image {
              alternativeText
              caption
              height
              name
              url
              width
              size
            }
            text
          }
          phone
          menu {
            page {
              slug
              title
            }
          }
        }
      }  
    `
  )

  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <SHeader className="main-nav" >
      <div className="top-nav-container">
        <div className="nav-logo">
          <Link to='/'>
            { logo.image ? <Image image={ logo.image } /> : logo.text }
          </Link>
        </div>
        <RichText text={ logo.text }/>
      </div>
      <div className="middle-nav-container">
        <div className="block-container">
          <div className="info-card card-phone">
            <div className="icon-container">
              <MdPhone />
            </div>
            <span><a href={`tel:${ phone }`}>{ phone }</a></span>
          </div>
          <div className="info-card card-location">
            <div className="icon-container">
              <MdLocationOn />
            </div>
            <span>{ location }</span>
          </div>
          <Button button={ contact_us } />
        </div>
      </div>
      <div className="bottom-nav-container">
        <MenuList menu={ menu } isMenuActive={ isMenuActive } className="header-nav" />
        <ExternalButton button={ customer_zone } icon="FaUser"/>
      </div>
    </SHeader>
  )
}

export default Header;
