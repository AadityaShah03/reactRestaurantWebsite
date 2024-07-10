import React from 'react';

import ReserveFooter from '../components/ReserveFooter/index.js';

import homepageStyles from '../Styles/Homepage.module.scss';

const Homepage = () => {
    return (
        <div>
            <section className={homepageStyles.heroSection}>
                <div className={homepageStyles.contentWrapper}>
                    <div className={homepageStyles.mainContentWrapper}>
                        <div className={homepageStyles.heroTextWrapper}>
                            <h1 className={homepageStyles.heroTitle}>
                                Welcome to Restaurant A
                            </h1>
                            <h3 className={homepageStyles.heroSubtitle}>
                                Immerse yourself in a luxurious ambience and savour the exquisite flavours crafted from the freshest
                                ingredients.
                            </h3>
                        </div>
                        <button className={homepageStyles.viewMenuButton}>
                            {/* TODO */}
                            View Menu
                        </button>
                    </div>
                    <img
                        className={homepageStyles.heroImage}
                        src={'/assets/homepageHook.png'}
                        alt="alt text"
                    />
                </div>
            </section>

            <section className={homepageStyles.contactSection}>
                <div className={homepageStyles.mainContentContainer}>
                    <div className={homepageStyles.infoColumnsWrapper}>
                        <div className={homepageStyles.locationInfoColumn}>
                            <div
                                className={homepageStyles.locationInfoBox}
                                style={{ '--src': `url(${'./assets/background_circle_blue.svg'})` }}>
                                <img
                                    className={homepageStyles.locationIcon}
                                    src={'/assets/location_white.svg'}
                                    alt="location"
                                />
                            </div>
                            <div className={homepageStyles.locationTextContainer}>
                                <h1 className={homepageStyles.locationTitle}>Locate Us</h1>
                                <h3 className={homepageStyles.locationAddress}>221B Baker Street</h3>
                            </div>
                        </div>
                        <div className={homepageStyles.hoursInfoColumn}>
                            <div
                                className={homepageStyles.hoursInfoBox}
                                style={{ '--src': `url(${'./assets/background_circle_blue.svg'})` }}>
                                <img
                                    className={homepageStyles.hoursIcon}
                                    src={'/assets/clock.svg'}
                                    alt="alt text"
                                />
                            </div>
                            <div className={homepageStyles.hoursTextContainer}>
                                <h1 className={homepageStyles.hoursTitle}>Open Hours</h1>
                                <h3 className={homepageStyles.hoursDetails}>Mon To Fri 9:00 AM - 9:00 AM</h3>
                            </div>
                        </div>
                        <div className={homepageStyles.reservationInfoColumn}>
                            <div
                                className={homepageStyles.reservationInfoBox}
                                style={{ '--src': `url(${'./assets/background_circle_blue.svg'})` }}>
                                <img
                                    className={homepageStyles.reservationIcon}
                                    src={'/assets/reservation_list.svg'}
                                    alt="alt text"
                                />
                            </div>
                            <div className={homepageStyles.reservationTextContainer}>
                                <h1 className={homepageStyles.reservationTitle}>Reservation</h1>
                                <h3 className={homepageStyles.reservationEmail}>RestaurantA@RestaurantA.com</h3>
                            </div>
                        </div>
                    </div>
                    <div className={homepageStyles.storyInfoRow}>
                        <img
                            className={homepageStyles.storyImage1}
                            src={'/assets/story_image.png'}
                            alt="alt text"
                        />
                        <img
                            className={homepageStyles.storyImage2}
                            src={'/assets/vertical_line.svg'}
                            alt="alt text"
                        />
                        <div className={homepageStyles.storyTextContainer}>
                            <h1 className={homepageStyles.storyTitle}>The Story</h1>
                            <h3 className={homepageStyles.storyDescription}>
                                Welcome to Restaurant A, where modern Mediterranean fine dining meets exceptional culinary artistry.
                                Restaurant A is a family run restaurant that is known for it’s modern menu and dining experience
                            </h3>
                            <div className={homepageStyles.storyHighlightsRow}>
                                <div className={homepageStyles.establishmentHighlight}>
                                    <h1 className={homepageStyles.establishmentYear}>1996</h1>
                                    <h3 className={homepageStyles.establishmentHighlightText}>was the year we were established</h3>
                                </div>
                                <div className={homepageStyles.establishmentHighlight}>
                                    <h1 className={homepageStyles.establishmentYear}>2024</h1>
                                    <h3 className={homepageStyles.establishmentHighlightText}>Best restaurant of the year</h3>
                                </div>
                            </div>
                            <div className={homepageStyles.ownerSignatureSection}>
                                <h3 className={homepageStyles.ownerSignatureText}>OWNER SIGNUTURE</h3>
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
                                <h5 className={homepageStyles.offerHighlight}>Offer</h5>
                                <hr className={homepageStyles.horizontalLine2} size={1} />
                            </div>
                            <h1 className={homepageStyles.offerTitle}>Our special offer dishes</h1>
                            <h3 className={homepageStyles.offerSubtitle}>
                                Don't miss our special offers, featuring exclusive dishes and seasonal delights at unbeatable prices!
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
                                        <h5 className={homepageStyles.offerHighlightSmall}>Only</h5>
                                        <h1 className={homepageStyles.offerPriceWrapper1_box}>
                                            <span className={homepageStyles.offerPriceWrapper1}>
                                                <span className={homepageStyles.offerPriceWrapper1_span0}>$</span>
                                                <span className={homepageStyles.offerPriceWrapper1_span1}>10</span>
                                            </span>
                                        </h1>
                                    </div>
                                    <div className={homepageStyles.flex_col}>
                                        <hr className={homepageStyles.horizontalLine3} size={1} />
                                        <h5 className={homepageStyles.offerDiscountHighlight1}>50% Offer Going</h5>
                                        <hr className={homepageStyles.horizontalLine4} size={1} />
                                    </div>
                                    <h1 className={homepageStyles.offerItemTitle1}>Chicken Burger</h1>
                                    <h3 className={homepageStyles.offerItemDescription1}>
                                        Our succulent chicken burger is a delightful fusion of Mediterranean spices and premium, juicy
                                        chicken.
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
                                            <h5 className={homepageStyles.offerHighlightSmall2}>Only</h5>
                                            <h1 className={homepageStyles.offerPriceWrapper2}>$9</h1>
                                        </div>
                                    </div>
                                    <div className={homepageStyles.flex_col}>
                                        <hr className={homepageStyles.horizontalLine5} size={1} />
                                        <h5 className={homepageStyles.offerDiscountHighlight2}>50% Offer Going</h5>
                                        <hr className={homepageStyles.horizontalLine6} size={1} />
                                    </div>
                                    <h1 className={homepageStyles.offerItemTitle2}>Exotic Pizza</h1>
                                    <h3 className={homepageStyles.offerItemDescription2}>
                                        Try our exotic pizza, bursting with bold, unique flavors
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
                                <h1 className={homepageStyles.popularDishesTitle}>Popular Dishes</h1>
                                <h3 className={homepageStyles.popularDishesSubtitle}>
                                    Discover our popular dishes, each thoughtfully crafted to highlight the vibrant and diverse flavours of
                                    Mediterranean cuisine.
                                </h3>
                            </div>
                        </div>
                        <div className={homepageStyles.flexRowContainer1}>
                            <div className={homepageStyles.popularDishCol1}>
                                <img
                                    className={homepageStyles.imageSpaghetti}
                                    src={'/assets/Classic_Spaghetti.png'}
                                    alt="Classic Spaghetti"
                                />
                                <div className={homepageStyles.flexRowSpaghetti}>
                                    <h1 className={homepageStyles.dishNameSpaghetti}>Classic Spaghetti</h1>
                                    <h1 className={homepageStyles.dishPrice}>$15</h1>
                                </div>
                                <hr className={homepageStyles.horizontalLine7} size={1} />
                                <h3 className={homepageStyles.dishDescriptionSpaghetti}>
                                    Enjoy our spaghetti and meatballs with rich, aromatic sauce
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
                                    Indulge in our gourmet hot dogs, infused with Mediterranean herbs
                                </h3>
                            </div>
                            <div className={homepageStyles.popularDishCol3}>
                                <img
                                    className={homepageStyles.imageCitrusTea}
                                    src={'/assets/citrus_tea.png'}
                                    alt="Citrus Tea"
                                />
                                <div className={homepageStyles.flexRowCitrusTea}>
                                    <h1 className={homepageStyles.dishNameCitrusTea}>Citrus Tea</h1>
                                    <h1 className={homepageStyles.dishPrice3}>$15</h1>
                                </div>
                                <hr className={homepageStyles.horizontalLine7} size={1} />
                                <h3 className={homepageStyles.dishDescriptionCitrusTea}>
                                    Savor our citrus tea, a refreshing blend of citrus & aromatics.
                                </h3>
                            </div>
                            <div className={homepageStyles.popularDishCol4}>
                                <img
                                    className={homepageStyles.imageSandwich}
                                    src={'/assets/Artisan_sandwich.png'}
                                    alt="Artisan Sandwich"
                                />
                                <div className={homepageStyles.flexRowSandwich}>
                                    <h1 className={homepageStyles.dishNameSandwich}>Artisan Sandwich</h1>
                                    <h1 className={homepageStyles.dishPrice4}>$15</h1>
                                </div>
                                <hr className={homepageStyles.horizontalLine7} size={1} />
                                <h3 className={homepageStyles.dishDescriptionSandwich}>
                                    Hand-selected ingredients layered on freshly baked bread
                                </h3>
                            </div>
                        </div>
                    </div>
                    <button className={homepageStyles.seeAllDishesBtn}>
                        {/* TODO */}
                        See all dishes
                    </button>
                </div>
            </section>

            <section className={homepageStyles.testimonialSection}>
                <img
                    className={homepageStyles.heroImageSplash}
                    src={'/assets/background_splash.png'}
                    alt="restaurant lights"
                />

                <div className={homepageStyles.contentBox}>
                    <div className={homepageStyles.contentColumn}>
                        <div className={homepageStyles.headerColumn}>
                            <div className={homepageStyles.highlightColumn}>
                                <hr className={homepageStyles.horizontalLineTop} size={1} />
                                <h5 className={homepageStyles.testimonialHighlight}>Testimonial</h5>
                                <hr className={homepageStyles.horizontalLineBottom} size={1} />
                            </div>

                            <h1 className={homepageStyles.testimonialTitle}>What our Critics say</h1>
                            <h3 className={homepageStyles.testimonialSubtitle}>
                                We love to hear from you, so please leave a comment or say hello in an email!
                            </h3>
                        </div>
                        <div className={homepageStyles.testimonialRow}>
                            <div className={homepageStyles.testimonialBox1}>
                                <div className={homepageStyles.testimonialContentColumn1}>
                                    <div className={homepageStyles.testimonialHeaderRow1}>
                                        <img
                                            className={homepageStyles.testimonialImage1}
                                            src={'/assets/person_1.png'}
                                            alt="alt text"
                                        />
                                        <div className={homepageStyles.testimonialTextColumn1}>
                                            <h1 className={homepageStyles.testimonialName1}>Sarah Mitchell</h1>
                                            <h3 className={homepageStyles.testimonialLocation1}>-Gourmet Gazette</h3>
                                        </div>
                                    </div>
                                    <hr className={homepageStyles.testimonialLine1} size={1} />
                                    <h2 className={homepageStyles.testimonialContent1}>
                                        "The Mediterranean flavors at this restaurant are exquisite! Fresh ingredients, generous portions, and friendly staff. Highly recommend the lamb kebabs and baklava!"
                                    </h2>
                                </div>
                            </div>
                            <div className={homepageStyles.testimonialBox2}>
                                <div className={homepageStyles.testimonialContentColumn2}>
                                    <div className={homepageStyles.testimonialHeaderRow2}>
                                        <img
                                            className={homepageStyles.testimonialImage2}
                                            src={'/assets/person_2.png'}
                                            alt="alt text"
                                        />
                                        <div className={homepageStyles.testimonialTextColumn2}>
                                            <h1 className={homepageStyles.testimonialName2}>David Kim</h1>
                                            <h3 className={homepageStyles.testimonialLocation2}>-Foodie Weekly</h3>
                                        </div>
                                    </div>
                                    <hr className={homepageStyles.testimonialLine2} size={1} />
                                    <h2 className={homepageStyles.testimonialContent2}>
                                        "Amazing Mediterranean cuisine! The hummus is creamy, and the falafel is perfectly crispy. Excellent service and a cozy atmosphere. Will be back for sure!"
                                    </h2>
                                </div>
                            </div>
                            <div className={homepageStyles.testimonialBox3}>
                                <div className={homepageStyles.testimonialContentColumn3}>
                                    <div className={homepageStyles.testimonialHeaderRow3}>
                                        <img
                                            className={homepageStyles.testimonialImage3}
                                            src={'/assets/person_3.png'}
                                            alt="alt text"
                                        />
                                        <div className={homepageStyles.testimonialTextColumn3}>
                                            <h1 className={homepageStyles.testimonialName3}>Emily Jones</h1>
                                            <h3 className={homepageStyles.testimonialLocation3}>-Culinary Times</h3>
                                        </div>
                                    </div>
                                    <hr className={homepageStyles.testimonialLine3} size={1} />
                                    <h2 className={homepageStyles.testimonialContent3}>
                                        "Delicious Mediterranean dishes! The gyro platter was flavorful and filling. Attentive service and great ambiance. Perfect spot for a casual yet delightful meal."
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
}

export default Homepage;