<h1 align="center">Imgle</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/imgle"><img src="https://flat.badgen.net/npm/v/imgle" alt="imgle version" /></a>
  <a href="https://www.npmjs.com/package/imgle"><img src="https://flat.badgen.net/npm/license/imgle" alt="imgle license" /></a>
</p>
<h3 align="center">
  <a href="https://imgle.netlify.app/">Demo app</a>
</h3>
<p align="center">
  <b>Convert</b>  any image to a twitter blocks emojis (Wordle like text) 
</p>
<p align="center">
<img src="https://user-images.githubusercontent.com/65347532/152048341-183a68da-9bff-446c-af17-572dc95d9357.gif" width="400"  />

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
const image = document.getElementbyId("image");
const [textArray, textString] = Emojize(image);
```

or

```js
import Emojize from "imgle";
const image = new Image();
image.src = Buffer.from(data).toString("base64");
image.onload = () => {
  const [textArray, textString] = Emojize(image);
};
```

## License

MIT
