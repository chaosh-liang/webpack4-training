module.exports = class {
  constructor(options) {
    this.options = options;
  }
  apply(compiler) {
    compiler.hooks.emit.tapAsync("UserPrintPlugin", (compilation, callback) => {
      // console.log("modules => ", compilation.modules);
      console.log("chunks => ", compilation.chunks);
      console.log("assets => ", compilation.assets);
      console.log(
        "main.css => ",
        compilation.assets["css/main.45ec9d.css"].source()
      );

      callback();
    });
  }
};
