import { useState } from "react";
import axios from "axios";

export default function Subscribe() {
	const [email, setEmail] = useState("");
	const [success, showSuccess] = useState(false);

	const handleChange = (e) => {
		setEmail(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await axios.post("/api/subscribe", { email });
			setEmail("");
			showSuccess(true);
		} catch (error) {
			setEmail("");
			showSuccess(true);
			console.log(error.message);
		}
	};

	return (
		<div className="border-2 border-gray-400 dark:border-gray-600 rounded p-4 space-y-4">
			<h1 className="text-xl font-bold mb-4">Subscribe to my newsletter </h1>
			<span className="text-lg text-gray-700 dark:text-gray-400">
				Receive monthly newsletters from me about things I did that month,
				resources I found useful and what I'm currently working on 📩
			</span>
			<form onSubmit={handleSubmit} className="flex flex-col space-y-4">
				<input
					type="email"
					name="email"
					id="email"
					value={email}
					onChange={handleChange}
					required
					placeholder="Your email"
					className="p-2 bg-transparent rounded border-2 border-gray-400 "
				/>
				<button
					type="submit"
					className="bg-black hover:bg-gray-900 dark:bg-white text-white dark:text-black  rounded p-2 font-medium dark:hover:bg-gray-100"
				>
					Subscribe
				</button>
				{success && (
					<span className="text-green-600 dark:text-green-400">
						✅ Expect emails from me soon
					</span>
				)}
			</form>
		</div>
	);
}
