import React from 'react';

import ReserveFooter from '../components/ReserveFooter/index.js';

import galleryStyles from '../Styles/Gallery.module.scss'

const Gallery = () => {
    return (
        <div>
            <section className={galleryStyles.menuOverviewSection}>
                <div className={galleryStyles.contentContainer}>
                    <div className={galleryStyles.menuSection}>
                        <hr className={galleryStyles.horizontalLineBeforeTitle} size={1} />
                        <h1 className={galleryStyles.menuTitle}>Gallery</h1>
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
                                alt="gallery splash"
                            />
                            <div className={galleryStyles.pastaDescription1}>
                                <h1 className={galleryStyles.pastaTitle1}>Italian Pasta</h1>
                                <h3 className={galleryStyles.pastaSubtitle1}>
                                    Typical spaghetti is made from water, milled wheat, and flour, but authentic spaghetti is made with
                                    durum wheat semolina.
                                    <br />
                                    <br />
                                    {`Spaghetti is Italy's classic pasta that is known for its long, thin, cylindrical shape.`}
                                </h3>
                                <h3 className={galleryStyles.pastaCategoryBox1_box}>
                                    <span className={galleryStyles.pastaCategoryBox1}>
                                        <span className={galleryStyles.pastaCategoryBox1_span0}>CATEGORY: </span>
                                        <span className={galleryStyles.pastaCategoryBox1_span1}>Main Courses</span>
                                    </span>
                                </h3>
                            </div>
                        </article>
                        <article className={galleryStyles.pastaDishItem2}>
                            <img
                                className={galleryStyles.pastaImage2}
                                src={'/assets/gallery2_splash.png'}
                                alt="gallery 2 splash"
                            />
                            <div className={galleryStyles.pastaDescription2}>
                                <h1 className={galleryStyles.pastaTitle2}>Stuffed Pasta</h1>
                                <h3 className={galleryStyles.pastaSubtitle2}>
                                    Typical spaghetti is made from water, milled wheat, and flour, but authentic spaghetti is made with
                                    durum wheat semolina.
                                    <br />
                                    <br />
                                    {`Spaghetti is Italy's classic pasta that is known for its long, thin, cylindrical shape.`}
                                </h3>
                                <h3 className={galleryStyles.pastaCategoryBox2_box}>
                                    <span className={galleryStyles.pastaCategoryBox2}>
                                        <span className={galleryStyles.pastaCategoryBox2_span0}>CATEGORY: </span>
                                        <span className={galleryStyles.pastaCategoryBox2_span1}>Main Courses</span>
                                    </span>
                                </h3>
                            </div>
                        </article>
                        <article className={galleryStyles.pastaDishItem3}>
                            <img
                                className={galleryStyles.pastaImage3}
                                src={'/assets/gallery3_splash.png'}
                                alt="gallery 3 splash"
                            />
                            <div className={galleryStyles.pastaDescription3}>
                                <h1 className={galleryStyles.pastaTitle3}>Tubular Pasta</h1>
                                <h3 className={galleryStyles.pastaSubtitle3}>
                                    Typical spaghetti is made from water, milled wheat, and flour, but authentic spaghetti is made with
                                    durum wheat semolina.
                                    <br />
                                    <br />
                                    {`Spaghetti is Italy's classic pasta that is known for its long, thin, cylindrical shape.`}
                                </h3>
                                <h3 className={galleryStyles.pastaCategoryBox3_box}>
                                    <span className={galleryStyles.pastaCategoryBox3}>
                                        <span className={galleryStyles.pastaCategoryBox3_span0}>CATEGORY: </span>
                                        <span className={galleryStyles.pastaCategoryBox3_span1}>Main Courses</span>
                                    </span>
                                </h3>
                            </div>
                        </article>
                    </div>
                    <button className={galleryStyles.seeAllDishesButton}>
                        {/* TODO */}
                        See all dishes
                    </button>
                </div>
            </section>

            <ReserveFooter />
        </div>
    );
}

export default Gallery;