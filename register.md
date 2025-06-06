---
layout: default
title: Register
---

<div class="form-container mx-auto">
	<h2>Register</h2>
	<form>
		<div class="mb-3">
			<label class="form-label">Username</label>
			<input type="text" class="form-control" placeholder="Enter username" />
		</div>

    	<div class="mb-3">
    		<label class="form-label">Email address</label>
    		<input type="email" class="form-control" placeholder="Enter email" />
    	</div>

    	<div class="mb-3">
    		<label class="form-label">Password</label>
    		<input type="password" class="form-control" placeholder="Password" />
    	</div>

    	<div class="d-flex justify-content-between align-items-center mb-3">
    		<div></div>
    		<a href="/forgot-password" class="small text-decoration-none">Forgot password?</a>
    	</div>

    	<button type="submit" class="btn btn-primary w-100">Register</button>

    	<div class="form-text">
    		Already have an account? <a href="/login">Login</a>
    	</div>
    </form>

</div>
