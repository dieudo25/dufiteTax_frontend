import React, { useState } from "react"
import { Link } from "gatsby"
import tw, { styled } from "twin.macro"
import { useStaticQuery, graphql } from "gatsby"
import { MdPhone, MdLocationOn } from "react-icons/md"

import MenuList from "../basic/menuList"
import Image from "../basic/image"
import Button from "../basic/button"
import ExternalButton from "../basic/externalButton"
import RichText from "../basic/richText"

const SSection = styled.section`
  .top-nav-container {
    ${ tw`
      w-10/12 m-auto
      md:flex md:justify-between md:items-center
      xl:w-[960px]
    ` }
    .nav-logo {
      .img-container {
        ${ tw`
          w-[200px] m-auto
        ` }
      }
    }
    .rich-text {
      h1 {
        ${ tw`
          m-0 text-center font-light
          md:text-[21px]
          lg:text-[21px]
          xl:text-[2rem]
        ` }
        strong {
          ${ tw`
            text-main-500
          ` }
        }
      }
    }
  }

  .middle-nav-container {
    ${ tw`
    bg-main-500
    ` }
    .block-container {
      ${ tw`
        w-10/12 m-auto grid justify-center gap-10 mt-[50px] py-10
        md:grid-cols-[226px 226px 1fr] md:justify-between md:mt-0
        lg:grid-cols-[226px 226px 195px]
        xl:w-[960px] 
      ` }
      .info-card {
        ${ tw`
          flex items-center m-auto w-[226px] gap-5
        ` }
        .icon-container {
          ${ tw`
            w-[58px] h-[58px]
          ` }
          svg {
            ${ tw`
              p-3 text-white text-[32px] border border-solid border-white rounded-full
            ` }
          }
        }
        span, a {
          ${tw`
            text-white no-underline
          ` }
        }
      }

      .btn-container {
        ${ tw`
          text-center 
        ` }
      }
    }
  }

  .bottom-nav-container {
    ${ tw`
      grid justify-center py-10 gap-10 w-10/12 mx-auto
      lg:grid-cols-[1fr 172px] items-center lg:mx-auto lg:py-5
      xl:w-[960px]
    ` }
    .header-nav {
      ${ tw`
        grid justify-center gap-5
        lg:justify-start
    ` }
    }
    .btn-container {

    }
  }
`;

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
    <SSection className="main-nav" >
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
          <div className="info-card">
            <div className="icon-container">
              <MdPhone />
            </div>
            <span><a href={`tel:${ phone }`}>{ phone }</a></span>
          </div>
          <div className="info-card">
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
    </SSection>
  )
}

export default Header;
