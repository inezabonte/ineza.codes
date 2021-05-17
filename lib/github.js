import Axios from "axios";

export async function getGitHubStars() {
	try {
		const res = await Axios.get(
			"https://api.github.com/users/inezabonte/starred"
		);
		res.data.sort((a, b) => {
			if (a.open_issues > b.open_issues) {
				return -1;
			}

			if (a.open_issues < b.open_issues) {
				return 1;
			}

			return 0;
		});
		return res.data.filter((repo) => repo.owner.login === "inezabonte");
	} catch (error) {
		console.log(error);
	}
}

export async function getGitHubContributions() {
	try {
		const res = await Axios.get(
			" https://api.github.com/users/inezabonte/repos"
		);
		return res.data.filter((repo) => repo.fork === true);
	} catch (error) {
		console.log(error);
	}
}
