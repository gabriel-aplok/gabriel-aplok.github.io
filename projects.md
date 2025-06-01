---
layout: default
title: Projects
description: Explore my personal and professional projects, including Minecraft Add-Ons and more.
navbar_index: 2
---

<section id="projects" class="container">
	<h2 class="mb-4">Minecraft Bedrock Add-Ons</h2>
	<div class="projects-grid">
		{% assign bedrock_projects = site.projects | where: "status", "public" | where: "type", "bedrock" | sort: "updated" | reverse %}
		{% if bedrock_projects.size > 0 %}
			{% for project in bedrock_projects %}
				<div class="project-card" style="background-image: linear-gradient(#00000060, #00000090), url('{{ project.banner | absolute_url }}');" onclick="window.location = '{{ site.baseurl }}{{ project.url }}';" aria-label="{{ project.title }}">
					<h3>{{ project.title }}</h3>
					<p>{{ project.description | truncate: 60 }}</p>
				</div>
			{% endfor %}
		{% else %}
			<p>No Minecraft Bedrock Add-Ons available at the moment.</p>
		{% endif %}
	</div>
</section>

<style>
.projects-grid {
	display: flex;
	flex-wrap: wrap;
	gap: 1.5rem;
}
.project-card {
	flex: 1 1 300px;
	min-width: 280px;
	max-width: 400px;
	height: 210px;
	border-radius: 10px;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	padding: 1.5rem;
	color: #fff;
	cursor: pointer;
	transition: transform 0.15s;
}
.project-card:hover {
	transform: translateY(-5px) scale(1.03);
	box-shadow: 0 8px 24px rgba(0,0,0,0.2);
}
</style>
