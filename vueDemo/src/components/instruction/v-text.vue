<template>
	<div>
		<p>v-text</p>
		<div v-text="textStr"></div>
		<div v-text="textHtmlStr"></div>
		<div v-text="textHtmlStr2"></div>
	</div>
</template>

<script>
	export default {
		name: 'vtext',
		data () {
			return {
				textStr: '5555555',
				textHtmlStr: '<div>2222222</div>',
				textHtmlStr2: `<span>88888888888</span>`
			}
		}
	}
</script>

<style>
</style>