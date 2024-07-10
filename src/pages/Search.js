import React from 'react';

import ReserveFooter from '../components/ReserveFooter/index.js';

import searchStyles from '../Styles/Search.module.scss'

const Search = () => {
    return (
        <div>
            <section className={searchStyles.menuOverviewSection}>
                <div className={searchStyles.contentContainer}>
                    <div className={searchStyles.menuSection}>
                        <hr className={searchStyles.horizontalLineBeforeTitle} size={1} />
                        <h1 className={searchStyles.menuTitle}>Enter an Item</h1>
                        <hr className={searchStyles.horizontalLineAfterTitle} size={1} />
                    </div>
                </div>
            </section>
            <ReserveFooter />
        </div>
    );
}

export default Search;