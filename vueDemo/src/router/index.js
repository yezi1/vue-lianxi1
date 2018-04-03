import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'

import instruction from '@/components/instruction/instruction'
import vif from '@/components/instruction/v-if'
import velse from '@/components/instruction/v-else'
import vshow from '@/components/instruction/v-show'
import vfor from '@/components/instruction/v-for'
import vtext from '@/components/instruction/v-text'
import vhtml from '@/components/instruction/v-html'
import von from '@/components/instruction/v-on'
import vmodel from '@/components/instruction/v-model'
import vbind from '@/components/instruction/v-bind'
import vpre from '@/components/instruction/v-pre'
import vcloak from '@/components/instruction/v-cloak'
import vonce from '@/components/instruction/v-once'

import api from '@/components/api/api'
import component from '@/components/api/Component'
import componentlabel from '@/components/api/Component-label'
import componentprops from '@/components/api/Component-props'
import componentrelation from '@/components/api/Component-relation'
import template from '@/components/api/Template'
import vuedirective from '@/components/api/Vue-directive'
import vueextendpi from '@/components/api/Vue-extend'
import vuelifecycle from '@/components/api/Vue-lifecycle'
import vueset from '@/components/api/Vue-set'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'index',
			component: index
		},
		{
			path: '/instruction',
			component: instruction,
		},
		{
			path: '/vif',
			component: vif
		},
		{
			path: '/velse',
			component: velse
		},
		{
			path: '/vshow',
			component: vshow
		},
		{
			path: '/vfor',
			component: vfor
		},
		{
			path: '/vtext',
			component: vtext
		},
		{
			path: '/vhtml',
			component: vhtml
		},
		{
			path: '/von',
			component: von
		},
		{
			path: '/vmodel',
			component: vmodel
		},
		{
			path: '/vbind',
			component: vbind
		},
		{
			path: '/vpre',
			component: vpre
		},
		{
			path: '/vcloak',
			component: vcloak
		},
		{
			path: '/vonce',
			component: vonce
		},
		{
			path: '/api',
			component: api
		},
		{
			path: '/component',
			component: component
		},
		{
			path: '/componentlabel',
			component: componentlabel
		},
		{
			path: '/componentprops',
			component: componentprops
		},
		{
			path: '/componentrelation',
			component: componentrelation
		},
		{
			path: '/template',
			component: template
		},
		{
			path: '/vuedirective',
			component: vuedirective
		},
		{
			path: '/vueextendpi',
			component: vueextendpi
		},
		{
			path: '/vuelifecycle',
			component: vuelifecycle
		},
		{
			path: '/vueset',
			component: vueset
		},
	]
})