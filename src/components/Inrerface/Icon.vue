<template>
	<i class="icon" :class="`icon--${name}`" :style="`font-size:${size}px`"></i>
</template>

<script>
export default {
	name: "Icon",
	props : {
		name : {
			required : true
		},
		size : {
			default : 1
		}
	}
}
</script>

<style>

.icon{
	mask-size: contain;
	mask-repeat: no-repeat;
	background: currentColor;
	display: inline-block;
}

.icon--check{
	mask-image: url("/assets/icons/check.svg");
	width: 15em;
	height: 15em;
}

.icon--download{
	mask-image: url("/assets/icons/download.svg");
	width: 24em;
	height: 24em;
}

.icon--clip{
	mask-image: url("/assets/icons/clip.svg");
	width: 17em;
	height: 17em;
}

.icon--send{
	mask-image: url("/assets/icons/send.svg");
	width: 25em;
	height: 25em;
}

</style>