import React from 'react';
import { NavLink } from 'react-router-dom';
import {useAddBodyClass, useBodyFixToggle} from "../../hooks";
import { useDispatch, useSelector } from 'react-redux';
import {mobileMenuToggle} from "../../store/global";

const MobileMenu = (props) => {
  const {className, menu} = props

  const dispatch = useDispatch();
  const { mobileMenuOpen } = useSelector((store) => store.global);

  const mobileMenuHandler = () => {
    dispatch(mobileMenuToggle({mobileMenuOpen: !mobileMenuOpen}));
  }

  useBodyFixToggle(mobileMenuOpen);
  useAddBodyClass('menuMobActive', mobileMenuOpen);

  if (!menu) return null;

  return (
    <div className="MobileMenu" >
      <div className="container">
        <nav className="MobileMenu__wrapper">
          <ul>
            {menu.map((el) => (
              <li onClick={mobileMenuHandler} key={el.id}>
                <NavLink exact="true" to={el.value}>
                  {el.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

      </div>
    </div>
  );
};

export default MobileMenu;
