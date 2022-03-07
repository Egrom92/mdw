import React, {useEffect} from "react";
import {DefaultLayout} from "../../layouts";
import {LogoIco} from "../../svg";
import {useDispatch, useSelector} from "react-redux";
import {load} from "../../store/pages";
import { RawHTML } from 'react-dom';

const Faq = (props) => {
  const {className} = props

  const classes = 'Faq ' + (className || '');

  const dispatch = useDispatch();
  const {pages, loading} = useSelector((state) => state.pages);

  useEffect(() => {
    dispatch(load());
  }, [dispatch]);


  if (loading) {
    return <div className="container info-alert">Loding ...</div>;
  }

  if (!pages) {
    return (
      <div className="container info-alert">
        Something went wrong! Reload the page.
      </div>
    );
  }


  const faq = JSON.parse(pages.content)

  return (
    <DefaultLayout className={classes}>
      <LogoIco className='HomePage__LogoIco'/>
      <ul className="Faq__list">

        {faq.map((el, key) => {
          return (
            <li key={key} className="Faq__point">
              <h3 className="Faq__title">
                {el.attributes.question}
              </h3>
              <article className="Faq__answer" dangerouslySetInnerHTML={{__html: el.attributes.answer}} />
            </li>
            )

        })}

      </ul>
    </DefaultLayout>
  );

};

export default Faq;