# PostCSS Viewport unit Variant

<img align="right" width="95" height="95"
     title="logo of PostCSS"
     src="https://postcss.github.io/postcss/logo.svg">


This module is a [PostCSS] plugin to polyfill of viewport unit variants. It handle `svh | lvh | dvh | svw | lvw | dvw`
<br/>
see on [caniuse]

## Install

```sh
npm --save install postcss postcss-view-sizes
```

## Usage


```css
/* input */

.full-screen {
  height: 100dvh;
}
```
become
```css
/* output */

.full-screen {
  height: 100vh;
  height: 100dvh;
}
```


[caniuse]:    https://caniuse.com/viewport-unit-variants
[PostCSS]:     https://github.com/postcss/postcss
