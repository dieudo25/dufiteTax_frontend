import tw, { styled } from "twin.macro"


const SHeader = styled.section`
.top-nav-container {
  ${ tw`
    w-10/12 m-auto
    md:flex md:justify-between md:items-center
    xl:w-[960px]
  ` }

  .nav-logo {
    .img-container {
      ${ tw`
        w-[200px] m-auto
      ` }
    }
  }
  .rich-text {
    h2 {
      ${ tw`
        m-0 text-center font-light
        md:text-[21px]
        lg:text-[21px]
        xl:text-[2rem]
      ` }
      a {
        ${ tw`
          no-underline text-black transition
          hover:text-main-500 hover:font-bold transition
          `}
      }
      strong {
        ${ tw`
          text-main-500
        ` }
      }
    }
  }
}

.middle-nav-container {
  ${ tw`
    bg-main-500
  ` }

  .block-container {
    ${ tw`
      w-10/12 m-auto grid justify-center gap-10 mt-[50px] py-10
      md:grid-cols-[226px 226px 1fr] md:justify-between md:mt-0
      lg:grid-cols-[226px 226px 195px]
      xl:w-[960px] 
    ` }
    a.card-link {
      ${ tw`
        no-underline
      ` }
      .info-card {
        ${ tw`
          flex items-center m-auto w-[226px] gap-5
        ` }
        .icon-container {
          ${ tw`
            w-[58px] h-[58px] rounded-full transition ease-in-out 
          ` }
          svg {
            ${ tw`
              p-3 text-white text-[32px] border border-solid border-white rounded-full transition ease-in-out 
            ` }
          }
        }
        span {
          ${tw`
            text-white
          ` }
        }
      }

      &:hover {
        .info-card {
          ${ tw`
          ` }
          .icon-container {
            ${ tw`
              bg-white transition ease-in-out 
            ` }
            svg {
              ${ tw`
                text-main-500 transition ease-in-out 
              ` }
            }
          }
        }
      }
    }
    

    .btn-container {
      ${ tw`
        text-center 
      ` }
    }
  }
}

.menu-button-container {
  ${ tw`
    w-10/12 m-auto flex justify-end p-5
    lg:hidden
  ` }

  .btn-container {
    ${ tw`
      inline-block cursor-pointer flex items-center gap-2 border-0 bg-white 
    ` }

    .btn-text {
      ${ tw`
        text-main-500 font-bold uppercase
      ` }
    }

    .btn-icon {
      .bar1, .bar2, .bar3 {
        ${ tw`w-[35px] h-[5px] bg-main-500 transition ease-in-out` }
      }
  
      .bar1 {
        ${ tw`
          mb-1
        ` }  
  
        &.is-visible {
          -webkit-transform: rotate(-45deg) translate(-9px, 6px);
          transform: rotate(-45deg) translate(-9px, 6px);
        }
      }
      
      .bar2 {
        ${ tw`
          mb-1
        ` }  
  
        &.is-visible {
          opacity: 0;
        }
      }
      
      .bar3 {
        &.is-visible {
          -webkit-transform: rotate(45deg) translate(-8px, -8px);
          transform: rotate(45deg) translate(-8px, -8px);
        }
      }
    } 
  } 
}

.bottom-nav-container {
  ${ tw`
    grid justify-center py-10 gap-10 w-10/12 mx-auto transition ease-in-out
    lg:grid-cols-[1fr 172px] items-center lg:mx-auto lg:py-5
    xl:w-[960px]
  ` }

  .header-nav {
    ${ tw`
      grid justify-center gap-5
      max-lg:text-center
      lg:flex lg:justify-start
  ` }

    a {
      ${ tw`
        lg:w-[fit-content]
      `}
    }
  }

  .customer-zone-btn {
    ${ tw`
      hidden
    `}
  }

  &.not-visible {
    ${ tw`
      max-lg:h-0 max-lg:p-0 overflow-hidden
    ` }
  }
}
`;

export default SHeader;