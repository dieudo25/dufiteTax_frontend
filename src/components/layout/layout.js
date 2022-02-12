/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import tw, { styled } from "twin.macro"

import Header from "./header"
import Footer from "./footer"

import "../../style/layout.css"

const SPageContainer = styled.div`
  ${ tw`
    
  ` }

  .main-nav {
    ${ tw`
      row-start-1 min-h-[80px]
    ` }

    ${ ({ className }) => (className === "page-accueil" && tw`
      
    `) }

    nav {
      &.menu.is-visible {
        ${ tw`
          
        `}
      }
    }
  }

  main {
    scroll-behavior: smooth;
    scroll-padding: 50px;
    
    ${ tw`
      row-start-2 grid gap-[50px] overflow-x-hidden
      md:gap-[100px] 
    ` }

    ${ ({ className }) => (className === "page-a-propos" && tw`
      lg:gap-[150px]
    `) }

    ${ ({ className }) => className === "page-accueil" && tw`
      /* max-h-screen overflow-y-scroll */
    ` }

    > section, footer {

      ${ tw`
        
      ` }

      &:not(:first-of-type) {
        ${ tw`
          max-w-[960px]
        ` }
      }
    }

    section {
      &.home-section {
        ${ tw`
          relative
        ` }
      }

      &.service-section {
        &.service-how {
          ${ tw`
            
          ` }

          img {
            ${ tw`
              object-contain
            ` }
          }
        }
      }

    }

    #footer {
      ${ tw`
        
      ` }
    }
  }
`

const Layout = ({ slug, children }) => (
    <SPageContainer id="page_layout" className={`page-${ slug }`}>
      <Header siteTitle={ slug || `Title`}/>
      <main className={`snap snap-y snap-mandatory`} >
        {children}
      </main>
      <Footer/>
    </SPageContainer>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
