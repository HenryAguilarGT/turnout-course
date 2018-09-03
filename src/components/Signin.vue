<template>
	<div class="container">
	<div class="form">
		<h3>Sign in</h3>
		<br>
		<div class="form-group">
			<input 
			type="text"
			placeholder="email"
			class="form-control"
			v-model="email" 
			>
			
			<br>

			<input 
			type="password"
			placeholder="password"
			class="form-control"
			v-model="password" 
			>

			<br>

			<button class="btn btn-primary" @click="signIn">Sign in</button>
			
		</div>
		<br>
		<router-link to="/signup">Not a user? Sign up</router-link>
		<p>{{error.message}}</p>
		
		
	</div>
	</div>
</template>

<script>
import { firebaseApp } from '../firebaseApp'
	export default {
		data() {
			return {
				email: '',
				password: '',
				error: {
					message: ''
				}
			}
		},
		methods: {
			signIn() {
				firebaseApp.auth().signInWithEmailAndPassword(this.email, this.password)
				.catch(error => {
					this.error = error
				})
			}
		}
	}
</script>