const fs = require("fs");

// fs.linkSync("./1.txt", "./index2.txt"); //硬链接

fs.symlinkSync("./1.txt", "./index3.txt", "file"); //软连接
