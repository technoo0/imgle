import { pixelite, convertTo3bits } from "./pixelite";
import { Pixel2Emoji, Arr2Text } from "./emojize";

const GetImage = (image) => {
  //get image width and height
  const width = image.width;
  const height = image.height;
  console.log(width, height);
  //Create canvas and set the width and height
  let c = document.createElement("canvas");
  c.width = width;
  c.height = height;
  // get the canvas context and draw the image on it
  let ctx = c.getContext("2d");
  ctx.drawImage(image, 0, 0);
  // get the image data
  var imgData = ctx.getImageData(0, 0, width, height).data;
  // formate the image array to 2d array with each pixel as [r,g,b]
  var formatedArr = [];

  for (let y = 0; y < height; y += 1) {
    var row = [];

    for (let x = 0; x < width; x += 1) {
      let p = (x + y * width) * 4;

      if (imgData[p + 3] == 255) {
        row.push([imgData[p], imgData[p + 1], imgData[p + 2]]);
      } else {
        row.push([0, 0, 0]);
      }
    }
    formatedArr.push(row);
  }

  return formatedArr;
};

const Emojize = (image) => {
  const Arr2d = GetImage(image);
  console.log(Arr2d);
  const pixelitedImage = pixelite(Arr2d);
  const NewImage = convertTo3bits(pixelitedImage);
  const EmojiImage = Pixel2Emoji(NewImage);

  const EmojiText = Arr2Text(EmojiImage);
  return [NewImage, EmojiText];
};

export default Emojize;
