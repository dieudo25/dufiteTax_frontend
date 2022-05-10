import React from "react";
import CompanyForm from "./CompanyForm";
import SSection from "./style/main";

const ContactForm = ({
    data: { 
        strapi_component, 
        section, 
        container 
    } 
}) => (
    <SSection
        className={ `component ${strapi_component}` }
        section={ section }
        container={ container }
    >
        <div className="section-container">
            <h2 className="contact-form-title">Obtenir une offre pour ...</h2>
            <div className="contact-form-slider">
                <div className="contact-slider-item">
                    <h3>Société, association, activité d'indépendant existante</h3>
                    <CompanyForm />
                </div>
            </div>
        </div>
    </SSection>
)

export default ContactForm;