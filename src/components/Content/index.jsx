import React from "react";

const Content = (props) => {
  const {children} = props;

  const {className} = props
  const classes = 'Content ' + (className || '');

  return (
    <div className={classes} dangerouslySetInnerHTML={{__html: children}}/>
  );

};

export default Content;