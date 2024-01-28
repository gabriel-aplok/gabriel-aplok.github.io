---
layout: default
title: Home
description: Full-Stack Developer | Game Developer | Minecraft Bedrock Addon Developer.
nav_order: 1
hero: true
---

<!-- Projects -->
<section id="projects" class="project-container container">
	<hr>
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
					<span class="tag bg-red">NEW</span>
					{% endif %}
				</div>
			</div>
		</a>
		{% endif %}
		{% endfor %}
	</article>
	<a href="{{ 'projects.html' | absolute_link }}" class="button button-secondary" target="_blank">View More <i class="fas fa-arrow-right"></i></a>
</section>

<!-- Contact -->
<section id="contact" class="container">
	<hr>
	<div class="content-text">
		<h2>Contact</h2>
		<p>Fill out this quick form and contact us today! Please note that you will get responses faster if you contact us via Discord.</p>
	</div>
	<form class="form" action="http://localhost:9595/contact.php" method="post">
		<div id="contact" class="row">
			<div class="col-25">
				<label class="label" for="name">Your Name <span class="field-required">*</span></label>
			</div>
			<div class="col-75">
				<input class="field" type="text" id="name" name="name" placeholder="Your name..." required>
			</div>
		</div>

		<div class="row">
			<div class="col-25">
				<label class="label" for="email">Your Email <span class="field-required">*</span></label>
			</div>
			<div class="col-75">
				<input class="field" type="email" id="email" name="email" placeholder="person@example.com" required>
			</div>
		</div>

		<div class="row">
			<div class="col-25">
				<label class="label" for="reason">Reason for Contact <span class="field-required">*</span></label>
			</div>
			<div class="col-75">
				<select class="field" id="reason" name="reason" required>
					<option value="general">General Question</option>
					<option value="content">Content Question</option>
				</select>
			</div>
		</div>

		<div class="row">
			<div class="col-25">
				<label class="label" for="name">Your Message <span class="field-required">*</span></label>
			</div>
			<div class="col-75">
				<textarea class="field" type="text" id="message" name="message" placeholder="Write something..." onkeyup="adjust_textarea(this)" required></textarea>
			</div>
		</div>

		<div class="row">
			<div class="col-25">
				<label class="label" for="discord">Wait for your response.</label>
			</div>
			<div class="col-75">
				<div class="g-recaptcha" data-theme="dark" data-sitekey="6LdEnF4pAAAAAAumxK0uuJVvFJCxgiWDJKMSnAm_"></div>
				<button class="button button-secondary" type="submit">Submit <i class="fas fa-arrow-right"></i></button>
			</div>
		</div>
	</form>
</section>
