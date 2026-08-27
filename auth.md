---
layout: default
title: Auth
---

<div class="form-container mx-auto">
	<!-- Tabs -->
	<ul class="nav nav-tabs justify-content-center mb-4" id="authTab" role="tablist">
		<li class="nav-item" role="presentation">
			<button class="nav-link active" id="login-tab" data-bs-toggle="tab" data-bs-target="#login" type="button" role="tab">
				Login
			</button>
		</li>
		<li class="nav-item" role="presentation">
			<button class="nav-link" id="register-tab" data-bs-toggle="tab" data-bs-target="#register" type="button" role="tab">
				Register
			</button>
		</li>
	</ul>

    <!-- Tab Content -->
    <div class="tab-content" id="authTabContent">
    	<!-- Login Tab -->
    	<div class="tab-pane fade show active" id="login" role="tabpanel">
    		<h2>Login</h2>
    		<form>
    			<div class="mb-3">
    				<label for="login-username" class="form-label">Username or Email</label>
    				<input type="text" class="form-control" id="login-username" placeholder="Enter username or email" />
    			</div>

    			<div class="mb-3">
    				<label for="login-password" class="form-label">Password</label>
    				<input type="password" class="form-control" id="login-password" placeholder="Password" />
    			</div>

    			<div class="d-flex justify-content-between align-items-center mb-3">
    				<div></div>
    				<a href="/forgot-password" class="small text-decoration-none">Forgot password?</a>
    			</div>

    			<button type="submit" class="btn btn-primary w-100">Login</button>
    		</form>
    	</div>

    	<!-- Register Tab -->
    	<div class="tab-pane fade" id="register" role="tabpanel">
    		<h2>Register</h2>
    		<form>
    			<div class="mb-3">
    				<label for="register-username" class="form-label">Username</label>
    				<input type="text" class="form-control" id="register-username" placeholder="Enter username" />
    			</div>

    			<div class="mb-3">
    				<label for="register-email" class="form-label">Email address</label>
    				<input type="email" class="form-control" id="register-email" placeholder="Enter email" />
    			</div>

    			<div class="mb-3">
    				<label for="register-password" class="form-label">Password</label>
    				<input type="password" class="form-control" id="register-password" placeholder="Password" />
    			</div>

    			<div class="d-flex justify-content-between align-items-center mb-3">
    				<div></div>
    				<a href="/forgot-password" class="small text-decoration-none">Forgot password?</a>
    			</div>

    			<button type="submit" class="btn btn-success w-100">Register</button>
    		</form>
    	</div>
    </div>

</div>
