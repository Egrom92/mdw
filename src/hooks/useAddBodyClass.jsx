import React, {useEffect} from "react";

const useAddBodyClass = (className, deps) => {


  useEffect(() => {
    document.body.classList.toggle(className, deps);
  },[deps])
};

export default useAddBodyClass;
