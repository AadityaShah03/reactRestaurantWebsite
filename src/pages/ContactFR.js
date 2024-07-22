import React, { useState } from 'react';

import contactStyles from '../Styles/Contact.module.scss'

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSendClick = () => {
        if (name && email && subject && phone && message) {
            alert('Tous les champs sont remplis. Votre message a été envoyé !');
        } else {
            alert('Veuillez remplir tous les champs avant d’envoyer.');
        }
    };

    return (
        <div>
            <section className={contactStyles.menuOverviewSection}>
                <div className={contactStyles.contentContainer}>
                    <div className={contactStyles.menuSection}>
                        <hr className={contactStyles.horizontalLineBeforeTitle} size={1} />
                        <h1 className={contactStyles.menuTitle}>Contactez-nous</h1>
                        <hr className={contactStyles.horizontalLineAfterTitle} size={1} />
                    </div>
                </div>
            </section>

            <section className={contactStyles.contactUsSection}>
                <div className={contactStyles.rootFlexColumn}>
                    <div className={contactStyles.contentRow}>
                        <div className={contactStyles.contactInfoBox}>
                            <div className={contactStyles.contactInfoColumn}>
                                <h1 className={contactStyles.contactTitle}>Informations de Contact</h1>
                                <h3 className={contactStyles.contactSubtitle}>
                                    Nous serions ravis d'avoir de vos nouvelles ! N'hésitez pas à nous contacter pour toute question, retour ou demande spéciale !
                                </h3>
                                <div className={contactStyles.addressRow}>
                                    <div
                                        className={contactStyles.addressIconBox}
                                        style={{ '--src': `url(${'/assets/background_circle_blue.svg'})` }}>
                                        <img
                                            className={contactStyles.addressIconImage}
                                            src={'/assets/location_white.svg'}
                                            alt="localisation"
                                        />
                                    </div>
                                    <h3 className={contactStyles.subtitle1}>221 Baker Street</h3>
                                </div>
                                <div className={contactStyles.emailRow}>
                                    <div
                                        className={contactStyles.emailIconBox}
                                        style={{ '--src': `url(${'/assets/background_circle_blue.svg'})` }}>
                                        <img
                                            className={contactStyles.emailIconImage}
                                            src={'/assets/Email_white.svg'}
                                            alt="Email"
                                        />
                                    </div>
                                    <h3 className={contactStyles.subtitle11}>RestaurantA@RestaurantA.com</h3>
                                </div>
                                <div className={contactStyles.phoneRow}>
                                    <div
                                        className={contactStyles.phoneIconBox}
                                        style={{ '--src': `url(${'/assets/background_circle_blue.svg'})` }}>
                                        <img
                                            className={contactStyles.phoneIconImage}
                                            src={'/assets/Phone_white.svg'}
                                            alt="Téléphone"
                                        />
                                    </div>
                                    <h3 className={contactStyles.phoneText}>123 456 7890</h3>
                                </div>
                                <div className={contactStyles.socialMediaRow}>
                                    <img
                                        className={contactStyles.socialMediaIcon1}
                                        src={'/assets/clear_grey_instagram.svg'}
                                        alt="instagram"
                                    />
                                    <img
                                        className={contactStyles.socialMediaIcon2}
                                        src={'/assets/clear_grey_facebook.svg'}
                                        alt="facebook"
                                    />
                                    <img
                                        className={contactStyles.socialMediaIcon3}
                                        src={'/assets/clear_grey_twitter.svg'}
                                        alt="twitter"
                                    />
                                    <img
                                        className={contactStyles.socialMediaIcon4}
                                        src={'/assets/clear_grey_pintrest.svg'}
                                        alt="pinterest"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={contactStyles.questionColumn}>
                            <div className={contactStyles.mailUsColumn}>
                                <hr className={contactStyles.line1} size={1} />
                                <h5 className={contactStyles.mailUsTitle}>ENVOYEZ-NOUS UN EMAIL</h5>
                                <hr className={contactStyles.line11} size={1} />
                            </div>
                            <h1 className={contactStyles.questionTitle}>Vous avez une question ?</h1>
                            <div className={contactStyles.messageColumn}>
                                <div className={contactStyles.contactFormGrid}>
                                    <input
                                        className={contactStyles.contactFormName}
                                        type="text"
                                        placeholder="Nom"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    <input
                                        className={contactStyles.contactFormEmail}
                                        type="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <input
                                        className={contactStyles.contactFormSubject}
                                        type="text"
                                        placeholder="Objet"
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                    />
                                    <input
                                        className={contactStyles.contactFormPhone}
                                        type="tel"
                                        placeholder="Téléphone"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>
                                <textarea
                                    className={contactStyles.contactFormMessage}
                                    placeholder="Message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                                <button className={contactStyles.sendButton} onClick={handleSendClick}>
                                    Envoyer
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={contactStyles.visitUsColumn}>
                        <div className={contactStyles.visitUsColumnHeader}>
                            <hr className={contactStyles.line} size={1} />
                            <h5 className={contactStyles.visitUsTitle}>VISITEZ-NOUS !</h5>
                            <hr className={contactStyles.line2} size={1} />
                        </div>
                        <h1 className={contactStyles.branchesTitle}>Venez visiter nos succursales</h1>
                        <div className={contactStyles.branchesRow}>
                            <div className={contactStyles.branchColumn1}>
                                <div className={contactStyles.branchBox1}>
                                    <div className={contactStyles.branchInfoColumn}>
                                        <h1 className={contactStyles.branchTitle1}>Ville, Province</h1>
                                        <h4 className={contactStyles.branchAddress1}>
                                            42 Evergreen Terrace, <br />
                                            Springfield
                                        </h4>
                                        <div className={contactStyles.branchContactRow1}>
                                            <img
                                                className={contactStyles.branchContactIcon1}
                                                src={'/assets/email_gold.svg'}
                                                alt="email"
                                            />
                                            <h4 className={contactStyles.branchContactEmail1}>contact@RestaurantA.com</h4>
                                        </div>
                                        <div className={contactStyles.branchPhoneRow1}>
                                            <img
                                                className={contactStyles.branchPhoneIcon1}
                                                src={'/assets/phone_gold.svg'}
                                                alt="téléphone"
                                            />
                                            <h4 className={contactStyles.branchPhoneText1}>(123) 456 - 7890</h4>
                                        </div>
                                    </div>
                                </div>
                                <img
                                    className={contactStyles.branchImage1}
                                    src={'/assets/store1_splash.png'}
                                    alt="splash"
                                />
                            </div>
                            <div className={contactStyles.branchColumn2}>
                                <div className={contactStyles.branchBox2}>
                                    <div className={contactStyles.branchInfoColumn2}>
                                        <h1 className={contactStyles.branchTitle2}>Ville, Province</h1>
                                        <h4 className={contactStyles.branchAddress2}>
                                            123 Sesame Street,
                                            <br />
                                            Ottawa
                                        </h4>
                                        <div className={contactStyles.branchContactRow2}>
                                            <img
                                                className={contactStyles.branchContactIcon2}
                                                src={'/assets/email_gold.svg'}
                                                alt="email"
                                            />
                                            <h4 className={contactStyles.branchContactEmail2}>contact@RestaurantA.com</h4>
                                        </div>
                                        <div className={contactStyles.branchPhoneRow2}>
                                            <img
                                                className={contactStyles.branchPhoneIcon2}
                                                src={'/assets/phone_gold.svg'}
                                                alt="téléphone"
                                            />
                                            <h4 className={contactStyles.branchPhoneText2}>(123) 456 - 7890</h4>
                                        </div>
                                    </div>
                                </div>
                                <img
                                    className={contactStyles.branchImage2}
                                    src={'/assets/store2_splash.png'}
                                    alt="splash"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Contact;
