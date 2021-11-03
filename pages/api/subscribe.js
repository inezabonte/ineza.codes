import axios from "axios";

export default async function handler(req, res) {
	const { email } = req.body;
	if (!email) {
		return res.status(400).json({ error: "Email is required" });
	}

	try {
		await axios.post(
			"https://api.buttondown.email/v1/subscribers",
			{
				email,
			},
			{
				headers: {
					Authorization: `Token ${process.env.BUTTONDOWN_API_KEY}`,
				},
			}
		);
		return res.status(200).json({
			message: "You have successfully subscribed to my newsletter 🥳",
		});
	} catch (error) {
		return res.status(400).json({
			error:
				"You are probably already subscribed or haven't confirmed your subscription",
		});
	}
}
