import React from "react";
import {Header} from "../sections";
import {PaperBackground} from "../components";
import {Covid} from "../components";
import {Error} from "../svg";




const DefaultLayout = (props) => {
  const {children, className} = props


  return (
    <>
      <Header/>
      <PaperBackground className={className}>
        {children}
      </PaperBackground>
      <Covid/>
      <Error/>
    </>
  );
};

export default DefaultLayout;
