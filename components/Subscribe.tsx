import { useState } from "react";
import axios from "axios";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSucess] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/subscribe", { email });
      setEmail("");
      setMessage("✅ Expect emails from me soon");
      setSucess(true);
    } catch (error) {
      setEmail("");
      setMessage("🚩" + error.response.data.error);
      setSucess(false);
    }
  };

  return (
    <div className="border-2 border-gray-400 dark:border-gray-600 rounded p-4 space-y-4">
      <h1 className="text-xl font-bold mb-4">Subscribe to my newsletter </h1>
      <span className="text-lg text-gray-700 dark:text-gray-400">
        Receive a monthly newsletter from me about what I&apos;ve been working
        on, resources I found useful and whatever else I&apos;d like to share 📩
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
        {message && (
          <span
            className={
              success
                ? "text-green-600 dark:text-green-400"
                : "text-red-600 dark:text-red-400"
            }
          >
            {message}
          </span>
        )}
      </form>
    </div>
  );
}
