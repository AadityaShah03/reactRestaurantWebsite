import React from "react";
import { Link } from 'react-router-dom';

import navbarStyles from './Navbar.module.scss';

const Navbar = () => {
    return (
        <section className={navbarStyles.heroSection}>
            <div className={navbarStyles.contentContainer}>
                <div className={navbarStyles.headerControls}>
                    <button className={navbarStyles.callButton}>
                        Call - 123 456 7890
                    </button>
                    <Link to="/" className={navbarStyles.navigationLinks}>
                        <img
                            className={navbarStyles.logoImage}
                            src={'../assets/logo-no-background.png'}
                            alt="Logo"
                        />
                    </Link>
                    <div className={navbarStyles.reservationWrapper}>
                        <Link to="/Search" className={navbarStyles.navigationLinks}>
                            <img
                                className={navbarStyles.reservationIcon}
                                src={'../assets/search_icon.png'}
                                alt="alt text"
                            />
                        </Link>
                        <button className={navbarStyles.reservationButton}>
                            Reserve
                        </button>
                    </div>
                </div>
                <div className={navbarStyles.mainContent}>
                    <hr className={navbarStyles.horizontalLine} size={1} />
                    <div className={navbarStyles.navigationContainer}>
                        <Link to="/reactRestaurantWebsite//" className={navbarStyles.navigationLinks}>
                            <h3 >
                                Home
                            </h3>
                        </Link>
                        <Link to="/reactRestaurantWebsite//menu" className={navbarStyles.navigationLinks}>
                            <h3 >
                                Menu
                            </h3>
                        </Link>
                        <Link to="/reactRestaurantWebsite//reserve" className={navbarStyles.navigationLinks}>
                            <h3 >
                                Reservation
                            </h3>
                        </Link>
                        <Link to="/reactRestaurantWebsite//gallery" className={navbarStyles.navigationLinks}>
                            <h3 >
                                Gallery
                            </h3>
                        </Link>
                        <Link to="/reactRestaurantWebsite//contact" className={navbarStyles.navigationLinks}>
                            <h3 >
                                Contact
                            </h3>
                        </Link>
                        <div className={navbarStyles.socialMediaContainer}>
                            <img
                                className={navbarStyles.socialMediaImage}
                                src={'../assets/clear_white_instagram.svg'}
                                alt="alt text"
                            />
                            <img
                                className={navbarStyles.socialMediaImage}
                                src={'../assets/clear_white_facebook.svg'}
                                alt="alt text"
                            />
                            <img
                                className={navbarStyles.socialMediaImage}
                                src={'../assets/clear_white_twitter.svg'}
                                alt="alt text"
                            />
                            <img
                                className={navbarStyles.socialMediaImage}
                                src={'../assets/clear_white_pintrest.svg'}
                                alt="alt text"
                            />
                        </div>
                    </div>
                    <hr className={navbarStyles.horizontalLine1} size={1} />
                </div>
            </div>
        </section>
    );
};

export default Navbar;