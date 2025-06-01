---
layout: default
title: Home
description: Full-Stack Developer | Game Developer | Minecraft Bedrock Addon Developer.
navbar_index: 1
hero: true
---

<!-- Minecraft Add-Ons Section -->
<section id="projects" class="container">
	<hr>
	<div class="text-center mb-4">
		<h2>Minecraft Add-Ons</h2>
		<p>Explore some of my featured add-ons for Minecraft Bedrock Edition.</p>
	</div>
	<div class="projects">
		{% assign projects = site.projects | sort: 'updated' %}
		{% for project in projects reversed %}
			{% if project.status == 'public' and project.type == 'bedrock' and project.highlight %}
				<!-- Project: {{ project.title }} -->
				<div
					class="project-card p-4 my-4"
					style="
						width: 100%;
						height: 210px;
						border-radius: 10px;
						background: linear-gradient(#00000060, #00000090), url('{{ project.banner | absolute_url }}') center/cover no-repeat;
						cursor: pointer;
					"
					onclick="window.location = '{{ site.baseurl }}{{ project.url }}';"
					aria-label="{{ project.title }}"
				>
					<h3 class="mb-2">{{ project.title }}</h3>
					<p class="mb-0">{{ project.description | truncate: 60 }}</p>
				</div>
			{% endif %}
		{% endfor %}
	</div>
	<div class="text-center mt-4">
		<a
			href="{{ site.baseurl }}/projects.html"
			class="btn btn-light"
			aria-label="View more projects"
		>
			View More
		</a>
	</div>
</section>
