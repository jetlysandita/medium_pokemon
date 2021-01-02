// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import queryString from "query-string";

async function handle(req, res) {
  const { query } = req;
  const urlParam = queryString.stringify(query);

  try {
    const resultApi = await fetch(
      `${process.env.baseUrlApi}pokemon?${urlParam || `limit=5`}`,
    );
    const data = await resultApi.json();
    const oldNext = new URL(data.next);
    res.statusCode = 200;
    res.json({
      items: data.results,
      next: `/api/pokemon${oldNext.search}`,
    });
  } catch (error) {
    res.statusCode = 500;
    res.json({ error });
  }
}
export default handle;
