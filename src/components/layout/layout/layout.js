/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import CookieConsent from 'react-cookie-consent';
import { Link } from "gatsby";


import Header from "../header/header"
import Footer from "../footer/footer"
import SPageContainer from "./style/main"

import "../../../style/layout.css"


const Layout = ({ slug, children }) => (
    <SPageContainer id="page_layout" className={`page-${ slug }`}>
      <Header siteTitle={ slug || `Title`}/>
      <main>
        {children}
      </main>
      <Footer/>
      <CookieConsent
        overlay={true}
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        cookieName="gatsby-gdpr-google-analytics"
        style={{ 
          background: "#7C0000" 
        }}
        buttonStyle={{ 
          color: "#7C0000",
          fontSize: "13px", 
          background: "#FFF"
        }}
      >
        Le Site utilise des cookies pour distinguer les Utilisateurs du Site. 
        Cela permet de fournir aux Utilisateurs une meilleure expérience de navigation 
        et une amélioration du Site et de son contenu. 
        <Link to="/politique-de-confidentialite" className="gdpr-link"> 
          Les objectifs et modalités 
          des cookies sont contenus dans ce présent article
        </Link>.
      </CookieConsent>
    </SPageContainer>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
