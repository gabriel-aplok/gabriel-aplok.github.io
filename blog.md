---
layout: default
title: Blog
---

<div class="blog">
	<h1>Blog</h1>
	{% for post in site.blog reversed %}
	{% if post.status == 'public' %}
	<div class="post" onclick="window.location = '{{ site.baseurl }} {{ post.url }}';">
		{% if post.banner %}
		<img src="{{ post.banner | relative_url }}" alt="{{ post.title }}">
		{% endif %}
		<h3>{{ post.title }}</h3>
		<hr>
	</div>
	{% endif %}
	{% endfor %}
</div>
