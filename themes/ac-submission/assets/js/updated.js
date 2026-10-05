const REPO_URI = "https://github.com/raphaeltannous/appliedcryptography.me.hugo/commits/master"
const API_URI = "https://api.github.com/repos/raphaeltannous/appliedcryptography.me.hugo/commits?per_page=1"

const showLink = (text) => {
	const link = document.createElement("a")
	link.href = REPO_URI
	link.innerText = text
	const host = document.getElementById("lastUpdated")
	host.innerHTML = ""
	host.appendChild(link)
}

export const updatedInit = () => {
	fetch(API_URI)
		.then((response) => response.json())
		.then((data) => {
			const date = new Date(data?.[0]?.commit?.author?.date)
			if (isNaN(date.getTime())) throw new Error("Invalid date")
			showLink(date.toLocaleString(undefined, {
				year: "numeric",
				month: "long",
				day: "numeric",
				hour: "numeric",
				minute: "numeric",
				hour12: true,
			}))
			document.getElementById("lastUpdated").appendChild(document.createTextNode("."))
		})
		.catch((error) => {
			console.error("Error fetching commit data:", error)
			showLink("View history")
		})
}
