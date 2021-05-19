export const getRamdomColor = () => {
  var color = '';
  for (var i = 0; i < 3; i++) {
    var sub = Math.floor(Math.random() * 256).toString(16);
    color += sub.length == 1 ? '0' + sub : sub;
  }

  return '#' + color;
};
