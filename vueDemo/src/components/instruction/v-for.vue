<template>
	<div>
		<p>v-for</p>
		<ol>
			<li v-for='item in items'>{{ item }}</li>
		</ol>
	</div>
</template>

<script>
	export default {
		name: 'vshow',
		data () {
			return {
				items:[20,23,18,65,32,19,54,56,41]
			}
		}
	}		
</script>

<style>
	li {
		text-align: left;
	}
</style>