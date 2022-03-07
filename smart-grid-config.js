const smartgrid = require("smart-grid");

/* It's principal settings in smart grid project */
const settings = {
  outputStyle: "scss",
  columns: 12,
  offset: "24px", //Межколонник
  container: {
    maxWidth: "720px",
    fields: "56px", //Отступ по краю контейнера
  },
  breakPoints: {
    lg: {
      width: "1100px",
      fields: "40px",
    },
    md: {
      width: "1100px",
      fields: "40px",
    },
    sm: {
      width: "800px",
      fields: "15px",
    },
    xs: {
      width: "500px",
      fields: "10px",
      offset: "5px",
    },
  },
  mixinNames: {
    container: "container",
  },
};

smartgrid("./src/scss", settings);
