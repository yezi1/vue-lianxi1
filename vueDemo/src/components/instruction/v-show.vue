<template>
	<div>
		<p>v-show</p>
		<div v-show='!isLogin'>22222</div>
	</div>
</template>

<script>
	export default {
		name: 'vshow',
		data () {
			return {
				isLogin: false
			}
		}
	}	
</script>

<style>
</style>