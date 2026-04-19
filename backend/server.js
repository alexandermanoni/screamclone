const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

let hidingAt;

app.post("/hiding", (req, res) => {
  hidingAt = req.body.coords;
  console.log("Hiding at", hidingAt);

  //console.log(req.body);
  res.sendStatus(200);
});

app.post("/searching", (req, res) => {
  console.log(req.body);

  const { tilex, tiley } = req.body.coords;

  const found =
    hidingAt.tilex === tilex &&
    hidingAt.tiley === tiley;

  if (found) {
    return res.status(200).json({ success: true });
  }

  return res.status(200).json({ success: false });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});