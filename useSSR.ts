
interface UseSSRReturn {
  isBrowser: boolean
  isServer: boolean
  isNative: boolean
  device: Device
  canUseWorkers: boolean
  canUseEventListeners: boolean
  canUseViewport: boolean
}

export enum Device {
  Browser = 'browser',
  Server = 'server',
  Native = 'native',
}

const { Browser, Server, Native } = Device

const canUseDOM: boolean = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
)

const canUseNative: boolean = typeof navigator != 'undefined' && navigator.product == 'ReactNative'

const device = canUseNative ? Native : canUseDOM ? Browser : Server

const SSRObject = {
  isBrowser: device === Browser,
  isServer: device === Server,
  isNative: device === Native,
  device,
  canUseWorkers: typeof Worker !== 'undefined',
  canUseEventListeners: device === Browser && !!window.addEventListener,
  canUseViewport: device === Browser && !!window.screen,
}

// TODO: instead of this, do a polyfill for `Object.assign` https://www.npmjs.com/package/es6-object-assign
const assign = (...args: any[]) => args.reduce((acc, obj) => ({ ...acc, ...obj }), {})
const values = (obj: any) => Object.keys(obj).map(key => obj[key])
const toArrayObject = (): UseSSRReturn => assign((values(SSRObject), SSRObject))

let useSSRObject = toArrayObject()

export const weAreServer = () => {
  SSRObject.isServer = true
  useSSRObject = toArrayObject()
}

export const useSSR = (): UseSSRReturn => useSSRObject
export default useSSR
