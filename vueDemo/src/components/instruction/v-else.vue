<template>
	<div>
		<p>v-else</p>
		<div v-if='isLogin'>666666666</div>
		<div v-else>2222222222</div>
	</div>
</template>

<script>
	export default {
		name: 'velse',
		data () {
			return {
				isLogin: false
			}
		}
	}
</script>

<style>
</style>