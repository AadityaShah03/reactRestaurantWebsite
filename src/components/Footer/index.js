import React from "react";
import { useLocation } from 'react-router-dom';

import footerStyles from './Footer.module.scss';

const Footer = () => {
    const location = useLocation();
    const isFrench = location.pathname.includes('/fr');

    // French translations
    const translations = {
        offerHighlightTitle: isFrench ? "Ce que nous offrons" : "What we offer",
        servicesHeroTitle: isFrench ? "Nos Grands Services" : "Our Great Services",
        servicesSubtitle: isFrench ? "Nous proposons un menu diversifié de plats méditerranéens modernes, préparés avec les meilleurs ingrédients et une passion pour l'excellence culinaire" : "We offer a diverse menu of modern Mediterranean dishes, crafted with the finest ingredients and a passion for culinary excellence",
        open24Title: isFrench ? "Ouvert 24/7" : "Open 24/7",
        specialMenusTitle: isFrench ? "Menus Spéciaux" : "Special Menus",
        qualityServiceTitle: isFrench ? "Service de Qualité" : "Quality Service"
    };

    return (
        <section className={footerStyles.servicesSection}>
            {/* Main content section describing services */}

            <div className={footerStyles.servicesContainer}>
                <div className={footerStyles.contentColumn}>
                    <div className={footerStyles.highlightedHeader}>
                        <hr className={footerStyles.dividerLine} size={1} />
                        <h5 className={footerStyles.offerHighlightTitle}>
                            {translations.offerHighlightTitle}
                        </h5>
                        <hr className={footerStyles.dividerLineSecondary} size={1} />
                    </div>

                    <h1 className={footerStyles.servicesHeroTitle}>
                        {translations.servicesHeroTitle}
                    </h1>
                    <h3 className={footerStyles.servicesSubtitle}>
                        {translations.servicesSubtitle}
                    </h3>
                </div>

                <div className={footerStyles.servicesItemsContainer}>
                    <div className={footerStyles.serviceItemBox}>
                        <div className={footerStyles.serviceItemContainer}>
                            <div className={footerStyles.serviceItemContent}>
                                <img
                                    className={footerStyles.serviceItemImage}
                                    src={'/assets/calender.svg'}
                                    alt="calendar"
                                />
                                <h2 className={footerStyles.serviceItemTitle}>
                                    {translations.open24Title}
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className={footerStyles.serviceItemBox}>
                        {/* Service item box */}
                        <div className={footerStyles.serviceItemContainer}>
                            <div className={footerStyles.serviceItemContent1}>
                                <img
                                    className={footerStyles.serviceItemImageAlt}
                                    src={'/assets/menu.svg'}
                                    alt="menu"
                                />
                                <h2 className={footerStyles.serviceItemTitleAlt}>
                                    {translations.specialMenusTitle}
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className={footerStyles.serviceItemBox}>
                        {/* Service item box */}
                        <div className={footerStyles.serviceItemContainerAlt}>
                            <img
                                className={footerStyles.serviceItemImageQuality}
                                src={'/assets/service.svg'}
                                alt="service"
                            />
                            <h2 className={footerStyles.serviceItemTitleQuality}>
                                {translations.qualityServiceTitle}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
