import tw, { styled } from "twin.macro"

const SSection = styled.section`
    /* Section width */
    ${ ({ section }) => section.is_full_width
        ?
        tw`w-full`
        :
        tw`
            w-10/12
            xl:w-[960px]
        `
    }

    /* Section BG COLOR */
    ${ ({ section }) => section.bg_color != null &&
        `
            background-color: ${ section.bg_color };

            &:hover {
                background-color: ${ section.bg_color_hover };
            }
        ` 
    }

    /* Section border color */
    ${ ({ section }) => section.borer_color != null &&
        `
            border: 1px solid ${ section.borer_color };

            &:hover {
                border: 1px solid ${ section.borer_color_hover };
            }
        ` 
    }

    /* Classname - PAGE ABOUT - ABOUT-VALUES-GRID */
    ${ ({ className }) => className.includes('about-values-grid') && tw`
        mb-[0!important]           
    ` }

    .section-container {
        ${ tw`
            m-auto grid gap-10 justify-items-center
        ` }

        /* Container width */
        ${ ({ container }) => container.is_full_width
            ?
            tw`w-full`
            :
            tw`
                w-10/12
                xl:w-[960px]
            `
        }

        /* Container BG Color */
        ${ ({ container }) => container.bg_color != null &&
            `
                background-color: ${ container.bg_color };

                &:hover {
                    background-color: ${ container.bg_color_hover };
                }
            ` 
        }

        /* Controller border color */
        ${ ({ container }) => container.borer_color != null &&
            `
                border: 1px solid ${ container.borer_color };

                &:hover {
                    border: 1px solid ${ container.borer_color_hover };
                }
            ` 
        }

        /* Classname - PAGE ABOUT - ABOUT-VALUES-GRID */
        ${ ({ className }) => className.includes('about-values-grid') && tw`
            border-solid border-white border-0 border-b-2               
        ` }
        
        .cards-grid {
            ${ tw`
                grid gap-[50px] my-[50px]
                sm:grid-cols-2 sm:my-[100px]
                lg:grid-cols-4
    
            ` }
    
            a {
                ${ tw`
                    no-underline
                ` }
            }
        }
    }
`
export default SSection;