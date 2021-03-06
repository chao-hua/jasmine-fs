const yargs = require("yargs");
const Server = require("./app");

const argv = yargs
  .usage("jasmine-fs [options]")
  .option("p", {
    alias: "port",
    describe: "端口号",
    default: 8888
  })
  .option("h", {
    alias: "hostname",
    describe: "host 地址",
    default: "127.0.0.1"
  })
  .option("r", {
    alias: "root",
    describe: "服务器根目录",
    default: process.cwd()
  })
  .version()
  .alias("v", "version")
  .help().argv;

const server = new Server(argv);
server.start();
