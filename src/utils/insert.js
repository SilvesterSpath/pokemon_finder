const insert = (array, item, index) => [
  ...array.slice(0, index),
  item,
  ...array.slice(index),
];

export default insert;
