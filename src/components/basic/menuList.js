import React from "react";
import tw, { styled } from "twin.macro"
import { Link } from "gatsby"

const SMenuList = styled.nav`
    ${ tw`
        grid transition ease-in-out transition-all gap-10
    ` }

    ${ ({ className }) => (className.includes("header-nav")) && tw`
        justify-start
    ` }

    a {
        ${ tw`
            w-fit-content mx-auto uppercase font-semibold no-underline text-dark-500 transition ease-in-out cursor-pointer
            hover:text-second-500 hover:transition ease-in-out
        ` }

        ${ ({ className }) => (className.includes("footer-nav")) && tw`
            text-dark-500
        ` }

        &[aria-current="page"] {
            ${ tw`
                text-main-500
            ` }
        }
    }
`

const MenuList = ({ menu, isMenuActive, className }) => (
    <SMenuList className={ `menu ${ isMenuActive && ('is-visible' || '') } ${ className }` }>
        { menu.map((link) => (
            <Link key={link.page.slug} to={`/${ link.page.slug === "accueil" ? "" : link.page.slug }`}>{ link.page.title }</Link>
        )) }
    </SMenuList>
)

export default MenuList;