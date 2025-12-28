import express from "express";
import Parser from "rss-parser";
import cors from "cors";

const app = express();
const parser = new Parser();

app.use(cors()); // autorise le frontend

app.get("/rss/veille", async (req, res) => {
  try {
    const itConnect = await parser.parseURL("https://www.it-connect.fr/feed/");
    const korben = await parser.parseURL("https://korben.info/feed");

    res.json({
      itconnect: itConnect.items.slice(0, 10),
      korben: korben.items.slice(0, 10),
    });
  } catch (error) {
    res.status(500).json({ error: "Erreur RSS" });
  }
});

app.listen(3001, () => console.log("Backend RSS sur http://localhost:3001"));
