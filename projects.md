---
layout: default
title: Projects
description: See all the projects created by Gabriel Aplok and download them for free!
header: 1
---

<h1>My Projects</h1>
<div class="projects">
	{% assign projects = site.projects | sort: 'title' %}
	{% for project in projects %}
	{% if project.status == 'public' %}
	<div class="project" onclick="window.location = '{{ site.baseurl }} {{ project.url }}';">
		<img src="{{ project.banner | absolute_url }}" alt="{{ project.title }}">
		<h2>{{ project.title }} {% if project.new %}<span class="tag bg-red" style="font-size: 0.75em;">NEW</span>{% endif %}</h2>
		<hr>
	</div>
	{% endif %}
	{% endfor %}
</div>
