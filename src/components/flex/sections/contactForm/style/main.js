import tw, { styled } from "twin.macro"

const SSection = styled.section`
    ${ tw`
        mb-[50px]    
        md:mb-[100px]    
    ` }

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

    div.section-container {
        ${ tw`
            mx-auto
            xl:w-[960px]
        
        ` }
    
        /* Container width */
        ${ ({ container }) => container.is_full_width
            ?
            tw`w-full`
            :
            tw`
                w-10/12
                lg:w-[960px]
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

        .contact-form-title {

        }

        .contact-form-slider {
            .contact-slider-item {
                form {
                    ${ tw`
                        grid gap-5
                        md:grid-cols-3
                    ` }

                    .form-field-container:nth-child(2) {
                        ${ tw`
                            md:col-start-1 md:col-span-1
                        ` } 
                    }

                    .form-field-container:nth-child(4) {
                        ${ tw`
                            md:col-start-1 md:col-span-1
                        ` } 
                    }

                    .form-field-container:nth-child(7) {
                        ${ tw`
                            md:col-start-1 md:col-span-1
                        ` } 
                    }

                    .form-field-container:nth-child(10) {
                        ${ tw`
                            md:col-start-1 md:col-span-3
                        ` } 
                    }

                    .form-field-container:nth-child(11) {
                        ${ tw`
                            md:col-start-1 md:col-span-3
                        ` } 
                    }

                    .form-field-container:nth-child(12) {
                        input {
                            ${ tw`
                                
                            ` }
                        } 
                    }

                    label {
                        ${ tw`
                            block uppercase tracking-wide text-xs font-bold mb-2
                        ` }

                        &.confirm-data-manage {
                            ${ tw`                            
                                normal-case font-normal
                            ` }
                        }
                    }

                    input {
                        ${ tw`
                            block w-full border rounded py-2  leading-tight rounded-none
                            focus:outline-none focus:bg-white
                        ` }
                    }

                    input.checkbox-form {
                        ${ tw`
                            w-[fit-content]
                        ` }
                    }

                    textarea {
                        ${ tw`
                            appearance-none block w-full border rounded py-2  leading-tight rounded-none
                            focus:outline-none focus:bg-white
                            
                        ` }
                    }

                    p {
                        ${ tw`
                            text-main-500 text-xs italic
                        ` }
                    }

                    .valid-checkbox-field {
                        ${ tw`
                            flex gap-5 text-gray-500
                        ` }
                    }

                    div.submit-container {
                        ${ tw`
                            md:col-span-3
                        ` } 
                        .submit-form {
                            ${ tw`
                                border-2 border-main-500 w-[fit-content] bg-main-500 text-white px-5 py-3 transition ease-in-out uppercase cursor-pointer
                                hover:bg-white hover:text-main-500 hover:transition hover:ease-in-out
                                md:m-auto
                            ` } 
                        }
                    }
                }
            }
        }
    }
`
export default SSection;