<template>
	<div class="footer">
		底部
		<transition name="fold">
		    <div v-show="show" class="example"></div>
		</transition>
		<button @click="show = !show">show</button>
	</div>
</template>
<style lang="scss">
.example {
    width: 100px;
    height: 100px;
    background:#ff00ff;
    transform: translate3d(0, -100px, 0);
}
.fold-enter-active, .fold-leave-active {
    transition: all .5s;
}
.fold-enter, .fold-leave-active {
    transform: translate3d(0, 0, 0);
}
</style>
<script>
export default{
	name:'footer',
	data(){
		return {
			show:true
		}
	}
}
</script>