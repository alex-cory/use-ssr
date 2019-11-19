import { renderHook } from '@testing-library/react-hooks'
import useSSR from './useSSR';

describe('useSSR', () => {
  it('should correctly tell if we are on the server', () => {
    const { result } = renderHook(() => useSSR())
    const { isServer, isBrowser, isNative, device } = result.current
    expect(isServer).toBe(true)
    expect(isBrowser).toBe(false)
    expect(isNative).toBe(false)
    expect(device).toBe('server')
  });
});
