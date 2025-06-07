---
layout: default
title: "Thread: How to integrate login with API?"
---

<div class="container py-4">
	<a href="/forum" class="btn btn-link mb-3">&larr; Back to Forum</a>

    <!-- Main Thread -->
    <div class="card mb-4">
    	<div class="card-body">
    		<h4 class="card-title">How to integrate login with API?</h4>
    		<h6 class="card-subtitle mb-2 text-muted">Posted by @gabriel • 2 hours ago</h6>
    		<p class="card-text">
    			I’m trying to connect the login form to my Express backend. What’s the best way to validate credentials and keep tokens secure?
    		</p>
    	</div>
    </div>

    <!-- Replies -->
    <h5 class="mb-3">Replies</h5>

    <div class="mb-3">
    	<div class="card">
    		<div class="card-body">
    			<h6 class="card-subtitle mb-1 text-muted">@ester • 1 hour ago</h6>
    			<p class="card-text">You can use JWT tokens and store them in memory or cookies, but make sure to use HTTP-only flags for security.</p>
    		</div>
    	</div>
    </div>

    <div class="mb-3">
    	<div class="card">
    		<div class="card-body">
    			<h6 class="card-subtitle mb-1 text-muted">@alexdev • 45 min ago</h6>
    			<p class="card-text">I recommend checking out Passport.js for easy auth integration with Express.</p>
    		</div>
    	</div>
    </div>

    <!-- Reply Form -->
    <div class="card mt-4">
    	<div class="card-body">
    		<h5 class="card-title">Post a Reply</h5>
    		<form>
    			<div class="mb-3">
    				<label for="reply" class="form-label">Your Reply</label>
    				<textarea class="form-control" id="reply" rows="4" required></textarea>
    			</div>
    			<button type="submit" class="btn btn-primary">Post Reply</button>
    		</form>
    	</div>
    </div>

</div>
