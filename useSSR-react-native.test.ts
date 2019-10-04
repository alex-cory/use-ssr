import 'react-native'
import { renderHook } from '@testing-library/react-hooks'
import useSSR from './useSSR';

describe('useSSR', () => {
  // TODO: get this to work...
  it('should correctly tell if we are in a react native environment', () => {
    const { result } = renderHook(() => useSSR())
    const { isBrowser, isServer, isNative } = result.current
    expect(isBrowser).toBe(false)
    expect(isServer).toBe(false)
    expect(isNative).toBe(true)
  });
});
