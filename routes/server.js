import express from "express";
import cors from "cors";
const port = 3000;
const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello from server');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});