import tw, { styled } from "twin.macro"


const SPageContainer = styled.div`
${ tw`
  
` }

.main-nav {
  ${ tw`
    row-start-1 min-h-[80px]
  ` }

  ${ ({ className }) => (className === "page-accueil" && tw`
    
  `) }

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
    &:not(:last-child) {
      ${ tw`
        mb-[50px]
        sm:mb-[100px]
      ` }
    }
  }
}
`

export default SPageContainer;