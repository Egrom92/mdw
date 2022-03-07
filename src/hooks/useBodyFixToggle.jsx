import React, {useEffect} from "react";

const useBodyFixToggle = (deps) => {


  useEffect(() => {
    document.body.classList.toggle('fix', deps);
  },[deps])
};

export default useBodyFixToggle;
