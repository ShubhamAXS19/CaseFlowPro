const express = require("express");
const app = express();
const AuthRouter = require("./routes/Auth.routes");

app.use(express.json());

app.use("/auth", AuthRouter);
app.use("/chatbot", AuthRouter);
app.use("/find-legal-help", AuthRouter);
app.use("/", AuthRouter);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
