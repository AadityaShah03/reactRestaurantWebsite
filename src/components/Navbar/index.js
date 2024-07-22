import React from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom';

import navbarStyles from './Navbar.module.scss';

const Navbar = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const currentPage = location.pathname;

    // Check if the current page is in French
    const isFrench = currentPage.includes('/fr');

    // Toggle button text
    const buttonText = isFrench ? "En" : "Fr";

    // Handle language change
    const handleClick = () => {
        let newPage;
        if (isFrench) {
            newPage = currentPage.endsWith('/fr') ? currentPage.slice(0, -3) : currentPage;
        } else {
            newPage = currentPage.endsWith('/') ? currentPage + 'fr' : currentPage + '/fr';
        }
        navigate(newPage);
    };

    // French translations
    const translations = {
        home: isFrench ? "Accueil" : "Home",
        menu: isFrench ? "Menu" : "Menu",
        reservation: isFrench ? "Réservation" : "Reservation",
        gallery: isFrench ? "Galerie" : "Gallery",
        contact: isFrench ? "Contact" : "Contact",
        call: isFrench ? "Appeler - 123 456 7890" : "Call - 123 456 7890",
        reserve: isFrench ? "Réserver" : "Reserve"
    };

    return (
        <section className={navbarStyles.heroSection}>
            <div className={navbarStyles.contentContainer}>
                <div className={navbarStyles.headerControls}>
                    <div className={navbarStyles.reservationWrapper}>
                        <div className={navbarStyles.callButton}>
                            {translations.call}
                        </div>
                        <button className={navbarStyles.reservationButton} onClick={handleClick}>
                            {buttonText}
                        </button>
                    </div>
                    <Link to={isFrench ? "/fr" : "/"} className={navbarStyles.navigationLinks}>
                        <img
                            className={navbarStyles.logoImage}
                            src={'../assets/logo-no-background.png'}
                            alt="Logo"
                        />
                    </Link>
                    <div className={navbarStyles.reservationWrapper}>
                        <Link to={isFrench ? "/Search/fr" : "/Search"} className={navbarStyles.navigationLinks}>
                            <img
                                className={navbarStyles.reservationIcon}
                                src={'../assets/search_icon.png'}
                                alt="search"
                            />
                        </Link>
                        <Link to={isFrench ? "/reserve/fr" : "/reserve"} className={navbarStyles.linkButton}>
                            <button className={navbarStyles.reservationButton}>
                                {translations.reserve}
                            </button>
                        </Link>
                    </div>
                </div>
                <div className={navbarStyles.mainContent}>
                    <hr className={navbarStyles.horizontalLine} size={1} />
                    <div className={navbarStyles.navigationContainer}>
                        <Link to={isFrench ? "/fr" : "/"} className={navbarStyles.navigationLinks}>
                            <h3>{translations.home}</h3>
                        </Link>
                        <Link to={isFrench ? "/menu/fr" : "/menu"} className={navbarStyles.navigationLinks}>
                            <h3>{translations.menu}</h3>
                        </Link>
                        <Link to={isFrench ? "/reserve/fr" : "/reserve"} className={navbarStyles.navigationLinks}>
                            <h3>{translations.reservation}</h3>
                        </Link>
                        <Link to={isFrench ? "/gallery/fr" : "/gallery"} className={navbarStyles.navigationLinks}>
                            <h3>{translations.gallery}</h3>
                        </Link>
                        <Link to={isFrench ? "/contact/fr" : "/contact"} className={navbarStyles.navigationLinks}>
                            <h3>{translations.contact}</h3>
                        </Link>
                        <div className={navbarStyles.socialMediaContainer}>
                            <img
                                className={navbarStyles.socialMediaImage}
                                src={'../assets/clear_white_instagram.svg'}
                                alt="Instagram"
                            />
                            <img
                                className={navbarStyles.socialMediaImage}
                                src={'../assets/clear_white_facebook.svg'}
                                alt="Facebook"
                            />
                            <img
                                className={navbarStyles.socialMediaImage}
                                src={'../assets/clear_white_twitter.svg'}
                                alt="Twitter"
                            />
                            <img
                                className={navbarStyles.socialMediaImage}
                                src={'../assets/clear_white_pintrest.svg'}
                                alt="Pinterest"
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
