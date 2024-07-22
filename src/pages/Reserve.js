import React, { useState } from 'react';

import reserveStyles from '../Styles/Reserve.module.scss'

const Reserve = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [person, setPerson] = useState('');

    const handleBookTableClick = () => {
        if (name && email && phone && date && time && person) {
            alert('Reservation confirmed! Thank you for booking.');
        } else {
            alert('Please fill all the fields before booking.');
        }
    };

    return (
        <div>
            <section className={reserveStyles.menuOverviewSection}>
                <div className={reserveStyles.contentContainer}>
                    <div className={reserveStyles.menuSection}>
                        <hr className={reserveStyles.horizontalLineBeforeTitle} size={1} />
                        <h1 className={reserveStyles.menuTitle}>Reserve A Table</h1>
                        <hr className={reserveStyles.horizontalLineAfterTitle} size={1} />
                    </div>
                </div>
            </section>

            <section className={reserveStyles.reservationSection}>
                <div className={reserveStyles.informationContainer}>
                    <div className={reserveStyles.reservationContent}>
                        <div className={reserveStyles.headerLayout}>
                            <hr className={reserveStyles.topLine} size={1} />
                            <h5 className={reserveStyles.reservationHighlight}>Reservation</h5>
                            <hr className={reserveStyles.bottomLine} size={1} />
                        </div>

                        <h1 className={reserveStyles.heroTitle}>Book your table now</h1>
                        <h3 className={reserveStyles.subtitle}>
                            Visit us for an unforgettable dining experience that caters to all tastes, making it the perfect restaurant
                            for everyone!
                        </h3>

                        <div className={reserveStyles.reservationGrid}>
                            <input
                                className={reserveStyles.nameItem}
                                type="text"
                                placeholder="Name"
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
                                placeholder="Phone"
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
                                placeholder="Time"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                            />
                            <input
                                className={reserveStyles.personItem}
                                type="number"
                                placeholder="Number of Persons"
                                value={person}
                                onChange={(e) => setPerson(e.target.value)}
                            />
                            <button className={reserveStyles.bookTableBtn} onClick={handleBookTableClick}>
                                Book a Table
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