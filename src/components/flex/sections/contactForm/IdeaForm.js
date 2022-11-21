import React, { useContext } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

import { EmailContext } from "./Context";

export const IdeaForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [isSent, setIsSent] = useContext(EmailContext);

  const onSubmit = (values) => {
    console.log(values);
    axios.post(`${ process.env.URL }/emails`, {
        subject: values.subject,
        company_name: values.company_name,
        legal_form: values.legal_form,
        confirm_data_manage: values.confirm_data_manage,
        business_sector: values.business_sector,
        email: values.email,
        message: values.message,
        nb_facture_achat: values.nb_facture_achat,
        nb_facture_vente: values.nb_facture_vente,
        revenue: values.revenue,
        phone_num: values.phone_num,
    }).then(function (response) {
        console.log(response);
        console.log("success", isSent);
    }).catch(function (error) {
        console.log(error);
    });
  };

  return (
    <form onSubmit= { handleSubmit(onSubmit) }>
        <input 
            id="subject" 
            type="hidden" 
            value="idea" 
            {...register("subject")} 
        />
        <div className="form-field-container">
            <label htmlFor="company_name">Nom de votre projet</label>
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
            <label htmlFor="legal_form">Forme juridique</label>
            <select 
                id="legal_form" 
                name="legal_form" 
                {...register("legal_form")}
            >
                <option value="company">Société</option>
                <option value="association">Association</option>
                <option value="independent">Indépendant</option>
            </select>
            <p>{errors.legal_form && errors.legal_form.message}</p>
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
            <label htmlFor="business_sector">Secteur d'activité</label>
            <input 
                id="business_sector" 
                name="business_sector" 
                type="text" 
                {...register("business_sector", {
                    required: "Veuillez remplir ce champ."
                })} 
            />
            <p>{errors.business_sector && errors.business_sector.message}</p>
        </div>
        <div className="form-field-container">
            <label htmlFor="nb_facture_vente">factures de ventes<br></br>(estimation annuelle)</label>
            <input 
                id="nb_facture_vente" 
                name="nb_facture_vente" 
                type="number" 
                {...register("nb_facture_vente", {
                    required: "Veuillez remplir ce champ.",
                    min: 0,
                })} 
            />
            <p>{errors.nb_facture_vente && errors.nb_facture_vente.message}</p>
        </div>
        <div className="form-field-container">
            <label htmlFor="nb_facture_achat">factures d'achats<br></br>(estimation annuelle)</label>
            <input
                id="nb_facture_achat" 
                name="nb_facture_achat"  
                type="number" 
                {...register("nb_facture_achat", {
                    required: "Veuillez remplir ce champ.",
                    min: 0,
                })} 
            />
            <p>{errors.nb_facture_achat && errors.nb_facture_achat.message}</p>
        </div>
        <div className="form-field-container">
            <label htmlFor="revenue">Chiffre d'affaire<br></br>(estimation annuelle)</label>
            <input 
                id="revenue" 
                name="revenue" 
                type="number" 
                {...register("revenue", {
                    required: "Veuillez remplir ce champ.",
                    min: 0,
                })} 
            />
            <p>{errors.revenue && errors.revenue.message}</p>
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
                <label  htmlFor="confirm_data_manage" className="confirm-data-manage">
                    En soumettant ce formulaire, j'accepte que les informations saisies dans 
                    ce formulaire soient utilisées, exploitées, traitées pour permettre de me 
                    recontacter dans le cadre de la relation commerciale qui découle de cette 
                    prise de contact.
                </label>
                <p>{errors.confirm_data_manage && errors.confirm_data_manage.message}</p>
            </div>
        </div>
        <div className="form-field-container submit-container">
            <input className="submit-form" type="button" value="Envoyer" onClick={() => setIsSent(true)}/>
        </div>
    </form>
  );
};

export default IdeaForm;