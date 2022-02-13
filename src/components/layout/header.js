import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import tw, { styled } from "twin.macro"
import { useStaticQuery, graphql } from "gatsby"

import MenuList from "../basic/menuList"
import Image from "../basic/image"
import Card from "../basic/card"
import Button from "../basic/button"

const SSection = styled.section`
  ${ tw`
    w-full bg-white
  ` }

  div.nav-container{
    ${ tw`
      
    ` }

    .nav-section-1 {
      ${ tw`
        grid grid-rows-1 grid-cols-[0.5fr 3fr 1fr] w-[960px] m-auto h-[120px]
      `}
      .nav-logo {
        ${ tw`
          py-4 w-[fit-content] grid my-auto
        ` }
  
        a {
          ${ tw`
            text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg 
          ` }
  
          .img-container {
            ${ tw`
              w-[58px]
              md:w-[80px]
            ` }
          }
        }
  
        div.nav-button {
          button.small-device {
            background-image: url('/image/menu_icon.svg');
    
            ${ tw`
              bg-white bg-contain bg-no-repeat w-10 h-10 border-0 cursor-pointer
              md:hidden
              focus:outline-none
          ` }
          }
        }
      }
  
      div.nav-info {
        ${ tw`
          grid grid-rows-1 grid-cols-2
        `}
      }

      div.nav-contact-us {
        ${ tw`
          grid items-center uppercase justify-end
        `}
      }
    }

    .nav-section-2 {
      ${ tw`
        bg-main-500 grid m-auto 
      `}

      .menu-container {
        ${ tw`
          w-[960px] m-auto grid grid-rows-1 grid-cols-[1fr 150px] h-[70px]
        `}
        nav {
          ${ tw`
            transition ease-in-out transition-all
          ` }
    
          a {
            ${ tw`
              max-mdd:hidden transition ease-in-out transition-all text-white grid m-auto
            ` }
          }
    
          &.menu.is-visible {
            ${ tw`
              max-mdd:h-[calc(100vh - 84px)]
            ` }
    
            a {
              ${ tw`
                max-mdd:block
              ` }
            }
          }
        }

        .winbooks-button {
          ${ tw`
            grid m-auto uppercase
          `}
        }
      }
    }
  }
`;

const Header = () => {
  const  { strapiNavigation: { logo, info, menu, contact_us, winbooks_link } }  = useStaticQuery(
    graphql`
      query {
        strapiNavigation {
          logo {
            image {
              alternativeText
              url
              name
            }
          }
          info {
            image {
              alternativeText
              url
              name
            }
            text
          }
          menu {
            page {
              slug
              title
            }
          }
          winbooks_link {
            color
            color_hover
            external_page
            text
            text_color
            text_color_hover
          }
          contact_us {
            color
            color_hover
            id
            text
            text_color
            text_color_hover
          }
        }
      }  
    `
  )

  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <SSection className="main-nav" >
      <div className="nav-container">
        <div className="nav-section-1">
          <div className="nav-logo">
            <Link to='/'>
              { logo.image ? <Image image={ logo.image } /> : logo.text }
            </Link>
            <div className="nav-button">
              <button className="small-device" aria-label="toggle-nav-menu" onClick={ () => setIsMenuActive(!isMenuActive) } />
            </div>
          </div>
          <div className="nav-info">
            { info.map(card => (
              <Card key={ card.text } data={ card } className="header-info"/>
            ))}
          </div>
          <div className="nav-contact-us">
              {console.log(contact_us)}
            <Button button={ contact_us } />
          </div>
        </div>
        <div className="nav-section-2">
          <div className="menu-container">
            <MenuList menu={ menu } isMenuActive={ isMenuActive } className="header-nav" />
            <div className="winbooks-button">
              <Button button={ winbooks_link }/>
              {console.log(winbooks_link)}
            </div>
          </div>
        </div>
      </div>
    </SSection>
  )
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header;
