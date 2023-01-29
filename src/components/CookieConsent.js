import React from 'react';
import CookieConsent from 'react-cookie-consent';

const CookieConsentCustom = () => (
    <CookieConsent
        overlay={true}
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        cookieName="gatsby-gdpr-google-analytics"
        style={{ 
          background: "#7C0000" 
        }}
        buttonStyle={{ 
          color: "#7C0000",
          fontSize: "13px", 
          background: "#FFF"
        }}
      >
        Le Site utilise des cookies pour distinguer les Utilisateurs du Site. 
        Cela permet de fournir aux Utilisateurs une meilleure expérience de navigation 
        et une amélioration du Site et de son contenu. 
        <Link to="/politique-de-confidentialite" className="gdpr-link"> 
          Les objectifs et modalités 
          des cookies sont contenus dans ce présent article
        </Link>.
      </CookieConsent>
);

export default CookieConsentCustom;