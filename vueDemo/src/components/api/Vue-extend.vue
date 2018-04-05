<template>
	<div>
		<p>Vue.extend构造器的延伸</p>
		<aa></aa>
	</div>
</template>

<script>
	import a from './a.vue'
	export default {
		name: 'extend',
		data() {
			return {
			
			}
		},
		components:{  
            "aa":   a
        }
	}
</script>

<style></style>