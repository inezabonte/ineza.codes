import axios from "axios";

export default async function handler(req, res) {
	const { email } = req.body;
	if (!email) {
		return res.status(400).json({ error: "Email is required" });
	}

	try {
		await axios.post(
			"https://www.getrevue.co/api/v2/subscribers",
			{
				email,
			},
			{
				headers: {
					Authorization: `Token ${process.env.REVUE_API_KEY}`,
				},
			}
		);
		return res.status(200).json({
			message: "success",
		});
	} catch (error) {
		return res.status(400).json({
			error: error.response.data.error.email[0],
		});
	}
}
