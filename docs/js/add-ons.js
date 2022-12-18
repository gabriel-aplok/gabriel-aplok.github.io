const posts = [
	{
		"title": "Project Walker",
		"author": "Gabriel Aplok and HardSK",
		"date": "Jun 5th 2021",
		"content": "It's a zombie-themed survival add-on designed by HardSK and developed by Gabriel Aplok.",
		"key": "project-walker"
	},
	{
		"title": "Aplok Guns",
		"author": "Gabriel Aplok",
		"date": "May 5th 2022",
		"content": "It's a low-poly survival friendly guns add-on with lightweight and beautiful models, animation's and more.",
		"key": "aplok-guns"
	},
	{
		"title": "Crafting Dead: Clothing",
		"author": "Gabriel Aplok",
		"date": "May 9th 2021",
		"content": "It's a port of the Crafting Dead Java mod, but only have clothes, You can play with <span style=\"color: var(--accent-color);\">Project Walker</a>.",
		"key": "crafting-dead-clothing"
	}
];

class Post {
	constructor(title, author, date, content, key) {
		this.data = "";
		this.data += "<article class=\"post\" onclick=\"viewPost('" + key + "');\">";
		this.data += "<h1 class=\"post-title\">" + title + "</h1>";
		this.data += "<p class=\"post-info\">" + date + " by " + author + "</p>";
		this.data += "<p>" + content + "</p>";
		this.data += "</article>";
		console.log(key);
	}

	get() {
		return this.data;
	}

	add() {
		document.querySelector("body main").innerHTML += this.data;
	}
}

function viewPosts() {
	let main = document.querySelector("body main");
	main.innerHTML = "";

	for (let i in posts) {
		new Post(posts[i].title, posts[i].author, posts[i].date, posts[i].content, posts[i].key).add();
	}
}

function viewPost(key = "") {
	window.location.assign("/add-ons/" + key);
}

viewPosts();