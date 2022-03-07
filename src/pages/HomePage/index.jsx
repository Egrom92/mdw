import React, {useEffect, useState} from "react";
import {DefaultLayout} from "../../layouts";
import {LogoIco} from "../../svg";
import {load as loadPage} from '../../store/pages';
import {load as loadGuest} from '../../store/guest';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

const HomePage = (props) => {
  const dispatch = useDispatch();
  const {pages, loading} = useSelector((state) => state.pages);
  const {guest} = useSelector((state) => state.guest);

  const [isGuest, setIsGuest] = useState(false)

  const [searchParams] = useSearchParams();


  useEffect(() => {
    dispatch(loadPage());
  }, [dispatch]);

  useEffect(() => {

    const guestHash = searchParams.get("g");
    const canGetLocalHash = typeof window !== 'undefined';

    if (guestHash) {
      if (canGetLocalHash) {
        const localGuestHash = localStorage.getItem("guest")
        if (localGuestHash !== guestHash) {
          localStorage.setItem("guestHash", guestHash);
        }
      }
      setIsGuest(true)
      dispatch(loadGuest(guestHash));

    } else {
      if (canGetLocalHash) {

        const localGuestHash = localStorage.getItem("guest")

        if (localGuestHash) {
          setIsGuest(true)
          dispatch(loadGuest(localGuestHash));

        }
      }
    }

  }, []);

  if (loading) {
    return <div className="container info-alert">Loding ...</div>;
  }
  

  if (!pages && (!isGuest ? !guest : true)) {
    return (
      <div className="container info-alert">
        Something went wrong! Reload the page.
      </div>
    );
  }

  const guestStatuses = {
    multi: ['Дорогие', 'вас'],
    female: ['Дорогая', 'тебя'],
    male: ['Дорогой', 'тебя']
  }

  const description = pages.description.split('{y}')


  return (
    <DefaultLayout className='HomePage'>
      <div className="HomePage__content">
        <LogoIco className='HomePage__LogoIco'/>
        <h1 className='HomePage__title'>
          <p>
            {guest ? guestStatuses[guest.who][0] : 'Дорогой'}
          </p>
          <p>
            {guest ? guest.name : 'друг'}
          </p>
        </h1>
        <p className="HomePage__description">
          {guest ? `${description[0] + guestStatuses[guest.who][1] + description[1]}` : 'Мы рады пригласить тебя на нашу регистрацию, которая пройдет'}
        </p>
        <time className="HomePage__time">
          22 января 2022 года
        </time>
        <ul className="HomePage__list">
          <li>
            <a href={pages.google_reg_place} rel="noreferrer" target='_blank' className="HomePage__location left">
              {pages.reg_place}
            </a>
            <time className="right">
              {pages.reg_time}
            </time>
          </li>

          {guest ? guest.category === 'party' ? (
           <li>
            <a href={pages.google_party_place} rel="noreferrer" target='_blank' className="HomePage__location left">
              {pages.party_place}
            </a>
            <time className="right">
              {pages.party_time}
            </time>
          </li>
           ) : '' : ''}

        </ul>
      </div>
    </DefaultLayout>
  );
};

export default HomePage;
