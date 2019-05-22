<h1 align="center">useSSR</h1>
<p align="center">☯️ React hook to determine if you're on the server or browser</p>
<p align="center">
    <a href="https://github.com/alex-cory/use-ssr/pulls">
      <img src="https://camo.githubusercontent.com/d4e0f63e9613ee474a7dfdc23c240b9795712c96/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5052732d77656c636f6d652d627269676874677265656e2e737667" />
    </a>
    <a href="https://www.npmjs.com/package/use-ssr">
      <img src="https://img.shields.io/npm/dm/use-ssr.svg" />
    </a>
    <a href="https://lgtm.com/projects/g/alex-cory/use-ssr/context:javascript">
      <img src="https://img.shields.io/lgtm/grade/javascript/g/alex-cory/use-ssr.svg?logo=lgtm&logoWidth=18"/>
    </a>
    <a href="https://bundlephobia.com/result?p=use-ssr">
      <img alt="undefined" src="https://img.shields.io/bundlephobia/minzip/use-ssr.svg">
    </a>
    <a href="https://github.com/alex-cory/use-ssr/blob/master/license.md">
      <img alt="undefined" src="https://img.shields.io/github/license/alex-cory/use-ssr.svg">
    </a>
</p>

Need to know when you're on the server or in the browser in your components? This simple hook makes it easy. 🔥

Features
--------
- SSR (server side rendering) support
- TypeScript support
- Zero dependencies

### Examples
- <a target="_blank" rel="noopener noreferrer" href='https://codesandbox.io/s/usessr-in-nextjs-actual-epb25'>Example 1 - Next.js</a> (if not working -- codesandbox containers are buggy)
- <a target="_blank" rel="noopener noreferrer" href='https://codesandbox.io/s/usessr-in-nextjs-4gy7v'>Example 2 - Next.js</a>

Installation
------------

```shell
yarn add use-ssr      or     npm i -S use-ssr
```

Usage
-----

```jsx
const App = () => {
  const { isBrowser, isServer } = useSSR()
  /*
   * In your browser's chrome devtools console you should see
   * > IS BROWSER: 👍
   * > IS SERVER: 👎
   *
   * AND, in your terminal where your server is running you should see
   * > IS BROWSER: 👎
   * > IS SERVER: 👍
   */
  console.log('IS BROWSER: ', isBrowser ? '👍' : '👎')
  console.log('IS SERVER: ', isServer ? '👍' : '👎')
  return (
    <>
      Is in browser? {isBrowser ? '👍' : '👎'}
      <br />
      Is on server? {isServer ? '👍' : '👎'}
    </>
  )
}
```

### Todos
- [X] codesandbox examples
- [ ] tests
- [X] badges
