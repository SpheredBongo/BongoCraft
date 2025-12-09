
export default async function handler(req, res) {
  const target = req.query.target;
  const resp = await fetch("https://bitjita.com" + target);
  const data = await resp.json();
  res.setHeader("Access-Control-Allow-Origin","*");
  res.json(data);
}
