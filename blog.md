---
layout: default
title: Blog
header: 2
---

<h1>Blog</h1>
<div class="blog">
	{% assign posts = site.blog | sort: 'date' %}
	{% for post in posts %}
	{% if post.status == 'public' %}
	<div class="post" onclick="window.location = '{{ site.baseurl }} {{ post.url }}';">
		{% if post.banner %}
		<img src="{{ post.banner | absolute_url }}" alt="{{ post.title }}">
		{% endif %}
		<h3>{{ post.title }}</h3>
		<hr>
	</div>
	{% endif %}
	{% endfor %}
</div>
