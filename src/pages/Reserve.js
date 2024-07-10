import React from 'react';

import reserveStyles from '../Styles/Reserve.module.scss'

const Reserve = () => {
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
                            {/* grid layout for reservation form items */}
                            <div className={reserveStyles.nameItem}>Name</div>
                            <div className={reserveStyles.emailItem}>Email</div>
                            <div className={reserveStyles.phoneItem}>Phone</div>
                            <div className={reserveStyles.dateItem}>Date</div>
                            <div className={reserveStyles.timeItem}>Time</div>
                            <div className={reserveStyles.personItem}>Person</div>
                        </div>

                        <button className={reserveStyles.bookTableBtn}>
                            {/* TODO */}
                            Book a Table
                        </button>
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