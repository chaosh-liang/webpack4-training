// 使用方式（可以注销 return source 这一行查看控制台打印信息）：
// path.resolve("./loaders/checke-content-loader.js"),

module.exports = function (source) {
  console.log("文件内容 => ", source);
  return source;
};
