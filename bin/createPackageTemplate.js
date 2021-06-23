import ejs from "ejs";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import prettier from "prettier";

export default (config) => {
  const __dirname = fileURLToPath(import.meta.url);
  const templateCode = fs.readFileSync(
    path.resolve(__dirname, "../template/package.ejs")
  );
  const code = ejs.render(templateCode.toString(), {
    middleware: config.middleware,
    packageName: config.packageName,
  });

  return prettier.format(code, { parser: "json" });
};
