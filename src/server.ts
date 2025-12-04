import app from "./app";
import config from "./config";

const port = config.port;

// Listening
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
