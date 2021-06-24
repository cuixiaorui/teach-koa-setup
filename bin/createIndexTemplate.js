import ejs from "ejs";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import prettier from "prettier";

export default (config) => {
  const __dirname = fileURLToPath(import.meta.url);
  const templateCode = fs.readFileSync(
    path.resolve(__dirname, "../template/index.ejs")
  );
  const code = ejs.render(templateCode.toString(), {
    middleware: config.middleware,
    port: config.port,
  });

  return prettier.format(code, { parser: "babel" });
};
