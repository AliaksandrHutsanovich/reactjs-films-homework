import { useRef } from 'react';

const usePreviousCash = (items = [], page = 1) => {
  const itemsRef = useRef();
  if (page === 1) {
    itemsRef.current = items;
  } else {
    items.forEach((item) => {
      if (!itemsRef.current.some(({ id }) => id === item.id)) {
        itemsRef.current.push(item);
      }
    });
  }
  return itemsRef.current;
};

export default usePreviousCash;
