---
layout: default
title: Meet the Team
---

<div class="container py-5">
	<h2 class="text-center mb-5">Meet the Team</h2>

	<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
		{% for member in site.data.team %}
		<div class="col">
			<div class="team-card card h-100 text-center border-0 shadow-sm">
				<img src="{{ member.image }}" class="team-card-img-top rounded-top" alt="{{ member.name }}" />
				<div class="card-body">
					<h5 class="card-title mb-0">{{ member.name }}</h5>
					<p class="text-muted small mb-2">{{ member.role }}</p>
					<p class="card-text">{{ member.description }}</p>
				</div>
			</div>
		</div>
		{% endfor %}
	</div>
</div>