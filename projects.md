---
layout: default
title: Projects
header: 1
---

<h1>My Projects</h1>
<div class="projects">
	{% assign projects = site.projects | sort: 'title' %}
	{% for project in projects %}
	{% if project.status == 'public' %}
	<div class="project" onclick="window.location = '{{ site.baseurl }} {{ project.url }}';">
		<img src="{{ project.banner | absolute_url }}" alt="{{ project.title }}">
		<h2>{{ project.title }}</h2>
		<hr>
	</div>
	{% endif %}
	{% endfor %}
</div>
