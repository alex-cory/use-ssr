<h1 align="center">useSSR</h1>
<p align="center">☯️ React hook to determine if you're on the server or browser</p>

Need to know when you're on the server or in the browser in your components? This simple hook makes it easy. 🔥

Features
--------
- SSR (server side rendering) support
- typescript support
- zero dependencies

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
- [X] get codesandbox examples working
- [ ] tests
