import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import reservationSectionStyles from './ReserveFooter.module.scss';

const ReserveFooter = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [person, setPerson] = useState('');
    const [timing, setTiming] = useState('');
    const [date, setDate] = useState('');

    const location = useLocation();
    const isFrench = location.pathname.includes('/fr');

    // French translations
    const translations = {
        reservationTitle: isFrench ? "Réservez votre table maintenant" : "Book your table now",
        namePlaceholder: isFrench ? "Nom" : "Name",
        emailPlaceholder: isFrench ? "Email" : "Email",
        personPlaceholder: isFrench ? "Nombre de personnes" : "Person",
        timingPlaceholder: isFrench ? "Horaire" : "Timing",
        datePlaceholder: isFrench ? "Date" : "Date",
        bookButton: isFrench ? "Réserver une table" : "Book a Table",
    };

    const handleBookClick = () => {
        if (name && email && person && timing && date) {
            alert(isFrench ? 'Merci pour votre réservation!' : 'Thanks For reserving!');
        } else {
            alert(isFrench ? 'Veuillez remplir tous les champs avant de soumettre.' : 'Please fill all the fields before submitting.');
        }
    };

    return (
        <section className={reservationSectionStyles.reservationSection}>
            <div
                className={reservationSectionStyles.reservationImageBox}
                style={{ '--src': `url(${'../assets/reserve_Background.png'})` }}>
                <div className={reservationSectionStyles.reservationContentBox}>
                    <div className={reservationSectionStyles.reservationContent}>
                        <div className={reservationSectionStyles.reservationTextContainer}>
                            <div className={reservationSectionStyles.reservationHighlightBox}>
                                <hr className={reservationSectionStyles.separatorLine} size={1} />
                                <h5 className={reservationSectionStyles.reservationHighlight}>
                                    {isFrench ? "Réservation" : "Reservation"}
                                </h5>
                                <hr className={reservationSectionStyles.separatorLine1} size={1} />
                            </div>
                            <h1 className={reservationSectionStyles.reservationTitle}>
                                {translations.reservationTitle}
                            </h1>
                        </div>

                        <div className={reservationSectionStyles.reservationInputRow}>
                            <input
                                type="text"
                                placeholder={translations.namePlaceholder}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className={reservationSectionStyles.nameInputLabel}
                            />
                            <input
                                type="email"
                                placeholder={translations.emailPlaceholder}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={reservationSectionStyles.emailInputLabel}
                            />
                        </div>

                        <div className={reservationSectionStyles.reservationDetailsRow}>
                            <input
                                type="number"
                                min="1"
                                placeholder={translations.personPlaceholder}
                                value={person}
                                onChange={(e) => setPerson(e.target.value)}
                                className={reservationSectionStyles.personInputLabel}
                            />
                            <input
                                type="time"
                                placeholder={translations.timingPlaceholder}
                                value={timing}
                                onChange={(e) => setTiming(e.target.value)}
                                className={reservationSectionStyles.timingInputLabel}
                            />
                            <input
                                type="date"
                                placeholder={translations.datePlaceholder}
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className={reservationSectionStyles.dateInputLabel}
                            />
                        </div>

                        <button className={reservationSectionStyles.bookTableBtn} onClick={handleBookClick}>
                            {translations.bookButton}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ReserveFooter;
