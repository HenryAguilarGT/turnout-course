<template>
	<div class="col-md-4">
		<div class="event-card">
			<h4 class="card-titloe">
				<p class="card-text">
					<ul class="list-group list-group-flush">
						<li class="list-group-item">Date: {{event.date}}</li>
						<li class="list-group-item">Location: {{event.location}}</li>
						<li class="list-group-item">Host: {{event.email}}</li>
						<li class="list-group-item">Description: {{event.description}}</li>
					</ul>
				</p>
			</h4>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['event']
	}
</script>