import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import {modalToggle} from '../store/global';
import {useAddBodyClass, useBodyFixToggle} from "../hooks";

const Error = (props) => {
  const dispatch = useDispatch();
  const {className} = props
  const {modalOpen} = useSelector((store) => store.global);

  const classes = 'Error ' + (className || '');

  const modalHandler = () => {
    dispatch(modalToggle({modalOpen: !modalOpen}));
  }

  useBodyFixToggle(modalOpen)
  useAddBodyClass('modalOpen', modalOpen);

  return (

    <div onClick={modalHandler} className="Error__wrapper">
      <svg className={classes} width="179" height="179" viewBox="0 0 179 179" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <circle cx="89.5" cy="89.5" r="84.5" strokeWidth="10"/>
        <line x1="90" y1="47" x2="90" y2="115" strokeWidth="10" strokeLinecap="round"/>
        <line x1="90" y1="132" x2="90" y2="134" strokeWidth="10" strokeLinecap="round"/>
      </svg>
    </div>

  );

};

export default Error;