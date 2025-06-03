---
layout: default
title: Login
---

<div class="form-container mx-auto">
	<h2 class="text-center mb-4">Login</h2>
	<form>
		<div class="mb-3">
			<label for="login-username" class="form-label">Username</label>
			<input type="text" class="form-control" id="login-username" placeholder="Enter username" required />
		</div>

		<div class="mb-3">
			<label for="login-password" class="form-label">Password</label>
			<input type="password" class="form-control" id="login-password" placeholder="Password" required />
		</div>

		<div class="d-flex justify-content-between align-items-center mb-3">
			<div></div>
			<a href="/forgot-password" class="small text-decoration-none">Forgot password?</a>
		</div>

		<button type="submit" class="btn btn-primary w-100">Login</button>
	</form>
	<div class="text-center mt-3">
		Don’t have an account?
		<a href="/register" class="text-decoration-none">Register</a>
	</div>
</div>