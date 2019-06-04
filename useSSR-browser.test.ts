import { renderHook } from 'react-hooks-testing-library'
import useSSR from './useSSR';

describe('useSSR', () => {
  it('should correctly tell if we are on the browser', () => {
    const { result } = renderHook(() => useSSR())
    const { isBrowser } = result.current
    expect(isBrowser).toBe(true)
  });
});
