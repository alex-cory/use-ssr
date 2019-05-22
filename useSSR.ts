import { useState, useEffect } from 'react'

const canUseDOM = () => !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
)

function useSSR() {
  const [onBrowser, setOnBrowser] = useState(canUseDOM())

  useEffect(() => {
    setOnBrowser(onBrowser)
    return () => {
      setOnBrowser(false)
    }
  }, [canUseDOM()])

  return {
    isBrowser: onBrowser,
    isServer: !onBrowser,
    canUseWorkers: typeof Worker !== 'undefined',
		canUseEventListeners: canUseDOM() && !!window.addEventListener,
		canUseViewport: canUseDOM() && !!window.screen
  }
}

export default useSSR