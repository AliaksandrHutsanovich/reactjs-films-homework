import { useState, useCallback } from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import usePreviousCash from '../usePreviousCash';

describe('usePreviousCash hook', () => {
  const data1 = [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }];
  const data2 = [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }];
  const data3 = [{ id: 3, name: 'Item 3' }, { id: 4, name: 'Item 4' }];

  const useTestHook = (items, page) => {
    const copiedItems = [...items];
    const [values, setValues] = useState({ items: copiedItems, page });
    const resItems = usePreviousCash(values.items, values.page);
    const reset = useCallback(() => setValues({ items, page }), [items, page]);
    return { resItems, reset };
  };

  const { result, rerender } = renderHook(
    ({ items, page }) => useTestHook(items, page),
    { initialProps: { items: data1, page: 1 } },
  );

  it('should cash items', () => {
    expect(result.current.resItems).toEqual(data1);

    rerender({ items: data2, page: 2 });
    act(() => {
      result.current.reset();
    });

    expect(result.current.resItems).toEqual(data1);

    rerender({ items: data3, page: 3 });
    act(() => {
      result.current.reset();
    });
    expect(result.current.resItems).toEqual([...data1, ...data3]);
  });

  it('should work properly with default parameters', () => {
    const { result: defaultResult } = renderHook(() => usePreviousCash());

    expect(defaultResult.current).toEqual([]);
  });
});
