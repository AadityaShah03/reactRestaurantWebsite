import React from 'react';

import ReserveFooter from '../components/ReserveFooter';

import menuStyles from '../Styles/Menu.module.scss'

const Menu = () => {
    return (
        <div>
            <section className={menuStyles.menuOverviewSection}>
                <div className={menuStyles.contentContainer}>
                    <div className={menuStyles.menuSection}>
                        <hr className={menuStyles.horizontalLineBeforeTitle} size={1} />
                        <h1 className={menuStyles.menuTitle}>Our Menu</h1>
                        <hr className={menuStyles.horizontalLineAfterTitle} size={1} />
                    </div>
                </div>
            </section>

            <section className={menuStyles.startersSection}>
                <div className={menuStyles.starterHeaderRow}>
                    <img
                        className={menuStyles.heroImage}
                        src={'/assets/drink_splash.jpg'}
                        alt="drink splash"
                    />
                    <div className={menuStyles.headerCol}>
                        <h1 className={menuStyles.heroTitle}>Starters</h1>
                        <div className={menuStyles.startersListWrapper}>
                            <div className={menuStyles.starterItemRow}>
                                <img
                                    className={menuStyles.starterItemImage}
                                    src={'/assets/starter1.png'}
                                    alt="starter"
                                />
                                <div className={menuStyles.starterItemDetails}>
                                    <h1 className={menuStyles.starterItemTitle}>Raw Scallops from Erquy</h1>
                                    <div className={menuStyles.starterItemInfoRow}>
                                        <h3 className={menuStyles.starterItemSubtitle}>Candied Jerusalem artichokes, truffle</h3>
                                        <img
                                            className={menuStyles.starterItemIcon}
                                            src={'/assets/DashedLine.svg'}
                                            alt="DashedLine"
                                        />
                                        <h1 className={menuStyles.starterItemPrice}>$40</h1>
                                    </div>
                                </div>
                            </div>
                            <div className={menuStyles.starterItemRow}>
                                <img
                                    className={menuStyles.starterItemImage}
                                    src={'/assets/Starter2.png'}
                                    alt="starter2"
                                />
                                <div className={menuStyles.starterItemDetails}>
                                    <h1 className={menuStyles.starterItemTitle}>Spring Roll</h1>
                                    <div className={menuStyles.starterItemInfoRow}>
                                        <h3 className={menuStyles.starterItemSubtitle}>Candied Jerusalem artichokes, truffle</h3>
                                        <img
                                            className={menuStyles.starterItemIcon}
                                            src={'/assets/DashedLine.svg'}
                                            alt="dashed line"
                                        />
                                        <h1 className={menuStyles.starterItemPrice}>$20</h1>
                                    </div>
                                </div>
                            </div>
                            <div className={menuStyles.starterItemRow}>
                                <img
                                    className={menuStyles.starterItemImage}
                                    src={'/assets/starter3.png'}
                                    alt="starter3"
                                />
                                <div className={menuStyles.starterItemDetails}>
                                    <h1 className={menuStyles.starterItemTitle}>French Onion Soup</h1>
                                    <div className={menuStyles.starterItemInfoRow}>
                                        <h3 className={menuStyles.starterItemSubtitle}>Candied Jerusalem artichokes, truffle</h3>
                                        <img
                                            className={menuStyles.starterItemIcon}
                                            src={'/assets/DashedLine.svg'}
                                            alt="dashed line"
                                        />
                                        <h1 className={menuStyles.starterItemPrice}>$25</h1>
                                    </div>
                                </div>
                            </div>
                            <div className={menuStyles.starterItemRow}>
                                <img
                                    className={menuStyles.starterItemImage}
                                    src={'/assets/starter4.png'}
                                    alt="Starter4"
                                />
                                <div className={menuStyles.starterItemDetails}>
                                    <h1 className={menuStyles.starterItemTitle}>Tomato Bruschetta</h1>
                                    <div className={menuStyles.starterItemInfoRow}>
                                        <h3 className={menuStyles.starterItemSubtitle}>Candied Jerusalem artichokes, truffle</h3>
                                        <img
                                            className={menuStyles.starterItemIcon}
                                            src={'/assets/DashedLine.svg'}
                                            alt="dashed line"
                                        />
                                        <h1 className={menuStyles.starterItemPrice}>$30</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={menuStyles.mainDishSection}>
                <img
                    className={menuStyles.heroImageMain}
                    src={'/assets/background_splash_2.png'}
                    alt="Splash"
                />
                <div className={menuStyles.dishesFlexRow}>
                    <div className={menuStyles.mainDishColumn}>
                        <h1 className={menuStyles.mainDishTitle}>Mains</h1>
                        <div className={menuStyles.dishesColumn}>
                            <div className={menuStyles.grilledSalmonRow}>
                                <img
                                    className={menuStyles.grilledSalmonImage}
                                    src={'/assets/main1.png'}
                                    alt="Main"
                                />
                                <div className={menuStyles.grilledSalmonColumn}>
                                    <h1 className={menuStyles.grilledSalmonTitle}>Grilled Salmon with Dil Sauce</h1>
                                    <div className={menuStyles.grilledSalmonDetailsRow}>
                                        <h3 className={menuStyles.grilledSalmonSubtitle}>Candied Jerusalem artichokes, truffle</h3>
                                        <img
                                            className={menuStyles.grilledSalmonIcon}
                                            src={'/assets/DashedLine.svg'}
                                            alt="dashed line"
                                        />
                                        <h1 className={menuStyles.grilledSalmonPrice}>$40</h1>
                                    </div>
                                </div>
                            </div>
                            <div className={menuStyles.roastBeefRow}>
                                <img
                                    className={menuStyles.roastBeefImage}
                                    src={'/assets/main2.png'}
                                    alt="Main 2"
                                />
                                <div className={menuStyles.roastBeefColumn}>
                                    <h1 className={menuStyles.roastBeefTitle}>Roast Beef with Vegetable</h1>
                                    <div className={menuStyles.roastBeefDetailsRow}>
                                        <h3 className={menuStyles.roastBeefSubtitle}>Candied Jerusalem artichokes, truffle</h3>
                                        <img
                                            className={menuStyles.roastBeefIcon}
                                            src={'/assets/DashedLine.svg'}
                                            alt="dashed line"
                                        />
                                        <h1 className={menuStyles.roastBeefPrice}>$20</h1>
                                    </div>
                                </div>
                            </div>
                            <div className={menuStyles.vegetarianCurryRow}>
                                <img
                                    className={menuStyles.vegetarianCurryImage}
                                    src={'/assets/main3.png'}
                                    alt="Main 3"
                                />
                                <div className={menuStyles.vegetarianCurryColumn}>
                                    <h1 className={menuStyles.vegetarianCurryTitle}>Marrkesh Vegetetarian Curruy</h1>
                                    <div className={menuStyles.vegetarianCurryDetailsRow}>
                                        <h3 className={menuStyles.vegetarianCurrySubtitle}>
                                            Candied Jerusalem artichokes, truffle
                                        </h3>
                                        <img
                                            className={menuStyles.vegetarianCurryIcon}
                                            src={'/assets/DashedLine.svg'}
                                            alt="dashed line"
                                        />
                                        <h1 className={menuStyles.vegetarianCurryPrice}>$25</h1>
                                    </div>
                                </div>
                            </div>
                            <div className={menuStyles.veganPotatoCurryRow}>
                                <img
                                    className={menuStyles.veganPotatoCurryImage}
                                    src={'/assets/main4.png'}
                                    alt="Main 4"
                                />
                                <div className={menuStyles.veganPotatoCurryColumn}>
                                    <h1 className={menuStyles.veganPotatoCurryTitle}>Spicy Vegan Potato Curry</h1>
                                    <div className={menuStyles.veganPotatoCurryDetailsRow}>
                                        {/* Details row containing subtitle, icon and price for Vegan Potato Curry */}
                                        <h3 className={menuStyles.veganPotatoCurrySubtitle}>
                                            Candied Jerusalem artichokes, truffle
                                        </h3>
                                        <img
                                            className={menuStyles.veganPotatoCurryIcon}
                                            src={'/assets/DashedLine.svg'}
                                            alt="dashed line"
                                        />
                                        <h1 className={menuStyles.veganPotatoCurryPrice}>$30</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img
                        className={menuStyles.backgroundImage}
                        src={'/assets/background_splash_3.jpg'}
                        alt="Splash"
                    />
                </div>
            </section>

            <section className={menuStyles.dessertMenuSection}>
                <img
                    className={menuStyles.mainImage}
                    src={'/assets/background_splash_4.png'}
                    alt="splash"
                />
                <div className={menuStyles.menuItemContainer}>
                    <img
                        className={menuStyles.menuItemImage}
                        src={'/assets/background_splash_5.jpg'}
                        alt="splash"
                    />
                    <div className={menuStyles.menuItemDetails}>
                        <header className={menuStyles.menuTitleDes}>Dessert</header>
                        <article className={menuStyles.dessertItemList}>
                            <div className={menuStyles.dessertItemRow}>
                                <img
                                    className={menuStyles.dessertItemImage}
                                    src={'/assets/des1.png'}
                                    alt="Dessert"
                                />
                                <div className={menuStyles.dessertItemDetails}>
                                    <h2 className={menuStyles.dessertItemTitle}>Apple Pie with Cream</h2>
                                    <div className={menuStyles.dessertItemInfoRow}>
                                        <p className={menuStyles.dessertItemDescription}>
                                            Candied Jerusalem artichokes, truffle
                                        </p>
                                        <img
                                            className={menuStyles.dessertItemIcon}
                                            src={'/assets/DashedLine.svg'}
                                            alt="dashed line"
                                        />
                                        <p className={menuStyles.dessertItemPrice}>$40</p>
                                    </div>
                                </div>
                            </div>
                            <div className={menuStyles.dessertItemRow1}>
                                <img
                                    className={menuStyles.dessertItemImage1}
                                    src={'/assets/des2.png'}
                                    alt="Dessert"
                                />
                                <div className={menuStyles.dessertItemDetails1}>
                                    <h2 className={menuStyles.dessertItemTitle1}>Lemon Meringue Pie</h2>
                                    <div className={menuStyles.dessertItemInfoRow1}>
                                        <p className={menuStyles.dessertItemDescription1}>
                                            Candied Jerusalem artichokes, truffle
                                        </p>
                                        <img
                                            className={menuStyles.dessertItemIcon1}
                                            src={'/assets/DashedLine.svg'}
                                            alt="dashed line"
                                        />
                                        <p className={menuStyles.dessertItemPrice1}>$20</p>
                                    </div>
                                </div>
                            </div>
                            <div className={menuStyles.dessertItemRow2}>
                                <img
                                    className={menuStyles.dessertItemImage2}
                                    src={'/assets/des3.png'}
                                    alt="Dessert"
                                />
                                <div className={menuStyles.dessertItemDetails2}>
                                    <h2 className={menuStyles.dessertItemTitle2}>Tender Octopus and Fennel</h2>
                                    <div className={menuStyles.dessertItemInfoRow2}>
                                        <p className={menuStyles.dessertItemDescription2}>
                                            Candied Jerusalem artichokes, truffle
                                        </p>
                                        <img
                                            className={menuStyles.dessertItemIcon2}
                                            src={'/assets/DashedLine.svg'}
                                            alt="dashed line"
                                        />
                                        <p className={menuStyles.dessertItemPrice2}>$50</p>
                                    </div>
                                </div>
                            </div>
                            <div className={menuStyles.dessertItemRow3}>
                                <img
                                    className={menuStyles.dessertItemImage3}
                                    src={'/assets/des4.png'}
                                    alt="Dessert"
                                />

                                <div className={menuStyles.dessertItemDetails3}>
                                    <h2 className={menuStyles.dessertItemTitle3}>Sea Bass Cevich</h2>

                                    <div className={menuStyles.dessertItemInfoRow3}>
                                        <p className={menuStyles.dessertItemDescription3}>
                                            Candied Jerusalem artichokes, truffle
                                        </p>
                                        <img
                                            className={menuStyles.dessertItemIcon3}
                                            src={'/assets/DashedLine.svg'}
                                            alt="dashed line"
                                        />
                                        <p className={menuStyles.dessertItemPrice3}>$35</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            <ReserveFooter />
        </div>
    );
}

export default Menu;