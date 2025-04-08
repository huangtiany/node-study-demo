// node环境使用import语法(ESM)需要将文件后缀改为mjs
import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";

async function copy(src, dest) {
  let rs = createReadStream(src);
  let ws = createWriteStream(dest);
  await pipeline(rs, ws);
}

copy("1.txt", "2.txt")
  .then(() => console.log("copied."))
  .catch((err) => console.log(err));
