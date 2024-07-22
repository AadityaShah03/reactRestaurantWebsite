import React, { useState } from 'react';

import reserveStyles from '../Styles/Reserve.module.scss';

const Reserve = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [person, setPerson] = useState('');

    const handleBookTableClick = () => {
        if (name && email && phone && date && time && person) {
            alert('Réservation confirmée ! Merci pour votre réservation.');
        } else {
            alert('Veuillez remplir tous les champs avant de réserver.');
        }
    };

    return (
        <div>
            <section className={reserveStyles.menuOverviewSection}>
                <div className={reserveStyles.contentContainer}>
                    <div className={reserveStyles.menuSection}>
                        <hr className={reserveStyles.horizontalLineBeforeTitle} size={1} />
                        <h1 className={reserveStyles.menuTitle}>Réserver une Table</h1>
                        <hr className={reserveStyles.horizontalLineAfterTitle} size={1} />
                    </div>
                </div>
            </section>

            <section className={reserveStyles.reservationSection}>
                <div className={reserveStyles.informationContainer}>
                    <div className={reserveStyles.reservationContent}>
                        <div className={reserveStyles.headerLayout}>
                            <hr className={reserveStyles.topLine} size={1} />
                            <h5 className={reserveStyles.reservationHighlight}>Réservation</h5>
                            <hr className={reserveStyles.bottomLine} size={1} />
                        </div>

                        <h1 className={reserveStyles.heroTitle}>Réservez votre table maintenant</h1>
                        <h3 className={reserveStyles.subtitle}>
                            Visitez-nous pour une expérience culinaire inoubliable qui satisfait tous les goûts, faisant de nous le restaurant idéal pour tout le monde !
                        </h3>

                        <div className={reserveStyles.reservationGrid}>
                            <input
                                className={reserveStyles.nameItem}
                                type="text"
                                placeholder="Nom"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                className={reserveStyles.emailItem}
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                className={reserveStyles.phoneItem}
                                type="tel"
                                placeholder="Téléphone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                            <input
                                className={reserveStyles.dateItem}
                                type="date"
                                placeholder="Date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                            <input
                                className={reserveStyles.timeItem}
                                type="time"
                                placeholder="Heure"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                            />
                            <input
                                className={reserveStyles.personItem}
                                type="number"
                                placeholder="Nombre de Personnes"
                                value={person}
                                onChange={(e) => setPerson(e.target.value)}
                            />
                            <button className={reserveStyles.bookTableBtn} onClick={handleBookTableClick}>
                                Réserver une Table
                            </button>
                        </div>
                    </div>

                    <img
                        className={reserveStyles.restaurantImage}
                        src={'/assets/reserve_splash.jpg'}
                        alt="splash"
                    />
                </div>
            </section>

        </div>
    );
}

export default Reserve;
