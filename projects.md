---
layout: default
title: Home
---

<div class="projects">
	<h1>My Projects</h1>
	{% for project in site.projects reversed %}
	{% if project.status == 'public' %}
	<div class="project" onclick="window.location = '{{ site.baseurl }} {{ project.url }}';">
		<img src="{{ project.banner | relative_url }}" alt="{{ project.title }}">
		<h2>{{ project.title }}</h2>
		<hr>
	</div>
	{% endif %}
	{% endfor %}
</div>
