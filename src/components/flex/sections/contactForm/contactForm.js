import React from "react";
import CompanyForm from "./CompanyForm";
import IdeaForm from "./IdeaForm";
import CallForm from "./callForm";
import SSection from "./style/main";
import Slider from "react-slick";

const ContactForm = ({
    data: { 
        strapi_component, 
        section, 
        container,
        style
    } 
}) => {
    const switchSubject = (i) => {
        switch(i) {
            case 0:
                return "mon entreprise"
            case 1:
                return "un projet"
            default:
                return "demander un appel"
        }
    }

    const settings = {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        draggable: false,
        dots: true,
        dotsClass: "slick-dots slick-subject",
        arrows: false,
        customPaging: function(i) {
            return (
                <button>
                    { switchSubject(i) }
                </button>
            );
        },
    };

    return (
        <SSection
            id={ style.css_id }
            className={ `component ${strapi_component} ${ style.css_classes }` }
            section={ section }
            container={ container }
        >
            <div className="section-container">
                <h2 className="contact-form-title">Je souhaite contacter Dufite Tax Advisors pour</h2>
                <div className="contact-form-slider">
                    <Slider {...settings}>
                        <CompanyForm />
                        <IdeaForm />
                        <CallForm />
                    </Slider>
                </div>
            </div>
        </SSection>
        )
    }

export default ContactForm;

