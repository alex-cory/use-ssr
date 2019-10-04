import { useState, useEffect, useMemo, useRef } from 'react'

interface UseSSRReturn {
  isBrowser: boolean,
  isServer: boolean,
  isNative: boolean,
  canUseWorkers: boolean,
  canUseEventListeners: boolean,
  canUseViewport: boolean,
}

export enum Device {
  BROWSER = 'BROWSER',
  SERVER = 'SERVER',
  NATIVE = 'NATIVE',
}


const { BROWSER, SERVER, NATIVE } = Device

const canUseDOM: boolean = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
)

const canUseNative: boolean = typeof navigator != 'undefined' && navigator.product == 'ReactNative'

const location = canUseNative ? NATIVE : canUseDOM ? BROWSER : SERVER


export default function useSSR(): UseSSRReturn {
  const [whereAmI, setWhereAmI] = useState(location)

  const mounted = useRef(false)
  useEffect(() => {
    if (mounted.current) return
    mounted.current = true
    setWhereAmI(location)
  })

  const useSSRObject = useMemo(() => ({
    isBrowser: whereAmI === BROWSER,
    isServer: whereAmI === SERVER,
    isNative: whereAmI === NATIVE,
    canUseWorkers: typeof Worker !== 'undefined',
    canUseEventListeners: whereAmI === BROWSER && !!window.addEventListener,
    canUseViewport: whereAmI === BROWSER && !!window.screen
  }), [whereAmI])

  return useMemo(() => Object.assign(Object.values(useSSRObject), useSSRObject), [whereAmI])
}
