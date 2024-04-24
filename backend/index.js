/* eslint-disable no-undef */
const app = require("./app");
const port = process.env.PORT || 1854;
app.listen(port, () => {
  console.log(`server listening at port - ${port}`);
});