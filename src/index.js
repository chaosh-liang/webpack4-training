import "./less/ins.less";
import { greeting } from "./modules/greetings";

import girl from "./images/girl.png";

const copy = require("./modules/cjs");

// 异步加载模块
import("./modules/one-async").then(({ add }) => {
  console.log("加法运算 => ", add(1, 2));
});

console.log("这是入口文件index.js 的内容");

console.log("Commonjs 规范的模块引入 => ", copy);

const div = document.createElement("div");
div.className = "apa";

const span = document.createElement("span");
span.className = "txt";
const text = document.createTextNode("这是一段自定义文本");

const image = new Image();
image.src = girl;
image.onload = (data) => {
  console.log("image loaded => ", data);
};

const root = document.querySelector("#root");
span.appendChild(text);
div.appendChild(image);
div.appendChild(span);
root.appendChild(div);

console.log(greeting("Amy"));
