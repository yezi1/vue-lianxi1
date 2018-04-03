<template>
	<div>
		<p style="text-align: center;">Vue.directive 自定义指令</p>
		<div v-jspang="color" id="demo">{{ num }}</div>
		<div>
			<button @click="add">Add</button>
		</div>
		<input v-focus>
		<p>自定义指令有五个生命周期（也叫钩子函数），分别是 bind,inserted,update,componentUpdated,unbind</p>
		<p>1.bind:只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定义一个绑定时执行一次的初始化动作。</p>
		<p>2.inserted:被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于document中）。</p>
		<p>3.update:被绑定于元素所在的模板更新时调用，而无论绑定值是否变化。通过比较更新前后的绑定值，可以忽略不必要的模板更新。</p>
		<p>4.componentUpdated:被绑定元素所在模板完成一次更新周期时调用。</p>
		<p>5.unbind:只调用一次，指令与元素解绑时调用。</p>
	</div>
</template>

<script>
	import Vue from 'vue'
	//全局指令的定义
	/**
	 * el: 指令所绑定的元素，可以用来直接操作DOM。
	 * binding:  一个对象，包含指令的很多信息。
 	 * vnode: Vue编译生成的虚拟节点。
	 */
	Vue.directive('jspang', function(el, binding, vnode) {
		el.style = 'color:' + binding.value;
	});
	export default {
		name: 'vuedirective',
		data() {
			return {
				num: 10,
				color: 'green'
			}
		},
		methods: {
			add: function() {
				this.num++;
			}
		},
		directives: {
			focus: {
				// 局部指令的定义
				inserted: function(el) {
					el.focus()
				},
				bind: function() { //被绑定
					console.log('1 - bind');
				},
				inserted: function() { //绑定到节点
					console.log('2 - inserted');
				},
				update: function() { //组件更新
					console.log('3 - update');
				},
				componentUpdated: function() { //组件更新完成
					console.log('4 - componentUpdated');
				},
				unbind: function() { //解绑
					console.log('1 - bind');
				}
			}
		}
	}
</script>

<style>
	p {
		text-align: left;
	}
</style>