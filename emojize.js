// 🟥🟧🟨🟩🟦🟪🟫⬛️⬜️

const convertPixelToEmoji = (PixelValue) => {
  const emojis = {
    red: "🟥",
    orange: "🟧",
    yellow: "🟨",
    green: "🟩",
    blue: "🟦",
    purple: "🟪",
    brown: "🟫",
    black: "⬛",
    white: "⬜",
  };
  const [r, g, b] = PixelValue;
  if (r && g && b) {
    return emojis["white"];
  } else if (r && g && !b) {
    return emojis["yellow"];
  } else if (r && !g && b) {
    return emojis["purple"];
  } else if (r && !g && !b) {
    return emojis["red"];
  } else if (!r && g && b) {
    return emojis["blue"];
  } else if (!r && g && !b) {
    return emojis[green];
  } else if (!r && !g && b) {
    return emojis["blue"];
  } else if (!r && !g && !b) {
    return emojis["black"];
  }
};

const Pixel2Emoji = (ImageArr) => {
  const hight = ImageArr.length;
  const width = ImageArr[0].length;
  let NewImage = [];
  let row = [];
  for (let y = 0; y < hight; y += 1) {
    row = [];
    for (let x = 0; x < width; x += 1) {
      row.push(convertPixelToEmoji(ImageArr[x][y]));
    }
    NewImage.push(row);
  }
  return NewImage;
};

const Arr2Text = (Arr) => {
  const hight = Arr.length;
  const width = Arr[0].length;
  let text = "";
  let row = "";
  for (let y = 0; y < hight; y += 1) {
    row = "";
    for (let x = 0; x < width; x += 1) {
      row += Arr[x][y];
    }
    text += row + "\n";
  }
  return text;
};

export { Pixel2Emoji, Arr2Text };
