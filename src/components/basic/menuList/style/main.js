import tw, { styled } from "twin.macro"

const SMenuList = styled.nav`
${ tw`
    grid transition ease-in-out transition-all gap-10
` }

${ ({ className }) => (className.includes("header-nav")) && tw`
    
` }

a {
    ${ tw`
        uppercase font-semibold no-underline text-black transition ease-in-out cursor-pointer
        hover:text-main-500 hover:transition hover:ease-in-out
    ` }

    &[aria-current="page"] {
        ${ tw`
            text-main-500
        ` }
    }
}
`

export default SMenuList;