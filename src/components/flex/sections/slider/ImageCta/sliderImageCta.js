import React from "react";
import Slider  from "react-slick";

import "../../../../../style/slick.css";

import RichText from "../../../../basic/richText";
import Button from "../../../../basic/button/button";
import Image from "../../../../basic/image/image";
import SSection from "./style/main";


const SliderImageCta = ({
    data: {
        strapi_component,
        cta,
        style,
        settings,
        responsive_settings,
    } 
}) => {

    let responsive = responsive_settings.map((settings) => ({
        breakpoint: settings.breakpoint,
        settings: {
            autoplay: settings.auto_play,
            speed: settings.speed,
            arrows: settings.arrows,
            dots: settings.dots,
            fade: settings.fade,
            infinite: settings.infinite,
            pauseOnFocus: settings.pause_on_focus,
            pauseOnHover: settings.pause_on_hover,
            pauseOnDotsHover: settings.pause_on_dots_hover,
            slidesToShow: settings.slide_to_show,
            slideToScroll: settings.slide_to_scroll,
            swipeToSlide: settings.swipe,
            vertical: settings.direction === "vertical" ? true : false,
            verticalSwiping: settings.vertical_swipe,
            centerMode: settings.center_mode,
            centerPadding: settings.center_padding,
            breakpoint: settings.breakpoint,
        }
    }))

    const slideSettings = {
        className: "cta-slider",
        autoplay: settings.auto_play,
        speed: settings.speed,
        arrows: settings.arrows,
        dots: settings.dots,
        fade: settings.fade,
        infinite: settings.infinite,
        pauseOnFocus: settings.pause_on_focus,
        pauseOnHover: settings.pause_on_hover,
        pauseOnDotsHover: settings.pause_on_dots_hover,
        slidesToShow: settings.slide_to_show,
        slideToScroll: settings.slide_to_scroll,
        swipeToSlide: settings.swipe,
        vertical: settings.direction === "vertical" ? true : false,
        verticalSwiping: settings.vertical_swipe,
        centerMode: settings.center_mode,
        centerPadding: settings.center_padding,
        mobileFirst: true,
        responsive: responsive,
    }

    return (
        <SSection
            id={ style && style.css_id }
            className={ `component ${strapi_component} ${ style && style.css_classes }` }
        >
            <Slider { ...slideSettings }>
                {cta.map((item) => (
                    <div className="cta-image-item">
                        <Image image={item.image}/>
                        <div className="cta-container">
                            <RichText text={ item.text }/>
                            <Button button={ item.button }/>
                        </div>
                    </div>
                ))}
            </Slider>
        </SSection>
    )
}

export default SliderImageCta;