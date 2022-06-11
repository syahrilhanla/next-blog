import { articles } from "../../../data.js";

export default async function handler(req, res) {
	const { id } = req.query;
	const filtered = articles.filter((article) => article.id === id);

	if (filtered.length > 0) {
		res.status(200).json(filtered[0]);
	} else
		res
			.status(404)
			.json({ message: `article with an id of ${id} is not found` });
}
