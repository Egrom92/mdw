import React from "react";
import branch01 from '../../img/branch01.png'
import branch02 from '../../img/branch02.png'
import branches from '../../img/branches.png'

const PaperBackground = (props) => {
    const {className, children} = props

    const classes = 'PaperBackground-section ' + (className || '');

    return (
      <div className={classes}>
        <div className="container">
          <img src={branch01} className="PaperBackground__branch-left" alt='branch'/>
          <div className="PaperBackground">
            {children}
            <img src={branches} className="PaperBackground__branch-footer" alt='branches'/>
          </div>
          <img src={branch02} className="PaperBackground__branch-right" alt='branch'/>
        </div>
      </div>
    );

};

export default PaperBackground;