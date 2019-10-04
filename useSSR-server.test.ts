import { renderHook } from 'react-hooks-testing-library'
import useSSR from './useSSR';

describe('useSSR', () => {
  it('should correctly tell if we are on the server', () => {
    const { result } = renderHook(() => useSSR())
    const { isServer, isBrowser } = result.current
    expect(isServer).toBe(true)
    expect(isBrowser).toBe(false)
  });
});
