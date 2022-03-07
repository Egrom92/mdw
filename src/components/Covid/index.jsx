import React from "react";
import Content from "../Content";
import {useDispatch, useSelector} from "react-redux";
import {modalToggle} from "../../store/global";
import {useAddBodyClass, useBodyFixToggle} from "../../hooks";

const Covid = (props) => {
  const {className} = props

  const classes = 'Covid modal ' + (className || '');

  const dispatch = useDispatch();
  const {modalOpen} = useSelector((store) => store.global);
  const { pages} = useSelector((state) => state.pages);

  const modalHandler = () => {
    dispatch(modalToggle({modalOpen: !modalOpen}));
  }

  useBodyFixToggle(modalOpen);
  useAddBodyClass('modalOpen', modalOpen);


  return (
    <div className={classes}>
      <div className="modal-content-overflow">
        <div onClick={modalHandler} className="modal-content-background"/>
        <div className="modal-content-wrapper">
          <span onClick={modalHandler} className="close-button">&times;</span>
          <div className="modal-content">
            <div className="modal-body">
              <h2>{pages.important_title}</h2>
              <Content>
                {pages.important_body}
              </Content>
            </div>
          </div>
        </div>

      </div>
    </div>
  );

};

export default Covid;