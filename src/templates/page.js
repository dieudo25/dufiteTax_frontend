import React from 'react'

import Page from "../components/page"
import Seo from "../components/seo"

const PageTemplate = ({
    pageContext: { 
        id, 
        title, 
        slug, 
        content, 
        seo 
    }}) => (
    <React.StrictMode>  
        <Seo 
            title={ seo.title || title } 
            description={ seo.description || "No description" }
        />  
        <Page
            id={ id }
            slug={ slug }
            title={ title }
            content={ content }
        />
    </React.StrictMode>
)

export default PageTemplate;