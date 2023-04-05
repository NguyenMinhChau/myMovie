import React from 'react';

import { categories } from '../utils/contants';

function Sidebar({ setSelectedCategory, selectedCategory }) {
    return (
        <div className='sidebar_stack'>
            {categories.map((category, index) => (
                <button
                    className={`sidebar_btn ${category.name === selectedCategory && 'active'}`}
                    onClick={() => setSelectedCategory(category.name)}
                    key={index}>
                    <span
                        className={`sidebar_icon ${
                            category.name === selectedCategory && 'active'
                        }`}>
                        {category.icon}
                    </span>
                    <span>{category.name}</span>
                </button>
            ))}
        </div>
    );
}

export default Sidebar;
