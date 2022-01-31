


<h1 align="center">Imgle</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/imgle"><img src="https://flat.badgen.net/npm/v/imgle" alt="imgle version" /></a>
  <a href="https://www.npmjs.com/package/imgle"><img src="https://flat.badgen.net/npm/license/imgle" alt="imgle license" /></a>
</p>
<h3 align="center">
  <a href="https://github.com/technoo0/imgle/">Demo app</a>
</h3>
<p align="center">
  <b>Convert</b>  any image to a twitter blocks emojis (Wardle like text) 
</p>
<p align="center">
<img src="https://github.com/technoo0/imgle/blob/main/website/src/assets/twitter.png?raw=true" width="200"  />
<img src="https://github.com/technoo0/imgle/blob/main/website/src/assets/icon.jpg?raw=true" width="200"  />
</p>

## Getting Started
yarn
```sh
$ yarn add imgle
```
npm
```sh
$ npm i imgle
```

first make sure that your image in the html image formate 
```js
import Emojize from "imgle";
const image = document.getElementbyId("image")
const [textArray,textString] = Emojize(image)
```
or
```js
import Emojize from "imgle";
const image = new Image()
image.src = Buffer.from(data).toString('base64')
image.onload = ()=>{
const [textArray,textString] = Emojize(image)
}

```
## License

MIT
