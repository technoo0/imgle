const calculateRatio = (width, hight) => {
  return Math.floor(Math.sqrt((width * hight) / 115));
};

const getRIOAverage = (ImageArr, rowNumber, columnNumber, ratio) => {
  var sum = [0, 0, 0];
  var counter = 0;

  for (let y = columnNumber * ratio; y < (columnNumber + 1) * ratio; y += 1) {
    for (let x = rowNumber * ratio; x < (rowNumber + 1) * ratio; x += 1) {
      const [r, g, b] = ImageArr[x][y];
      sum[0] += r;
      sum[1] += g;
      sum[2] += b;
      counter += 1;
    }
  }
  var Average = [0, 0, 0];
  Average[0] = Math.round(sum[0] / counter);
  Average[1] = Math.round(sum[1] / counter);
  Average[2] = Math.round(sum[2] / counter);
  return Average;
};

const pixelite = (ImageArr) => {
  const width = ImageArr[0].length;
  const hight = ImageArr.length;
  const ratio = calculateRatio(width, hight);
  const NewWidth = Math.floor(width / ratio);
  const NewHight = Math.floor(hight / ratio);
  var NewImage = [];
  for (let y = 0; y < NewHight; y += 1) {
    var row = [];
    for (let x = 0; x < NewWidth; x += 1) {
      const Average = getRIOAverage(ImageArr, x, y, ratio);
      row.push(Average);
    }
    NewImage.push(row);
  }
  return NewImage;
};

const convertTo3bits = (ImageArr) => {
  const hight = ImageArr.length;
  const width = ImageArr[0].length;
  let NewImage = [];
  let row = [];
  for (let y = 0; y < hight; y += 1) {
    row = [];
    for (let x = 0; x < width; x += 1) {
      const [r, g, b] = ImageArr[x][y];
      row.push([r > 127 ? 1 : 0, g > 127 ? 1 : 0, b > 127 ? 1 : 0]);
    }
    NewImage.push(row);
  }
  return NewImage;
};
export { calculateRatio, pixelite, getRIOAverage, convertTo3bits };
