import React, { useState } from "react";
import ReserveFooter from '../components/ReserveFooter/index.js';
import searchStyles from '../Styles/Search.module.scss';

const Search = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [showVegan, setShowVegan] = useState(true);
    const [showVeggie, setShowVeggie] = useState(true);
    const [showMeat, setShowMeat] = useState(true);
    const [showApp, setShowApp] = useState(true);
    const [showMain, setShowMain] = useState(true);
    const [showDes, setShowDes] = useState(true);

    const isAnyCategorySelected = showVegan || showVeggie || showMeat || showApp || showMain || showDes;

    const dishes = [
        {
            id: 1,
            title: "Coquilles Saint-Jacques d'Erquy",
            image: "/assets/starter1.png",
            ingredients: "Coquilles Saint-Jacques, citron, persil, huile d'olive",
            price: "40$",
            tod: "Entrée",
            tom: "Viande",
        },
        {
            id: 2,
            title: "Rouleau de Printemps",
            image: "/assets/starter2.png",
            ingredients: "Papier de riz, crevettes, vermicelles, laitue, menthe",
            price: "20$",
            tod: "Entrée",
            tom: "Viande",
        },
        {
            id: 3,
            title: "Soupe à l'Oignon",
            image: "/assets/starter3.png",
            ingredients: "Oignons, bouillon de boeuf, fromage Gruyère, croûtons",
            price: "25$",
            tod: "Entrée",
            tom: "Végétarien",
        },
        {
            id: 4,
            title: "Bruschetta à la Tomate",
            image: "/assets/starter4.png",
            ingredients: "Tomates, basilic, ail, huile d'olive, baguette",
            price: "30$",
            tod: "Entrée",
            tom: "Végétarien",
        },
        {
            id: 5,
            title: "Saumon Grillé à la Sauce Aneth",
            image: "/assets/main1.png",
            ingredients: "Saumon, aneth, citron, ail, huile d'olive",
            price: "40$",
            tod: "Plat Principal",
            tom: "Viande",
        },
        {
            id: 6,
            title: "Boeuf Rôti avec Légumes",
            image: "/assets/main2.png",
            ingredients: "Boeuf, carottes, pommes de terre, romarin",
            price: "20$",
            tod: "Plat Principal",
            tom: "Viande",
        },
        {
            id: 7,
            title: "Curry Végétarien de Marrkesh",
            image: "/assets/main3.png",
            ingredients: "Pois chiches, tomates, carottes, épices",
            price: "25$",
            tod: "Plat Principal",
            tom: "Végétarien",
        },
        {
            id: 8,
            title: "Curry Épicé de Pommes de Terre Vegan",
            image: "/assets/main4.png",
            ingredients: "Pommes de terre, lait de coco, épices, piment",
            price: "30$",
            tod: "Plat Principal",
            tom: "Vegan",
        },
        {
            id: 9,
            title: "Tarte aux Pommes avec Crème",
            image: "/assets/des1.png",
            ingredients: "Pommes, cannelle, sucre, crème",
            price: "40$",
            tod: "Dessert",
            tom: "Végétarien",
        },
        {
            id: 10,
            title: "Tarte au Citron Meringuée",
            image: "/assets/des2.png",
            ingredients: "Citron, œufs, sucre, pâte à tarte",
            price: "20$",
            tod: "Dessert",
            tom: "Végétarien",
        },
        {
            id: 11,
            title: "Poulpe Tendre et Fenouil",
            image: "/assets/des3.png",
            ingredients: "Poulpe, fenouil, huile d'olive, citron",
            price: "50$",
            tod: "Dessert",
            tom: "Viande",
        },
        {
            id: 12,
            title: "Ceviche de Bar",
            image: "/assets/des4.png",
            ingredients: "Bar, lime, coriandre, oignons",
            price: "35$",
            tod: "Dessert",
            tom: "Viande",
        },
    ];

    const searchFilteredItems = dishes.filter((dish) =>
        dish.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredItems = isAnyCategorySelected ? searchFilteredItems.filter((dish) =>
        (showVegan && dish.tom === "Vegan") ||
        (showVeggie && dish.tom === "Végétarien") ||
        (showMeat && dish.tom === "Viande") ||
        (showApp && dish.tod === "Entrée") ||
        (showMain && dish.tod === "Plat Principal") ||
        (showDes && dish.tod === "Dessert")
    ) : [];

    return (
        <div>
            <section className={searchStyles.menuOverviewSection}>
                <div className={searchStyles.contentContainer}>
                    <div className={searchStyles.menuSection}>
                        <hr className={searchStyles.horizontalLineBeforeTitle} size={1} />
                        <div className={searchStyles.inputFlexRow}>
                            <input className={searchStyles.menuTitle}
                                type="text"
                                placeholder='Entrez un article'
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <hr className={searchStyles.horizontalLineAfterTitle} size={1} />
                    </div>
                </div>
            </section>

            <section className={searchStyles.filterSection}>
                <div className={searchStyles.filterContainer}>
                    <div className={searchStyles.filterContentBox}>
                        <div className={searchStyles.filterColumnContainer}>
                            <div className={searchStyles.filterHeadingContainer}>
                                <h1 className={searchStyles.filterTitle}>Filtrer</h1>
                                <h3 className={searchStyles.filterSubtitle}>Sélectionnez les options pour filtrer les plats par type :</h3>
                            </div>
                            <div className={searchStyles.filterOptionsContainer}>
                                <hr className={searchStyles.divider} size={1} />
                                <div className={searchStyles.filterOptionsList}>
                                    <div className={searchStyles.filterOptionRow}>
                                        <input className={searchStyles.optionIconContainer}
                                            type="checkbox"
                                            checked={showVegan}
                                            onChange={() => setShowVegan(!showVegan)} />
                                        <h3 className={searchStyles.optionName}>Vegan</h3>
                                    </div>
                                    <div className={searchStyles.filterOptionRow}>
                                        <input className={searchStyles.optionIconContainer}
                                            type="checkbox"
                                            checked={showVeggie}
                                            onChange={() => setShowVeggie(!showVeggie)} />
                                        <h3 className={searchStyles.optionName}>Végétarien</h3>
                                    </div>
                                    <div className={searchStyles.filterOptionRow}>
                                        <input className={searchStyles.optionIconContainer}
                                            type="checkbox"
                                            checked={showMeat}
                                            onChange={() => setShowMeat(!showMeat)} />
                                        <h3 className={searchStyles.optionName}>Viande</h3>
                                    </div>
                                </div>
                                <hr className={searchStyles.divider} size={1} />
                                <div className={searchStyles.filterOptionsList}>
                                    <div className={searchStyles.filterOptionRow}>
                                        <input className={searchStyles.optionIconContainer}
                                            type="checkbox"
                                            checked={showApp}
                                            onChange={() => setShowApp(!showApp)} />
                                        <h3 className={searchStyles.optionName}>Entrée</h3>
                                    </div>
                                    <div className={searchStyles.filterOptionRow}>
                                        <input className={searchStyles.optionIconContainer}
                                            type="checkbox"
                                            checked={showMain}
                                            onChange={() => setShowMain(!showMain)} />
                                        <h3 className={searchStyles.optionName}>Plat Principal</h3>
                                    </div>
                                    <div className={searchStyles.filterOptionRow}>
                                        <input className={searchStyles.optionIconContainer}
                                            type="checkbox"
                                            checked={showDes}
                                            onChange={() => setShowDes(!showDes)} />
                                        <h3 className={searchStyles.optionName}>Dessert</h3>
                                    </div>
                                </div>
                                <hr className={searchStyles.divider} size={1} />
                            </div>
                        </div>
                    </div>
                    <div className={searchStyles.resultsContainer}>
                        <h1 className={searchStyles.resultsTitle}>Résultats</h1>
                        <div className={searchStyles.resultsList}>

                            {filteredItems.map((dish) => (
                                <div className={searchStyles.resultCard} key={dish.id}>
                                    <img
                                        className={searchStyles.resultImage}
                                        src={dish.image}
                                        alt={dish.title}
                                    />
                                    <div className={searchStyles.resultDetails}>
                                        <h1 className={searchStyles.resultTitle}>{dish.title}</h1>
                                        <div className={searchStyles.resultInfoRow}>
                                            <h3 className={searchStyles.resultDescription}>{dish.ingredients}</h3>
                                            <img
                                                className={searchStyles.resultAdditionalImage}
                                                src={'/assets/DashedLine.svg'}
                                                alt="alt text"
                                            />
                                            <h1 className={searchStyles.resultPrice}>{dish.price}</h1>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <ReserveFooter />
        </div>
    );
}

export default Search;
