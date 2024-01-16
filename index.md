---
layout: default
title: Home
description: Full-Stack Developer | Pixel Artist | Minecraft Bedrock Addon Developer.
nav_order: 1
hero: true
---

<!-- Projects -->
<section id="projects" class="project-container container">
	<div class="division"></div>
	<div class="content-text">
		<a href="{{ 'projects.html' | absolute_url }}"><h2>Projects</h2></a>
		<p>Check out some of my personal and professional projects</p>
	</div>
	<article class="project">
		{% assign projects = site.projects | sort: 'updated' %}
		{% for project in projects reversed %}
		{% if project.status == 'public' %}
		<!-- Project: {{ project.title }} -->
		<a class="card" style="background-image: url('{{ project.banner | absolute_url }}'); background-position: center; background-repeat: no-repeat; background-size: cover;" onclick="window.location = '{{ site.baseurl }} {{ project.url }}';">
			<div class="project-info">
				<div class="project-bio">
					<h3>{{ project.title }}</h3>
					<p>{{ project.stack }}</p>
				</div>
				<div class="project-link">
					{% if project.new %}
					<p>🔥</p>
					{% endif %}
				</div>
			</div>
		</a>
		{% endif %}
		{% endfor %}
	</article>
	<a href="https://github.com/gabriel-aplok?tab=repositories" class="button button-secondary" target="_blank">View More On GitHub <i class="fas fa-arrow-right"></i></a>
</section>
