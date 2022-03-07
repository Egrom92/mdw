import React, {useEffect} from "react";
import {DefaultLayout} from "../../layouts";
import Content from "../../components/Content";
import LogoIco from "../../svg/LogoIco";
import {useDispatch, useSelector} from "react-redux";
import {load} from "../../store/pages";

const Gift = (props) => {
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

  const classes = 'Gift ' + (className || '');
console.log(pages);
  return (
    <DefaultLayout className={classes}>
      <Content>
        {pages.gifts}
      </Content>
        <LogoIco/>
    </DefaultLayout>
  );

};

export default Gift;