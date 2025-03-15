---
layout: default
title: Home
description: Full-Stack Developer | Game Developer | Minecraft Bedrock Addon Developer.
navbar_index: 1
hero: true
---

<!-- Minecraft Add-Ons -->
<section id="projects" class="container">
	<hr>
	<div class="text-center">
		<h2>Minecraft Add-Ons</h2>
		<p>Check out some of my add-ons for Minecraft Bedrock.</p>
	</div>
	<div class="projects">
		{% assign projects = site.projects | sort: 'updated' %}
		{% for project in projects reversed %}
		{% if project.status == 'public' and project.type == 'bedrock' and project.highlight %}
		<!-- {{ project.title }} -->
		<div class="p-4 my-4" style="width: 100%; height: 210px; border-radius: 10px; background-image: linear-gradient(#00000060, #00000090), url('{{ project.banner | absolute_url }}'); background-position: center; background-repeat: no-repeat; background-size: cover;" onclick="window.location = '{{ site.baseurl }}{{ project.url }}';" aria-label="{{ project.title }}">
			<h3>{{ project.title }}</h3>
			<p>{{ project.description | truncate: 60 }}</p>
		</div>
		{% endif %}
		{% endfor %}
	</div>
	<div class="text-center">
		<p>...</p>
		<a href="{{ site.baseurl }}/projects.html" type="button" class="btn btn-outline-light" aria-label="View more projects">View More <i class="fas fa-arrow-right"></i></a>
	</div>
</section>
