https://github.com/aklinker1/vite-plugin-web-extension/issues/180

```bash
yarn --frozen-lockfile
```

`node dev.js` works, `node build.js` doesn't.

Using `vite.config.js` also works (try out by renaming `foo.config.js` -> `vite.config.js`), so it's about the inline config.
