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
	<a href="{{ 'projects.html' | absolute_link }}" class="button button-secondary" target="_blank">View More <i class="fas fa-arrow-right"></i></a>
</section>

<!-- Contact
<section id="contact" class="container">
	<div class="division"></div>
	<div class="content-text">
		<h2>Contact</h2>
		<p>Fill out this quick form and contact us today! Please note that you will get responses faster if you contact us via Discord.</p>
	</div>
	<form class="form__group field">
		<label class="form__label" for="name">Your Name</label>
		<input class="form__field" type="text" id="name" name="name" required>

		<label class="form__label" for="email">Your Email</label>
		<input class="form__field" type="email" id="email" name="email" required>

		<label class="form__label" for="reason">Reason for Contact</label>
		<select class="form__field" id="reason" name="reason" required>
			<option value="general">General Question</option>
			<option value="content">Content Question</option>
		</select>

		<label class="form__label" for="discord">Your Discord Username</label>
		<input class="form__field" type="text" id="discord" name="discord" required>

		<a href="{{ 'index.html' | absolute_link }}" class="button button-secondary" target="_blank">Submit <i class="fas fa-arrow-right"></i></a>
	</form>
</section>
-->