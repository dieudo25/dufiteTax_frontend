import tw, { styled } from "twin.macro"


const SSection = styled.section`
${ tw`
    w-screen h-screen grid mx-auto my-0 grid-rows-1 grid-cols-1
` }

div.img-container.hero-image {
    ${ tw`
        w-screen h-screen
    ` }

    img {
        ${ tw `
            w-full h-full object-cover
            xsm:object-[34% 0%]
            sm:object-center
        ` }
    }
}

div.rich-text {
    ${ tw`
        row-end-2 col-start-1 mt-[15vh] w-screen h-screen text-center
        md:mt-[20vh]
    ` }

    * {
        ${ tw`
            mx-[10%]
        ` }
    }

    h1 {
        ${ tw`
            mb-8
            md:mb-20
        ` }
    }
}

`

export default SSection;