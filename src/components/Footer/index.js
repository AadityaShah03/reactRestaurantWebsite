import React from "react";

import footerStyles from './Footer.module.scss';

const Footer = () => {
    return (
        <section className={footerStyles.servicesSection}>
            {/* Main content section describing services */}

            <div className={footerStyles.servicesContainer}>
                <div className={footerStyles.contentColumn}>
                    <div className={footerStyles.highlightedHeader}>
                        <hr className={footerStyles.dividerLine} size={1} />
                        <h5 className={footerStyles.offerHighlightTitle}>What we offer</h5>
                        <hr className={footerStyles.dividerLineSecondary} size={1} />
                    </div>

                    <h1 className={footerStyles.servicesHeroTitle}>Our Great Services</h1>
                    <h3 className={footerStyles.servicesSubtitle}>
                        We offer a diverse menu of modern Mediterranean dishes, crafted with the finest ingredients and a passion
                        for culinary excellence
                    </h3>
                </div>

                <div className={footerStyles.servicesItemsContainer}>
                    <div className={footerStyles.serviceItemBox}>

                        <div className={footerStyles.serviceItemContainer}>
                            <div className={footerStyles.serviceItemContent}>
                                <img
                                    className={footerStyles.serviceItemImage}
                                    src={'/assets/calender.svg'}
                                    alt="calender"
                                />
                                <h2 className={footerStyles.serviceItemTitle}>Open 24/7</h2>
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
                                <h2 className={footerStyles.serviceItemTitleAlt}>Special Menus</h2>
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
                            <h2 className={footerStyles.serviceItemTitleQuality}>Quality Service</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;