import tw, { styled } from "twin.macro"


const SPageContainer = styled.div`
${ tw`
  
` }

.main-nav {
  ${ tw`
    row-start-1 min-h-[80px]
  ` }

  nav {
    &.menu.is-visible {
      ${ tw`
        
      `}
    }
  }
}

main {
  scroll-behavior: smooth;
  scroll-padding: 50px;
  
  ${ tw`
    overflow-x-hidden
  ` }

  section {
    ${ tw`
      mb-[50px]
      sm:mb-[100px]
    ` }
  }

  section#header-contact, section#contact-p, section#contact-form,section.header-about, section.about-us-cta, .home-pricing {
    ${ tw`
        mb-0
    ` }
  }
}
`

export default SPageContainer;