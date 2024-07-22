import React from 'react';

import ReserveFooter from '../components/ReserveFooter/index.js';

import galleryStyles from '../Styles/Gallery.module.scss'
import { Link } from 'react-router-dom';

const Gallery = () => {
    return (
        <div>
            <section className={galleryStyles.menuOverviewSection}>
                <div className={galleryStyles.contentContainer}>
                    <div className={galleryStyles.menuSection}>
                        <hr className={galleryStyles.horizontalLineBeforeTitle} size={1} />
                        <h1 className={galleryStyles.menuTitle}>Galerie</h1>
                        <hr className={galleryStyles.horizontalLineAfterTitle} size={1} />
                    </div>
                </div>
            </section>

            <section className={galleryStyles.pastaDishesSection}>
                <div className={galleryStyles.pastaDishesContainer}>
                    <div className={galleryStyles.pastaDishList}>
                        <article className={galleryStyles.pastaDishItem}>
                            <img
                                className={galleryStyles.pastaImage1}
                                src={'/assets/gallery_splash.png'}
                                alt="splash de la galerie"
                            />
                            <div className={galleryStyles.pastaDescription1}>
                                <h1 className={galleryStyles.pastaTitle1}>Pâtes Italiennes</h1>
                                <h3 className={galleryStyles.pastaSubtitle1}>
                                    Les spaghetti typiques sont faits d'eau, de blé moulu et de farine, mais les véritables spaghetti sont fabriqués à partir de semoule de blé dur.
                                    <br />
                                    <br />
                                    {`Les spaghetti sont les pâtes classiques de l'Italie, connues pour leur forme longue, fine et cylindrique.`}
                                </h3>
                                <h3 className={galleryStyles.pastaCategoryBox1_box}>
                                    <span className={galleryStyles.pastaCategoryBox1}>
                                        <span className={galleryStyles.pastaCategoryBox1_span0}>CATÉGORIE : </span>
                                        <span className={galleryStyles.pastaCategoryBox1_span1}>Plats Principaux</span>
                                    </span>
                                </h3>
                            </div>
                        </article>
                        <article className={galleryStyles.pastaDishItem2}>
                            <img
                                className={galleryStyles.pastaImage2}
                                src={'/assets/gallery2_splash.png'}
                                alt="splash galerie 2"
                            />
                            <div className={galleryStyles.pastaDescription2}>
                                <h1 className={galleryStyles.pastaTitle2}>Pâtes Farcies</h1>
                                <h3 className={galleryStyles.pastaSubtitle2}>
                                    Les spaghetti typiques sont faits d'eau, de blé moulu et de farine, mais les véritables spaghetti sont fabriqués à partir de semoule de blé dur.
                                    <br />
                                    <br />
                                    {`Les spaghetti sont les pâtes classiques de l'Italie, connues pour leur forme longue, fine et cylindrique.`}
                                </h3>
                                <h3 className={galleryStyles.pastaCategoryBox2_box}>
                                    <span className={galleryStyles.pastaCategoryBox2}>
                                        <span className={galleryStyles.pastaCategoryBox2_span0}>CATÉGORIE : </span>
                                        <span className={galleryStyles.pastaCategoryBox2_span1}>Plats Principaux</span>
                                    </span>
                                </h3>
                            </div>
                        </article>
                        <article className={galleryStyles.pastaDishItem3}>
                            <img
                                className={galleryStyles.pastaImage3}
                                src={'/assets/gallery3_splash.png'}
                                alt="splash galerie 3"
                            />
                            <div className={galleryStyles.pastaDescription3}>
                                <h1 className={galleryStyles.pastaTitle3}>Pâtes Tubulaires</h1>
                                <h3 className={galleryStyles.pastaSubtitle3}>
                                    Les spaghetti typiques sont faits d'eau, de blé moulu et de farine, mais les véritables spaghetti sont fabriqués à partir de semoule de blé dur.
                                    <br />
                                    <br />
                                    {`Les spaghetti sont les pâtes classiques de l'Italie, connues pour leur forme longue, fine et cylindrique.`}
                                </h3>
                                <h3 className={galleryStyles.pastaCategoryBox3_box}>
                                    <span className={galleryStyles.pastaCategoryBox3}>
                                        <span className={galleryStyles.pastaCategoryBox3_span0}>CATÉGORIE : </span>
                                        <span className={galleryStyles.pastaCategoryBox3_span1}>Plats Principaux</span>
                                    </span>
                                </h3>
                            </div>
                        </article>
                    </div>
                    <Link to="/menu/fr" className={galleryStyles.linkButton}>
                        <button className={galleryStyles.seeAllDishesButton}>
                            Voir tous les plats
                        </button>
                    </Link>
                </div>
            </section>

            <ReserveFooter />
        </div>
    );
}

export default Gallery;
