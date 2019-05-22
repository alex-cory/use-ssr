<h1 align="center">useSSR</h1>
<p align="center">☯️ React hook to determine if you're on the server or browser</p>

Need to know when you're on the server or in the browser in your components? This simple hook makes it easy. 🔥

Features
--------
- SSR (server side rendering) support
- typescript support
- zero dependencies

### Examples
- <a target="_blank" rel="noopener noreferrer" href='https://codesandbox.io/s/usessr-in-nextjs-4gy7v'>Code Sandbox Example with NextJS</a>
- <a target="_blank" rel="noopener noreferrer" href='https://codesandbox.io/s/usessr-in-nextjs-actual-epb25'>Code Sandbox Example 2 with NextJS</a>

⚠️ **WARNING**: This is under active development. It works, but haven't had time to update examples above

Installation
------------

```shell
yarn add use-ssr      or     npm i -S use-ssr
```

Usage
-----

```jsx

const App = () => {
  const { isBrowser } = useSSR()

  // check your server logs, this should show "false" there
  console.log('IS BROWSER: ', isBrowser)

  // you should always see 👍 in your browser
  return (
    <>
      Is in browser? {isBrowser ? '👍' : '👎'}
    </>
  )
}
```

### Todos
- [ ] get codesandbox examples working
- [ ] tests
- [ ] figure out best way to easily show example
