---
layout: default
title: Forgot Password
---

<div class="form-container mx-auto">
	<h2 class="text-center mb-4">Forgot Password</h2>
	<p class="text-center text-muted mb-4">
		Enter your email address and we'll send you a link to reset your password.
	</p>
	<form>
		<div class="mb-3">
			<label for="forgot-email" class="form-label">Email address</label>
			<input type="email" class="form-control" id="forgot-email" placeholder="Enter your email" required />
		</div>
		<button type="submit" class="btn btn-primary w-100">Send Reset Link</button>
	</form>
	<div class="text-center mt-3">
		<a href="/login" class="text-decoration-none">Back to Login</a>
	</div>
</div>
