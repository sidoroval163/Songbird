import React from 'react';
import MenuItem from './menuItem';


const Menu = () => {
    const menuItems = ['Разминка', 'Воробьиные', 'Лесные', 'Певчие', 'Хищные', 'Морские'];

    return (
        <div className="menu">
            {menuItems.map((elem, i) => {
                return <MenuItem elem={elem} key={i} index={i} />
            })}
        </div>
    )
}

export default Menu;