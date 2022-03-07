import React, {useEffect} from "react";
import {DefaultLayout} from "../../layouts";
import {LogoIco} from "../../svg";
import {Content} from "../../components";
import {useDispatch, useSelector} from "react-redux";
import {load} from "../../store/pages";

const History = (props) => {
  const {className} = props


  const dispatch = useDispatch();
  const { pages, loading } = useSelector((state) => state.pages);

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


  const classes = 'History ' + (className || '');

  return (
    <DefaultLayout className={classes}>
      <LogoIco className='HomePage__LogoIco'/>
      <Content>
        {pages.our_history}
      </Content>
    </DefaultLayout>
  );

};

export default History;