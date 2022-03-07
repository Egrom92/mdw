import { useDispatch, useSelector } from 'react-redux';
import { mobileMenuToggle } from '../../store/global';
import {useBodyFixToggle, useAddBodyClass} from "../../hooks";

const Burger = (props) => {
  const dispatch = useDispatch();
  const {className} = props

  const { mobileMenuOpen } = useSelector((store) => store.global);
  const classes = '🍔 Burger ' + (mobileMenuOpen ? 'menuMobActive ' : '') + (className || '');

  const burgerHandler = () => {
    dispatch(mobileMenuToggle({mobileMenuOpen: !mobileMenuOpen}));
  }

  useBodyFixToggle(mobileMenuOpen);
  useAddBodyClass('menuMobActive', mobileMenuOpen);

  return (

    <div onClick={burgerHandler} className={classes}>
      <div className="container">
        <ul className="Burger-menu">
          <li className="Burger-menu__bar"></li>
          <li className="Burger-menu__bar"></li>
          <li className="Burger-menu__bar"></li>
        </ul>
      </div>

    </div>
  );
};

export default Burger;
