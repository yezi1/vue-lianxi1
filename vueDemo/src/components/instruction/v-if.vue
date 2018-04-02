<template>
	<div>
		<p>v-if</p>
		<div v-if='!isLogin'>++</div>
	</div>
</template>

<script>
	export default {
		name: 'vif',
		data () {
			return {
				isLogin: false
			}
		}
	}
</script>

<style>
	
</style>