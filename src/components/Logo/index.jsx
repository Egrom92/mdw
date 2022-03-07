import React from "react";
import {LogoIco} from '../../svg'

const Logo = (props) => {
  const {className} = props

  const classes = 'LogoIco ' + (className || '');

  return (
    <a href='/' className={classes}>
      <LogoIco className='Logo'/>
    </a>
  );
};

export default Logo;
