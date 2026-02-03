const express = require("express");
const fetch = require("node-fetch");
const app = express();

app.use(express.static("public"));

app.get("/api", async (req, res) => {
  const yturl = req.query.url;
  // quality param future use ke liye
  const api = `https://fast-dev-apis.vercel.app/ytmp4?url=${yturl}`;

  try{
    const r = await fetch(api);
    const data = await r.json();
    res.json(data);
  }catch{
    res.json({ status:false });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);
