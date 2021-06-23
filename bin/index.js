#!/usr/bin/env node

import fs from "fs";
import execa from "execa";
import path from 'path'
import createIndexTemplate from "./createIndexTemplate.js";
import createPackageTemplate from "./createPackageTemplate.js";
import questions from "./questions/index.js";
import { createConfig } from "./config.js";

const answer = await questions();
const config = createConfig(answer);

// // 1. 创建项目文件夹
fs.mkdirSync(getRootPath());
// 2. 创建 index.js
fs.writeFileSync(`${getRootPath()}/index.js`, createIndexTemplate(config));
// 3. 创建 package.json
fs.writeFileSync(
  `${getRootPath()}/package.json`,
  createPackageTemplate(config)
);

// 4. 安装依赖
execa("yarn", {
  cwd: getRootPath(),
  stdio: [2, 2, 2],
});

function getRootPath() {
  return path.resolve(process.cwd(), config.packageName)
}
