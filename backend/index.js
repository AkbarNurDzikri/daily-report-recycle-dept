import app from "./src/app/config.js";

app.listen(process.env.PORT_APP, () => {
  console.log(`Server up and running at ${process.env.PORT_APP}`);
})