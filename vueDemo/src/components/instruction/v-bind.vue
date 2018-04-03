<template>
	<div>
		<p>v-bind</p>
		<img v-bind:src="imgSrc" width="200px">
		<img :src="imgSrc" width="200px">

		<p>1、直接绑定class样式</p>
		<div :class="className">1、绑定classA</div>

		<p>2、绑定classA并进行判断，在isOK为true时显示样式，在isOk为false时不显示样式。</p>
		<div :class="{ classA : isOk }">2、绑定class中的判断</div>

		<p>3、绑定class中的数组</p>
		<div :class="[ classA, classB ]">3、绑定class中的数组</div>

		<p>4、绑定class中使用三元表达式判断</p>
		<div :class="isOk ? classA : classB">4、绑定class中的三元表达式判断</div>

		<p>5、绑定style</p>
		<div :style="{ color : red, fontSize : font}">5、绑定style</div>

		<p>6、用对象绑定style样式</p>
		<div :style="styleObject">6、用对象绑定style样式</div>
	</div>
</template>

<script>
	export default {
		name: 'vbind',
		data() {
			return {
				imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522731637821&di=4feff709b1606e10dd938ac8ef7a97ee&imgtype=0&src=http%3A%2F%2Fdblab.xmu.edu.cn%2Fblog%2Fwp-content%2Fuploads%2F2015%2F09%2Fmongodb-gui-tools-400x400.png',
				className: 'class1',
				isOk: true,
				classA: 'classA',
				classB: 'classB',
				red: 'red',
				font: '22px',
				styleObject: {
					fontSize: '24px',
					color: 'green'
				}
			}
		}
	}
</script>

<style>
	.class1 {
		color: red;
	}
	
	.classA {
		color: orange;
	}
	
	.classB {
		font-size: 20px;
	}
</style>