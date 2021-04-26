var defaultState = {};

const fn = (state = defaultState, action) => {
  switch (action.type) {
    case "add":
      console.log(action.type, action.value);
      return action.value;
    default:
      break;
  }
}
export default fn;