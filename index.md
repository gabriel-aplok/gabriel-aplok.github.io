---
layout: default
title: Home
description: I'm a full-stack developer and in my spare time I make websites, apps, games and Minecraft mods since 2018.
discord_preview: true
---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css">

<div class="home">
	<a href="{{ 'projects.html' | absolute_url }}" class="clear-deco"><h1>Recent Projects</h1></a>
	<div class="swiper">
		<div class="swiper-wrapper">
			{% assign projects = site.projects | sort: 'updated' %}
			{% for project in projects reversed %}
			{% if project.status == 'public' and project.banner %}
			<div class="swiper-slide" onclick="window.location = '{{ site.baseurl }} {{ project.url }}';">
				<img src="{{ project.banner | absolute_url }}" alt="{{ project.title }}">
				<span class="tag" style="position: fixed; bottom: 10px; left: 0;">{{ project.title }}</span>
				{% if project.new %}
				<span class="tag bg-red" style="position: fixed; top: 0; left: 0;">NEW</span>
				{% endif %}
			</div>
			{% endif %}
			{% endfor %}
		</div>
		<div class="swiper-scrollbar" style="margin-bottom: 8px;"></div>
	</div>

	<a href="{{ 'blog.html' | absolute_url }}" class="clear-deco"><h1>Recent Posts</h1></a>
	<div class="blog">
		{% assign posts = site.blog | sort: 'date' %}
		{% for post in posts limit:10 %}
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
</div>

<script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"></script>
<script>
var swiper = new Swiper(".swiper", {
	spaceBetween: 10,
	loop: true,
	autoplay: {
		delay: 2000,
		disableOnInteraction: true
	},
	scrollbar: {
		el: ".swiper-scrollbar",
		hide: false
	},
	breakpoints: {
		640: {
			slidesPerView: 2,
			centeredSlides: true
		}
	}
});
</script>