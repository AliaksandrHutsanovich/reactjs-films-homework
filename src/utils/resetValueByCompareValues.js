import { objectEqualityCheck } from './setValue';

const resetValueByCompareValues = (reset, ref, compareValues, value) => {
  if (!ref.current) {
    ref.current = compareValues; // eslint-disable-line
  } else if (!objectEqualityCheck(ref.current, compareValues)) {
    ref.current = compareValues; // eslint-disable-line
    reset(value);
  }
};

export default resetValueByCompareValues;
