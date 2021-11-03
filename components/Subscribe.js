import { useState } from "react";
import axios from "axios";

export default function Subscribe() {
	const [email, setEmail] = useState("");
	const [status, setStatus] = useState({
		message: "",
		status: "",
	});

	const handleChange = (e) => {
		setEmail(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const { data } = await axios.post("/api/subscribe", { email });
			setStatus({ ...status, message: data.message, status: "success" });
			setEmail("");
		} catch (error) {
			setStatus({
				...status,
				message: error.response.data.error,
				status: "error",
			});
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
					className="bg-black dark:bg-white text-white dark:text-black  rounded p-2 font-medium "
				>
					Subscribe
				</button>
				<span
					className={`text-sm font-medium ${
						status.status === "success"
							? "text-blue-600 dark:text-blue-400"
							: "text-red-600 dark:text-red-400"
					}`}
				>
					{status.message}
				</span>
			</form>
		</div>
	);
}
