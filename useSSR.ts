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

const canUseNative: boolean =
  typeof navigator != 'undefined' && navigator.product == 'ReactNative'

const location = canUseNative ? NATIVE : canUseDOM ? BROWSER : SERVER

const SSRObject = {
  isBrowser: location === BROWSER,
  isServer: location === SERVER,
  isNative: location === NATIVE,
  canUseWorkers: typeof Worker !== 'undefined',
  canUseEventListeners: location === BROWSER && !!window.addEventListener,
  canUseViewport: location === BROWSER && !!window.screen,
}

const toArrayObject = () =>
  Object.assign(Object.values(SSRObject), SSRObject)

let useSSRObject = toArrayObject()

export const weAreServer = () => {
  SSRObject.isServer = true
  useSSRObject = toArrayObject()
}

export default function useSSR(): UseSSRReturn {
  return useSSRObject
}
