const getStateSetter = (setState, val) => () => {
  setState(val);
};

export default getStateSetter;
