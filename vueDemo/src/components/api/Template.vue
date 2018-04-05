<template>
	<div>
		<p>Template 制作模版</p>
		   <!--<template id="demo2">
             <h2 style="color:red">我是template标签模板888</h2>
    </template>-->
    <script type="x-template" id="demo3">
        <h2 style="color:red">我是script标签模板222</h2>
    </script>
	</div>
</template>

<script>
	import Vue from 'vue'
	export default {
		name: 'tempate',
		data () {
			return {
				
			}
		},
		template:'#demo3'
	}
</script>

<style>
</style>