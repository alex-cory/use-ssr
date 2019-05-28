import { renderHook } from 'react-hooks-testing-library'
import useSSR from './useSSR';

describe('useSSR', () => {
  it('should run', () => {
    const { result } = renderHook(() => useSSR())
    const { isBrowser } = result.current
    expect(isBrowser).toBe(false)
  });
});
