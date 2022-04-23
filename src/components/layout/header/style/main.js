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
    h1 {
      ${ tw`
        m-0 text-center font-light
        md:text-[21px]
        lg:text-[21px]
        xl:text-[2rem]
      ` }
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
    .info-card {
      ${ tw`
        flex items-center m-auto w-[226px] gap-5
      ` }
      .icon-container {
        ${ tw`
          w-[58px] h-[58px]
        ` }
        svg {
          ${ tw`
            p-3 text-white text-[32px] border border-solid border-white rounded-full
          ` }
        }
      }
      span, a {
        ${tw`
          text-white no-underline
        ` }
      }
    }

    .btn-container {
      ${ tw`
        text-center 
      ` }
    }
  }
}

.bottom-nav-container {
  ${ tw`
    grid justify-center py-10 gap-10 w-10/12 mx-auto
    lg:grid-cols-[1fr 172px] items-center lg:mx-auto lg:py-5
    xl:w-[960px]
  ` }
  .header-nav {
    ${ tw`
      grid justify-center gap-5
      lg:justify-start lg:grid-cols-4 lg:gap-0 lg:w-[fit-content]
  ` }
  }
  .btn-container {

  }
}
`;

export default SHeader;