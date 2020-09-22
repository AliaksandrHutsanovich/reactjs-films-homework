import { Map, List } from 'immutable';

export const fromListToArray = (immutableList) => immutableList.toArray();
export const fromMapToObject = (immutableMap) => immutableMap.toObject();

export const fromArrayToList = (arr) => List([]).merge(arr);
export const fromObjToMap = (obj) => Map({}).merge(obj);
