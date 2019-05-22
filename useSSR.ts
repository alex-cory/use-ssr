import { useState, useEffect } from 'react'

const canUseDOM = (): boolean => !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

interface UseSSRReturn {
  isBrowser: boolean,
  isServer: boolean,
  canUseWorkers: boolean,
  canUseEventListeners: boolean,
  canUseViewport: boolean,
}

function useSSR(): UseSSRReturn {
  const [inBrowser, setInBrowser] = useState(canUseDOM())

  useEffect(() => {
    setInBrowser(inBrowser)
    return () => {
      setInBrowser(false)
    }
  }, [canUseDOM()])

  return {
    isBrowser: inBrowser,
    isServer: !inBrowser,
    canUseWorkers: typeof Worker !== 'undefined',
    canUseEventListeners: canUseDOM() && !!window.addEventListener,
    canUseViewport: canUseDOM() && !!window.screen
  }
}
