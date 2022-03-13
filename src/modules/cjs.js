const cloneDeep = require("lodash.clonedeep");

const a = {
  aa: 123,
  bb: true,
  cc: ["up", 456, false, { dd: "哈哈" }],
};

const aCopy = cloneDeep(a);

module.exports = a;
