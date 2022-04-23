import React from "react";
import { Link } from "gatsby";
import Slider  from "react-slick";
import "../../../../../style/slick.css";

import Card from "../../../../basic/card/card";
import Anchor from "../../../../basic/anchor/anchor";
import SSection from "./style/main";

const SliderCard = ({
    data: {
        strapi_component,
        cards,
        style,
        settings,
        responsive_settings,
        anchor_down,
        anchor_up,
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
        className: "cards-slider",
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

            { anchor_up && 
                <Anchor 
                    anchor={ anchor_up } 
                    position="top"
                    className="anchor-home-section" 
                />
            }
            
            <Slider { ...slideSettings }>
                {cards.map((item) => (
                    <Link key={`card-${ item.id }`} to={ item.page && item.page.slug !== 'accueil' ? item.page.slug : '/' }>
                        <Card data={ item } className={ style && style.css_classes } />
                    </Link>
                ))}
            </Slider>

            { anchor_down && 
                <Anchor 
                    anchor={ anchor_down } 
                    position="bottom"
                    className="anchor-home-section" 
                />
            }

        </SSection>
    )
}

export default SliderCard;