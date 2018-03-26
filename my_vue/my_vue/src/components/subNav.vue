<template>
	<div v-bind:class="classlist[1]">
		<ul v-show = "bool">
			<li v-for="inte in list">{{inte}}</li>
		</ul>
		<button @click="changebool">change</button>
		<input type="text" v-model="myValue"/>
		{{ myVue }}
		{{ number }}
		{{ myval }}


		<div><button @click="eventaaa">eventaaa</button></div>
		<slot name="header">header xxx</slot>
		<p>ssssssss</p>
		<slot name="footer">footer xxx</slot>

		<router-link to="router1">router1</router-link>
	    <router-link to="router2">router2</router-link>
	    <router-view></router-view>
	</div>
</template>
<script>
import Vue from 'vue'
export default{
	name:'subnav',
	props:{
	'number':[Number,String],
	'myval':[Number,String]
	},
	data(){
		return {
			list:['1','2','3'],
			classlist:["cal1",'cla2'],
			bool:true,
			myValue:''
		}
	},
	methods:{
		changebool:function () {
			this.bool = !this.bool;
			console.log(this.number)
		},
		eventaaa:function(){
			this.$emit('event-click',this.classlist)
		},
		mychange: function(){
			this.$emit('chang-click',tihs.bool)
		}
	},
	computed: {
		myVue (){
			return this.myValue.replace(/\d/g,'')
		}
	},
	watch:{
		myValue:function(val,oldVal){
			console.log(val,oldVal)
		}
	}
}
</script>
<style lang="scss">
	
</style>