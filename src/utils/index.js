export const getRandomColor = () => {
  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
  ];
  const color = colors[Math.floor(Math.random() * colors.length)];
  return color;
};

export const getBgColor = () => {
  const bgArr = [
    "#b7e3e8",
    "#5b45b0",
    "#7f167f",
    "#735f32",
    "#1d2569",
    "#285430",
  ];
  const randomBg = Math.floor(Math.random() * bgArr.length);
  const color = bgArr[randomBg];
  return color;
};
