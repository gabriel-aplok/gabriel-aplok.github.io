---
layout: default
title: Home
discord_preview: true
---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css">

<div class="home">
	<h1>Recent Projects</h1>
	<div class="swiper">
		<div class="swiper-wrapper">
			{% assign projects = site.projects | sort: 'date' %}
			{% for project in projects %}
			{% if project.status == 'public' %}
			<div class="swiper-slide" onclick="window.location = '{{ site.baseurl }} {{ project.url }}';">
				<img src="{{ project.banner | relative_url }}" alt="{{ project.title }}">
			</div>
			{% endif %}
			{% endfor %}
		</div>
		<div class="swiper-scrollbar" style="margin-bottom: 8px;"></div>
	</div>

	<h1>Recent Posts</h1>
	<div class="blog">
		{% assign posts = site.blog | sort: 'date' %}
		{% for post in posts limit:10 %}
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