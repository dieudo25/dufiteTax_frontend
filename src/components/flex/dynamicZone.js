import React from 'react';

import HeroImage from './sections/heroImage/heroImage';
import C2AImage from './sections/c2aImage/c2aImage';
import RichTextButton from './sections/richTextButton/richTextButton';
import SliderCard from './sections/slider/card/sliderCard';
import Header from './sections/header/header';
import Grid from './sections/grid/grid';
import Paragraph from './sections/paragraph/paragraph';
import RichText2Image from './sections/richText2Image/richText2Image';
import SliderImageCta from './sections/slider/ImageCta/sliderImageCta';
import BgImageText from './sections/bgImageText/bgImageText';
import ContactForm from './sections/contactForm/contactForm';
import CustomAccordion from './sections/accordion/accordion';

const DynamicZone = ({ sections }) => (
    <>
      {sections.map((component) => 
        ((() => {
          switch(component.strapi_component) {
            case 'page.hero-image':
              return <HeroImage key={ `${component.strapi_component}_${component.id}` } data={component}/>
            case 'page.call2action':
              return <C2AImage key={ `${component.strapi_component}_${component.id}` } data={component}/>
            case 'page.richtext-button':
              return <RichTextButton key={ `${component.strapi_component}_${component.id}` } data={component}/>
            case 'page.slider':
              return <SliderCard key={ `${component.strapi_component}_${component.id}` } data={component}/>
            case 'page.header':
              return <Header key={ `${component.strapi_component}_${component.id}` } data={component}/>
            case 'page.grid':
              return <Grid key={ `${component.strapi_component}_${component.id}` } data={component}/>
            case 'page.paragraph':
              return <Paragraph key={ `${component.strapi_component}_${component.id}` } data={component}/>
            case 'page.rich-text2-image':
              return <RichText2Image key={ `${component.strapi_component}_${component.id}` } data={component}/>
            case 'page.slider-image-cta':
              return <SliderImageCta key={ `${component.strapi_component}_${component.id}` } data={component}/>
            case 'page.bg-image-text':
              return <BgImageText key={ `${component.strapi_component}_${component.id}` } data={component}/>
            case 'form.contact-form':
              return <ContactForm key={ `${component.strapi_component}_${component.id}` } data={component}/>
            case 'page.accordion':
              return <CustomAccordion key={ `${component.strapi_component}_${component.id}` } data={component}/>
            default:
              return <h2 key={Math.random()}>Default case - component not found</h2>
          }
        })())
      )}
    </>
);

export default DynamicZone;