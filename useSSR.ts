import { useState, useEffect } from 'react'

const canUseDOM: boolean = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
)

interface UseSSRReturn {
  isBrowser: boolean,
  isServer: boolean,
  canUseWorkers: boolean,
  canUseEventListeners: boolean,
  canUseViewport: boolean,
}

export default function useSSR(): UseSSRReturn {
  const [inBrowser, setInBrowser] = useState(canUseDOM)

  useEffect(() => {
    setInBrowser(canUseDOM)
    return () => {
      setInBrowser(false)
    }
  }, [])

  return Object.assign([
    inBrowser,
    !inBrowser,
    typeof Worker !== 'undefined',
    inBrowser && !!window.addEventListener,
    inBrowser && !!window.screen
  ], {
    isBrowser: inBrowser,
    isServer: !inBrowser,
    canUseWorkers: typeof Worker !== 'undefined',
    canUseEventListeners: inBrowser && !!window.addEventListener,
    canUseViewport: inBrowser && !!window.screen
  })
}
