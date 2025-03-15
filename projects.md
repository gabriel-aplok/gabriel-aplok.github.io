---
layout: default
title: Projects
description: Check out some of my personal and professional projects
navbar_index: 2
---

<!-- Minecraft Add-Ons -->
<section id="projects" class="container">
	<div class="projects">
		{% assign projects = site.projects | sort: 'updated' %}
		{% for project in projects reversed %}
		{% if project.status == 'public' and project.type == 'bedrock' %}
		<!-- {{ project.title }} -->
		<div class="p-4 my-4" style="width: 100%; height: 210px; border-radius: 10px; background-image: linear-gradient(#00000060, #00000090), url('{{ project.banner | absolute_url }}'); background-position: center; background-repeat: no-repeat; background-size: cover;" onclick="window.location = '{{ site.baseurl }}{{ project.url }}';" aria-label="{{ project.title }}">
			<h3>{{ project.title }}</h3>
			<p>{{ project.description | truncate: 60 }}</p>
		</div>
		{% endif %}
		{% endfor %}
	</div>
</section>
