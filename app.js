const express = require("express");
const generateQR = require("./routes/generateQR");
const config = require("./config");

const app = express();
app.use(express.json());

app.get("/encode/:user_id", generateQR.encode);
app.post("/decode", generateQR.decode);

const PORT = config.APP_PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
