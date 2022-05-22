import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

export const CompanyForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (values) => {
    console.log(values);
    axios.post(`${ process.env.URL }/emails`, {
        subject: values.subject,
        company_name: values.company_name,
        company_num: values.company_num,
        confirm_data_manage: values.confirm_data_manage,
        decla_tva: values.decla_tva,
        email: values.email,
        message: values.message,
        nb_facture_achat: values.nb_facture_achat,
        nb_facture_vente: values.nb_facture_vente,
        nb_transaction: values.nb_transaction,
        phone_num: values.phone_num,
    }).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });
  };

  return (
    <form onSubmit= { handleSubmit(onSubmit) }>
        <input 
            id="subject" 
            value="company" 
            type="hidden" 
            {...register("subject")} 
        />
        <div className="form-field-container">
            <label htmlFor="company_name">Dénomination</label>
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
            <label htmlFor="company_num">Numéro d'entreprise</label>
            <input 
                id="company_num" 
                name="company_num" 
                type="text" 
                {...register("company_num", {
                    required: "Veuillez remplir ce champ."
                })} 
            />
            <p>{errors.company_num && errors.company_num.message}</p>
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
            <label htmlFor="decla_tva">Déclarations TVA périodique</label>
            <input 
                className="checkbox-form" 
                type="checkbox" 
                id="decla_tva" 
                name="decla_tva" 
                {...register("decla_tva")} 
            />
            <p>{errors.decla_tva && errors.decla_tva.message}</p>
        </div>
        <div className="form-field-container">
            <label htmlFor="nb_facture_vente">factures de ventes<br></br>(annuelle)</label>
            <input 
                id="nb_facture_vente" 
                name="nb_facture_vente" 
                type="number" 
                {...register("nb_facture_vente", {
                    required: "Veuillez remplir ce champ."
                })} 
            />
            <p>{errors.nb_facture_vente && errors.nb_facture_vente.message}</p>
        </div>
        <div className="form-field-container">
            <label htmlFor="nb_facture_achat">factures d'achats<br></br>(annuelle)</label>
            <input 
                id="nb_facture_achat" 
                name="nb_facture_achat" 
                type="number" 
                {...register("nb_facture_achat", {
                    required: "Veuillez remplir ce champ."
                })} 
            />
            <p>{errors.nb_facture_achat && errors.nb_facture_achat.message}</p>
        </div>
        <div className="form-field-container">
            <label htmlFor="nb_transaction">transactions bancaires<br></br>(annuelle)</label>
            <input 
                id="nb_transaction" 
                name="nb_transaction" 
                type="number" 
                {...register("nb_transaction", {
                    required: "Veuillez remplir ce champ."
                })} 
            />
            <p>{errors.nb_transaction && errors.nb_transaction.message}</p>
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

export default CompanyForm;