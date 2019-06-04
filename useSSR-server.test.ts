import { renderHook } from 'react-hooks-testing-library'
import useSSR from './useSSR';

describe('useSSR', () => {
  it('should show correctly tell if we are on the server', () => {
    const { result } = renderHook(() => useSSR())
    const { isServer } = result.current
    expect(isServer).toBe(true)
  });
});
