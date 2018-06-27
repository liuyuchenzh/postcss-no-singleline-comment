# postcss-no-singleline-comment

## Intro

A postcss plugin to remove single line comment in css.

input:

```css
.main {
  // display: block;
  display: flex;
}
```

output:

```css
.main {
  display: flex;
}
```

## Installation

```bash
npm i -D postcss-no-singleline-comment
```

### Usage

```js
// in .postcssrc.js
module.exports = {
  plugins: [
    require('postcss-no-singleline-comment)
  ]
}
```
