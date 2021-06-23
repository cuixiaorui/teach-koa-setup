export default () => {
  return {
    type: "input",
    name: "packageName",
    message: "set package name",
    validate(val) {
      if (val) return true;
      return "Please enter package name";
    },
  };
};
