<template>
	<div :class="[a.sample, 'another', 'another__green']">
		<h1>Regular show</h1>
		<div :class="[b.item]">Item Red</div>
		<div :class="[b.item, b.item__blue]">Item Blue</div>
	</div>
</template>

<style module="a" type="text/x-sugarss">
.sample
	composes: color from '../assets/style/_composes.css'
	user-select: none
	background: blue
</style>

<style module="b" type="text/x-sugarss" src="./App.sss"></style>

<style scoped type="text/x-sugarss">
.another
	cursor: pointer
	&__green
		background: green
</style>
