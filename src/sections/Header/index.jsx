import {MobileMenu, Menu, PaperBackground} from '../../components';
import React from "react";
import {Burger} from "../../components";
import { AboutIco, FaqIco, GiftIco, HomeIco,} from '../../svg'

const Header = (props) => {

  const menu = [
    {
      id: 1,
      value: '/',
      name: 'Главная',
      ico: <HomeIco/>
    },
    {
      id: 2,
      value: '/history',
      name: 'Наша история',
      ico: <AboutIco/>

    },
    {
      id: 3,
      value: '/faq',
      name: 'Вопрос-ответ',
      ico: <FaqIco/>
    },
    {
      id: 4,
      value: '/gift',
      name: 'Подарки',
      ico: <GiftIco/>
    },
  ];

  return (
    <>
      <header className="Header-section">
        <div className="container">
          <div className="Header">
            <Menu className={'Header__Menu'} menu={menu}/>
          </div>
        </div>
      </header>
      <Burger className={'Header__Burger'}/>
      <MobileMenu menu={menu}/>
    </>
  );
};

export default Header;
