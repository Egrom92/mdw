import {NavLink} from 'react-router-dom';
import React from "react";


const Menu = (props) => {
  const {className, menu} = props

  const classes = 'Menu ' + (className || '');

  if (!menu) return null;

  return (
    <nav className={classes}>
      <ul>
        {menu.map((el) => (
          <li key={el.id}>
            <NavLink exact="true" to={el.value}>
              {el.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
