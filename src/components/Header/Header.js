import React from 'react';

import css from "./Header.module.css";

const Header = () => {
    return (
        <>
            <div className={css.header}>
                <p>The Rick and Morty</p>
            </div>
        </>
    );
};

export {Header};