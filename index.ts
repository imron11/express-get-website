import express from 'express';
import { getWebsiteHtml } from './src/utils/getWebsiteHtml';

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Express with yarn on Vercel");
});

app.get("/website", async (req, res) => {
  const html = await getWebsiteHtml();
  res.send(html);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
