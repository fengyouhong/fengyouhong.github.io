<template>
	<div class="contant">
		主题部分
		<div></div>
		<input type="text" v-model.number="val1">
		<subnav number=5 :myval="val1" @event-click="getevent" @chang-click="wode">
		  <p slot="header">fuzujian header</p>  
    	  <p slot="footer">fuzujian footer</p>   
		</subnav>

		<transition name="fade" mode="in-out">
			<p v-show="show">show transition</p>
			
		</transition>
		<button v-on:click="show = !show">show_hide</button>
		<button @click="wode">wode</button>
		<div class="btn-group">
		   <button type="button" class="btn btn-default dropdown-toggle" 
		      data-toggle="dropdown">
		      默认 <span class="caret"></span>
		   </button>
		  <ul class="dropdown-menu" role="menu">
		      <li><a href="#">功能</a></li>
		      <li><a href="#">另一个功能</a></li>
		      <li><a href="#">其他</a></li>
		      <li class="divider"></li>
		      <li><a href="#">分离的链接</a></li>
		   </ul>
		</div>
		<div class="woyaozhetiebangzuiwumo">
			tasuilingxiao fangsijieao,siedaoxianzhongjiunantaozheyibangjiaonihuifeiyanmie
		</div>

		
	</div>
</template>

<script>
import subnav from './subNav'
export default{
	name:'contant',
	data(){
		return {
			val1:"",
			show:true
		}
	},
	components :{
		subnav
	},
	methods:{
		getevent:function (list) {
			console.log(list)
		},
		wode:function(bool){
			console.log(bool)
		}
	}
}
</script>

<style lang="scss">
.contant{
	margin-top: 6rem
}
.fade-enter-active,.fade-leave-active {
	transition: all 0.5s ease-out;
}



.fade-enter,.fade-leave {
	transition: all 0.5s ease-out;
	opacity: 0 ;
}
</style>