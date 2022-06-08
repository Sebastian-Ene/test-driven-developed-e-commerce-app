import initApp from "./app";
(async () => {
  const app = await initApp();

  app.listen(8000, () => {
    console.log(`server started at http://localhost:${8000}`);
    console.log("adfasfsaads");
  });
})();
