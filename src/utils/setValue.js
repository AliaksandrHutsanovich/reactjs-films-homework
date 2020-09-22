import { is } from 'immutable';
import { fromArrayToList, fromObjToMap } from './transpileUtils';

const shallowEqualityCheck = (val1, val2) => val1 === val2;

export const objectEqualityCheck = (val1, val2) => {
  if (Array.isArray(val1)) {
    return is(fromArrayToList(val1), fromArrayToList(val2));
  }
  return is(fromObjToMap(val1), fromObjToMap(val2));
};

const setValue = (value, ref, setVal, equalityCheck = shallowEqualityCheck) => {
  if (!ref.current || !equalityCheck(ref.current, value)) {
    ref.current = value; //eslint-disable-line
    setVal(value);
  }
};

export default setValue;
