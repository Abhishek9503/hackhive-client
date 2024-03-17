const { createServer } = require("./server");

const PORT = process.env.PORT || 3000;
const server = createServer();

server.listen(PORT, () => {
  console.log("server running");
});
