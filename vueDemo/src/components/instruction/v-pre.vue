<template>
	<div>
		<p>v-pre</p>
		<p>在模板中跳过vue的编译，直接输出原始值。就是在标签中加入v-pre就不会输出vue中的data值了。</p>	
		<div v-pre>{{ message }}</div>
	</div>
</template>

<script>
	export default {
		name: 'vpre',
		data () {
			return {
				message: '我是vue'
			}
		}
	}
</script>

<style>
</style>