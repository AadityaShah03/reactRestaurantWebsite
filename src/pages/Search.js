
import React, { useState } from "react";
import ReserveFooter from '../components/ReserveFooter/index.js';

import searchStyles from '../Styles/Search.module.scss'

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
            title: "Raw Scallops from Erquy",
            image: "/assets/starter1.png",
            ingredients: "Scallops, lemon, parsley, olive oil",
            price: "$40",
            tod: "Starter",
            tom: "Meat",
        },
        {
            id: 2,
            title: "Spring Roll",
            image: "/assets/starter2.png",
            ingredients: "Rice paper, shrimp, vermicelli, lettuce, mint",
            price: "$20",
            tod: "Starter",
            tom: "Meat",
        },
        {
            id: 3,
            title: "French Onion Soup",
            image: "/assets/starter3.png",
            ingredients: "Onions, beef broth, Gruyere cheese, croutons",
            price: "$25",
            tod: "Starter",
            tom: "Veggie",
        },
        {
            id: 4,
            title: "Tomato Bruschetta",
            image: "/assets/starter4.png",
            ingredients: "Tomatoes, basil, garlic, olive oil, baguette",
            price: "$30",
            tod: "Starter",
            tom: "Veggie",
        },
        {
            id: 5,
            title: "Grilled Salmon with Dill Sauce",
            image: "/assets/main1.png",
            ingredients: "Salmon, dill, lemon, garlic, olive oil",
            price: "$40",
            tod: "Main",
            tom: "Meat",
        },
        {
            id: 6,
            title: "Roast Beef with Vegetable",
            image: "/assets/main2.png",
            ingredients: "Beef, carrots, potatoes, rosemary",
            price: "$20",
            tod: "Main",
            tom: "Meat",
        },
        {
            id: 7,
            title: "Marrkesh Vegetarian Curry",
            image: "/assets/main3.png",
            ingredients: "Chickpeas, tomatoes, carrots, spices",
            price: "$25",
            tod: "Main",
            tom: "Veggie",
        },
        {
            id: 8,
            title: "Spicy Vegan Potato Curry",
            image: "/assets/main4.png",
            ingredients: "Potatoes, coconut milk, spices, chili",
            price: "$30",
            tod: "Main",
            tom: "Vegan",
        },
        {
            id: 9,
            title: "Apple Pie with Cream",
            image: "/assets/des1.png",
            ingredients: "Apples, cinnamon, sugar, cream",
            price: "$40",
            tod: "Dessert",
            tom: "Veggie",
        },
        {
            id: 10,
            title: "Lemon Meringue Pie",
            image: "/assets/des2.png",
            ingredients: "Lemon, eggs, sugar, pie crust",
            price: "$20",
            tod: "Dessert",
            tom: "Veggie",
        },
        {
            id: 11,
            title: "Tender Octopus and Fennel",
            image: "/assets/des3.png",
            ingredients: "Octopus, fennel, olive oil, lemon",
            price: "$50",
            tod: "Dessert",
            tom: "Meat",
        },
        {
            id: 12,
            title: "Sea Bass Ceviche",
            image: "/assets/des4.png",
            ingredients: "Sea bass, lime, cilantro, onions",
            price: "$35",
            tod: "Dessert",
            tom: "Meat",
        },
    ];


    const searchFilteredItems = dishes.filter((dish) =>
        dish.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredItems = isAnyCategorySelected ? searchFilteredItems.filter((dish) =>
        (showVegan && dish.tom === "Vegan") ||
        (showVeggie && dish.tom === "Veggie") ||
        (showMeat && dish.tom === "Meat") ||
        (showApp && dish.tod === "Starter") ||
        (showMain && dish.tod === "Main") ||
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
                                placeholder='Enter an Item'
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
                                <h1 className={searchStyles.filterTitle}>Filter</h1>
                                <h3 className={searchStyles.filterSubtitle}>select the options to filter dishes by type:</h3>
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
                                        <h3 className={searchStyles.optionName}>Vegetarian</h3>
                                    </div>
                                    <div className={searchStyles.filterOptionRow}>
                                        <input className={searchStyles.optionIconContainer}
                                            type="checkbox"
                                            checked={showMeat}
                                            onChange={() => setShowMeat(!showMeat)} />
                                        <h3 className={searchStyles.optionName}>Meat</h3>
                                    </div>
                                </div>
                                <hr className={searchStyles.divider} size={1} />
                                <div className={searchStyles.filterOptionsList}>
                                    <div className={searchStyles.filterOptionRow}>
                                        <input className={searchStyles.optionIconContainer}
                                            type="checkbox"
                                            checked={showApp}
                                            onChange={() => setShowApp(!showApp)} />
                                        <h3 className={searchStyles.optionName}>Appetizer</h3>
                                    </div>
                                    <div className={searchStyles.filterOptionRow}>
                                        <input className={searchStyles.optionIconContainer}
                                            type="checkbox"
                                            checked={showMain}
                                            onChange={() => setShowMain(!showMain)} />
                                        <h3 className={searchStyles.optionName}>Main</h3>
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
                        <h1 className={searchStyles.resultsTitle}>Results</h1>
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