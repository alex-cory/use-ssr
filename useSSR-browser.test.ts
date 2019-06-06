import { renderHook } from 'react-hooks-testing-library'
import useSSR from './useSSR';

describe('useSSR', () => {
  it('should correctly tell if we are in the browser', () => {
    const { result } = renderHook(() => useSSR())
    const { isBrowser, isServer } = result.current
    expect(isBrowser).toBe(true)
    expect(isServer).toBe(false)
  });
});
