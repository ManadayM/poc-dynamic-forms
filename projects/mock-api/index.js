const path = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

const PORT = 4469;

server.use(middlewares);

// Added delay to each request to simulate real-world latency..
server.use(function (req, res, next) {
  setTimeout(next, 100);
});

// router.render = (req, res) => {
//   res.status(200).jsonp({
//     meta: {
//       req_id: "abcd-efgh-12345",
//       status: 200
//     },
//     data: res.locals.data
//   })
// }

server.use(router);

server.listen(PORT, () => {
  console.log(`Mock API server is running on PORT ${PORT}`);
});
