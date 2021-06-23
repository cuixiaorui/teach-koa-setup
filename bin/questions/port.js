export default () => {
  return {
    type: "input",
    name: "port",
    message: "set server port number",
    default() {
      return 8000;
    },
  };
};
