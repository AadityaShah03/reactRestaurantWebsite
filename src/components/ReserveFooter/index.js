import React from 'react';

import reservationSectionStyles from './ReserveFooter.module.scss';

const ReserveFooter = () => {
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
                                <h5 className={reservationSectionStyles.reservationHighlight}>Reservation</h5>
                                <hr className={reservationSectionStyles.separatorLine1} size={1} />
                            </div>

                            <h1 className={reservationSectionStyles.reservationTitle}>Book your table now</h1>
                        </div>

                        <div className={reservationSectionStyles.reservationInputRow}>
                            <div className={reservationSectionStyles.nameInputLabel}>Name</div>
                            <div className={reservationSectionStyles.emailInputLabel}>Email</div>
                        </div>

                        <div className={reservationSectionStyles.reservationDetailsRow}>
                            <div className={reservationSectionStyles.personInputLabel}>Person</div>
                            <div className={reservationSectionStyles.timingInputLabel}>Timing</div>
                            <div className={reservationSectionStyles.dateInputLabel}>Date</div>
                        </div>

                        <button className={reservationSectionStyles.bookTableBtn}>
                            {/* TODO */}
                            Book a Table
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ReserveFooter;