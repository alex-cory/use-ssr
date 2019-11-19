import { renderHook } from '@testing-library/react-hooks'
import useSSR from './useSSR';

describe('useSSR', () => {
  it('should correctly tell if we are in the browser', () => {
    const { result } = renderHook(() => useSSR())
    const { isBrowser, isServer, isNative, device } = result.current
    expect(isBrowser).toBe(true)
    expect(isServer).toBe(false)
    expect(isNative).toBe(false)
    expect(device).toBe('browser')
  });
});
