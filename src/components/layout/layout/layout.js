/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"

import Header from "../header/header"
import Footer from "../footer/footer"
import SPageContainer from "./style/main"

import "../../../style/layout.css"


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
