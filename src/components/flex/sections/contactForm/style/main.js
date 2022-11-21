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
    ${ ({ section }) => section.border_color != null &&
        `
            border: 1px solid ${ section.border_color };

            &:hover {
                border: 1px solid ${ section.border_color_hover };
            }
        ` 
    }

    div.section-container {
        ${ tw`
            mx-auto
        
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
        ${ ({ container }) => container.border_color != null &&
            `
                border: 1px solid ${ container.border_color };
    
                &:hover {
                    border: 1px solid ${ container.border_color_hover };
                }
            ` 
        }

        &.hide {
            ${ tw`
                hidden
            ` }  
        }

        .contact-form-title {
            ${ tw`
                text-center text-white pt-[50px] m-0
                pt-[100px] 
            ` }

            &.success {
                ${ tw`
                    h-[20vh] grid justify-items-center items-center p-10
                ` }

                span {
                    svg {
                        ${ tw`
                            w-[100px] h-full
                        ` }
                    }
                }
            }
        }

        .contact-form-slider {
            ${ tw`
                pb-[50px]
                md:pb-[100px]
            ` }
            div.slick-slider {
                ${ tw`
                    grid
                ` }

                ul.slick-dots.slick-subject {
                    display: grid!important;

                    ${ tw`
                        row-start-1 list-none p-0 gap-5 mt-0 pt-0 py-[50px] w-11/12 mx-auto
                        md:grid-cols-3
                    ` }

                    li {
                        ${ tw`
                            
                        ` }
                        button {
                            ${ tw`
                                w-full m-auto p-3 uppercase text-main-500 bg-white border-white cursor-pointer transition ease-in-out
                                hover:text-white hover:bg-main-500 hover:transition hover:ease-in-out
                            ` }
                        }
                    }
                }

                .slick-list {
                    form {
                        ${ tw`
                            grid gap-5 w-11/12 m-auto
                            md:grid-cols-3 
                        ` }
        
                        div.form-field-container:nth-of-type(1) {
                            ${ tw`
                                md:col-start-1 md:col-span-1
                            ` } 
                        }
        
                        div.form-field-container:nth-of-type(3) {
                            ${ tw`
                                md:col-start-1 md:col-span-1
                            ` } 
                        }
        
                        div.form-field-container:nth-of-type(6) {
                            ${ tw`
                                md:col-start-1 md:col-span-1
                            ` } 
                        }
        
                        div.form-field-container:nth-of-type(9) {
                            ${ tw`
                                md:col-start-1 md:col-span-3
                            ` } 
                        }
        
                        div.form-field-container:nth-of-type(10) {
                            ${ tw`
                                md:col-start-1 md:col-span-3
                            ` } 
                        }
        
                        div.form-field-container:nth-of-type(11) {
                            input {
                                ${ tw`
                                    
                                ` }
                            } 
                        }
        
                        label {
                            ${ tw`
                                block uppercase tracking-wide text-xs font-bold mb-2 text-white
                            ` }
        
                            &.confirm-data-manage {
                                ${ tw`                            
                                    normal-case font-normal
                                ` }
                            }
                        }
        
                        input {
                            ${ tw`
                                block w-full border py-2
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
                                appearance-none block w-full border py-2
                                focus:outline-none focus:bg-white
                                
                            ` }
                        }

                        select {
                            ${ tw`
                                block w-full border py-2
                                focus:outline-none focus:bg-white
                            ` }
                        }
        
                        p {
                            ${ tw`
                                text-white text-sm italic
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
                                    border-2 border-white w-[fit-content] bg-white text-main-500 m-auto px-5 py-3 transition ease-in-out uppercase cursor-pointer
                                    hover:bg-main-500 hover:text-white hover:transition hover:ease-in-out
                                ` } 
                            }
                        }
                    }

                    form.call-form {
                        div.form-field-container:nth-of-type(1) {
                            ${ tw`
                                md:col-start-1 md:col-span-1
                            ` } 
                        }
        
                        div.form-field-container:nth-of-type(3) {
                            ${ tw`
                                md:col-start-3 md:col-span-1
                            ` } 
                        }
                        
                        div.form-field-container:nth-of-type(4) {
                            ${ tw`
                                md:col-start-1 md:col-span-1
                            ` } 
                        }
        
                        div.form-field-container:nth-of-type(6) {
                            ${ tw`
                                md:col-start-3 md:col-span-1
                            ` } 
                        }
        
                        div.form-field-container:nth-of-type(7) {
                            ${ tw`
                                md:col-start-1 md:col-span-3
                            ` } 
                        }
        
                        div.form-field-container:nth-of-type(8) {
                            ${ tw`
                                md:col-start-1 md:col-span-3
                            ` } 
                        }
                    }
                }
            }
        }
    }
`
export default SSection;