import tw, { styled } from "twin.macro"


const SSection = styled.section`
${ tw`
    relative h-[400px]
    sm:h-[300px]
    md:h-[400px]

` }

.img-container {
    ${ tw`
        h-full bg-dark-500
    ` } 

    img {
        ${ tw`
            object-cover object-center opacity-60 
        ` }
        
        ${ ({ className }) => (className.includes("header-services") && tw`
            sm:object-[0% 22%]
        `) }

        ${ ({ className }) => (className.includes("header-service-life-project") && tw`
            sm:object-[0% 26%]
        `) }

        ${ ({ className }) => (className.includes("header-service-every-day-life") && tw`
            sm:object-[0% 37%]
        `) }

    }
}

.header-text {
    ${ tw`
        absolute top-[calc(50% - calc(40px / 2))] w-full
    ` }

    h1 {
        ${tw`
            w-10/12 m-auto text-white text-center
            md:text-left
            xl:w-[960px]
        ` }
    }
}
`

export default SSection;