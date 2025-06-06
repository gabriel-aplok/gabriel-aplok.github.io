---
layout: default
title: Portfolio
---

<div class="container py-5">
	<h2 class="text-center mb-5">My Portfolio</h2>

	<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
		{% for project in site.data.portfolio %}
		<div class="col">
			<!-- Trigger -->
			<div class="portfolio-card card h-100 shadow-sm" role="button" data-bs-toggle="modal" data-bs-target="#modal-{{ forloop.index }}">
				<img src="{{ project.image }}" class="portfolio-card-img-top" alt="{{ project.title }}">
				<div class="card-body d-flex flex-column">
					<h5 class="card-title">{{ project.title }}</h5>
					<p class="card-text">{{ project.description }}</p>

					{% if project.tags %}
					<div class="mb-3">
						{% for tag in project.tags %}
						<span class="portfolio-badge badge bg-secondary">{{ tag }}</span>
						{% endfor %}
					</div>
					{% endif %}

					<div class="mt-auto">
						{% if project.demo %}
						<a href="{{ project.demo }}" target="_blank" class="btn btn-outline-danger btn-sm me-2">Live Demo</a>
						{% endif %}
						{% if project.github %}
						<a href="{{ project.github }}" target="_blank" class="btn btn-outline-light btn-sm">GitHub</a>
						{% endif %}
					</div>
				</div>
			</div>
		</div>
		{% endfor %}
	</div>
</div>

<!-- Modal section -->
{% for project in site.data.portfolio %}
<div class="modal fade" id="modal-{{ forloop.index }}" tabindex="-1" aria-labelledby="modalLabel-{{ forloop.index }}" aria-hidden="true">
	<div class="modal-dialog modal-dialog-centered modal-lg">
		<div class="modal-content bg-dark text-light">
			<div class="modal-header border-0">
				<h5 class="modal-title" id="modalLabel-{{ forloop.index }}">{{ project.title }}</h5>
				<button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
			</div>
			<div class="modal-body">
				<img src="{{ project.image }}" class="img-fluid rounded mb-4" alt="{{ project.title }}">
				<p class="fs-6">{{ project.description }}</p>

				{% if project.tags %}
				<div class="mb-3">
					{% for tag in project.tags %}
					<span class="portfolio-badge badge bg-secondary">{{ tag }}</span>
					{% endfor %}
				</div>
				{% endif %}
			</div>
			<div class="modal-footer border-0">
				{% if project.demo %}
				<a href="{{ project.demo }}" target="_blank" class="btn btn-outline-danger">Live Demo</a>
				{% endif %}
				{% if project.github %}
				<a href="{{ project.github }}" target="_blank" class="btn btn-outline-light">GitHub</a>
				{% endif %}
				<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
			</div>
		</div>
	</div>
</div>
{% endfor %}