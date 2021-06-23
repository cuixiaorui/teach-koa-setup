export default () => {
  return {
    type: "checkbox",
    message: "select middleware",
    name: "middleware",
    choices: [
      {
        name: "koaRouter",
      },
      {
        name: "koaStatic",
      },
      {
        name: "koaViews",
      },
      {
        name: "koaBody",
      },
    ],
  };
};
