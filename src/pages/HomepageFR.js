import React from 'react';
import { Link } from 'react-router-dom';

import ReserveFooter from '../components/ReserveFooter/index.js';

import homepageStyles from '../Styles/Homepage.module.scss';

const HomepageFr = () => {
    return (
        <div>
            <section className={homepageStyles.heroSection}>
                <div className={homepageStyles.contentWrapper}>
                    <div className={homepageStyles.mainContentWrapper}>
                        <div className={homepageStyles.heroTextWrapper}>
                            <h1 className={homepageStyles.heroTitle}>
                                Bienvenue au Restaurant A
                            </h1>
                            <h3 className={homepageStyles.heroSubtitle}>
                                Imprégnez-vous d'une ambiance luxueuse et savourez les saveurs exquises élaborées à partir des ingrédients les plus frais.
                            </h3>
                        </div>
                        <Link to="/menu/fr" className={homepageStyles.linkButton}>
                            <button className={homepageStyles.viewMenuButton}>
                                Voir le Menu
                            </button>
                        </Link>
                    </div>
                    <img
                        className={homepageStyles.heroImage}
                        src={'/assets/homepageHook.png'}
                        alt="accueil"
                    />
                </div>
            </section>

            <section className={homepageStyles.contactSection}>
                <div className={homepageStyles.mainContentContainer}>
                    <div className={homepageStyles.infoColumnsWrapper}>
                        <div className={homepageStyles.locationInfoColumn}>
                            <figure
                                className={homepageStyles.locationInfoBox}
                                style={{ '--src': `url(${'./assets/background_circle_blue.svg'})` }}>
                                <img
                                    className={homepageStyles.locationIcon}
                                    src={'/assets/location_white.svg'}
                                    alt="emplacement"
                                />
                            </figure>
                            <div className={homepageStyles.locationTextContainer}>
                                <h1 className={homepageStyles.locationTitle}>Nous Trouver</h1>
                                <h3 className={homepageStyles.locationAddress}>221B Baker Street</h3>
                            </div>
                        </div>
                        <div className={homepageStyles.hoursInfoColumn}>
                            <figure
                                className={homepageStyles.hoursInfoBox}
                                style={{ '--src': `url(${'./assets/background_circle_blue.svg'})` }}>
                                <img
                                    className={homepageStyles.hoursIcon}
                                    src={'/assets/clock.svg'}
                                    alt="horaires"
                                />
                            </figure>
                            <div className={homepageStyles.hoursTextContainer}>
                                <h1 className={homepageStyles.hoursTitle}>Horaires d'Ouverture</h1>
                                <h3 className={homepageStyles.hoursDetails}>Lun au Ven 9:00 AM - 9:00 PM</h3>
                            </div>
                        </div>
                        <div className={homepageStyles.reservationInfoColumn}>
                            <figure
                                className={homepageStyles.reservationInfoBox}
                                style={{ '--src': `url(${'./assets/background_circle_blue.svg'})` }}>
                                <img
                                    className={homepageStyles.reservationIcon}
                                    src={'/assets/reservation_list.svg'}
                                    alt="réservation"
                                />
                            </figure>
                            <div className={homepageStyles.reservationTextContainer}>
                                <h1 className={homepageStyles.reservationTitle}>Réservation</h1>
                                <h3 className={homepageStyles.reservationEmail}>RestaurantA@RestaurantA.com</h3>
                            </div>
                        </div>
                    </div>
                    <div className={homepageStyles.storyInfoRow}>
                        <img
                            className={homepageStyles.storyImage1}
                            src={'/assets/story_image.png'}
                            alt="l'histoire"
                        />
                        <img
                            className={homepageStyles.storyImage2}
                            src={'/assets/vertical_line.svg'}
                            alt="ligne verticale"
                        />
                        <div className={homepageStyles.storyTextContainer}>
                            <h1 className={homepageStyles.storyTitle}>L'Histoire</h1>
                            <h3 className={homepageStyles.storyDescription}>
                                Bienvenue au Restaurant A, où la haute cuisine méditerranéenne moderne rencontre un art culinaire exceptionnel.
                                Le Restaurant A est un restaurant familial connu pour son menu moderne et son expérience gastronomique.
                            </h3>
                            <div className={homepageStyles.storyHighlightsRow}>
                                <div className={homepageStyles.establishmentHighlight}>
                                    <h1 className={homepageStyles.establishmentYear}>1996</h1>
                                    <h3 className={homepageStyles.establishmentHighlightText}>année de notre création</h3>
                                </div>
                                <div className={homepageStyles.establishmentHighlight}>
                                    <h1 className={homepageStyles.establishmentYear}>2024</h1>
                                    <h3 className={homepageStyles.establishmentHighlightText}>Meilleur restaurant de l'année</h3>
                                </div>
                            </div>
                            <div className={homepageStyles.ownerSignatureSection}>
                                <h3 className={homepageStyles.ownerSignatureText}>SIGNATURE DU PROPRIÉTAIRE</h3>
                                <h1 className={homepageStyles.ownerName}>Josefine</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={homepageStyles.offerSection}>
                <div className={homepageStyles.flexColWrapper1}>
                    <div className={homepageStyles.flexColWrapper2}>
                        <div className={homepageStyles.flexColContainer1}>
                            <div className={homepageStyles.flexColTopContent}>
                                <hr className={homepageStyles.horizontalLine1} size={1} />
                                <h5 className={homepageStyles.offerHighlight}>Offre</h5>
                                <hr className={homepageStyles.horizontalLine2} size={1} />
                            </div>
                            <h1 className={homepageStyles.offerTitle}>Nos plats en offre spéciale</h1>
                            <h3 className={homepageStyles.offerSubtitle}>
                                Ne manquez pas nos offres spéciales, avec des plats exclusifs et des délices de saison à des prix imbattables !
                            </h3>
                        </div>
                        <div className={homepageStyles.flexRowWrapper}>
                            <figure
                                className={homepageStyles.contentBox1}
                                style={{ '--src': `url(${'/assets/burger_offer.png'})` }}>
                                <div className={homepageStyles.flexColInnerContainer1}>
                                    <div
                                        className={homepageStyles.contentBoxHeader1}
                                        style={{ '--src': `url(${'/assets/background_circle_white.svg'})` }}>
                                        <h5 className={homepageStyles.offerHighlightSmall}>Seulement</h5>
                                        <h1 className={homepageStyles.offerPriceWrapper1_box}>
                                            <span className={homepageStyles.offerPriceWrapper1}>
                                                <span className={homepageStyles.offerPriceWrapper1_span0}>$</span>
                                                <span className={homepageStyles.offerPriceWrapper1_span1}>10</span>
                                            </span>
                                        </h1>
                                    </div>
                                    <div className={homepageStyles.flex_col}>
                                        <hr className={homepageStyles.horizontalLine3} size={1} />
                                        <h5 className={homepageStyles.offerDiscountHighlight1}>Offre de 50%</h5>
                                        <hr className={homepageStyles.horizontalLine4} size={1} />
                                    </div>
                                    <h1 className={homepageStyles.offerItemTitle1}>Burger au Poulet</h1>
                                    <h3 className={homepageStyles.offerItemDescription1}>
                                        Notre burger au poulet succulent est une fusion délicieuse d'épices méditerranéennes et de poulet juteux de premier choix.
                                    </h3>
                                </div>
                            </figure>
                            <figure
                                className={homepageStyles.contentBox2}
                                style={{ '--src': `url(${'/assets/pizza_offer.jpg'})` }}>
                                <div className={homepageStyles.flexColInnerContainer2}>
                                    <div
                                        className={homepageStyles.contentBoxHeader2}
                                        style={{ '--src': `url(${'/assets/background_circle_blue.svg'})` }}>
                                        <div className={homepageStyles.flex_col1}>
                                            <h5 className={homepageStyles.offerHighlightSmall2}>Seulement</h5>
                                            <h1 className={homepageStyles.offerPriceWrapper2}>$9</h1>
                                        </div>
                                    </div>
                                    <div className={homepageStyles.flex_col}>
                                        <hr className={homepageStyles.horizontalLine5} size={1} />
                                        <h5 className={homepageStyles.offerDiscountHighlight2}>Offre de 50%</h5>
                                        <hr className={homepageStyles.horizontalLine6} size={1} />
                                    </div>
                                    <h1 className={homepageStyles.offerItemTitle2}>Pizza Exotique</h1>
                                    <h3 className={homepageStyles.offerItemDescription2}>
                                        Essayez notre pizza exotique, débordante de saveurs audacieuses et uniques.
                                    </h3>
                                </div>
                            </figure>
                        </div>
                    </div>
                    <div className={homepageStyles.flexColContainer2}>
                        <div className={homepageStyles.flexColWrapper3}>
                            <div className={homepageStyles.flexColTopContent2}>
                                <hr className={homepageStyles.horizontalLine7} size={1} />
                                <h5 className={homepageStyles.menuHighlight}>Menu</h5>
                                <hr className={homepageStyles.horizontalLine8} size={1} />
                            </div>
                            <div className={homepageStyles.flexColContainer3}>
                                <h1 className={homepageStyles.popularDishesTitle}>Plats Populaires</h1>
                                <h3 className={homepageStyles.popularDishesSubtitle}>
                                    Découvrez nos plats populaires, chacun soigneusement élaboré pour mettre en valeur les saveurs vibrantes et diversifiées de la cuisine méditerranéenne.
                                </h3>
                            </div>
                        </div>
                        <div className={homepageStyles.flexRowContainer1}>
                            <div className={homepageStyles.popularDishCol1}>
                                <img
                                    className={homepageStyles.imageSpaghetti}
                                    src={'/assets/Classic_Spaghetti.png'}
                                    alt="Spaghetti Classique"
                                />
                                <div className={homepageStyles.flexRowSpaghetti}>
                                    <h1 className={homepageStyles.dishNameSpaghetti}>Spaghetti Classique</h1>
                                    <h1 className={homepageStyles.dishPrice}>$15</h1>
                                </div>
                                <hr className={homepageStyles.horizontalLine7} size={1} />
                                <h3 className={homepageStyles.dishDescriptionSpaghetti}>
                                    Savourez nos spaghetti et boulettes de viande avec une sauce riche et aromatique.
                                </h3>
                            </div>
                            <div className={homepageStyles.popularDishCol2}>
                                <img
                                    className={homepageStyles.imageHotDogs}
                                    src={'/assets/hotdog.png'}
                                    alt="Hotdog"
                                />
                                <div className={homepageStyles.flexRowHotDogs}>
                                    <h1 className={homepageStyles.dishNameHotDogs}>Hot Dogs</h1>
                                    <h1 className={homepageStyles.dishPrice2}>$15</h1>
                                </div>
                                <hr className={homepageStyles.horizontalLine7} size={1} />
                                <h3 className={homepageStyles.dishDescriptionHotDogs}>
                                    Régalez-vous avec nos hot dogs gastronomiques, infusés d'herbes méditerranéennes.
                                </h3>
                            </div>
                            <div className={homepageStyles.popularDishCol3}>
                                <img
                                    className={homepageStyles.imageCitrusTea}
                                    src={'/assets/citrus_tea.png'}
                                    alt="Thé aux Agrumes"
                                />
                                <div className={homepageStyles.flexRowCitrusTea}>
                                    <h1 className={homepageStyles.dishNameCitrusTea}>Thé aux Agrumes</h1>
                                    <h1 className={homepageStyles.dishPrice3}>$15</h1>
                                </div>
                                <hr className={homepageStyles.horizontalLine7} size={1} />
                                <h3 className={homepageStyles.dishDescriptionCitrusTea}>
                                    Savourez notre thé aux agrumes, un mélange rafraîchissant d'agrumes et d'aromatiques.
                                </h3>
                            </div>
                            <div className={homepageStyles.popularDishCol4}>
                                <img
                                    className={homepageStyles.imageSandwich}
                                    src={'/assets/Artisan_sandwich.png'}
                                    alt="Sandwich Artisan"
                                />
                                <div className={homepageStyles.flexRowSandwich}>
                                    <h1 className={homepageStyles.dishNameSandwich}>Sandwich Artisan</h1>
                                    <h1 className={homepageStyles.dishPrice4}>$15</h1>
                                </div>
                                <hr className={homepageStyles.horizontalLine7} size={1} />
                                <h3 className={homepageStyles.dishDescriptionSandwich}>
                                    Ingrédients sélectionnés à la main, superposés sur du pain fraîchement cuit.
                                </h3>
                            </div>
                        </div>
                    </div>

                    <Link to="/menu/fr" className={homepageStyles.linkButton}>
                        <button className={homepageStyles.seeAllDishesBtn}>
                            Voir tous les plats
                        </button>
                    </Link>
                </div>
            </section>

            <section className={homepageStyles.testimonialSection}>
                <img
                    className={homepageStyles.heroImageSplash}
                    src={'/assets/background_splash.png'}
                    alt="lumières du restaurant"
                />

                <div className={homepageStyles.contentBox}>
                    <div className={homepageStyles.contentColumn}>
                        <div className={homepageStyles.headerColumn}>
                            <div className={homepageStyles.highlightColumn}>
                                <hr className={homepageStyles.horizontalLineTop} size={1} />
                                <h5 className={homepageStyles.testimonialHighlight}>Témoignage</h5>
                                <hr className={homepageStyles.horizontalLineBottom} size={1} />
                            </div>

                            <h1 className={homepageStyles.testimonialTitle}>Ce que disent nos critiques</h1>
                            <h3 className={homepageStyles.testimonialSubtitle}>
                                Nous adorons avoir de vos nouvelles, alors laissez un commentaire ou envoyez-nous un e-mail pour dire bonjour !
                            </h3>
                        </div>
                        <div className={homepageStyles.testimonialRow}>
                            <div className={homepageStyles.testimonialBox1}>
                                <div className={homepageStyles.testimonialContentColumn1}>
                                    <div className={homepageStyles.testimonialHeaderRow1}>
                                        <img
                                            className={homepageStyles.testimonialImage1}
                                            src={'/assets/person_1.png'}
                                            alt="Sarah Mitchell"
                                        />
                                        <div className={homepageStyles.testimonialTextColumn1}>
                                            <h1 className={homepageStyles.testimonialName1}>Sarah Mitchell</h1>
                                            <h3 className={homepageStyles.testimonialLocation1}>-Gourmet Gazette</h3>
                                        </div>
                                    </div>
                                    <hr className={homepageStyles.testimonialLine1} size={1} />
                                    <h2 className={homepageStyles.testimonialContent1}>
                                        "Les saveurs méditerranéennes de ce restaurant sont exquises ! Ingrédients frais, portions généreuses et personnel amical. Je recommande vivement les kebabs d'agneau et le baklava !"
                                    </h2>
                                </div>
                            </div>
                            <div className={homepageStyles.testimonialBox2}>
                                <div className={homepageStyles.testimonialContentColumn2}>
                                    <div className={homepageStyles.testimonialHeaderRow2}>
                                        <img
                                            className={homepageStyles.testimonialImage2}
                                            src={'/assets/person_2.png'}
                                            alt="David Kim"
                                        />
                                        <div className={homepageStyles.testimonialTextColumn2}>
                                            <h1 className={homepageStyles.testimonialName2}>David Kim</h1>
                                            <h3 className={homepageStyles.testimonialLocation2}>-Foodie Weekly</h3>
                                        </div>
                                    </div>
                                    <hr className={homepageStyles.testimonialLine2} size={1} />
                                    <h2 className={homepageStyles.testimonialContent2}>
                                        "Cuisine méditerranéenne incroyable ! Le houmous est crémeux et le falafel parfaitement croustillant. Excellent service et atmosphère cosy. Je reviendrai certainement !"
                                    </h2>
                                </div>
                            </div>
                            <div className={homepageStyles.testimonialBox3}>
                                <div className={homepageStyles.testimonialContentColumn3}>
                                    <div className={homepageStyles.testimonialHeaderRow3}>
                                        <img
                                            className={homepageStyles.testimonialImage3}
                                            src={'/assets/person_3.png'}
                                            alt="Emily Jones"
                                        />
                                        <div className={homepageStyles.testimonialTextColumn3}>
                                            <h1 className={homepageStyles.testimonialName3}>Emily Jones</h1>
                                            <h3 className={homepageStyles.testimonialLocation3}>-Culinary Times</h3>
                                        </div>
                                    </div>
                                    <hr className={homepageStyles.testimonialLine3} size={1} />
                                    <h2 className={homepageStyles.testimonialContent3}>
                                        "Plats méditerranéens délicieux ! Le plateau de gyros était savoureux et copieux. Service attentif et excellente ambiance. L'endroit parfait pour un repas décontracté mais agréable."
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <ReserveFooter />
        </div>
    );
};

export default HomepageFr;
