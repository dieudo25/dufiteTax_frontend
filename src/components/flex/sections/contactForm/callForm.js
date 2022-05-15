import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import getCurrentDate from "../../../../utils/date";

export const CallForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (values) => {
    console.log(values);
    axios.post(`${ process.env.URL }/emails`, {
        subject: values.subject,
        company_name: values.company_name,
        email: values.email,
        phone_num: values.phone_num,
        availability_1: values.availability_1,
        availability_2: values.availability_2,
        availability_3: values.availability_3,
        call_subject: values.call_subject,
        confirm_data_manage: values.confirm_data_manage,
        decla_tva: values.decla_tva,
        message: values.message,
    }).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });
  };

  return (
    <form onSubmit= { handleSubmit(onSubmit) } className="call-form">
        <input 
            id="subject" 
            value="call" 
            type="hidden" 
            {...register("subject")} 
        />
        <div className="form-field-container">
            <label htmlFor="company_name">Nom et prénom</label>
            <input 
                id="company_name" 
                name="company_name" 
                type="text" 
                {...register("company_name", {
                    required: "Veuillez remplir ce champ."
                })} 
            />
            <p>{errors.company_name && errors.company_name.message}</p>
        </div>
        <div className="form-field-container">
            <label htmlFor="email">E-mail</label>
            <input 
                id="email" 
                name="email" 
                type="email" 
                {...register("email", {
                    required: "Veuillez remplir ce champ."
                })} 
            />
            <p>{errors.email && errors.email.message}</p>
        </div>
        <div className="form-field-container">
            <label htmlFor="phone_num">Numéro de téléphone</label>
            <input 
                id="phone_num" 
                name="phone_num" 
                type="tel" 
                {...register("phone_num",  {
                    required: "Veuillez remplir ce champ."
                })} 
            />
            <p>{errors.email && errors.email.message}</p>
        </div>
        <div className="form-field-container">
            <label htmlFor="availability_3">1<small>er</small> Disponibilité</label>
            <input 
                type="datetime-local" 
                id="availability_1" 
                name="availability_1"
                min={getCurrentDate()} 
                {...register("availability_1", {
                    required: "Veuillez choisir une date."
                })} 
            >
            </input>
            <p>{errors.availability_1 && errors.availability_1.message}</p>
        </div>
        <div className="form-field-container">
            <label htmlFor="availability_2">2<small>er</small> Disponibilité</label>
            <input 
                type="datetime-local" 
                id="availability_2" 
                name="availability_2"
                min={getCurrentDate()} 
                {...register("availability_2", {
                    required: "Veuillez choisir une date."
                })} 
            >
            </input>
            <p>{errors.availability_2 && errors.availability_2.message}</p>
        </div>
        <div className="form-field-container">
            <label htmlFor="availability_3">3<small>er</small> Disponibilité</label>
            <input 
                type="datetime-local" 
                id="availability_3" 
                name="availability_3"
                min={getCurrentDate()} 
                {...register("availability_3", {
                    required: "Veuillez choisir une date."
                })} 
            >
            </input>
            <p>{errors.availability_3 && errors.availability_3.message}</p>
        </div>
        <div className="form-field-container">
            <label htmlFor="call_subject">Objet de la demande</label>
            <input 
                id="call_subject" 
                name="call_subject" 
                type="text" 
                {...register("call_subject", {
                    required: "Veuillez remplir ce champ."
                })} 
            />
            <p>{errors.call_subject && errors.call_subject.message}</p>
        </div>
        <div className="form-field-container">
            <label htmlFor="message">Informations additionnelles à communiquer</label>
            <textarea 
                id="message" 
                name="message"
                rows="15" 
                {...register("message")} 
            />
            <p>{errors.message && errors.message.message}</p>
        </div>
        <div className="form-field-container valid-checkbox-field">
            <input 
                className="checkbox-form" 
                type="checkbox"
                id="confirm_data_manage" 
                name="confirm_data_manage" 
                {...register("confirm_data_manage", {
                    required: "Veuillez accepter les termes d'utilisation pour envoyer un email."
                })} 
            />
            <div>
                <label htmlFor="confirm_data_manage" className="confirm-data-manage">
                    En soumettant ce formulaire, j'accepte que les informations saisies dans 
                    ce formulaire soient utilisées, exploitées, traitées pour permettre de me 
                    recontacter dans le cadre de la relation commerciale qui découle de cette 
                    prise de contact.
                </label>
                <p>{errors.confirm_data_manage && errors.confirm_data_manage.message}</p>
            </div>
        </div>
        <div className="form-field-container submit-container">
            <input className="submit-form" type="submit" value="Envoyer"/>
        </div>
    </form>
  );
};

export default CallForm;