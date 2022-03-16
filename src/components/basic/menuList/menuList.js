import React from "react";
import { Link } from "gatsby"

import SMenuList from "./style/main";

const MenuList = ({ menu, isMenuActive, className }) => (
    <SMenuList className={ `menu ${ isMenuActive && ('is-visible' || '') } ${ className }` }>
        { menu.map((link) => (
            <Link key={link.page.slug} to={`/${ link.page.slug === "accueil" ? "" : link.page.slug }`}>{ link.page.title }</Link>
        )) }
    </SMenuList>
)

export default MenuList;